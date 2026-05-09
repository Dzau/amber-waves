// ============================================================================
// Mission 001 — Route the Block
// LC #1971 (Find if Path Exists in Graph), pattern equivalent to #841, #994.
// BFS · Single-Source Shortest Path on undirected graph.
// ============================================================================

import type { Mission } from "./_mission.types";

// Visualization graph — Block 14 (8 nodes, 8 edges, one disconnected pocket)
export const VIZ_N = 8;
export const VIZ_EDGES: ReadonlyArray<readonly [number, number]> = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [2, 4],
  [3, 5],
  [4, 6],
  [6, 7],
];

export interface NodePosition {
  x: number;
  y: number;
  label: string;
  sub: string;
}

export const NODE_POSITIONS: ReadonlyArray<NodePosition> = [
  { x: 80, y: 220, label: "DINER", sub: "src" },
  { x: 200, y: 120, label: "B-01", sub: "" },
  { x: 200, y: 320, label: "B-02", sub: "" },
  { x: 340, y: 200, label: "B-03", sub: "" },
  { x: 340, y: 360, label: "B-04", sub: "" },
  { x: 470, y: 240, label: "B-05", sub: "" },
  { x: 470, y: 380, label: "B-06", sub: "" },
  { x: 590, y: 380, label: "B-07", sub: "" },
];

const STARTER_CODE = `// AMBER WAVES :: ACT 1 :: BOOT SEQUENCE
// ────────────────────────────────────────
// Build the routing protocol for the mesh.
// Echo's diner is node 0. Given the comm graph
// of Block 14, compute the minimum number of
// relay hops from node 0 to every node.
// Return -1 for unreachable nodes.
//
// Pattern  : BFS · Single-Source Shortest Path
// Big-O    : O(V + E) time, O(V) space
// LeetCode : same pattern as #1971, #841, #994

function solve(n, edges) {
  const dist = new Array(n).fill(-1);

  // your code here

  return dist;
}
`;

const CANONICAL_SOLUTION = `function solve(n, edges) {
  // Build undirected adjacency list — O(V + E)
  const adj = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
  }

  const dist = new Array(n).fill(-1);
  dist[0] = 0;

  // BFS — each node enqueued at most once → O(V + E)
  const queue = [0];
  while (queue.length > 0) {
    const node = queue.shift();
    for (const nb of adj[node]) {
      if (dist[nb] === -1) {
        dist[nb] = dist[node] + 1;
        queue.push(nb);
      }
    }
  }

  return dist;
}`;

// Type aliases for this mission's solve signature
export type M001Input = readonly [
  n: number,
  edges: ReadonlyArray<readonly [number, number]>,
];
export type M001Output = ReadonlyArray<number>;

export const m001: Mission<M001Input, M001Output> = {
  id: "m001",
  act: 1,
  title: "Route the Block",
  leetcodeMeta: {
    lcNumber: 1971,
    lcTitle: "Find if Path Exists in Graph",
    difficulty: "Easy",
    companies: ["Amazon", "Meta", "Google", "Microsoft", "Bloomberg"],
    roles: ["Backend SWE", "ML Eng", "Data Eng"],
    topicTags: ["Graph", "BFS", "Shortest Path", "Adjacency List"],
    equivalentLcNumbers: [841, 994],
  },
  problemStatement: `Echo's diner is your **source node (0)**. Block 14 has **${VIZ_N} buildings** connected by short-range comm hops. For the pirate broadcast to route correctly across the mesh, every building needs to know its **minimum hop count** from the diner.

Some buildings won't be reachable — corp jammers, structural decay, dead lines. Those get **\`-1\`**.`,
  realProblemStatement: `Given an integer \`n\` and a list of undirected \`edges\` between nodes [0..n-1], return an integer array \`dist\` of length \`n\` where \`dist[i]\` is the minimum number of edges from node \`0\` to node \`i\`, or \`-1\` if no path exists.

Constraints:
- 1 ≤ n ≤ 10^4
- 0 ≤ edges.length ≤ 2·10^4
- edges[i] = [a, b], 0 ≤ a, b < n, a !== b
- graph may be disconnected; no self-loops or duplicate edges.

Targets: O(n + e) time, O(n + e) space.`,
  signature: "function solve(n: number, edges: [number, number][]): number[]",
  starterCode: STARTER_CODE,
  canonicalSolution: CANONICAL_SOLUTION,
  complexity: { time: "O(V + E)", space: "O(V + E)" },
  testCases: [
    {
      name: "single node",
      input: [1, []],
      expected: [0],
      description: "trivial — source is the only node",
    },
    {
      name: "chain",
      input: [
        3,
        [
          [0, 1],
          [1, 2],
        ],
      ],
      expected: [0, 1, 2],
      description: "linear chain from source",
    },
    {
      name: "disconnected",
      input: [4, [[0, 1]]],
      expected: [0, 1, -1, -1],
      description: "unreachable nodes return -1 (wrong-intuition bait)",
    },
    {
      name: "star",
      input: [
        6,
        [
          [0, 1],
          [0, 2],
          [0, 3],
          [0, 4],
          [0, 5],
        ],
      ],
      expected: [0, 1, 1, 1, 1, 1],
      description: "all neighbors are level 1",
    },
    {
      name: "cycle",
      input: [
        4,
        [
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 0],
        ],
      ],
      expected: [0, 1, 2, 1],
      description: "BFS picks the shorter side of the cycle",
    },
    {
      name: "block 14",
      input: [VIZ_N, VIZ_EDGES],
      expected: [0, 1, 1, 2, 2, 3, 3, 4],
      description: "the visualized graph",
    },
  ],
  hints: [
    "the queue is FIFO. you only set dist[neighbor] the first time you see it.",
    "build the adjacency list once before you start. then it's just `while (queue.length): pop, scan, enqueue unvisited`.",
    "BFS — single-source shortest path on an unweighted graph. dist[node] = dist[parent] + 1 the moment you discover it.",
  ],
  staticCost: 10,
};
