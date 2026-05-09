// cut-tablet-block14.tsx
// Bird's-eye tight shot — battered tablet slides across Formica diner table.
// Block 14 BFS schematic: 8 nodes (0-7), node 0 with open-sign-pink halo.
// Echo's hand withdrawing left, Kai's hand just touching the right edge.

import type { CSSProperties } from "react";

type Props = { className?: string; style?: CSSProperties };

// Node layout within the tablet screen area (viewBox coords)
const NODES_14 = [
  { id: 0, x: 390, y: 234, label: "0", note: "DINER" },
  { id: 1, x: 318, y: 188, label: "1" },
  { id: 2, x: 462, y: 188, label: "2" },
  { id: 3, x: 318, y: 280, label: "3" },
  { id: 4, x: 462, y: 280, label: "4" },
  { id: 5, x: 252, y: 234, label: "5" },
  { id: 6, x: 528, y: 234, label: "6" },
  { id: 7, x: 390, y: 318, label: "7" },
];

const EDGES_14: [number, number, string][] = [
  [0, 1, "1"],
  [0, 2, "1"],
  [0, 3, "1"],
  [0, 4, "1"],
  [1, 5, "2"],
  [2, 6, "2"],
  [1, 2, ""],
  [3, 5, ""],
  [4, 6, ""],
  [3, 7, "2"],
  [4, 7, "2"],
];

