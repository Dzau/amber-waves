// cut-amber-alert-band.tsx
// Wide rooftop view of Detroit skyline at night.
// OmniGrid towers stream sodium-amber federal data. Pirate open-sign-pink
// signal bleeds through the cracks. Mesh node antenna in the foreground left.

import type { CSSProperties } from "react";

type Props = { className?: string; style?: CSSProperties };

export function CutAmberAlertBand({ className, style }: Props) {
  return (
    <svg
      viewBox="0 0 960 540"
      preserveAspectRatio="xMinYMin slice"
      overflow="hidden"
      width="100%"
      height="100%"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="caab-sky" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#2a1800" />
          <stop offset="30%" stopColor="#130c00" />
          <stop offset="100%" stopColor="#0a0908" />
        </linearGradient>
        <linearGradient id="caab-horizon" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#ffb700" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#ffb700" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="caab-roof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141210" />
          <stop offset="100%" stopColor="#0a0908" />
        </linearGradient>
        <radialGradient id="caab-node-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#39ff7a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#39ff7a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* FAR: sky */}
      <g id="sky">
        <rect x="0" y="0" width="960" height="540" fill="url(#caab-sky)" />
        <rect
          x="0"
          y="300"
          width="960"
          height="240"
          fill="url(#caab-horizon)"
        />
        {[
          [80, 30],
          [150, 55],
          [240, 20],
          [330, 45],
          [420, 15],
          [510, 38],
          [600, 22],
          [690, 50],
          [780, 28],
          [870, 42],
          [110, 80],
          [295, 70],
          [480, 85],
          [660, 65],
          [840, 78],
          [190, 110],
          [390, 95],
          [590, 105],
          [760, 88],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={0.8 + (i % 3) * 0.4}
            fill="#f4ede4"
            opacity={0.3 + (i % 4) * 0.1}
          />
        ))}
      </g>

      {/* FAR: city silhouette */}
      <g id="city-silhouette">
        <path
          d="M 0,420
             L 0,380 L 30,380 L 30,360 L 50,360 L 50,340 L 70,340 L 70,355
             L 90,355 L 90,320 L 110,320 L 110,340 L 130,340 L 130,310
             L 155,310 L 155,330 L 175,330 L 175,300 L 200,300 L 200,318
             L 225,318 L 225,295 L 255,295 L 255,315 L 280,315 L 280,280
             L 315,280 L 315,300 L 345,300 L 345,270 L 380,270 L 380,290
             L 420,290 L 420,260 L 460,260 L 460,285 L 500,285 L 500,255
             L 540,255 L 540,278 L 580,278 L 580,248 L 625,248 L 625,268
             L 665,268 L 665,240 L 710,240 L 710,265 L 748,265 L 748,235
             L 790,235 L 790,258 L 825,258 L 825,228 L 865,228 L 865,250
             L 900,250 L 900,220 L 940,220 L 940,245 L 960,245
             L 960,420 Z"
          fill="#0d0b09"
        />
        {/* Window clusters — halogen-white */}
        {[
          [92, 328],
          [96, 328],
          [92, 334],
          [96, 334],
          [135, 318],
          [139, 318],
          [143, 318],
          [182, 308],
          [182, 314],
          [188, 308],
          [230, 303],
          [236, 303],
          [242, 303],
          [230, 309],
          [288, 288],
          [294, 288],
          [300, 288],
          [288, 294],
          [294, 294],
          [350, 278],
          [356, 278],
          [362, 278],
          [350, 284],
          [356, 284],
          [428, 268],
          [434, 268],
          [440, 268],
          [446, 268],
          [508, 263],
          [514, 263],
          [520, 263],
          [508, 269],
          [514, 269],
          [590, 256],
          [596, 256],
          [602, 256],
          [608, 256],
          [590, 262],
          [672, 248],
          [678, 248],
          [684, 248],
          [690, 248],
          [718, 273],
          [724, 273],
          [730, 273],
          [800, 266],
          [806, 266],
          [812, 266],
          [800, 272],
          [834, 236],
          [840, 236],
          [846, 236],
          [908, 228],
          [914, 228],
          [920, 228],
          [908, 234],
          [914, 234],
        ].map(([x, y], i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width="3"
            height="4"
            fill="#f4ede4"
            opacity={0.2 + (i % 5) * 0.06}
          />
        ))}
        {/* Pink-lit windows — mesh already seeded */}
        {[
          [178, 314],
          [360, 278],
          [596, 262],
          [840, 236],
        ].map(([x, y], i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width="3"
            height="4"
            fill="#ff2d6f"
            opacity="0.35"
          />
        ))}
      </g>

      {/* MID: OmniGrid transmission towers */}
      <g id="omnigrid-towers">
        {/* Tower 1 — left-center */}
        <g transform="translate(280, 130)">
          <rect x="-4" y="0" width="8" height="180" fill="#2c2c2e" />
          <line
            x1="-30"
            y1="40"
            x2="30"
            y2="40"
            stroke="#2c2c2e"
            strokeWidth="3.5"
          />
          <line
            x1="-24"
            y1="80"
            x2="24"
            y2="80"
            stroke="#2c2c2e"
            strokeWidth="3"
          />
          <line
            x1="-18"
            y1="120"
            x2="18"
            y2="120"
            stroke="#2c2c2e"
            strokeWidth="2.5"
          />
          <circle
            cx="-30"
            cy="40"
            r="4"
            fill="#1a1816"
            stroke="#2c2c2e"
            strokeWidth="1.5"
          />
          <circle
            cx="30"
            cy="40"
            r="4"
            fill="#1a1816"
            stroke="#2c2c2e"
            strokeWidth="1.5"
          />
          <circle cx="0" cy="-6" r="4" fill="#ff5500" opacity="0.9" />
          <path
            d="M 30,40 Q 130,80 180,40"
            stroke="#2c2c2e"
            strokeWidth="2"
            fill="none"
            strokeOpacity="0.7"
          />
          <path
            d="M 30,80 Q 130,115 180,80"
            stroke="#2c2c2e"
            strokeWidth="1.5"
            fill="none"
            strokeOpacity="0.5"
          />
        </g>
        {/* Tower 2 — center */}
        <g transform="translate(500, 100)">
          <rect x="-4" y="0" width="8" height="210" fill="#2c2c2e" />
          <line
            x1="-35"
            y1="45"
            x2="35"
            y2="45"
            stroke="#2c2c2e"
            strokeWidth="4"
          />
          <line
            x1="-28"
            y1="90"
            x2="28"
            y2="90"
            stroke="#2c2c2e"
            strokeWidth="3.5"
          />
          <line
            x1="-22"
            y1="135"
            x2="22"
            y2="135"
            stroke="#2c2c2e"
            strokeWidth="3"
          />
          <circle
            cx="-35"
            cy="45"
            r="5"
            fill="#1a1816"
            stroke="#2c2c2e"
            strokeWidth="1.5"
          />
          <circle
            cx="35"
            cy="45"
            r="5"
            fill="#1a1816"
            stroke="#2c2c2e"
            strokeWidth="1.5"
          />
          <circle cx="0" cy="-6" r="5" fill="#ff5500" opacity="0.9" />
          <rect
            x="-5"
            y="30"
            width="10"
            height="5"
            fill="#ff5500"
            opacity="0.4"
          />
          <rect
            x="-5"
            y="55"
            width="10"
            height="5"
            fill="#ff5500"
            opacity="0.4"
          />
        </g>
        {/* Tower 3 — right */}
        <g transform="translate(740, 120)">
          <rect x="-4" y="0" width="8" height="190" fill="#2c2c2e" />
          <line
            x1="-30"
            y1="40"
            x2="30"
            y2="40"
            stroke="#2c2c2e"
            strokeWidth="3.5"
          />
          <line
            x1="-24"
            y1="80"
            x2="24"
            y2="80"
            stroke="#2c2c2e"
            strokeWidth="3"
          />
          <line
            x1="-18"
            y1="120"
            x2="18"
            y2="120"
            stroke="#2c2c2e"
            strokeWidth="2.5"
          />
          <circle
            cx="-30"
            cy="40"
            r="4"
            fill="#1a1816"
            stroke="#2c2c2e"
            strokeWidth="1.5"
          />
          <circle
            cx="30"
            cy="40"
            r="4"
            fill="#1a1816"
            stroke="#2c2c2e"
            strokeWidth="1.5"
          />
          <circle cx="0" cy="-6" r="4" fill="#ff5500" opacity="0.9" />
        </g>
      </g>

      {/* MID: OmniGrid amber data streams — matrix-rain style, slower, federal */}
      <g id="amber-data-streams" opacity="0.75">
        {[
          [265, 140, 6],
          [268, 165, 10],
          [265, 195, 8],
          [270, 220, 5],
          [263, 248, 9],
          [267, 278, 7],
          [272, 305, 6],
          [264, 332, 10],
          [290, 155, 7],
          [287, 182, 9],
          [293, 210, 6],
          [289, 238, 8],
          [286, 268, 5],
          [291, 295, 10],
          [286, 325, 7],
          [485, 115, 8],
          [489, 142, 12],
          [484, 172, 7],
          [488, 200, 10],
          [493, 228, 6],
          [486, 256, 9],
          [490, 285, 8],
          [487, 312, 11],
          [510, 128, 9],
          [514, 158, 7],
          [511, 186, 10],
          [515, 215, 8],
          [508, 244, 6],
          [512, 272, 9],
          [509, 300, 7],
          [513, 328, 5],
          [497, 138, 8],
          [500, 166, 6],
          [497, 194, 10],
          [501, 222, 7],
          [726, 135, 8],
          [730, 162, 10],
          [727, 190, 6],
          [731, 218, 9],
          [725, 248, 7],
          [729, 275, 8],
          [726, 302, 6],
          [730, 330, 9],
          [748, 148, 9],
          [752, 175, 7],
          [749, 203, 10],
          [753, 232, 6],
          [747, 260, 8],
          [751, 288, 7],
        ].map(([x, y, h], i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width="2.5"
            height={h}
            fill="#ffb700"
            opacity={0.4 + (i % 4) * 0.1}
            rx="1"
          />
        ))}
      </g>

      {/* MID: pirate signal — pink filaments weaving through the gaps */}
      <g id="pirate-signal" opacity="0.85">
        <path
          d="M 310,180 Q 330,195 325,215 Q 340,230 335,255 Q 348,268 342,290 Q 355,308 350,330"
          stroke="#ff2d6f"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 340,160 Q 360,178 355,200 Q 368,218 362,242 Q 375,260 370,285 Q 382,302 378,325"
          stroke="#ff2d6f"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M 370,145 Q 388,165 383,188 Q 395,208 390,234 Q 400,252 397,278"
          stroke="#ff2d6f"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M 545,130 Q 568,148 562,172 Q 578,190 572,215 Q 585,234 580,260 Q 592,278 587,305"
          stroke="#ff2d6f"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 575,118 Q 598,138 592,162 Q 607,182 601,208 Q 614,228 609,255 Q 620,275 615,300"
          stroke="#ff2d6f"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M 610,125 Q 628,145 623,170 Q 636,190 631,218"
          stroke="#ff2d6f"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          opacity="0.75"
        />
        {/* Horizontal bridging filaments */}
        <path
          d="M 328,222 Q 360,218 392,224"
          stroke="#ff2d6f"
          strokeWidth="0.8"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M 340,265 Q 375,258 408,264"
          stroke="#ff2d6f"
          strokeWidth="0.8"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M 565,198 Q 598,192 630,198"
          stroke="#ff2d6f"
          strokeWidth="0.8"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M 578,245 Q 612,238 645,244"
          stroke="#ff2d6f"
          strokeWidth="0.8"
          fill="none"
          opacity="0.4"
        />
        {/* Tiny dot nodes — signal anchor points */}
        {[
          [325, 215],
          [342, 255],
          [365, 165],
          [380, 234],
          [565, 172],
          [580, 215],
          [600, 162],
          [615, 255],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="2"
            fill="#ff2d6f"
            opacity={0.5 + (i % 3) * 0.15}
          />
        ))}
      </g>

      {/* NEAR: rooftop surface */}
      <g id="rooftop">
        <rect x="0" y="370" width="960" height="170" fill="url(#caab-roof)" />
        <rect
          x="0"
          y="370"
          width="960"
          height="4"
          fill="#2c2c2e"
          opacity="0.8"
        />
        <line
          x1="0"
          y1="385"
          x2="960"
          y2="385"
          stroke="#2c2c2e"
          strokeWidth="1"
          opacity="0.3"
        />
        <line
          x1="0"
          y1="400"
          x2="960"
          y2="400"
          stroke="#2c2c2e"
          strokeWidth="1"
          opacity="0.25"
        />
        <line
          x1="0"
          y1="415"
          x2="960"
          y2="415"
          stroke="#2c2c2e"
          strokeWidth="1"
          opacity="0.2"
        />
        {/* Gravel patches */}
        {[
          [120, 390],
          [280, 405],
          [460, 395],
          [640, 410],
          [820, 392],
          [180, 425],
          [380, 435],
          [560, 428],
          [740, 440],
        ].map(([x, y], i) => (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx={20 + (i % 3) * 8}
            ry={4 + (i % 2) * 2}
            fill="#2c2c2e"
            opacity={0.2 + (i % 4) * 0.05}
          />
        ))}
        {/* AC unit */}
        <rect
          x="580"
          y="340"
          width="80"
          height="42"
          rx="3"
          fill="#1a1816"
          stroke="#2c2c2e"
          strokeWidth="2.5"
        />
        <rect
          x="584"
          y="344"
          width="72"
          height="10"
          fill="#2c2c2e"
          opacity="0.6"
        />
        {[0, 8, 16, 24, 32].map((x) => (
          <line
            key={x}
            x1={588 + x}
            y1="356"
            x2={588 + x}
            y2="378"
            stroke="#2c2c2e"
            strokeWidth="1.5"
            opacity="0.6"
          />
        ))}
        {/* Water tower */}
        <rect
          x="860"
          y="310"
          width="40"
          height="60"
          rx="2"
          fill="#1a1816"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        <polygon
          points="855,310 905,310 910,298 850,298"
          fill="#1a1816"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        <line
          x1="865"
          y1="370"
          x2="862"
          y2="395"
          stroke="#2c2c2e"
          strokeWidth="3"
        />
        <line
          x1="895"
          y1="370"
          x2="898"
          y2="395"
          stroke="#2c2c2e"
          strokeWidth="3"
        />
      </g>

      {/* FOREGROUND: mesh node antenna — left, close to viewer */}
      <g id="mesh-antenna" transform="translate(80, 240)">
        {/* Conduit pipe */}
        <rect
          x="-4"
          y="0"
          width="8"
          height="185"
          fill="#2c2c2e"
          stroke="#1a1816"
          strokeWidth="2"
        />
        {/* Base mount plate */}
        <rect
          x="-18"
          y="178"
          width="36"
          height="10"
          rx="2"
          fill="#2c2c2e"
          stroke="#1a1816"
          strokeWidth="2"
        />
        <circle
          cx="-12"
          cy="183"
          r="3"
          fill="#1a1816"
          stroke="#2c2c2e"
          strokeWidth="1.5"
        />
        <circle
          cx="12"
          cy="183"
          r="3"
          fill="#1a1816"
          stroke="#2c2c2e"
          strokeWidth="1.5"
        />
        {/* Zip ties */}
        <rect
          x="-10"
          y="55"
          width="20"
          height="4"
          rx="1"
          fill="#1a1816"
          stroke="#2c2c2e"
          strokeWidth="1.5"
        />
        <rect
          x="-10"
          y="85"
          width="20"
          height="4"
          rx="1"
          fill="#1a1816"
          stroke="#2c2c2e"
          strokeWidth="1.5"
        />
        {/* PCB board */}
        <rect
          x="-22"
          y="60"
          width="44"
          height="28"
          rx="2"
          fill="#0d1a10"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        <line
          x1="-18"
          y1="68"
          x2="18"
          y2="68"
          stroke="#39ff7a"
          strokeWidth="0.8"
          opacity="0.5"
        />
        <line
          x1="-18"
          y1="74"
          x2="10"
          y2="74"
          stroke="#39ff7a"
          strokeWidth="0.8"
          opacity="0.5"
        />
        <line
          x1="0"
          y1="68"
          x2="0"
          y2="88"
          stroke="#39ff7a"
          strokeWidth="0.8"
          opacity="0.4"
        />
        <rect
          x="-16"
          y="70"
          width="10"
          height="8"
          rx="1"
          fill="#141a12"
          stroke="#39ff7a"
          strokeWidth="0.8"
          opacity="0.7"
        />
        <rect
          x="6"
          y="70"
          width="10"
          height="8"
          rx="1"
          fill="#141a12"
          stroke="#39ff7a"
          strokeWidth="0.8"
          opacity="0.7"
        />
        {/* Antenna elements */}
        <rect
          x="-1.5"
          y="-40"
          width="3"
          height="45"
          fill="#f4ede4"
          opacity="0.6"
        />
        <line
          x1="-30"
          y1="-20"
          x2="30"
          y2="-20"
          stroke="#f4ede4"
          strokeWidth="2.5"
          opacity="0.5"
        />
        <line
          x1="-20"
          y1="-8"
          x2="20"
          y2="-8"
          stroke="#f4ede4"
          strokeWidth="2"
          opacity="0.4"
        />
        {/* Coax cable */}
        <path
          d="M 4,88 Q 15,110 12,140 Q 8,160 14,185"
          stroke="#2c2c2e"
          strokeWidth="2.5"
          fill="none"
        />
        {/* LED — gas-station-green */}
        <circle cx="14" cy="66" r="5" fill="#39ff7a" />
        <circle cx="14" cy="66" r="12" fill="url(#caab-node-glow)" />
        <circle cx="14" cy="66" r="2.5" fill="#f4ede4" opacity="0.8" />
        {/* Signal rings */}
        <circle
          cx="0"
          cy="-30"
          r="18"
          fill="none"
          stroke="#39ff7a"
          strokeWidth="1"
          opacity="0.25"
        />
        <circle
          cx="0"
          cy="-30"
          r="35"
          fill="none"
          stroke="#39ff7a"
          strokeWidth="0.8"
          opacity="0.15"
        />
        <circle
          cx="0"
          cy="-30"
          r="52"
          fill="none"
          stroke="#39ff7a"
          strokeWidth="0.5"
          opacity="0.08"
        />
      </g>

      {/* Vignette */}
      <g id="vignette">
        <polygon points="0,0 280,0 0,240" fill="#0a0908" opacity="0.55" />
        <polygon points="960,0 680,0 960,240" fill="#0a0908" opacity="0.45" />
        <polygon points="0,540 0,420 200,540" fill="#0a0908" opacity="0.5" />
        <polygon
          points="960,540 960,420 760,540"
          fill="#0a0908"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}
