// ============================================================================
// Mission 001 viz — Block 14 BFS trace.
// Pure-function buildFrame(step) keeps step-back trivial.
// ============================================================================

import { useMemo } from "react";
import { useVizState } from "../engine/hooks/useVizState";
import VizControls from "./_VizControls";
import { NODE_POSITIONS, VIZ_EDGES, VIZ_N } from "../missions/m001";

type StepType = "init" | "dequeue" | "discover" | "skip" | "done";

interface Frame {
  type: StepType;
  msg: string;
  dist: number[];
  queue: number[];
  current: number;
  discovered: number | null;
  edgeJust: string | null;
  visited: ReadonlySet<number>;
  visitedEdges: ReadonlySet<string>;
}

const ek = (a: number, b: number) => `${Math.min(a, b)}-${Math.max(a, b)}`;

function computeBFSFrames(): Frame[] {
  const n = VIZ_N;
  const adj: number[][] = Array.from({ length: n }, () => []);
  for (const [a, b] of VIZ_EDGES) {
    adj[a].push(b);
    adj[b].push(a);
  }
  const frames: Frame[] = [];
  const dist = new Array<number>(n).fill(-1);
  const visited = new Set<number>();
  const visitedEdges = new Set<string>();

  const start = 0;
  dist[start] = 0;
  visited.add(start);
  const queue: number[] = [start];

  frames.push({
    type: "init",
    msg: `init source=${start}, queue=[${start}], dist[${start}]=0`,
    dist: [...dist],
    queue: [...queue],
    current: start,
    discovered: null,
    edgeJust: null,
    visited: new Set(visited),
    visitedEdges: new Set(visitedEdges),
  });

  while (queue.length > 0) {
    const node = queue.shift()!;
    frames.push({
      type: "dequeue",
      msg: `dequeue ${node} (level ${dist[node]})`,
      dist: [...dist],
      queue: [...queue],
      current: node,
      discovered: null,
      edgeJust: null,
      visited: new Set(visited),
      visitedEdges: new Set(visitedEdges),
    });
    for (const neighbor of adj[node]) {
      const key = ek(node, neighbor);
      visitedEdges.add(key);
      if (dist[neighbor] === -1) {
        dist[neighbor] = dist[node] + 1;
        visited.add(neighbor);
        queue.push(neighbor);
        frames.push({
          type: "discover",
          msg: `discover ${neighbor} via ${node} → dist[${neighbor}]=${dist[neighbor]}`,
          dist: [...dist],
          queue: [...queue],
          current: node,
          discovered: neighbor,
          edgeJust: key,
          visited: new Set(visited),
          visitedEdges: new Set(visitedEdges),
        });
      } else {
        frames.push({
          type: "skip",
          msg: `${neighbor} already in mesh, skip`,
          dist: [...dist],
          queue: [...queue],
          current: node,
          discovered: null,
          edgeJust: key,
          visited: new Set(visited),
          visitedEdges: new Set(visitedEdges),
        });
      }
    }
  }

  frames.push({
    type: "done",
    msg: `mesh routed. dist = [${dist.join(", ")}]`,
    dist: [...dist],
    queue: [],
    current: -1,
    discovered: null,
    edgeJust: null,
    visited: new Set(visited),
    visitedEdges: new Set(visitedEdges),
  });

  return frames;
}

const colorForType = (t: StepType): string => {
  switch (t) {
    case "discover":
      return "var(--open-sign-pink)";
    case "dequeue":
      return "var(--sodium-amber)";
    case "done":
      return "var(--gas-station-green)";
    case "skip":
      return "#8a8170";
    default:
      return "var(--halogen-white)";
  }
};