export function CutTabletBlock14({ className, style }: Props) {
  return (
    <svg
      viewBox="0 0 960 540"
      width="100%"
      height="100%"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ctb14-table" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#282220" />
          <stop offset="100%" stopColor="#1a1614" />
        </linearGradient>
        <radialGradient id="ctb14-screen-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#39ff7a" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#39ff7a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ctb14-node0-halo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ff2d6f" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ff2d6f" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ctb14-amber-bounce" cx="0.5" cy="0.8" r="0.5">
          <stop offset="0%" stopColor="#ffb700" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#ffb700" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Table surface — Formica, bird's-eye */}
      <g id="table-surface">
        <rect x="0" y="0" width="960" height="540" fill="url(#ctb14-table)" />
        {/* Subtle horizontal grain */}
        {[60, 120, 180, 240, 300, 360, 420, 480].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="960"
            y2={y}
            stroke="#2c2c2e"
            strokeWidth="0.5"
            opacity="0.1"
          />
        ))}
        {/* Coffee ring stains */}
        <ellipse
          cx="118"
          cy="185"
          rx="42"
          ry="13"
          fill="none"
          stroke="#1a1210"
          strokeWidth="2.5"
          opacity="0.6"
        />
        <ellipse
          cx="121"
          cy="187"
          rx="29"
          ry="8"
          fill="none"
          stroke="#140e0c"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <ellipse
          cx="822"
          cy="352"
          rx="33"
          ry="10"
          fill="none"
          stroke="#1a1210"
          strokeWidth="2"
          opacity="0.5"
        />
        <ellipse
          cx="155"
          cy="420"
          rx="24"
          ry="7"
          fill="none"
          stroke="#1a1210"
          strokeWidth="1.5"
          opacity="0.4"
        />
        {/* Sugar packet */}
        <rect
          x="148"
          y="428"
          width="36"
          height="16"
          rx="3"
          fill="#f4ede4"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          opacity="0.45"
        />
        <line
          x1="166"
          y1="428"
          x2="166"
          y2="444"
          stroke="#2c2c2e"
          strokeWidth="1"
          opacity="0.4"
        />
        {/* Crumbs */}
        {[
          [202, 462, 3],
          [212, 456, 2],
          [232, 466, 2],
          [252, 459, 3],
          [702, 382, 2],
          [717, 390, 3],
          [727, 377, 2],
        ].map(([x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill="#2c2c2e" opacity="0.32" />
        ))}
        {/* Ambient neon bounce from below */}
        <rect
          x="0"
          y="0"
          width="960"
          height="540"
          fill="url(#ctb14-amber-bounce)"
        />
      </g>

      {/* Tablet device — slightly rotated, battered */}
      <g id="tablet" transform="rotate(-4, 480, 270)">
        {/* Tablet case */}
        <rect
          x="208"
          y="115"
          width="384"
          height="278"
          rx="14"
          fill="#1a1816"
          stroke="#2c2c2e"
          strokeWidth="4"
        />
        {/* Scratch marks */}
        <line
          x1="214"
          y1="128"
          x2="228"
          y2="140"
          stroke="#2c2c2e"
          strokeWidth="2"
          opacity="0.65"
        />
        <line
          x1="574"
          y1="145"
          x2="584"
          y2="135"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          opacity="0.55"
        />
        <line
          x1="218"
          y1="362"
          x2="234"
          y2="372"
          stroke="#2c2c2e"
          strokeWidth="2"
          opacity="0.5"
        />
        <line
          x1="560"
          y1="375"
          x2="572"
          y2="365"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          opacity="0.4"
        />
        {/* Corner tape */}
        <polygon
          points="208,115 240,115 208,147"
          fill="#ffb700"
          opacity="0.45"
        />
        <polygon
          points="208,115 234,115 208,141"
          fill="#ffb700"
          opacity="0.22"
        />
        {/* Home button */}
        <circle
          cx="400"
          cy="376"
          r="10"
          fill="#2c2c2e"
          stroke="#1a1816"
          strokeWidth="2"
        />
        <circle cx="400" cy="376" r="6" fill="#141210" />
        {/* Camera dot */}
        <circle
          cx="400"
          cy="122"
          r="3"
          fill="#141210"
          stroke="#2c2c2e"
          strokeWidth="1"
        />

        {/* Screen */}
        <rect
          x="220"
          y="130"
          width="360"
          height="234"
          rx="4"
          fill="#080e0c"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        <rect
          x="220"
          y="130"
          width="360"
          height="234"
          rx="4"
          fill="url(#ctb14-screen-glow)"
        />
        {/* Scanlines */}
        {Array.from({ length: 47 }).map((_, i) => (
          <line
            key={i}
            x1="220"
            y1={130 + i * 5}
            x2="580"
            y2={130 + i * 5}
            stroke="#f4ede4"
            strokeWidth="0.4"
            opacity="0.03"
          />
        ))}

        {/* Block 14 schematic */}
        <g id="block14-schematic">
          {/* Graph-paper grid */}
          {[145, 165, 185, 205, 225, 245, 265, 285, 305, 325, 345].map((y) => (
            <line
              key={y}
              x1="222"
              y1={y}
              x2="578"
              y2={y}
              stroke="#f4ede4"
              strokeWidth="0.4"
              opacity="0.04"
            />
          ))}
          {[235, 265, 295, 325, 355, 385, 415, 445, 475, 505, 535, 565].map(
            (x) => (
              <line
                key={x}
                x1={x}
                y1="132"
                x2={x}
                y2="362"
                stroke="#f4ede4"
                strokeWidth="0.4"
                opacity="0.04"
              />
            ),
          )}

          {/* Edges */}
          {EDGES_14.map(([a, b, hop], i) => {
            const na = NODES_14[a];
            const nb = NODES_14[b];
            const mx = (na.x + nb.x) / 2;
            const my = (na.y + nb.y) / 2;
            return (
              <g key={i}>
                <line
                  x1={na.x}
                  y1={na.y}
                  x2={nb.x}
                  y2={nb.y}
                  stroke="#f4ede4"
                  strokeWidth="1.5"
                  opacity="0.65"
                />
                {hop && (
                  <text
                    x={mx + 5}
                    y={my - 4}
                    fontFamily="monospace"
                    fontSize="9"
                    fill="#ffb700"
                    opacity="0.85"
                    fontStyle="italic"
                  >
                    {hop}
                  </text>
                )}
              </g>
            );
          })}

          {/* Node 0 pink halo */}
          <circle
            cx={NODES_14[0].x}
            cy={NODES_14[0].y}
            r="30"
            fill="url(#ctb14-node0-halo)"
          />

          {/* All nodes */}
          {NODES_14.map((n) => (
            <g key={n.id}>
              <circle
                cx={n.x}
                cy={n.y}
                r={n.id === 0 ? 13 : 10}
                fill={n.id === 0 ? "#1a0818" : "#0d1a10"}
                stroke={n.id === 0 ? "#ff2d6f" : "#39ff7a"}
                strokeWidth={n.id === 0 ? 2.5 : 2}
              />
              <text
                x={n.x}
                y={n.y + 4}
                textAnchor="middle"
                fontFamily="monospace"
                fontSize={n.id === 0 ? "11" : "9"}
                fill={n.id === 0 ? "#ff2d6f" : "#39ff7a"}
                fontWeight="bold"
              >
                {n.label}
              </text>
              {n.id === 0 && n.note && (
                <text
                  x={n.x}
                  y={n.y - 19}
                  textAnchor="middle"
                  fontFamily="monospace"
                  fontSize="7"
                  fill="#ff2d6f"
                  opacity="0.8"
                  fontStyle="italic"
                >
                  {n.note}
                </text>
              )}
            </g>
          ))}

          {/* Hand-annotated label box */}
          <rect
            x="532"
            y="138"
            width="42"
            height="26"
            rx="2"
            fill="none"
            stroke="#ffb700"
            strokeWidth="0.8"
            opacity="0.4"
          />
          <text
            x="536"
            y="149"
            fontFamily="monospace"
            fontSize="8"
            fill="#ffb700"
            opacity="0.65"
            fontStyle="italic"
          >
            BFS
          </text>
          <text
            x="536"
            y="160"
            fontFamily="monospace"
            fontSize="8"
            fill="#ffb700"
            opacity="0.65"
            fontStyle="italic"
          >
            BLK14
          </text>
        </g>
      </g>

      {/* Echo's hand — left, warm brown, withdrawing */}
      <g id="echo-hand">
        {/* Forearm from left edge */}
        <path
          d="M 0,378 Q 42,368 82,358 Q 132,346 178,348 L 218,356
             Q 232,360 236,374 L 226,418 Q 210,426 190,423
             Q 154,416 114,420 Q 70,424 34,438 L 0,448 Z"
          fill="#c07848"
          stroke="#2c2c2e"
          strokeWidth="3"
        />
        {/* Shadow underside */}
        <path
          d="M 0,378 Q 38,370 78,360 Q 114,350 154,351 L 178,354
             L 188,363 L 174,358 Q 128,356 84,366 Q 44,374 0,392 Z"
          fill="#8a4a28"
          opacity="0.65"
        />
        {/* Amber bounce — diner neon on skin */}
        <path
          d="M 62,353 Q 114,348 162,352"
          stroke="#ffb700"
          strokeWidth="3"
          fill="none"
          opacity="0.18"
        />
        {/* Hand — fingers splayed open, releasing */}
        <path
          d="M 218,353 Q 250,346 268,350 Q 275,353 271,366
             L 243,383 Q 228,390 218,386 Q 208,380 212,366 Z"
          fill="#c07848"
          stroke="#2c2c2e"
          strokeWidth="2.5"
        />
        {/* Thumb */}
        <path
          d="M 218,366 Q 210,356 214,346 Q 222,340 232,346"
          fill="#b06838"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        {/* Fingers — released, splayed */}
        <path
          d="M 244,348 Q 257,336 264,340 Q 267,348 260,356"
          stroke="#2c2c2e"
          strokeWidth="1.8"
          fill="none"
        />
        <path
          d="M 252,352 Q 267,342 272,347 Q 273,356 266,362"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M 257,360 Q 270,352 274,358 Q 274,366 267,370"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Ring on middle finger */}
        <rect
          x="258"
          y="340"
          width="8"
          height="5"
          rx="2.5"
          fill="none"
          stroke="#ffb700"
          strokeWidth="2"
        />
        {/* Knuckle highlights */}
        <line
          x1="228"
          y1="354"
          x2="232"
          y2="350"
          stroke="#f4ede4"
          strokeWidth="1"
          opacity="0.28"
        />
        <line
          x1="240"
          y1="350"
          x2="244"
          y2="347"
          stroke="#f4ede4"
          strokeWidth="1"
          opacity="0.28"
        />
        {/* Ground shadow */}
        <ellipse
          cx="242"
          cy="392"
          rx="40"
          ry="6"
          fill="#0a0908"
          opacity="0.28"
        />
      </g>

      {/* Kai's hand — right, cooler, just touching edge, hesitant */}
      <g id="kai-hand">
        {/* Forearm from right edge */}
        <path
          d="M 960,418 Q 920,406 880,398 Q 834,388 794,390 L 754,396
             Q 736,402 734,416 L 744,460 Q 758,468 784,464
             Q 824,458 866,462 Q 908,466 938,476 L 960,483 Z"
          fill="#b89878"
          stroke="#2c2c2e"
          strokeWidth="3"
        />
        {/* Shadow underside */}
        <path
          d="M 960,418 Q 922,408 882,400 Q 840,391 800,392 L 758,398
             L 750,408 L 758,400 Q 798,394 840,398 Q 880,402 920,412 L 960,422 Z"
          fill="#907058"
          opacity="0.55"
        />
        {/* Halogen highlight on back of hand — newer to this light */}
        <path
          d="M 736,404 Q 750,398 764,402"
          stroke="#f4ede4"
          strokeWidth="1.5"
          fill="none"
          opacity="0.18"
        />
        {/* Hand — fingertips barely making contact */}
        <path
          d="M 758,392 Q 728,386 713,390 Q 704,394 706,408
             L 722,428 Q 734,436 746,432 Q 760,426 760,413 Z"
          fill="#b89878"
          stroke="#2c2c2e"
          strokeWidth="2.5"
        />
        {/* Thumb */}
        <path
          d="M 760,413 Q 768,402 764,392 Q 756,386 746,392"
          fill="#a88868"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        {/* Fingers — tentative, not yet gripping */}
        <path
          d="M 722,394 Q 710,382 704,386 Q 701,395 708,404"
          stroke="#2c2c2e"
          strokeWidth="1.8"
          fill="none"
        />
        <path
          d="M 716,398 Q 704,388 699,393 Q 697,402 705,410"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M 712,406 Q 701,398 698,404 Q 696,412 705,416"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Single fingertip touching the tablet corner */}
        <circle
          cx="704"
          cy="398"
          r="5"
          fill="#b89878"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        {/* Knuckle highlights */}
        <line
          x1="730"
          y1="396"
          x2="726"
          y2="392"
          stroke="#f4ede4"
          strokeWidth="1"
          opacity="0.3"
        />
        <line
          x1="718"
          y1="400"
          x2="714"
          y2="396"
          stroke="#f4ede4"
          strokeWidth="1"
          opacity="0.28"
        />
        {/* Ground shadow */}
        <ellipse
          cx="728"
          cy="436"
          rx="36"
          ry="5"
          fill="#0a0908"
          opacity="0.25"
        />
      </g>

      {/* Vignette */}
      <g id="vignette">
        <polygon points="0,0 320,0 0,280" fill="#0a0908" opacity="0.42" />
        <polygon points="960,0 640,0 960,280" fill="#0a0908" opacity="0.42" />
        <polygon points="0,540 0,380 220,540" fill="#0a0908" opacity="0.48" />
        <polygon
          points="960,540 960,380 740,540"
          fill="#0a0908"
          opacity="0.48"
        />
      </g>
    </svg>
  );
}
