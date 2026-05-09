// ============================================================================
// StaticMeter — ported from prototype. Uses the project's CSS variables.
// ============================================================================

export interface StaticMeterProps {
  level: number;
  width?: number;
}

export function StaticMeter({ level, width = 220 }: StaticMeterProps) {
  const pct = Math.max(0, Math.min(100, level));
  const color =
    level > 60
      ? "var(--diesel-orange)"
      : level > 30
        ? "var(--sodium-amber)"
        : "var(--gas-station-green)";
  const tag =
    level < 30
      ? "baseline · stable"
      : level < 60
        ? "mild signal noise"
        : "approaching threshold — see Echo";
  return (
    <div
      className="relative px-3 py-2"
      style={{
        minWidth: width,
        border: "1px solid #2c2c2e",
        background: "rgba(20,16,15,0.7)",
      }}
      role="meter"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
      aria-label={`Static level ${pct} of 100, ${tag}`}
    >
      <div className="flex items-center justify-between mb-1">
        <div
          className="text-[9px] tracking-widest font-terminal"
          style={{ color: "#8a8170" }}
        >
          STATIC
        </div>
        <div className="text-[10px] font-terminal" style={{ color }}>
          {pct}/100
        </div>
      </div>
      <div
        className="h-1.5 w-full overflow-hidden"
        style={{ background: "#1c1716" }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            background: color,
            transition: "width 0.4s ease",
          }}
        />
      </div>
      <div
        className="text-[9px] font-terminal mt-1"
        style={{ color: "#8a8170" }}
      >
        {tag}
      </div>
    </div>
  );
}

export default StaticMeter;
