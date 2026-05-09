// ============================================================================
// VizControls — shared play/pause/step-forward/step-back/speed/reset bar.
// All viz components consume `useVizState({ totalSteps })` and pass the
// returned object straight in here.
// ============================================================================

import type { VizControlsState } from "../engine/hooks/useVizState";

export interface VizControlsProps {
  controls: VizControlsState;
  /** Optional label for assistive tech describing the current step. */
  stepLabel?: string;
}

const SPEED_OPTIONS: ReadonlyArray<number> = [0.25, 0.5, 1, 2, 4];

export function VizControls({ controls, stepLabel }: VizControlsProps) {
  const {
    step,
    totalSteps,
    isPlaying,
    speed,
    togglePlay,
    stepForward,
    stepBack,
    reset,
    jumpToEnd,
    setSpeed,
  } = controls;

  const atStart = step <= 0;
  const atEnd = step >= totalSteps - 1;

  return (
    <div
      className="flex flex-wrap items-center gap-2 mt-3 px-2 py-2"
      style={{ borderTop: "1px solid #2c2c2e" }}
      role="group"
      aria-label="Visualization playback controls"
    >
      <button
        type="button"
        className="px-3 py-1.5 text-[11px] tracking-widest font-display border"
        style={{ borderColor: "#4a3e3a", color: "#8a8170" }}
        onClick={reset}
        disabled={atStart && !isPlaying}
        aria-label="Reset visualization"
      >
        « RESET
      </button>
      <button
        type="button"
        className="px-3 py-1.5 text-[11px] tracking-widest font-display border"
        style={{ borderColor: "#4a3e3a", color: "#8a8170" }}
        onClick={stepBack}
        disabled={atStart}
        aria-label="Step back"
      >
        ‹ STEP
      </button>
      <button
        type="button"
        className="px-3 py-1.5 text-[11px] tracking-widest font-display border"
        style={{
          borderColor: "rgba(255,45,111,0.5)",
          color: "var(--open-sign-pink)",
          background: "rgba(255,45,111,0.06)",
        }}
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause" : "Play"}
        disabled={atEnd && !isPlaying}
      >
        {isPlaying ? "∥ PAUSE" : "▶ PLAY"}
      </button>
      <button
        type="button"
        className="px-3 py-1.5 text-[11px] tracking-widest font-display border"
        style={{ borderColor: "#4a3e3a", color: "#8a8170" }}
        onClick={stepForward}
        disabled={atEnd}
        aria-label="Step forward"
      >
        STEP ›
      </button>
      <button
        type="button"
        className="px-3 py-1.5 text-[11px] tracking-widest font-display border"
        style={{ borderColor: "#4a3e3a", color: "#8a8170" }}
        onClick={jumpToEnd}
        disabled={atEnd}
        aria-label="Jump to end"
      >
        END »
      </button>
      <div className="flex-1" />
      <span
        className="text-[10px] font-terminal tracking-widest"
        style={{ color: "#8a8170" }}
      >
        SPEED
      </span>
      <select
        className="px-2 py-1 text-[11px] font-terminal bg-transparent"
        style={{ border: "1px solid #4a3e3a", color: "var(--halogen-white)" }}
        value={speed}
        onChange={(e) => setSpeed(Number(e.target.value))}
        aria-label="Playback speed"
      >
        {SPEED_OPTIONS.map((s) => (
          <option key={s} value={s} style={{ background: "#0a0908" }}>
            {s}x
          </option>
        ))}
      </select>
      <span
        className="text-[10px] font-terminal tracking-widest ml-3"
        style={{ color: "#8a8170" }}
        aria-label={`Step ${step + 1} of ${totalSteps}${stepLabel ? `: ${stepLabel}` : ""}`}
      >
        [{step + 1}/{totalSteps}]
      </span>
    </div>
  );
}

export default VizControls;
