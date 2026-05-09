// ============================================================================
// Code-mission scene — editor + viz + test runner + Echo headset chatter.
// Player code is executed in a Web Worker via runUserSolution.
// ============================================================================

import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useGameStore } from "../engine/store/gameStore";
import { runUserSolution, type RunReport } from "../engine/sandbox/runner";
import LeetCodeBadge from "../ui/LeetCodeBadge";
import StaticMeter from "../ui/StaticMeter";
import Echo from "../characters/echo";
import type {
  Mission,
  MissionNarrative,
  MissionVisualization,
} from "../missions/_mission.types";

export interface CodeMissionSceneProps {
  mission: Mission;
  narrative: MissionNarrative;
  Visualization: MissionVisualization;
  onComplete: () => void;
}

export function CodeMissionScene({
  mission,
  narrative,
  Visualization,
  onComplete,
}: CodeMissionSceneProps) {
  const code = useGameStore(
    (s) => s.codeByMission[mission.id] ?? mission.starterCode,
  );
  const setCode = useGameStore((s) => s.setCode);
  const staticLevel = useGameStore((s) => s.staticLevel);
  const announce = useGameStore((s) => s.announce);
  const failedAttempts = useGameStore((s) => s.failedAttempts);
  const registerFailedAttempt = useGameStore((s) => s.registerFailedAttempt);

  const [output, setOutput] = useState<RunReport | null>(null);
  const [busy, setBusy] = useState(false);
  const [revealHint, setRevealHint] = useState(false);

  // Seed editor with starter code on first mount if empty.
  useEffect(() => {
    if (code === undefined || code === null) {
      setCode(mission.id, mission.starterCode);
    }
  }, [code, mission.id, mission.starterCode, setCode]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const ta = e.target as HTMLTextAreaElement;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      setCode(mission.id, code.slice(0, start) + "  " + code.slice(end));
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = start + 2;
      });
    }
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      void handleRun();
    }
  };

  const handleRun = useCallback(async () => {
    setBusy(true);
    announce("Running tests…");
    const block14 = mission.testCases.find((t) => t.name === "block 14");
    const subset = block14 ? [block14] : [mission.testCases[0]];
    const r = await runUserSolution(code, subset);
    setOutput(r);
    setBusy(false);
    if (r.type === "result" && !r.allPassed) {
      registerFailedAttempt();
      announce(narrative.failure);
    } else if (r.type === "compile-error") {
      registerFailedAttempt();
      announce(`Compile error: ${r.message}`);
    } else if (r.type === "result" && r.allPassed) {
      announce("Visible test passed.");
    }
  }, [
    code,
    mission.testCases,
    announce,
    narrative.failure,
    registerFailedAttempt,
  ]);

  const handleTestAll = useCallback(async () => {
    setBusy(true);
    announce("Running full test suite…");
    const r = await runUserSolution(code, mission.testCases);
    setOutput(r);
    setBusy(false);
    if (r.type === "result" && r.allPassed) {
      announce(narrative.success);
      window.setTimeout(() => onComplete(), 800);
    } else if (r.type === "result") {
      registerFailedAttempt();
      const failing = r.results.filter((x) => !x.passed).length;
      announce(
        `${failing} of ${r.results.length} failing. ${narrative.failure}`,
      );
    } else {
      registerFailedAttempt();
      announce(`Compile error: ${r.message}`);
    }
  }, [
    code,
    mission.testCases,
    onComplete,
    announce,
    narrative.failure,
    narrative.success,
    registerFailedAttempt,
  ]);

  const handleSolution = () => setCode(mission.id, mission.canonicalSolution);

  const echoMood: "neutral" | "smile" | "narrow" =
    output?.type === "result" && output.allPassed
      ? "smile"
      : output?.type === "result"
        ? "narrow"
        : "neutral";

  const headsetLine =
    output?.type === "result" && output.allPassed
      ? narrative.success
      : output?.type === "compile-error"
        ? "clean it up. you're close."
        : output?.type === "result"
          ? narrative.failure
          : narrative.idle;

  // Hint ladder: failure 1 → hints[0], failure 3+ → hints[1], reveal → hints[2]
  const visibleHint = revealHint
    ? mission.hints[2]
    : failedAttempts >= 3
      ? mission.hints[1]
      : failedAttempts >= 1
        ? mission.hints[0]
        : null;

  return (
    <motion.div
      key="code"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="px-2 py-4"
    >
      <LeetCodeBadge
        meta={mission.leetcodeMeta}
        bigOTarget={mission.complexity.time}
      />

      <div className="px-6 mb-3 flex items-center justify-between flex-wrap gap-3">
        <div
          className="font-display text-lg"
          style={{ color: "var(--open-sign-pink)" }}
        >
          MISSION {mission.id.replace(/^m/, "")} ::{" "}
          {mission.title.toUpperCase()}
        </div>
        <StaticMeter level={staticLevel} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-6">
        {/* Editor */}
        <div
          className="relative"
          style={{
            border: "1px solid #4a3e3a",
            background: "rgba(28,23,22,0.4)",
          }}
        >
          <div
            className="absolute -top-2 left-4 px-2 text-[10px] tracking-widest font-display"
            style={{ background: "var(--asphalt)", color: "#8a8170" }}
          >
            ▼ /tmp/mesh_route.js
          </div>
          <div
            className="flex items-center gap-2 px-3 py-2"
            style={{ borderBottom: "1px solid #2c2c2e" }}
          >
            <span
              className="text-[10px] tracking-widest font-terminal"
              style={{ color: "#8a8170" }}
            >
              JS · BFS · CTRL+ENTER TO RUN
            </span>
          </div>
          <label htmlFor="code-editor" className="sr-only">
            Code editor for {mission.title}
          </label>
          <textarea
            id="code-editor"
            className="w-full font-terminal"
            style={{
              background: "#060404",
              color: "var(--gas-station-green)",
              border: "none",
              outline: "none",
              fontSize: 13,
              lineHeight: 1.6,
              padding: 16,
              resize: "none",
              tabSize: 2,
              caretColor: "var(--open-sign-pink)",
            }}
            value={code}
            onChange={(e) => setCode(mission.id, e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            rows={22}
          />
          <div
            className="flex flex-wrap items-center gap-2 px-3 py-3"
            style={{ borderTop: "1px solid #2c2c2e" }}
          >
            <button
              type="button"
              className="px-3 py-1.5 font-display text-[11px] tracking-[0.18em] border"
              style={{
                borderColor: "rgba(255,45,111,0.5)",
                color: "var(--open-sign-pink)",
                background: "rgba(255,45,111,0.06)",
              }}
              onClick={() => void handleRun()}
              disabled={busy}
            >
              ▶ RUN ON BLOCK 14
            </button>
            <button
              type="button"
              className="px-3 py-1.5 font-display text-[11px] tracking-[0.18em] border"
              style={{
                borderColor: "rgba(255,183,0,0.5)",
                color: "var(--sodium-amber)",
                background: "rgba(255,183,0,0.04)",
              }}
              onClick={() => void handleTestAll()}
              disabled={busy}
            >
              ⌘ TEST ALL {mission.testCases.length}
            </button>
            <div className="flex-1" />
            <button
              type="button"
              className="px-3 py-1.5 font-display text-[11px] tracking-[0.18em] border"
              style={{ borderColor: "#4a3e3a", color: "#8a8170" }}
              onClick={handleSolution}
            >
              REVEAL CANONICAL
            </button>
            {failedAttempts >= 1 && !revealHint && (
              <button
                type="button"
                className="px-3 py-1.5 font-display text-[11px] tracking-[0.18em] border"
                style={{ borderColor: "#4a3e3a", color: "#8a8170" }}
                onClick={() => setRevealHint(true)}
              >
                REVEAL HINT
              </button>
            )}
          </div>
        </div>

        {/* Visualization */}
        <Visualization />
      </div>

      <OutputPanel output={output} />

      {/* Hint */}
      {visibleHint && (
        <div
          className="mx-6 mt-4 p-3"
          style={{
            border: "1px solid #4a3e3a",
            background: "rgba(255,183,0,0.04)",
          }}
          role="note"
        >
          <div
            className="font-display text-[10px] tracking-widest mb-1"
            style={{ color: "var(--sodium-amber)" }}
          >
            ECHO :: HINT
          </div>
          <div
            className="font-scrawl text-[13px]"
            style={{ color: "var(--halogen-white)" }}
          >
            {visibleHint}
          </div>
        </div>
      )}

      {/* Echo headset — larger portrait with mood-reactive dialogue */}
      <div
        className="mx-6 mt-4 flex gap-0 overflow-hidden"
        style={{
          border: "1px solid #4a3e3a",
          background: "rgba(14,10,10,0.6)",
        }}
      >
        {/* Portrait column */}
        <div
          className="relative flex-shrink-0 flex items-end justify-center"
          style={{
            width: 130,
            background: "rgba(255,45,111,0.03)",
            borderRight: "1px solid #2c2422",
            overflow: "hidden",
          }}
        >
          {/* Pink neon rim behind portrait */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 110%, rgba(255,45,111,0.12) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <Echo mood={echoMood} height={170} style={{ position: "relative" }} />
        </div>

        {/* Text column */}
        <div className="flex-1 p-4">
          <div
            className="font-display text-[11px] tracking-widest mb-2"
            style={{ color: "var(--open-sign-pink)" }}
          >
            ECHO REYES :: HEADSET
          </div>
          <div
            className="font-scrawl text-[14px] leading-relaxed"
            style={{ color: "var(--halogen-white)" }}
          >
            {headsetLine}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface OutputPanelProps {
  output: RunReport | null;
}

function OutputPanel({ output }: OutputPanelProps) {
  if (!output) {
    return (
      <div
        className="mx-6 mt-4 p-5 pt-6 relative"
        style={{
          border: "1px solid #4a3e3a",
          background: "rgba(28,23,22,0.4)",
        }}
      >
        <div
          className="absolute -top-2 left-4 px-2 text-[10px] tracking-widest font-display"
          style={{ background: "var(--asphalt)", color: "#8a8170" }}
        >
          ▼ STDOUT
        </div>
        <div
          className="font-scrawl text-sm italic"
          style={{ color: "#8a8170" }}
        >
          awaiting execution<span className="amber-blink">_</span>
        </div>
      </div>
    );
  }
  if (output.type === "compile-error") {
    return (
      <div
        className="mx-6 mt-4 p-5 pt-6 relative"
        style={{
          border: "1px solid var(--diesel-orange)",
          background: "rgba(255,85,0,0.04)",
        }}
      >
        <div
          className="absolute -top-2 left-4 px-2 text-[10px] tracking-widest font-display"
          style={{
            background: "var(--asphalt)",
            color: "var(--diesel-orange)",
          }}
        >
          ▼ COMPILE ERROR
        </div>
        <div
          className="font-terminal text-[13px]"
          style={{ color: "var(--diesel-orange)" }}
        >
          ! {output.message}
        </div>
        <div
          className="font-terminal text-[11px] mt-2"
          style={{ color: "#8a8170" }}
        >
          echo: try again, choom. it's just a syntax slip.
        </div>
      </div>
    );
  }
  return (
    <div
      className="mx-6 mt-4 p-5 pt-6 relative"
      style={{ border: "1px solid #4a3e3a", background: "rgba(28,23,22,0.4)" }}
    >
      <div
        className="absolute -top-2 left-4 px-2 text-[10px] tracking-widest font-display"
        style={{ background: "var(--asphalt)", color: "#8a8170" }}
      >
        ▼ TEST RESULTS
      </div>
      <div className="space-y-1.5">
        {output.results.map((r, i) => (
          <div
            key={i}
            className="flex items-start gap-3 font-terminal text-[12px] flex-wrap"
          >
            <span
              style={{
                width: 18,
                color: r.passed
                  ? "var(--gas-station-green)"
                  : "var(--diesel-orange)",
              }}
            >
              {r.passed ? "✓" : "✗"}
            </span>
            <span style={{ width: 110, color: "#8a8170" }}>{r.name}</span>
            <span style={{ minWidth: 240, color: "var(--halogen-white)" }}>
              input={JSON.stringify(r.input)}
            </span>
            <span style={{ minWidth: 240 }}>
              →{" "}
              <span
                style={{
                  color: r.passed
                    ? "var(--gas-station-green)"
                    : "var(--diesel-orange)",
                }}
              >
                {r.error ? `RUNTIME: ${r.error}` : JSON.stringify(r.actual)}
              </span>
            </span>
            {!r.passed && !r.error && (
              <span style={{ color: "#8a8170" }}>
                expected {JSON.stringify(r.expected)}
              </span>
            )}
            {r.elapsedMs != null && (
              <span style={{ color: "#8a8170", marginLeft: "auto" }}>
                {r.elapsedMs.toFixed(2)}ms
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="border-t mt-3 pt-2" style={{ borderColor: "#2c2c2e" }}>
        <div
          className="font-terminal text-sm"
          style={{
            color: output.allPassed
              ? "var(--gas-station-green)"
              : "var(--sodium-amber)",
          }}
        >
          {output.allPassed
            ? "› MESH ROUTED · all cases pass · echo nods"
            : `› ${output.results.filter((r) => !r.passed).length}/${output.results.length} failing — walk the trace, then try again`}
        </div>
      </div>
    </div>
  );
}

export default CodeMissionScene;
