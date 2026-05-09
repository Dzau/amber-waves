// cut-mesh-online.tsx
// Aerial directly-overhead view of Block 14 at night.
// BFS propagation bloom: node 0 (diner rooftop) brightest gas-station-green,
// rings of nodes lit outward. Unreachable nodes dark. OmniGrid substation
// south end — diesel-orange warning, kills signal around itself.

import type { CSSProperties } from "react";

type Props = { className?: string; style?: CSSProperties };

// Block layout: 8 buildings arranged as city block rooftops.
// Overhead view — each building is a rectangle, positioned on the block grid.
// Node 0 = diner, center. Unreachable: node represented as a dark building
// near the OmniGrid substation at south end.
const BLOCK_BUILDINGS = [
  // { id, x, y, w, h, reachable, hopDist }
  { id: 0, x: 390, y: 210, w: 80, h: 60, reachable: true, hopDist: 0 }, // diner — source
  { id: 1, x: 272, y: 170, w: 70, h: 52, reachable: true, hopDist: 1 },
  { id: 2, x: 508, y: 170, w: 70, h: 52, reachable: true, hopDist: 1 },
  { id: 3, x: 272, y: 268, w: 70, h: 52, reachable: true, hopDist: 1 },
  { id: 4, x: 508, y: 268, w: 70, h: 52, reachable: true, hopDist: 1 },
  { id: 5, x: 180, y: 218, w: 64, h: 48, reachable: true, hopDist: 2 },
  { id: 6, x: 616, y: 218, w: 64, h: 48, reachable: true, hopDist: 2 },
  { id: 7, x: 390, y: 330, w: 80, h: 52, reachable: false, hopDist: -1 }, // dark — blocked by substation
];

// Antenna dot positions (on rooftops of reachable buildings)
const ANTENNA_POS = [
  { id: 0, x: 430, y: 230 },
  { id: 1, x: 307, y: 196 },
  { id: 2, x: 543, y: 196 },
  { id: 3, x: 307, y: 294 },
  { id: 4, x: 543, y: 294 },
  { id: 5, x: 212, y: 242 },
  { id: 6, x: 648, y: 242 },
];

// Green fill by hop distance — dimmer at greater distance but all lit
function nodeGreen(hopDist: number): string {
  if (hopDist === 0) return "#39ff7a";
  if (hopDist === 1) return "#28cc5e";
  return "#1a9e46";
}

function nodeOpacity(hopDist: number): number {
  if (hopDist === 0) return 1;
  if (hopDist === 1) return 0.85;
  return 0.65;
}

