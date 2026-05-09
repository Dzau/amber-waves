// ============================================================================
// Sandbox runner — main-thread API around the worker.
//
// runUserSolution(code, testCases): one worker per test case (so an infinite
// loop on test 3 doesn't poison test 4). 5-second timeout per case enforced
// via worker.terminate().
// ============================================================================

import type { TestCase } from "../../missions/_mission.types";
import type { WorkerOut } from "./worker";

const TIMEOUT_MS = 5000;

export interface TestResult {
  name: string;
  input: readonly unknown[];
  expected: unknown;
  actual: unknown;
  passed: boolean;
  elapsedMs: number | null;
  error: string | null;
  description?: string;
}

export interface CompileErrorReport {
  type: "compile-error";
  message: string;
}

export interface ResultsReport {
  type: "result";
  results: TestResult[];
  allPassed: boolean;
}

export type RunReport = CompileErrorReport | ResultsReport;

function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }
  if (
    a !== null &&
    b !== null &&
    typeof a === "object" &&
    typeof b === "object"
  ) {
    const ao = a as Record<string, unknown>;
    const bo = b as Record<string, unknown>;
    const ak = Object.keys(ao);
    const bk = Object.keys(bo);
    if (ak.length !== bk.length) return false;
    for (const k of ak) if (!deepEqual(ao[k], bo[k])) return false;
    return true;
  }
  return false;
}

function runOne(
  code: string,
  input: readonly unknown[],
): Promise<WorkerOut | { type: "timeout" }> {
  return new Promise((resolve) => {
    const worker = new Worker(new URL("./worker.ts", import.meta.url), {
      type: "module",
    });
    let settled = false;

    const finish = (out: WorkerOut | { type: "timeout" }) => {
      if (settled) return;
      settled = true;
      try {
        worker.terminate();
      } catch {
        /* ignore */
      }
      resolve(out);
    };

    const timer = window.setTimeout(
      () => finish({ type: "timeout" }),
      TIMEOUT_MS,
    );

    worker.onmessage = (e: MessageEvent<WorkerOut>) => {
      window.clearTimeout(timer);
      finish(e.data);
    };
    worker.onerror = (e) => {
      window.clearTimeout(timer);
      finish({ type: "runtime-error", message: e.message || "worker error" });
    };
    worker.postMessage({ type: "run", code, input: [...input] });
  });
}

export async function runUserSolution<
  TInput extends readonly unknown[],
  TOutput,
>(
  code: string,
  testCases: ReadonlyArray<TestCase<TInput, TOutput>>,
): Promise<RunReport> {
  // Quick pre-check: try a single compile by running with the first test's
  // shape but report compile errors specially (returned by worker).
  const results: TestResult[] = [];
  for (const tc of testCases) {
    const out = await runOne(code, tc.input);
    if (out.type === "compile-error") {
      return { type: "compile-error", message: out.message };
    }
    if (out.type === "timeout") {
      results.push({
        name: tc.name,
        input: tc.input,
        expected: tc.expected,
        actual: null,
        passed: false,
        elapsedMs: null,
        error: `timeout after ${TIMEOUT_MS}ms`,
        description: tc.description,
      });
      continue;
    }
    if (out.type === "runtime-error") {
      results.push({
        name: tc.name,
        input: tc.input,
        expected: tc.expected,
        actual: null,
        passed: false,
        elapsedMs: null,
        error: out.message,
        description: tc.description,
      });
      continue;
    }
    // ok
    const passed = deepEqual(out.value, tc.expected);
    results.push({
      name: tc.name,
      input: tc.input,
      expected: tc.expected,
      actual: out.value,
      passed,
      elapsedMs: out.elapsedMs,
      error: null,
      description: tc.description,
    });
  }

  const allPassed = results.every((r) => r.passed);
  return { type: "result", results, allPassed };
}
