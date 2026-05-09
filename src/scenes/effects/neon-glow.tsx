// Neon glow utility classes + a reusable SVG <filter> def for downstream use.
export function NeonGlowStyles() {
  return (
    <style>{`
      .neon-pink {
        color: var(--open-sign-pink);
        text-shadow:
          0 0 4px rgba(255,45,111,0.7),
          0 0 16px rgba(255,45,111,0.45),
          0 0 32px rgba(255,45,111,0.25);
      }
      .neon-green {
        color: var(--gas-station-green);
        text-shadow:
          0 0 4px rgba(57,255,122,0.7),
          0 0 16px rgba(57,255,122,0.4);
      }
      .neon-amber {
        color: var(--sodium-amber);
        text-shadow:
          0 0 4px rgba(255,183,0,0.7),
          0 0 18px rgba(255,183,0,0.4);
      }
      .neon-cyan {
        color: var(--motel-pool-cyan);
        text-shadow:
          0 0 4px rgba(74,215,209,0.7),
          0 0 18px rgba(74,215,209,0.4);
      }
    `}</style>
  );
}

export function NeonGlowSvgDefs() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
    >
      <defs>
        <filter
          id="neon-glow-filter"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
    </svg>
  );
}

export default NeonGlowStyles;