export function CutMeshOnline({ className, style }: Props) {
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
        {/* Overhead sky — deep asphalt with amber haze */}
        <linearGradient id="cmo-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0908" />
          <stop offset="100%" stopColor="#100d06" />
        </linearGradient>
        {/* Node 0 glow — brightest */}
        <radialGradient id="cmo-glow0" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#39ff7a" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#39ff7a" stopOpacity="0" />
        </radialGradient>
        {/* Hop-1 node glow */}
        <radialGradient id="cmo-glow1" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#28cc5e" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#28cc5e" stopOpacity="0" />
        </radialGradient>
        {/* Hop-2 node glow */}
        <radialGradient id="cmo-glow2" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#1a9e46" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1a9e46" stopOpacity="0" />
        </radialGradient>
        {/* OmniGrid substation warning */}
        <radialGradient id="cmo-substationGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ff5500" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ff5500" stopOpacity="0" />
        </radialGradient>
        {/* Sodium-amber atmosphere */}
        <radialGradient id="cmo-atmo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ffb700" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#ffb700" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* FAR: aerial sky / atmosphere */}
      <g id="sky">
        <rect x="0" y="0" width="960" height="540" fill="url(#cmo-sky)" />
        {/* Sodium-amber atmospheric haze washing from above */}
        <ellipse cx="480" cy="270" rx="600" ry="350" fill="url(#cmo-atmo)" />
      </g>

      {/* MID: adjacent city blocks — dark context around Block 14 */}
      <g id="adjacent-blocks" opacity="0.5">
        {/* North block */}
        <rect
          x="180"
          y="30"
          width="600"
          height="110"
          rx="4"
          fill="#0e0c0a"
          stroke="#2c2c2e"
          strokeWidth="1.5"
        />
        {[210, 260, 330, 400, 470, 540, 620, 680, 730].map((x) => (
          <rect
            key={x}
            x={x}
            y={40}
            width={30 + (x % 40)}
            height={20 + (x % 25)}
            rx="2"
            fill="#141210"
            stroke="#2c2c2e"
            strokeWidth="1"
          />
        ))}
        {/* South block */}
        <rect
          x="180"
          y="420"
          width="600"
          height="110"
          rx="4"
          fill="#0e0c0a"
          stroke="#2c2c2e"
          strokeWidth="1.5"
        />
        {[210, 270, 340, 420, 500, 570, 640, 700, 745].map((x) => (
          <rect
            key={x}
            x={x}
            y={432}
            width={28 + (x % 35)}
            height={18 + (x % 22)}
            rx="2"
            fill="#141210"
            stroke="#2c2c2e"
            strokeWidth="1"
          />
        ))}
        {/* West block */}
        <rect
          x="10"
          y="140"
          width="140"
          height="270"
          rx="4"
          fill="#0e0c0a"
          stroke="#2c2c2e"
          strokeWidth="1.5"
        />
        {[155, 200, 250, 300, 350].map((y) => (
          <rect
            key={y}
            x={20}
            y={y}
            width={20 + (y % 30)}
            height={28}
            rx="2"
            fill="#141210"
            stroke="#2c2c2e"
            strokeWidth="1"
          />
        ))}
        {/* East block */}
        <rect
          x="810"
          y="140"
          width="140"
          height="270"
          rx="4"
          fill="#0e0c0a"
          stroke="#2c2c2e"
          strokeWidth="1.5"
        />
        {[155, 200, 250, 300, 350].map((y) => (
          <rect
            key={y}
            x={820}
            y={y}
            width={20 + (y % 30)}
            height={28}
            rx="2"
            fill="#141210"
            stroke="#2c2c2e"
            strokeWidth="1"
          />
        ))}
      </g>

      {/* NEAR: Block 14 street grid */}
      <g id="street-grid">
        {/* Outer block boundary */}
        <rect
          x="148"
          y="138"
          width="664"
          height="274"
          rx="6"
          fill="#0f0d0b"
          stroke="#2c2c2e"
          strokeWidth="2.5"
        />
        {/* Internal alley lines — smoked-chrome on asphalt */}
        <line
          x1="148"
          y1="270"
          x2="812"
          y2="270"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <line
          x1="370"
          y1="138"
          x2="370"
          y2="412"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <line
          x1="590"
          y1="138"
          x2="590"
          y2="412"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          opacity="0.6"
        />
      </g>

      {/* OmniGrid substation — south end of block */}
      <g id="substation">
        <ellipse
          cx="430"
          cy="386"
          rx="90"
          ry="35"
          fill="url(#cmo-substationGlow)"
        />
        <rect
          x="354"
          y="368"
          width="152"
          height="52"
          rx="4"
          fill="#160a04"
          stroke="#ff5500"
          strokeWidth="2.5"
        />
        {/* Warning stripes */}
        {[0, 16, 32, 48, 64, 80, 96, 112, 128, 144].map((x) => (
          <line
            key={x}
            x1={354 + x}
            y1="368"
            x2={354 + x + 12}
            y2="420"
            stroke="#ff5500"
            strokeWidth="2"
            opacity="0.25"
          />
        ))}
        {/* Interior — dark, no signal */}
        <rect x="362" y="376" width="136" height="36" rx="2" fill="#0a0804" />
        {/* OmniGrid logo suggestion */}
        <circle
          cx="430"
          cy="394"
          r="10"
          fill="none"
          stroke="#ff5500"
          strokeWidth="2"
          opacity="0.6"
        />
        <line
          x1="420"
          y1="394"
          x2="440"
          y2="394"
          stroke="#ff5500"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <line
          x1="430"
          y1="384"
          x2="430"
          y2="404"
          stroke="#ff5500"
          strokeWidth="1.5"
          opacity="0.6"
        />
        {/* OMNIGRID label */}
        <text
          x="430"
          y="432"
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="8"
          fill="#ff5500"
          opacity="0.55"
          letterSpacing="2"
        >
          OMNIGRID
        </text>
        {/* Dead zone radius — faint ring showing signal suppression */}
        <circle
          cx="430"
          cy="394"
          r="75"
          fill="none"
          stroke="#ff5500"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.2"
        />
      </g>

      {/* Building rooftops — Block 14 */}
      <g id="block14-rooftops">
        {BLOCK_BUILDINGS.map((b) => (
          <g key={b.id}>
            {/* Glow aura on reachable buildings */}
            {b.reachable && (
              <ellipse
                cx={b.x + b.w / 2}
                cy={b.y + b.h / 2}
                rx={b.w * 0.75}
                ry={b.h * 0.75}
                fill={`url(#cmo-glow${b.hopDist})`}
              />
            )}
            {/* Rooftop rectangle */}
            <rect
              x={b.x}
              y={b.y}
              width={b.w}
              height={b.h}
              rx="3"
              fill={b.reachable ? "#0d1a10" : "#141210"}
              stroke={b.reachable ? nodeGreen(b.hopDist) : "#2c2c2e"}
              strokeWidth={b.reachable ? 2 : 1.5}
              opacity={b.reachable ? nodeOpacity(b.hopDist) : 1}
            />
            {/* Rooftop details — AC unit blobs, water tank */}
            {b.id === 0 && (
              <>
                {/* Diner rooftop — slightly more detail */}
                <rect
                  x={b.x + 6}
                  y={b.y + 6}
                  width={20}
                  height={12}
                  rx="2"
                  fill="#1a2a1a"
                  stroke={nodeGreen(0)}
                  strokeWidth="1"
                  opacity="0.7"
                />
                <rect
                  x={b.x + b.w - 26}
                  y={b.y + 6}
                  width={20}
                  height={12}
                  rx="2"
                  fill="#1a2a1a"
                  stroke={nodeGreen(0)}
                  strokeWidth="1"
                  opacity="0.7"
                />
              </>
            )}
            {!b.reachable && (
              /* X mark — unreachable */
              <>
                <line
                  x1={b.x + 10}
                  y1={b.y + 10}
                  x2={b.x + b.w - 10}
                  y2={b.y + b.h - 10}
                  stroke="#2c2c2e"
                  strokeWidth="2"
                  opacity="0.5"
                />
                <line
                  x1={b.x + b.w - 10}
                  y1={b.y + 10}
                  x2={b.x + 10}
                  y2={b.y + b.h - 10}
                  stroke="#2c2c2e"
                  strokeWidth="2"
                  opacity="0.5"
                />
              </>
            )}
          </g>
        ))}
      </g>

      {/* BFS propagation rings — sonar bloom */}
      <g id="bfs-bloom">
        {/* Ring 0 — immediate radius from node 0 */}
        <circle
          cx="430"
          cy="240"
          r="55"
          fill="none"
          stroke="#39ff7a"
          strokeWidth="2"
          opacity="0.35"
        />
        {/* Ring 1 — hop 1 reach */}
        <circle
          cx="430"
          cy="240"
          r="130"
          fill="none"
          stroke="#28cc5e"
          strokeWidth="1.5"
          opacity="0.2"
        />
        {/* Ring 2 — hop 2 reach */}
        <circle
          cx="430"
          cy="240"
          r="210"
          fill="none"
          stroke="#1a9e46"
          strokeWidth="1"
          opacity="0.12"
        />
      </g>

      {/* Mesh node antennas on reachable rooftops */}
      <g id="mesh-nodes">
        {ANTENNA_POS.map((a) => {
          const building = BLOCK_BUILDINGS[a.id];
          const hop = building.hopDist;
          const col = nodeGreen(hop);
          const pulseR = 8 + hop * 2;
          return (
            <g key={a.id}>
              {/* Pulse ring */}
              <circle
                cx={a.x}
                cy={a.y}
                r={pulseR + 6}
                fill="none"
                stroke={col}
                strokeWidth="1"
                opacity={0.3 - hop * 0.06}
              />
              {/* Node dot */}
              <circle
                cx={a.x}
                cy={a.y}
                r={a.id === 0 ? 7 : 5}
                fill={col}
                opacity={nodeOpacity(hop)}
              />
              {/* Bright center */}
              <circle
                cx={a.x}
                cy={a.y}
                r={a.id === 0 ? 3.5 : 2.5}
                fill="#f4ede4"
                opacity={0.7 - hop * 0.1}
              />
              {/* Hop distance label */}
              <text
                x={a.x + 9}
                y={a.y - 7}
                fontFamily="monospace"
                fontSize="8"
                fill={col}
                opacity={0.7 - hop * 0.08}
              >
                {hop === 0 ? "src" : `+${hop}`}
              </text>
            </g>
          );
        })}
      </g>

      {/* BFS edge connections — visible signal paths */}
      <g id="bfs-edges" opacity="0.4">
        <line
          x1="430"
          y1="230"
          x2="307"
          y2="196"
          stroke="#39ff7a"
          strokeWidth="1.5"
        />
        <line
          x1="430"
          y1="230"
          x2="543"
          y2="196"
          stroke="#39ff7a"
          strokeWidth="1.5"
        />
        <line
          x1="430"
          y1="230"
          x2="307"
          y2="294"
          stroke="#39ff7a"
          strokeWidth="1.5"
        />
        <line
          x1="430"
          y1="230"
          x2="543"
          y2="294"
          stroke="#39ff7a"
          strokeWidth="1.5"
        />
        <line
          x1="307"
          y1="196"
          x2="212"
          y2="242"
          stroke="#28cc5e"
          strokeWidth="1"
        />
        <line
          x1="543"
          y1="196"
          x2="648"
          y2="242"
          stroke="#28cc5e"
          strokeWidth="1"
        />
      </g>

      {/* Street-level context labels */}
      <g id="labels">
        <text
          x="430"
          y="130"
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="9"
          fill="#2c2c2e"
          opacity="0.5"
          letterSpacing="3"
        >
          BLOCK 14 — N
        </text>
        <text
          x="430"
          y="430"
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="9"
          fill="#2c2c2e"
          opacity="0.4"
          letterSpacing="3"
        >
          S
        </text>
      </g>

      {/* Vignette */}
      <g id="vignette">
        <polygon points="0,0 300,0 0,250" fill="#0a0908" opacity="0.5" />
        <polygon points="960,0 660,0 960,250" fill="#0a0908" opacity="0.5" />
        <polygon points="0,540 0,390 240,540" fill="#0a0908" opacity="0.55" />
        <polygon
          points="960,540 960,390 720,540"
          fill="#0a0908"
          opacity="0.55"
        />
      </g>
    </svg>
  );
}
