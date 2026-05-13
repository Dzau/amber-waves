// cut-tablet-block19.tsx
// Deliberate visual rhyme with cut-tablet-block14 — same composition, same table,
// same angle. Block 19 schematic: 13 nodes (0-12), weighted edge labels in
// sodium-amber. Echo's hand already gone (only sleeve edge). Kai's hand closing.

import type { CSSProperties } from "react";

type Props = { className?: string; style?: CSSProperties };

// Block 19: 13 nodes, more complex topology, weighted edges
const NODES_19 = [
  { id: 0, x: 400, y: 230, label: "0", note: "SRC" },
  { id: 1, x: 330, y: 185, label: "1" },
  { id: 2, x: 470, y: 185, label: "2" },
  { id: 3, x: 330, y: 275, label: "3" },
  { id: 4, x: 470, y: 275, label: "4" },
  { id: 5, x: 256, y: 185, label: "5" },
  { id: 6, x: 544, y: 185, label: "6" },
  { id: 7, x: 256, y: 275, label: "7" },
  { id: 8, x: 544, y: 275, label: "8" },
  { id: 9, x: 400, y: 318, label: "9" },
  { id: 10, x: 210, y: 230, label: "10" },
  { id: 11, x: 590, y: 230, label: "11" },
  { id: 12, x: 400, y: 148, label: "12" },
];

// Weighted edges: [a, b, weight]
const EDGES_19: [number, number, number][] = [
  [0, 1, 4],
  [0, 2, 3],
  [0, 3, 5],
  [0, 4, 2],
  [1, 5, 6],
  [2, 6, 4],
  [3, 7, 3],
  [4, 8, 5],
  [1, 2, 2],
  [3, 4, 2],
  [5, 10, 7],
  [7, 10, 4],
  [6, 11, 3],
  [8, 11, 6],
  [3, 9, 4],
  [4, 9, 3],
  [0, 12, 8],
  [1, 12, 5],
  [2, 12, 6],
];