export function MissionM001Viz() {
  const frames = useMemo(() => computeBFSFrames(), []);
  const controls = useVizState({ totalSteps: frames.length });
  const frame = frames[controls.step];

  const colorForNode = (i: number): string => {
    if (i === frame.discovered) return "var(--open-sign-pink)";
    if (i === frame.current) return "var(--sodium-amber)";
    if (frame.visited.has(i)) return "var(--gas-station-green)";
    return "#4a504a";
  };

  return (
    <div
      className="relative"
      style={{ border: "1px solid #4a3e3a", background: "rgba(28,23,22,0.4)" }}
    >
      <div
        className="absolute -top-2 left-4 px-2 text-[10px] tracking-widest font-display"
        style={{ background: "var(--asphalt)", color: "#8a8170" }}
      >
        ▼ MESH · BLOCK 14 · BFS TRACE
      </div>
      <div className="p-3 pt-5">
        <svg
          viewBox="0 0 680 460"
          className="w-full"
          style={{ background: "#060404", border: "1px solid #2c2c2e" }}
          role="img"
          aria-label="Block 14 BFS visualization"
        >
          <defs>
            <filter
              id="m001-node-glow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          {VIZ_EDGES.map(([a, b], i) => {
            const pa = NODE_POSITIONS[a];
            const pb = NODE_POSITIONS[b];
            const key = ek(a, b);
            const traversed = frame.visitedEdges.has(key);
            const justEdge = frame.edgeJust === key;
            return (
              <g key={i}>
                {(traversed || justEdge) && (
                  <line
                    x1={pa.x}
                    y1={pa.y}
                    x2={pb.x}
                    y2={pb.y}
                    stroke={
                      justEdge
                        ? "var(--open-sign-pink)"
                        : "var(--gas-station-green)"
                    }
                    strokeWidth="3"
                    opacity="0.4"
                    filter="url(#m001-node-glow)"
                  />
                )}
                <line
                  x1={pa.x}
                  y1={pa.y}
                  x2={pb.x}
                  y2={pb.y}
                  stroke={
                    justEdge
                      ? "var(--open-sign-pink)"
                      : traversed
                        ? "var(--gas-station-green)"
                        : "#4a504a"
                  }
                  strokeWidth={justEdge ? 2 : 1.5}
                  opacity={traversed || justEdge ? 1 : 0.3}
                />
              </g>
            );
          })}

          {NODE_POSITIONS.map((p, i) => {
            const isSource = i === 0;
            const inMesh = frame.visited.has(i);
            const isCurrent = i === frame.current;
            const isDiscovered = i === frame.discovered;
            const stroke = colorForNode(i);
            const r = isSource ? 28 : 22;
            return (
              <g key={i}>
                {(inMesh || isCurrent || isDiscovered) && (
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={r + 8}
                    fill={stroke}
                    opacity="0.18"
                    filter="url(#m001-node-glow)"
                  />
                )}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={r}
                  fill="#0a0908"
                  stroke={stroke}
                  strokeWidth={isCurrent ? 3 : 2}
                />
                <text
                  x={p.x}
                  y={p.y - 4}
                  textAnchor="middle"
                  fontFamily="Bungee Inline"
                  fontSize="9"
                  fill={
                    isSource
                      ? "var(--open-sign-pink)"
                      : inMesh
                        ? "var(--halogen-white)"
                        : "#8a8170"
                  }
                >
                  {p.label}
                </text>
                <text
                  x={p.x}
                  y={p.y + 9}
                  textAnchor="middle"
                  fontFamily="JetBrains Mono"
                  fontSize="11"
                  fontWeight="700"
                  fill={inMesh ? "var(--gas-station-green)" : "#8a8170"}
                >
                  {frame.dist[i] === -1 ? "—" : frame.dist[i]}
                </text>
              </g>
            );
          })}

          <g
            transform="translate(20, 420)"
            fontFamily="JetBrains Mono"
            fontSize="9"
          >
            <circle
              cx="6"
              cy="0"
              r="5"
              fill="#0a0908"
              stroke="#4a504a"
              strokeWidth="1.5"
            />
            <text x="16" y="3" fill="#8a8170">
              unreached
            </text>
            <circle
              cx="106"
              cy="0"
              r="5"
              fill="#0a0908"
              stroke="var(--gas-station-green)"
              strokeWidth="1.5"
            />
            <text x="116" y="3" fill="#8a8170">
              in mesh
            </text>
            <circle
              cx="186"
              cy="0"
              r="5"
              fill="#0a0908"
              stroke="var(--sodium-amber)"
              strokeWidth="2.5"
            />
            <text x="196" y="3" fill="#8a8170">
              processing
            </text>
            <circle
              cx="286"
              cy="0"
              r="5"
              fill="#0a0908"
              stroke="var(--open-sign-pink)"
              strokeWidth="2"
            />
            <text x="296" y="3" fill="#8a8170">
              just discovered
            </text>
          </g>
        </svg>

        {/* aria-live announces every step */}
        <div aria-live="polite" className="sr-only">
          {`Step ${controls.step + 1} of ${frames.length}: ${frame.msg}`}
        </div>

        {/* Status line */}
        <div
          className="mt-3 px-3 py-2"
          style={{ border: "1px solid #4a3e3a", background: "#14100f" }}
        >
          <div
            className="text-[9px] tracking-widest font-terminal mb-1"
            style={{ color: "#8a8170" }}
          >
            STATE [{controls.step}/{frames.length - 1}]
          </div>
          <div
            className="text-[13px] font-terminal"
            style={{ color: colorForType(frame.type) }}
          >
            {frame.msg}
          </div>
        </div>

        {/* Queue + dist arrays */}
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div
            className="p-3"
            style={{ border: "1px solid #4a3e3a", background: "#14100f" }}
          >
            <div
              className="text-[9px] tracking-widest font-terminal mb-2"
              style={{ color: "#8a8170" }}
            >
              QUEUE (FIFO)
            </div>
            <div className="flex flex-wrap gap-1">
              {frame.queue.length === 0 && (
                <div
                  className="text-[11px] italic"
                  style={{ color: "#8a8170" }}
                >
                  empty
                </div>
              )}
              {frame.queue.map((q, i) => (
                <div
                  key={i}
                  className="text-xs px-2 py-1 font-terminal"
                  style={{
                    border: "1px solid rgba(255,183,0,0.4)",
                    color: "var(--sodium-amber)",
                    background: "rgba(255,183,0,0.06)",
                  }}
                >
                  {q}
                </div>
              ))}
            </div>
          </div>
          <div
            className="p-3"
            style={{ border: "1px solid #4a3e3a", background: "#14100f" }}
          >
            <div
              className="text-[9px] tracking-widest font-terminal mb-2"
              style={{ color: "#8a8170" }}
            >
              DIST ARRAY
            </div>
            <div className="flex flex-wrap gap-1">
              {frame.dist.map((d, i) => (
                <div
                  key={i}
                  className="text-xs px-2 py-1 font-terminal"
                  style={{
                    border:
                      d === -1
                        ? "1px solid #2c2c2e"
                        : "1px solid rgba(57,255,122,0.4)",
                    color: d === -1 ? "#8a8170" : "var(--gas-station-green)",
                    background:
                      d === -1 ? "transparent" : "rgba(57,255,122,0.05)",
                  }}
                >
                  [{i}]={d === -1 ? "—" : d}
                </div>
              ))}
            </div>
          </div>
        </div>

        <VizControls controls={controls} stepLabel={frame.msg} />
      </div>
    </div>
  );
}

export default MissionM001Viz;
