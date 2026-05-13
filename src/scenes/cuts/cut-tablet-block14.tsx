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
      preserveAspectRatio="xMidYMid slice"
      overflow="hidden"
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
        {/* Forearm from left edge — tapers into wrist */}
        <path
          d="M 0,372 Q 50,362 100,356 Q 148,350 178,350
             L 200,352 L 204,386 Q 174,390 140,392
             Q 96,394 46,402 L 0,408 Z"
          fill="#c07848"
          stroke="#2c2c2e"
          strokeWidth="3"
        />
        {/* Shadow underside of forearm */}
        <path
          d="M 0,372 Q 48,364 96,358 Q 144,352 178,352
             L 196,356 L 194,368 L 178,362 Q 140,360 96,366
             Q 48,372 0,384 Z"
          fill="#8a4a28"
          opacity="0.55"
        />
        {/* Amber bounce — diner neon on skin */}
        <path
          d="M 60,356 Q 114,350 168,354"
          stroke="#ffb700"
          strokeWidth="2.5"
          fill="none"
          opacity="0.18"
        />

        {/* Wrist narrowing */}
        <path
          d="M 198,350 L 218,348 L 222,390 L 202,390 Z"
          fill="#c07848"
          stroke="#2c2c2e"
          strokeWidth="1.5"
        />

        {/* Palm — broad trapezoid, top-down view */}
        <path
          d="M 218,344 L 272,340 L 278,376 L 218,384 Z"
          fill="#c07848"
          stroke="#2c2c2e"
          strokeWidth="2.5"
        />
        {/* Palm shadow — lower half darker */}
        <path
          d="M 218,364 L 272,360 L 278,376 L 218,384 Z"
          fill="#8a4a28"
          opacity="0.38"
        />
        {/* Knuckle row highlight */}
        <path
          d="M 222,348 Q 248,344 272,341"
          stroke="#f4ede4"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />

        {/* Thumb — extends downward from palm left edge, top-down */}
        <path
          d="M 220,374 L 222,390 Q 216,402 208,404
             Q 198,404 196,394 Q 196,382 206,376 Z"
          fill="#c07848"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        {/* Thumb shadow */}
        <path
          d="M 210,390 Q 204,400 198,398 Q 196,390 200,382 Z"
          fill="#8a4a28"
          opacity="0.4"
        />

        {/* Index finger — topmost, slightly splayed */}
        <path
          d="M 240,340 L 248,338 L 258,318 Q 260,310 256,306
             Q 250,303 246,308 L 234,328 L 234,340 Z"
          fill="#c07848"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        {/* Index fingertip shadow */}
        <path
          d="M 248,312 Q 252,308 255,310 Q 256,316 252,320 Z"
          fill="#8a4a28"
          opacity="0.4"
        />

        {/* Middle finger — longest, straight up */}
        <path
          d="M 253,340 L 261,339 L 270,316 Q 272,307 268,303
             Q 262,300 258,305 L 248,329 L 247,340 Z"
          fill="#c07848"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        {/* Ring on middle finger */}
        <rect
          x="257"
          y="320"
          width="9"
          height="6"
          rx="3"
          fill="none"
          stroke="#ffb700"
          strokeWidth="2"
        />

        {/* Ring finger */}
        <path
          d="M 263,341 L 271,340 L 278,319 Q 280,311 276,307
             Q 270,304 266,309 L 258,330 L 258,341 Z"
          fill="#c07848"
          stroke="#2c2c2e"
          strokeWidth="2"
        />

        {/* Pinky — shortest, angled outward */}
        <path
          d="M 271,343 L 278,342 L 283,324 Q 284,316 281,313
             Q 275,310 272,315 L 266,333 L 266,343 Z"
          fill="#c07848"
          stroke="#2c2c2e"
          strokeWidth="2"
        />

        {/* Ground shadow */}
        <ellipse
          cx="240"
          cy="392"
          rx="42"
          ry="5"
          fill="#0a0908"
          opacity="0.25"
        />
      </g>

      {/* Kai's hand — right, cooler, just touching edge, hesitant */}
      <g id="kai-hand">
        {/* Forearm from right edge — tapers into wrist */}
        <path
          d="M 960,412 Q 910,402 860,396 Q 812,390 782,390
             L 760,392 L 756,426 Q 784,432 820,432
             Q 864,432 914,440 L 960,448 Z"
          fill="#b89878"
          stroke="#2c2c2e"
          strokeWidth="3"
        />
        {/* Shadow underside of forearm */}
        <path
          d="M 960,412 Q 912,404 864,398 Q 816,392 782,392
             L 764,396 L 762,410 L 778,400 Q 812,396 860,400
             Q 908,404 960,416 Z"
          fill="#907058"
          opacity="0.5"
        />
        {/* Halogen highlight on back of forearm */}
        <path
          d="M 800,392 Q 830,388 860,392"
          stroke="#f4ede4"
          strokeWidth="1.5"
          fill="none"
          opacity="0.18"
        />

        {/* Wrist narrowing */}
        <path
          d="M 762,390 L 742,392 L 738,428 L 758,428 Z"
          fill="#b89878"
          stroke="#2c2c2e"
          strokeWidth="1.5"
        />

        {/* Palm — broad trapezoid, top-down view, mirror of Echo's */}
        <path
          d="M 742,386 L 688,382 L 682,418 L 742,424 Z"
          fill="#b89878"
          stroke="#2c2c2e"
          strokeWidth="2.5"
        />
        {/* Palm shadow — lower half */}
        <path
          d="M 742,404 L 688,400 L 682,418 L 742,424 Z"
          fill="#907058"
          opacity="0.35"
        />
        {/* Knuckle row highlight */}
        <path
          d="M 738,390 Q 714,386 688,383"
          stroke="#f4ede4"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />

        {/* Thumb — extends downward from palm right edge, top-down */}
        <path
          d="M 740,414 L 738,430 Q 744,442 752,444
             Q 762,444 764,434 Q 764,422 754,416 Z"
          fill="#b89878"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        {/* Thumb shadow */}
        <path
          d="M 750,430 Q 756,440 762,438 Q 764,430 760,422 Z"
          fill="#907058"
          opacity="0.4"
        />

        {/* Index finger — topmost, slightly splayed left */}
        <path
          d="M 720,382 L 712,380 L 702,360 Q 700,352 704,348
             Q 710,345 714,350 L 726,370 L 726,382 Z"
          fill="#b89878"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        {/* Index fingertip shadow */}
        <path
          d="M 712,354 Q 708,350 705,352 Q 704,358 708,362 Z"
          fill="#907058"
          opacity="0.4"
        />

        {/* Middle finger — longest, straight left */}
        <path
          d="M 707,382 L 699,381 L 690,358 Q 688,349 692,345
             Q 698,342 702,347 L 712,371 L 713,382 Z"
          fill="#b89878"
          stroke="#2c2c2e"
          strokeWidth="2"
        />

        {/* Ring finger */}
        <path
          d="M 697,383 L 689,382 L 682,361 Q 680,353 684,349
             Q 690,346 694,351 L 702,372 L 702,383 Z"
          fill="#b89878"
          stroke="#2c2c2e"
          strokeWidth="2"
        />

        {/* Pinky — shortest, angled outward */}
        <path
          d="M 689,385 L 682,384 L 677,366 Q 676,358 679,355
             Q 685,352 688,357 L 694,375 L 694,385 Z"
          fill="#b89878"
          stroke="#2c2c2e"
          strokeWidth="2"
        />

        {/* Ground shadow */}
        <ellipse
          cx="720"
          cy="432"
          rx="42"
          ry="5"
          fill="#0a0908"
          opacity="0.22"
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