export function CutTabletBlock19({ className, style }: Props) {
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
        {/* Same table gradient as block14 — palette rhyme */}
        <linearGradient id="ctb19-table" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#282220" />
          <stop offset="100%" stopColor="#1a1614" />
        </linearGradient>
        <radialGradient id="ctb19-screen-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#39ff7a" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#39ff7a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ctb19-node0-halo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ff2d6f" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ff2d6f" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ctb19-amber-bounce" cx="0.5" cy="0.8" r="0.5">
          <stop offset="0%" stopColor="#ffb700" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ffb700" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Table surface — same Formica, same rhyme */}
      <g id="table-surface">
        <rect x="0" y="0" width="960" height="540" fill="url(#ctb19-table)" />
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
        {/* Same coffee rings — same table */}
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
        {/* Ambient amber bounce — Kai's been sitting here longer, warm now */}
        <rect
          x="0"
          y="0"
          width="960"
          height="540"
          fill="url(#ctb19-amber-bounce)"
        />
      </g>

      {/* Tablet — same rotation, same case */}
      <g id="tablet" transform="rotate(-4, 480, 270)">
        <rect
          x="200"
          y="110"
          width="400"
          height="288"
          rx="14"
          fill="#1a1816"
          stroke="#2c2c2e"
          strokeWidth="4"
        />
        {/* Same scratch marks */}
        <line
          x1="206"
          y1="124"
          x2="220"
          y2="136"
          stroke="#2c2c2e"
          strokeWidth="2"
          opacity="0.65"
        />
        <line
          x1="575"
          y1="140"
          x2="586"
          y2="130"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          opacity="0.55"
        />
        <line
          x1="212"
          y1="368"
          x2="228"
          y2="378"
          stroke="#2c2c2e"
          strokeWidth="2"
          opacity="0.5"
        />
        <line
          x1="560"
          y1="380"
          x2="573"
          y2="370"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          opacity="0.4"
        />
        {/* Corner tape — same corner */}
        <polygon
          points="200,110 232,110 200,142"
          fill="#ffb700"
          opacity="0.45"
        />
        <polygon
          points="200,110 226,110 200,136"
          fill="#ffb700"
          opacity="0.22"
        />
        {/* Home button */}
        <circle
          cx="400"
          cy="382"
          r="10"
          fill="#2c2c2e"
          stroke="#1a1816"
          strokeWidth="2"
        />
        <circle cx="400" cy="382" r="6" fill="#141210" />
        <circle
          cx="400"
          cy="116"
          r="3"
          fill="#141210"
          stroke="#2c2c2e"
          strokeWidth="1"
        />

        {/* Screen */}
        <rect
          x="212"
          y="124"
          width="376"
          height="248"
          rx="4"
          fill="#080e0c"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        <rect
          x="212"
          y="124"
          width="376"
          height="248"
          rx="4"
          fill="url(#ctb19-screen-glow)"
        />
        {Array.from({ length: 50 }).map((_, i) => (
          <line
            key={i}
            x1="212"
            y1={124 + i * 5}
            x2="588"
            y2={124 + i * 5}
            stroke="#f4ede4"
            strokeWidth="0.4"
            opacity="0.03"
          />
        ))}

        {/* Block 19 schematic */}
        <g id="block19-schematic">
          {/* Graph-paper grid */}
          {[135, 155, 175, 195, 215, 235, 255, 275, 295, 315, 335, 355].map(
            (y) => (
              <line
                key={y}
                x1="214"
                y1={y}
                x2="586"
                y2={y}
                stroke="#f4ede4"
                strokeWidth="0.4"
                opacity="0.04"
              />
            ),
          )}
          {[
            225, 255, 285, 315, 345, 375, 405, 435, 465, 495, 525, 555, 580,
          ].map((x) => (
            <line
              key={x}
              x1={x}
              y1="126"
              x2={x}
              y2="370"
              stroke="#f4ede4"
              strokeWidth="0.4"
              opacity="0.04"
            />
          ))}

          {/* Edges — halogen-white, weighted labels in sodium-amber */}
          {EDGES_19.map(([a, b, w], i) => {
            const na = NODES_19[a];
            const nb = NODES_19[b];
            const mx = (na.x + nb.x) / 2;
            const my = (na.y + nb.y) / 2;
            // Slight offset so label doesn't sit exactly on the line
            const dx = nb.y - na.y;
            const dy = na.x - nb.x;
            const len = Math.sqrt(dx * dx + dy * dy) || 1;
            const ox = (dx / len) * 6;
            const oy = (dy / len) * 6;
            return (
              <g key={i}>
                <line
                  x1={na.x}
                  y1={na.y}
                  x2={nb.x}
                  y2={nb.y}
                  stroke="#f4ede4"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
                {/* Weight label — sodium-amber, costs something now */}
                <text
                  x={mx + ox}
                  y={my + oy + 3}
                  textAnchor="middle"
                  fontFamily="monospace"
                  fontSize="8"
                  fill="#ffb700"
                  opacity="0.9"
                  fontWeight="bold"
                >
                  {w}
                </text>
              </g>
            );
          })}

          {/* Node 0 pink halo */}
          <circle
            cx={NODES_19[0].x}
            cy={NODES_19[0].y}
            r="28"
            fill="url(#ctb19-node0-halo)"
          />

          {/* All nodes */}
          {NODES_19.map((n) => (
            <g key={n.id}>
              <circle
                cx={n.x}
                cy={n.y}
                r={n.id === 0 ? 12 : 9}
                fill={n.id === 0 ? "#1a0818" : "#0d1a10"}
                stroke={n.id === 0 ? "#ff2d6f" : "#39ff7a"}
                strokeWidth={n.id === 0 ? 2.5 : 1.8}
              />
              <text
                x={n.x}
                y={n.y + 3}
                textAnchor="middle"
                fontFamily="monospace"
                fontSize={n.id === 0 ? "10" : n.id >= 10 ? "7" : "8"}
                fill={n.id === 0 ? "#ff2d6f" : "#39ff7a"}
                fontWeight="bold"
              >
                {n.label}
              </text>
              {n.id === 0 && n.note && (
                <text
                  x={n.x}
                  y={n.y - 17}
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

          {/* Annotation — same style, updated block number */}
          <rect
            x="534"
            y="132"
            width="46"
            height="26"
            rx="2"
            fill="none"
            stroke="#ffb700"
            strokeWidth="0.8"
            opacity="0.4"
          />
          <text
            x="538"
            y="143"
            fontFamily="monospace"
            fontSize="8"
            fill="#ffb700"
            opacity="0.65"
            fontStyle="italic"
          >
            DIJKSTRA
          </text>
          <text
            x="538"
            y="154"
            fontFamily="monospace"
            fontSize="8"
            fill="#ffb700"
            opacity="0.65"
            fontStyle="italic"
          >
            BLK19
          </text>
        </g>
      </g>

      {/* Echo's sleeve — she's already let go, only the edge of fabric visible */}
      <g id="echo-sleeve">
        {/* Just the forearm disappearing off-frame left — not a hand anymore */}
        <path
          d="M 0,360 Q 50,352 100,355 Q 140,357 165,362
             L 175,368 L 168,390 Q 140,394 100,390
             Q 58,386 0,392 Z"
          fill="#141010"
          stroke="#2c2c2e"
          strokeWidth="2.5"
        />
        {/* Jacket fabric edge — just the hem of the sleeve */}
        <path
          d="M 0,360 Q 50,352 100,355 Q 140,357 165,362"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        {/* Cuff detail */}
        <line
          x1="155"
          y1="362"
          x2="172"
          y2="388"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          opacity="0.5"
        />
        {/* The ring is gone from frame — she's withdrawn completely */}
      </g>

      {/* Kai's hand — already closing, warmer lit, he knows what this is now */}
      <g id="kai-hand">
        {/* Forearm — same entry from right, tapers into wrist, warmer lit */}
        <path
          d="M 960,406 Q 910,396 860,390 Q 812,384 782,384
             L 760,386 L 756,420 Q 784,428 820,428
             Q 864,428 914,436 L 960,444 Z"
          fill="#c4a888"
          stroke="#2c2c2e"
          strokeWidth="3"
        />
        {/* Warmer amber glow — he's been in the diner light long enough */}
        <path
          d="M 790,386 Q 820,382 852,386"
          stroke="#ffb700"
          strokeWidth="2"
          fill="none"
          opacity="0.22"
        />
        {/* Shadow underside of forearm */}
        <path
          d="M 960,406 Q 912,398 864,392 Q 816,386 782,386
             L 764,390 L 762,404 L 778,394 Q 812,390 860,394
             Q 908,398 960,410 Z"
          fill="#987858"
          opacity="0.48"
        />

        {/* Wrist narrowing — slightly tighter than block14 to show grip tension */}
        <path
          d="M 762,384 L 742,386 L 738,424 L 758,422 Z"
          fill="#c4a888"
          stroke="#2c2c2e"
          strokeWidth="1.5"
        />

        {/* Palm — closing grip, same trapezoid, warmer tone */}
        <path
          d="M 742,380 L 686,376 L 680,416 L 742,420 Z"
          fill="#c4a888"
          stroke="#2c2c2e"
          strokeWidth="2.5"
        />
        {/* Palm shadow */}
        <path
          d="M 742,400 L 686,396 L 680,416 L 742,420 Z"
          fill="#987858"
          opacity="0.35"
        />
        {/* Knuckle row — warmer highlight, amber tint */}
        <path
          d="M 738,384 Q 714,380 686,377"
          stroke="#ffb700"
          strokeWidth="1"
          fill="none"
          opacity="0.28"
        />
        {/* Halogen highlight on back of hand */}
        <path
          d="M 730,382 Q 745,378 758,382"
          stroke="#f4ede4"
          strokeWidth="1.5"
          fill="none"
          opacity="0.22"
        />

        {/* Thumb — gripping, extends downward from palm right edge */}
        <path
          d="M 740,410 L 738,428 Q 744,440 752,442
             Q 762,442 764,432 Q 764,420 754,412 Z"
          fill="#c4a888"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        {/* Thumb shadow — gripping tension */}
        <path
          d="M 750,428 Q 756,438 762,436 Q 764,428 760,420 Z"
          fill="#987858"
          opacity="0.45"
        />

        {/* Index finger — closing inward, tip curled slightly */}
        <path
          d="M 720,376 L 712,374 L 700,352 Q 698,344 702,340
             Q 708,337 712,342 L 726,364 L 726,376 Z"
          fill="#c4a888"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        {/* Index tip — closing, slight shadow at tip */}
        <path
          d="M 702,346 Q 698,342 700,340 Q 706,338 710,344 Z"
          fill="#987858"
          opacity="0.45"
        />

        {/* Middle finger — longest, closing around tablet edge */}
        <path
          d="M 707,376 L 699,375 L 688,352 Q 686,343 690,339
             Q 696,336 700,341 L 712,365 L 713,376 Z"
          fill="#c4a888"
          stroke="#2c2c2e"
          strokeWidth="2"
        />

        {/* Ring finger — closing */}
        <path
          d="M 697,378 L 689,377 L 680,355 Q 678,347 682,343
             Q 688,340 692,345 L 702,368 L 702,378 Z"
          fill="#c4a888"
          stroke="#2c2c2e"
          strokeWidth="2"
        />

        {/* Pinky — closing, shortest */}
        <path
          d="M 689,380 L 682,379 L 675,360 Q 674,352 677,349
             Q 683,346 686,351 L 694,370 L 694,380 Z"
          fill="#c4a888"
          stroke="#2c2c2e"
          strokeWidth="2"
        />

        {/* Ground shadow */}
        <ellipse
          cx="718"
          cy="430"
          rx="42"
          ry="5"
          fill="#0a0908"
          opacity="0.26"
        />
      </g>

      {/* Vignette — identical to block14 for visual rhyme */}
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
