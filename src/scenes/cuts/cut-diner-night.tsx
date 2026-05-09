// cut-diner-night.tsx
// Exterior establishing shot — Coney Island diner, 3am, Detroit Salvage Zone.
// Wide, low angle, slightly Dutch. Diner pushed left by one third.
// Rain-wet asphalt, stolen OmniGrid line, amber neon smear.

import type { CSSProperties } from "react";

type Props = { className?: string; style?: CSSProperties };

export function CutDinerNight({ className, style }: Props) {
  return (
    <svg
      viewBox="0 0 960 540"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Sky gradient — asphalt-black overhead */}
        <linearGradient id="cdn-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0908" />
          <stop offset="70%" stopColor="#110d0b" />
          <stop offset="100%" stopColor="#1a1208" />
        </linearGradient>

        {/* Wet asphalt reflection — amber smear */}
        <linearGradient id="cdn-asphalt-reflect" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a0e00" />
          <stop offset="40%" stopColor="#2a1500" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0a0908" />
        </linearGradient>

        {/* Pink light spill from inside diner */}
        <radialGradient id="cdn-pink-spill" cx="0.38" cy="0.72" r="0.28">
          <stop offset="0%" stopColor="#ff2d6f" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ff2d6f" stopOpacity="0" />
        </radialGradient>

        {/* Diesel-orange splice box glow */}
        <radialGradient id="cdn-splice-glow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#ff5500" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ff5500" stopOpacity="0" />
        </radialGradient>

        {/* Amber neon sign glow */}
        <radialGradient id="cdn-sign-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ffb700" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ffb700" stopOpacity="0" />
        </radialGradient>

        {/* OmniGrid tower red blink glow */}
        <radialGradient id="cdn-tower-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ff5500" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ff5500" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ── FAR: sky ─────────────────────────────────────────────── */}
      <g id="sky">
        <rect x="0" y="0" width="960" height="540" fill="url(#cdn-sky)" />
      </g>

      {/* ── FAR: collapsed parking structure right edge ───────────── */}
      <g id="parking-structure">
        {/* Multi-level ruin silhouette — right side */}
        <polygon
          points="700,420 720,380 740,390 750,350 770,360 780,340 800,350 830,330 860,340 880,300 920,310 940,290 960,300 960,420"
          fill="#0d0b09"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        {/* Horizontal deck lines */}
        <line
          x1="720"
          y1="388"
          x2="960"
          y2="350"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />
        <line
          x1="740"
          y1="360"
          x2="960"
          y2="325"
          stroke="#2c2c2e"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        {/* Collapsed pillar */}
        <rect
          x="840"
          y="340"
          width="12"
          height="80"
          fill="#1a1816"
          stroke="#2c2c2e"
          strokeWidth="1.5"
        />
        <polygon points="840,340 852,340 856,330 836,330" fill="#2c2c2e" />
      </g>

      {/* ── MID: OmniGrid tower — upper right ────────────────────── */}
      <g id="omnigrid-tower">
        {/* Tower body */}
        <rect
          x="890"
          y="60"
          width="8"
          height="220"
          fill="#2c2c2e"
          stroke="#0a0908"
          strokeWidth="1.5"
        />
        {/* Cross arms */}
        <line
          x1="870"
          y1="120"
          x2="918"
          y2="120"
          stroke="#2c2c2e"
          strokeWidth="3"
        />
        <line
          x1="876"
          y1="160"
          x2="912"
          y2="160"
          stroke="#2c2c2e"
          strokeWidth="2.5"
        />
        <line
          x1="882"
          y1="200"
          x2="906"
          y2="200"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        {/* Insulator blobs */}
        <circle
          cx="870"
          cy="120"
          r="4"
          fill="#1a1816"
          stroke="#2c2c2e"
          strokeWidth="1.5"
        />
        <circle
          cx="918"
          cy="120"
          r="4"
          fill="#1a1816"
          stroke="#2c2c2e"
          strokeWidth="1.5"
        />
        {/* Blink light */}
        <circle cx="894" cy="65" r="5" fill="#ff5500" />
        <circle cx="894" cy="65" r="14" fill="url(#cdn-tower-glow)" />
        {/* Warning stripe */}
        <rect
          x="889"
          y="80"
          width="10"
          height="4"
          fill="#ff5500"
          opacity="0.6"
        />
      </g>

      {/* ── MID: distant dark skyline silhouette ──────────────────── */}
      <g id="skyline">
        <path
          d="M 450,420 L 460,370 L 475,370 L 475,360 L 490,360 L 490,380
             L 510,380 L 510,350 L 530,350 L 530,375 L 550,375 L 550,355
             L 570,355 L 575,390 L 590,390 L 590,360 L 610,360 L 615,380
             L 640,380 L 640,340 L 660,340 L 665,380 L 680,380 L 680,360
             L 700,360 L 700,420 Z"
          fill="#0d0b09"
          stroke="none"
        />
        {/* Scattered lit windows in the skyline */}
        {[
          [465, 375],
          [515, 358],
          [535, 360],
          [555, 362],
          [595, 368],
          [645, 348],
          [668, 368],
        ].map(([x, y], i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width="3"
            height="4"
            fill="#ffb700"
            opacity="0.5"
          />
        ))}
        {/* A couple pink-lit windows — pirate signal already spreading */}
        <rect
          x="480"
          y="365"
          width="3"
          height="4"
          fill="#ff2d6f"
          opacity="0.4"
        />
        <rect
          x="650"
          y="345"
          width="3"
          height="4"
          fill="#ff2d6f"
          opacity="0.3"
        />
      </g>

      {/* ── MID: fire barrel — far left ──────────────────────────── */}
      <g id="fire-barrel" transform="translate(60, 370)">
        <rect
          x="0"
          y="20"
          width="22"
          height="28"
          rx="3"
          fill="#1a1816"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        {/* Fire */}
        <polygon points="11,18 5,8 9,12 11,2 13,12 17,8" fill="#ff5500" />
        <polygon points="11,18 7,10 11,6 15,10" fill="#ffb700" opacity="0.8" />
        {/* Barrel holes */}
        <circle cx="6" cy="32" r="2" fill="#0a0908" />
        <circle cx="16" cy="36" r="2" fill="#0a0908" />
        {/* Glow on ground */}
        <ellipse cx="11" cy="48" rx="18" ry="5" fill="#ff5500" opacity="0.15" />
      </g>

      {/* ── NEAR: diner building ─────────────────────────────────── */}
      <g id="diner-building">
        {/* Main facade */}
        <rect
          x="40"
          y="180"
          width="440"
          height="250"
          fill="#141210"
          stroke="#2c2c2e"
          strokeWidth="3"
        />

        {/* Chrome trim band across top of facade */}
        <rect x="40" y="180" width="440" height="14" fill="#2c2c2e" />
        <rect
          x="40"
          y="190"
          width="440"
          height="3"
          fill="#f4ede4"
          opacity="0.25"
        />

        {/* Roofline overhang */}
        <rect
          x="28"
          y="165"
          width="464"
          height="20"
          fill="#2c2c2e"
          stroke="#0a0908"
          strokeWidth="2"
        />
        <rect
          x="24"
          y="160"
          width="472"
          height="10"
          fill="#1a1816"
          stroke="#2c2c2e"
          strokeWidth="2"
        />

        {/* ── OmniGrid illegal cables across roofline ── */}
        {/* Main bundled cable — sags heavily */}
        <path
          d="M 24,162 Q 120,178 220,170 Q 320,162 420,172 Q 480,178 510,165"
          stroke="#2c2c2e"
          strokeWidth="5"
          fill="none"
        />
        {/* Second cable, offset */}
        <path
          d="M 24,158 Q 130,172 240,165 Q 340,158 440,168 Q 490,174 510,160"
          stroke="#1a1816"
          strokeWidth="3.5"
          fill="none"
        />
        {/* Thin third cable */}
        <path
          d="M 24,155 Q 150,168 260,162 Q 360,155 460,165 Q 498,170 510,157"
          stroke="#2c2c2e"
          strokeWidth="2"
          fill="none"
        />

        {/* ── Splice box — glows diesel-orange ── */}
        <g transform="translate(260, 155)">
          <ellipse
            cx="16"
            cy="8"
            rx="28"
            ry="16"
            fill="url(#cdn-splice-glow)"
          />
          <rect
            x="0"
            y="0"
            width="32"
            height="16"
            rx="2"
            fill="#1a1816"
            stroke="#ff5500"
            strokeWidth="2.5"
          />
          {/* Wires entering box */}
          <line
            x1="-12"
            y1="6"
            x2="0"
            y2="6"
            stroke="#2c2c2e"
            strokeWidth="4"
          />
          <line
            x1="32"
            y1="6"
            x2="44"
            y2="6"
            stroke="#2c2c2e"
            strokeWidth="4"
          />
          {/* LED indicator */}
          <circle cx="16" cy="8" r="4" fill="#ff5500" />
          <circle cx="16" cy="8" r="2" fill="#ffb700" />
          {/* Tape wrap */}
          <rect
            x="5"
            y="0"
            width="6"
            height="16"
            fill="#2c2c2e"
            opacity="0.7"
          />
        </g>

        {/* ── Windows: large plate glass ── */}
        {/* Left large window */}
        <rect
          x="60"
          y="210"
          width="170"
          height="130"
          fill="#0d1214"
          stroke="#2c2c2e"
          strokeWidth="3"
        />
        {/* Window mullion */}
        <line
          x1="145"
          y1="210"
          x2="145"
          y2="340"
          stroke="#2c2c2e"
          strokeWidth="2.5"
        />
        <line
          x1="60"
          y1="275"
          x2="230"
          y2="275"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        {/* Steam on glass — interior condensation */}
        <rect
          x="62"
          y="212"
          width="166"
          height="126"
          fill="#ff2d6f"
          opacity="0.04"
        />
        {/* Hand-lettered menu board visible through glass */}
        <rect
          x="75"
          y="220"
          width="60"
          height="35"
          fill="#1a1210"
          stroke="#2c2c2e"
          strokeWidth="1.5"
        />
        <line
          x1="80"
          y1="228"
          x2="128"
          y2="228"
          stroke="#ffb700"
          strokeWidth="1.5"
          opacity="0.7"
        />
        <line
          x1="80"
          y1="234"
          x2="120"
          y2="234"
          stroke="#ffb700"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="80"
          y1="239"
          x2="125"
          y2="239"
          stroke="#ffb700"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="80"
          y1="244"
          x2="115"
          y2="244"
          stroke="#ffb700"
          strokeWidth="1"
          opacity="0.4"
        />
        {/* Condensation streaks on window */}
        <line
          x1="90"
          y1="212"
          x2="88"
          y2="260"
          stroke="#f4ede4"
          strokeWidth="1"
          opacity="0.08"
        />
        <line
          x1="140"
          y1="212"
          x2="137"
          y2="280"
          stroke="#f4ede4"
          strokeWidth="1"
          opacity="0.06"
        />
        <line
          x1="195"
          y1="212"
          x2="192"
          y2="250"
          stroke="#f4ede4"
          strokeWidth="1"
          opacity="0.07"
        />

        {/* Right large window */}
        <rect
          x="250"
          y="210"
          width="180"
          height="130"
          fill="#0d1214"
          stroke="#2c2c2e"
          strokeWidth="3"
        />
        <line
          x1="340"
          y1="210"
          x2="340"
          y2="340"
          stroke="#2c2c2e"
          strokeWidth="2.5"
        />
        <line
          x1="250"
          y1="275"
          x2="430"
          y2="275"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        {/* Pink light spill inside — the broadcast hardware is running */}
        <rect
          x="252"
          y="212"
          width="176"
          height="126"
          fill="#ff2d6f"
          opacity="0.07"
        />
        {/* Interior booth silhouette */}
        <rect
          x="260"
          y="295"
          width="80"
          height="40"
          fill="#1a0810"
          opacity="0.8"
        />
        <rect
          x="360"
          y="295"
          width="60"
          height="40"
          fill="#1a0810"
          opacity="0.8"
        />

        {/* ── CONEY sign ── */}
        {/* Sign backing */}
        <rect
          x="80"
          y="355"
          width="260"
          height="50"
          rx="4"
          fill="#1a1410"
          stroke="#2c2c2e"
          strokeWidth="2.5"
        />
        {/* Amber glow behind sign */}
        <ellipse
          cx="210"
          cy="380"
          rx="160"
          ry="35"
          fill="url(#cdn-sign-glow)"
        />
        {/* C */}
        <text
          x="98"
          y="393"
          fontFamily="monospace"
          fontSize="38"
          fontWeight="900"
          fill="#ffb700"
          stroke="#0a0908"
          strokeWidth="1"
        >
          C
        </text>
        {/* O */}
        <text
          x="128"
          y="393"
          fontFamily="monospace"
          fontSize="38"
          fontWeight="900"
          fill="#ffb700"
          stroke="#0a0908"
          strokeWidth="1"
        >
          O
        </text>
        {/* N */}
        <text
          x="158"
          y="393"
          fontFamily="monospace"
          fontSize="38"
          fontWeight="900"
          fill="#ffb700"
          stroke="#0a0908"
          strokeWidth="1"
        >
          N
        </text>
        {/* E */}
        <text
          x="188"
          y="393"
          fontFamily="monospace"
          fontSize="38"
          fontWeight="900"
          fill="#ffb700"
          stroke="#0a0908"
          strokeWidth="1"
        >
          E
        </text>
        {/* I — dead, dim */}
        <text
          x="218"
          y="393"
          fontFamily="monospace"
          fontSize="38"
          fontWeight="900"
          fill="#2c2c2e"
          stroke="#0a0908"
          strokeWidth="1"
        >
          I
        </text>
        {/* Broken filament mark through the I */}
        <line
          x1="222"
          y1="360"
          x2="228"
          y2="395"
          stroke="#1a1816"
          strokeWidth="3"
        />
        {/* Y */}
        <text
          x="232"
          y="393"
          fontFamily="monospace"
          fontSize="38"
          fontWeight="900"
          fill="#ffb700"
          stroke="#0a0908"
          strokeWidth="1"
        >
          Y
        </text>

        {/* ── Door ── */}
        <rect
          x="170"
          y="350"
          width="60"
          height="80"
          fill="#0d1010"
          stroke="#2c2c2e"
          strokeWidth="2.5"
        />
        {/* Door window */}
        <rect
          x="180"
          y="358"
          width="18"
          height="22"
          fill="#0f1416"
          stroke="#2c2c2e"
          strokeWidth="1.5"
        />
        <rect
          x="202"
          y="358"
          width="18"
          height="22"
          fill="#0f1416"
          stroke="#2c2c2e"
          strokeWidth="1.5"
        />
        {/* Door handle */}
        <rect x="222" y="392" width="4" height="10" rx="2" fill="#2c2c2e" />

        {/* ── Chrome trim along base ── */}
        <rect x="40" y="420" width="440" height="10" fill="#2c2c2e" />
        <rect
          x="40"
          y="421"
          width="440"
          height="3"
          fill="#f4ede4"
          opacity="0.15"
        />

        {/* Pink spill from inside onto pavement */}
        <ellipse
          cx="210"
          cy="440"
          rx="200"
          ry="30"
          fill="url(#cdn-pink-spill)"
        />
      </g>

      {/* ── FOREGROUND: wet asphalt ──────────────────────────────── */}
      <g id="wet-asphalt">
        {/* Ground plane */}
        <rect
          x="0"
          y="420"
          width="960"
          height="120"
          fill="url(#cdn-asphalt-reflect)"
        />

        {/* Amber neon smear reflection of the CONEY sign */}
        <ellipse
          cx="180"
          cy="450"
          rx="130"
          ry="20"
          fill="#ffb700"
          opacity="0.18"
        />
        <ellipse
          cx="180"
          cy="455"
          rx="110"
          ry="12"
          fill="#ffb700"
          opacity="0.12"
        />
        {/* Longer amber smear stretching toward viewer */}
        <polygon
          points="100,445 260,445 220,540 140,540"
          fill="#ffb700"
          opacity="0.08"
        />

        {/* Pink reflection from inside diner */}
        <ellipse
          cx="210"
          cy="455"
          rx="90"
          ry="14"
          fill="#ff2d6f"
          opacity="0.12"
        />

        {/* Puddle edges — wet pavement detail */}
        <ellipse
          cx="120"
          cy="460"
          rx="55"
          ry="8"
          fill="#1a1408"
          stroke="#2c2c2e"
          strokeWidth="1"
        />
        <ellipse
          cx="350"
          cy="475"
          rx="70"
          ry="9"
          fill="#1a1408"
          stroke="#2c2c2e"
          strokeWidth="1"
        />
        <ellipse cx="600" cy="465" rx="50" ry="7" fill="#161208" />

        {/* Crack lines in asphalt */}
        <path
          d="M 320,430 Q 340,450 360,470 L 380,490"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M 500,440 Q 510,460 530,480"
          stroke="#2c2c2e"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M 650,435 L 670,465 L 660,490"
          stroke="#2c2c2e"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />

        {/* Rain ripple rings in puddles */}
        <ellipse
          cx="120"
          cy="460"
          rx="22"
          ry="4"
          fill="none"
          stroke="#f4ede4"
          strokeWidth="0.8"
          opacity="0.2"
        />
        <ellipse
          cx="350"
          cy="475"
          rx="18"
          ry="3"
          fill="none"
          stroke="#f4ede4"
          strokeWidth="0.8"
          opacity="0.2"
        />
      </g>

      {/* ── Rain streaks (static) ─────────────────────────────────── */}
      <g id="rain" opacity="0.25">
        {[
          [100, 50, 110, 120],
          [160, 80, 168, 145],
          [230, 20, 238, 90],
          [310, 60, 317, 130],
          [400, 40, 408, 110],
          [475, 90, 482, 158],
          [540, 30, 548, 100],
          [620, 70, 627, 140],
          [700, 50, 707, 118],
          [780, 80, 787, 148],
          [850, 25, 857, 95],
          [920, 60, 927, 130],
          [70, 200, 77, 270],
          [195, 180, 202, 248],
          [370, 210, 377, 280],
          [450, 190, 457, 260],
          [560, 205, 567, 273],
          [680, 185, 687, 255],
          [800, 200, 807, 268],
          [130, 310, 137, 378],
          [290, 290, 297, 358],
          [500, 300, 507, 368],
          [730, 295, 737, 365],
          [880, 310, 887, 378],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#f4ede4"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
        ))}
      </g>

      {/* ── Vignette overlay ─────────────────────────────────────── */}
      <g id="vignette">
        <rect
          x="0"
          y="0"
          width="960"
          height="540"
          fill="url(#cdn-sky)"
          opacity="0.35"
          style={{ mixBlendMode: "multiply" as const }}
        />
        {/* Hard corner darks */}
        <polygon points="0,0 200,0 0,200" fill="#0a0908" opacity="0.45" />
        <polygon points="960,0 760,0 960,200" fill="#0a0908" opacity="0.35" />
        <polygon points="0,540 0,380 180,540" fill="#0a0908" opacity="0.4" />
        <polygon
          points="960,540 960,380 780,540"
          fill="#0a0908"
          opacity="0.4"
        />
      </g>
    </svg>
  );
}
