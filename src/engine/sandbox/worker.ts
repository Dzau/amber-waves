// ============================================================================
// Sandbox worker — executes player code off-main-thread.
//
// Protocol:
//   in:  { type: 'run', code: string, input: unknown[] }
//   out: { type: 'ok', value: unknown, elapsedMs: number }
//      | { type: 'compile-error', message: string }
//      | { type: 'runtime-error', message: string }
//
// Main thread enforces the 5-second timeout via worker.terminate().
// ============================================================================

interface RunMessage {
  type: "run";
  code: string;
  input: unknown[];
}

interface OkResult {
  type: "ok";
  value: unknown;
  elapsedMs: number;
}

interface CompileError {
  type: "compile-error";
  message: string;
}

interface RuntimeError {
  type: "runtime-error";
  message: string;
}

export type WorkerOut = OkResult | CompileError | RuntimeError;

self.onmessage = (e: MessageEvent<RunMessage>) => {
  const { code, input } = e.data;
  let solve: (...args: unknown[]) => unknown;
  try {
    // The Function constructor scopes the player code; no closure access to
    // worker globals leaks into solve().
    const factory = new Function(
      `${code}\n; return typeof solve === 'function' ? solve : null;`,
    ) as () => ((...args: unknown[]) => unknown) | null;
    const fn = factory();
    if (!fn) {
      const out: CompileError = {
        type: "compile-error",
        message: "no function named `solve` found",
      };
      (self as unknown as Worker).postMessage(out);
      return;
    }
    solve = fn;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const out: CompileError = { type: "compile-error", message };
    (self as unknown as Worker).postMessage(out);
    return;
  }

  try {
    const t0 = performance.now();
    const value = solve(...input);
    const elapsedMs = performance.now() - t0;
    const out: OkResult = { type: "ok", value, elapsedMs };
    (self as unknown as Worker).postMessage(out);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const out: RuntimeError = { type: "runtime-error", message };
    (self as unknown as Worker).postMessage(out);
  }
};

// Make this a module so TS treats it as one
export {};
