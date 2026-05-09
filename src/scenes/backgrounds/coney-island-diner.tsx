// ============================================================================
// Coney Island Diner — atmospheric SVG background (window, neon OPEN sign,
// distant skyline, booth, table edge, steam from coffee). Rain layered on top.
// Ported from prototype, palette swapped to project CSS variables.
// ============================================================================

import Rain from "../effects/rain";

export function ConeyIslandDinerBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="diner-window-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1816" />
            <stop offset="60%" stopColor="#0e1014" />
            <stop offset="100%" stopColor="#0a0808" />
          </linearGradient>
          <radialGradient id="diner-neon-pink-glow" cx="0.5" cy="0.5" r="0.6">
            <stop offset="0%" stopColor="#ff2d6f" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff2d6f" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="diner-neon-green-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#39ff7a" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#39ff7a" stopOpacity="0" />
          </radialGradient>
          <filter id="diner-bg-glow">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* Sky / outside */}
        <rect
          x="0"
          y="0"
          width="800"
          height="500"
          fill="url(#diner-window-grad)"
        />

        {/* Skyline */}
        <path
          d="M 0 280 L 50 280 L 50 240 L 90 240 L 90 220 L 130 220 L 130 260 L 170 260 L 170 200 L 220 200 L 220 230 L 260 230 L 260 270 L 320 270 L 320 210 L 380 210 L 380 250 L 440 250 L 440 220 L 500 220 L 500 240 L 560 240 L 560 200 L 620 200 L 620 260 L 680 260 L 680 230 L 740 230 L 740 270 L 800 270 L 800 320 L 0 320 Z"
          fill="#06080c"
        />

        {/* Distant lit windows */}
        {Array.from({ length: 60 }).map((_, i) => {
          const x = (i * 137) % 800;
          const y = 220 + ((i * 53) % 80);
          const lit = (i * 7) % 3 === 0;
          return lit ? (
            <rect
              key={i}
              x={x}
              y={y}
              width="2"
              height="3"
              fill="#ffb700"
              opacity="0.6"
            />
          ) : null;
        })}

        {/* Neon "OPEN" sign */}
        <g transform="translate(560, 90)">
          <ellipse
            cx="60"
            cy="25"
            rx="120"
            ry="60"
            fill="url(#diner-neon-pink-glow)"
          />
          <text
            x="60"
            y="40"
            textAnchor="middle"
            fontFamily="Bungee Inline, sans-serif"
            fontSize="36"
            fill="#ff2d6f"
            style={{ filter: "drop-shadow(0 0 6px #ff2d6f)" }}
          >
            OPEN
          </text>
          <text
            x="60"
            y="40"
            textAnchor="middle"
            fontFamily="Bungee Inline, sans-serif"
            fontSize="36"
            fill="#ff66a8"
          >
            OPEN
          </text>
        </g>

        {/* Distant FUEL sign */}
        <g transform="translate(80, 140)">
          <ellipse
            cx="40"
            cy="20"
            rx="80"
            ry="45"
            fill="url(#diner-neon-green-glow)"
            opacity="0.4"
          />
          <rect
            x="20"
            y="10"
            width="40"
            height="20"
            fill="#ffb700"
            opacity="0.7"
            filter="url(#diner-bg-glow)"
          />
          <text
            x="40"
            y="25"
            textAnchor="middle"
            fontFamily="Bungee, sans-serif"
            fontSize="11"
            fill="#0a0808"
          >
            FUEL
          </text>
        </g>

        {/* Window frame */}
        <line
          x1="0"
          y1="370"
          x2="800"
          y2="370"
          stroke="#2a2422"
          strokeWidth="3"
        />
        <line
          x1="0"
          y1="375"
          x2="800"
          y2="375"
          stroke="#0a0808"
          strokeWidth="1"
        />

        {/* Booth back */}
        <rect x="0" y="375" width="800" height="125" fill="#1a1310" />
        <rect x="0" y="430" width="800" height="70" fill="#3a1820" />
        <rect x="0" y="430" width="800" height="3" fill="#5a2430" />

        {/* Table edge */}
        <rect x="0" y="465" width="800" height="35" fill="#0e0808" />
        <rect x="0" y="465" width="800" height="2" fill="#2a201e" />

        {/* Coffee steam */}
        <g transform="translate(680, 440)">
          <ellipse cx="0" cy="20" rx="22" ry="8" fill="#1a0e0a" />
          <rect x="-18" y="0" width="36" height="22" rx="2" fill="#d8d2c2" />
          <rect x="-18" y="0" width="36" height="3" fill="#c9b59a" />
          <path
            d="M -10 -5 Q -8 -15 -12 -22 Q -8 -30 -14 -40"
            stroke="#aaa"
            strokeWidth="1.2"
            fill="none"
            opacity="0.4"
          >
            <animate
              attributeName="opacity"
              values="0.4;0.15;0.4"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M 4 -5 Q 8 -15 4 -22 Q 10 -30 4 -40"
            stroke="#aaa"
            strokeWidth="1.2"
            fill="none"
            opacity="0.35"
          >
            <animate
              attributeName="opacity"
              values="0.35;0.1;0.35"
              dur="3.5s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>

      <Rain count={50} />
    </div>
  );
}

export default ConeyIslandDinerBackground;
