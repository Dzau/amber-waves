import { useState, useMemo, useEffect, useRef, useCallback } from 'react';

// ============================================================================
// CYBERPUNK: AMBER WAVES — Act 1: Boot Sequence
// ============================================================================
// Cinematic prototype. Visual novel scenes + algorithm mission + debrief.
//
// Mission algorithm: BFS single-source shortest path on undirected graph.
// LeetCode-style equivalents: #1971 (Find if Path Exists), #841 (Keys and
// Rooms), #994 (Rotting Oranges) — same pattern, different framing.
// Frequency: HIGH at Amazon, Meta, Google, Microsoft, Bloomberg.
// Job relevance: Backend SWE, ML Eng, Data Eng (new grad / mid-level).
// ============================================================================

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

const SOLUTION_CODE = `function solve(n, edges) {
  // Build undirected adjacency list
  const adj = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
  }

  const dist = new Array(n).fill(-1);
  dist[0] = 0;

  // BFS queue starting at source node 0
  const queue = [0];
  while (queue.length > 0) {
    const node = queue.shift();
    for (const next of adj[node]) {
      if (dist[next] === -1) {
        dist[next] = dist[node] + 1;
        queue.push(next);
      }
    }
  }

  return dist;
}`;

// Visualization graph — Block 14
const VIZ_N = 8;
const VIZ_EDGES = [[0,1],[0,2],[1,3],[2,3],[2,4],[3,5],[4,6],[6,7]];
const NODE_POSITIONS = [
  { x: 80,  y: 220, label: 'DINER',  sub: 'src' },
  { x: 200, y: 120, label: 'B-01',   sub: '' },
  { x: 200, y: 320, label: 'B-02',   sub: '' },
  { x: 340, y: 200, label: 'B-03',   sub: '' },
  { x: 340, y: 360, label: 'B-04',   sub: '' },
  { x: 470, y: 240, label: 'B-05',   sub: '' },
  { x: 470, y: 380, label: 'B-06',   sub: '' },
  { x: 590, y: 380, label: 'B-07',   sub: '' },
];

const TEST_CASES = [
  { n: 1, edges: [], expected: [0], label: 'single node' },
  { n: 3, edges: [[0,1],[1,2]], expected: [0,1,2], label: 'chain' },
  { n: 4, edges: [[0,1]], expected: [0,1,-1,-1], label: 'disconnected' },
  { n: 6, edges: [[0,1],[0,2],[0,3],[0,4],[0,5]], expected: [0,1,1,1,1,1], label: 'star' },
  { n: 4, edges: [[0,1],[1,2],[2,3],[3,0]], expected: [0,1,2,1], label: 'cycle' },
  { n: VIZ_N, edges: VIZ_EDGES, expected: [0,1,1,2,2,3,3,4], label: 'block 14' },
];

// ============================================================================
// BFS step trace
// ============================================================================
function computeBFSSteps(n, edges, start = 0) {
  const adj = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) { adj[a].push(b); adj[b].push(a); }

  const steps = [];
  const dist = new Array(n).fill(-1);
  const visited = new Set();
  const visitedEdges = new Set();
  const ek = (a, b) => `${Math.min(a,b)}-${Math.max(a,b)}`;

  dist[start] = 0;
  visited.add(start);
  let queue = [start];

  steps.push({
    type: 'init',
    msg: `init source=${start}, queue=[${start}], dist[${start}]=0`,
    dist: [...dist], queue: [...queue],
    current: start, discovered: null, edgeJust: null,
    visited: new Set(visited), visitedEdges: new Set(visitedEdges),
  });

  while (queue.length > 0) {
    const node = queue.shift();
    steps.push({
      type: 'dequeue',
      msg: `dequeue ${node} (level ${dist[node]})`,
      dist: [...dist], queue: [...queue],
      current: node, discovered: null, edgeJust: null,
      visited: new Set(visited), visitedEdges: new Set(visitedEdges),
    });

    for (const neighbor of adj[node]) {
      const key = ek(node, neighbor);
      visitedEdges.add(key);
      if (dist[neighbor] === -1) {
        dist[neighbor] = dist[node] + 1;
        visited.add(neighbor);
        queue.push(neighbor);
        steps.push({
          type: 'discover',
          msg: `discover ${neighbor} via ${node} → dist[${neighbor}]=${dist[neighbor]}`,
          dist: [...dist], queue: [...queue],
          current: node, discovered: neighbor, edgeJust: key,
          visited: new Set(visited), visitedEdges: new Set(visitedEdges),
        });
      } else {
        steps.push({
          type: 'skip',
          msg: `${neighbor} already in mesh, skip`,
          dist: [...dist], queue: [...queue],
          current: node, discovered: null, edgeJust: key,
          visited: new Set(visited), visitedEdges: new Set(visitedEdges),
        });
      }
    }
  }

  steps.push({
    type: 'done',
    msg: `mesh routed. dist = [${dist.join(', ')}]`,
    dist: [...dist], queue: [],
    current: -1, discovered: null, edgeJust: null,
    visited, visitedEdges,
  });
  return steps;
}

// ============================================================================
// User code execution (sandboxed via Function constructor)
// ============================================================================
function arraysEqual(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;
  return a.every((v, i) => v === b[i]);
}

function runUserSolution(code, testCases) {
  let fn;
  try {
    // eslint-disable-next-line no-new-func
    fn = new Function(`${code}\n; return typeof solve === 'function' ? solve : null;`)();
  } catch (e) {
    return { type: 'compile-error', message: e.message };
  }
  if (!fn) return { type: 'compile-error', message: 'no function named `solve` found' };

  const results = [];
  for (const tc of testCases) {
    try {
      const t0 = performance.now();
      const actual = fn(tc.n, tc.edges);
      const elapsed = performance.now() - t0;
      results.push({ ...tc, actual, passed: arraysEqual(actual, tc.expected), elapsed });
    } catch (e) {
      results.push({ ...tc, actual: null, passed: false, error: e.message });
    }
  }
  return { type: 'result', results, allPassed: results.every(r => r.passed) };
}

// ============================================================================
// Global Styles — Truck-Stop Neon palette
// ============================================================================
function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Bungee+Inline&family=Bungee&family=Special+Elite&family=JetBrains+Mono:wght@400;500;700&display=swap');

      :root {
        --asphalt: #0a0808;
        --asphalt-2: #14100f;
        --tar: #1c1716;
        --bone: #efe6d4;
        --bone-dim: #8a8170;

        --pink: #ff3a8c;
        --pink-bright: #ff66a8;
        --pink-deep: #5a1135;

        --green: #2dd47e;
        --green-deep: #0e3a22;

        --yellow: #ffce42;
        --yellow-deep: #5a4810;

        --magenta: #ff5470;
        --rust: #c4623c;
        --steel: #4a504a;

        --line: #2a2422;
        --line-bright: #4a3e3a;
      }

      html, body, #root {
        background: var(--asphalt);
        color: var(--bone);
        font-family: 'Special Elite', 'JetBrains Mono', monospace;
        margin: 0;
        min-height: 100vh;
      }

      .game-root {
        position: relative;
        min-height: 100vh;
        background:
          radial-gradient(ellipse at 80% 0%, rgba(255,58,140,0.06), transparent 50%),
          radial-gradient(ellipse at 0% 100%, rgba(45,212,126,0.05), transparent 60%),
          radial-gradient(ellipse at 50% 50%, rgba(255,206,66,0.03), transparent 70%),
          var(--asphalt);
        overflow-x: hidden;
      }

      .display { font-family: 'Bungee', sans-serif; letter-spacing: 0.02em; }
      .display-inline { font-family: 'Bungee Inline', sans-serif; }
      .typewriter { font-family: 'Special Elite', monospace; }
      .mono { font-family: 'JetBrains Mono', monospace; }

      /* Scanlines */
      .scanlines::before {
        content: '';
        position: fixed; inset: 0; pointer-events: none; z-index: 200;
        background: repeating-linear-gradient(
          to bottom,
          rgba(0,0,0,0) 0px,
          rgba(0,0,0,0) 2px,
          rgba(0,0,0,0.13) 3px,
          rgba(0,0,0,0) 4px
        );
        mix-blend-mode: multiply;
      }
      .scanlines::after {
        content: '';
        position: fixed; inset: 0; pointer-events: none; z-index: 199;
        background: radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.6) 100%);
      }

      /* CRT flicker */
      @keyframes flicker { 0%,100%{opacity:1} 50%{opacity:0.92} 92%{opacity:0.97} }
      .crt { animation: flicker 7s infinite; }

      /* Neon glow */
      .neon-pink { color: var(--pink); text-shadow: 0 0 4px rgba(255,58,140,0.7), 0 0 16px rgba(255,58,140,0.45), 0 0 32px rgba(255,58,140,0.25); }
      .neon-green { color: var(--green); text-shadow: 0 0 4px rgba(45,212,126,0.7), 0 0 16px rgba(45,212,126,0.4); }
      .neon-yellow { color: var(--yellow); text-shadow: 0 0 4px rgba(255,206,66,0.7), 0 0 18px rgba(255,206,66,0.4); }

      /* Buttons */
      .btn {
        font-family: 'Bungee', sans-serif;
        font-size: 12px;
        letter-spacing: 0.18em;
        padding: 12px 20px;
        border: 2px solid;
        background: transparent;
        cursor: pointer;
        text-transform: uppercase;
        transition: all 0.14s ease;
        position: relative;
      }
      .btn-pink {
        color: var(--pink); border-color: var(--pink-deep);
        background: rgba(255,58,140,0.06);
      }
      .btn-pink:hover {
        background: rgba(255,58,140,0.18);
        box-shadow: 0 0 18px rgba(255,58,140,0.5), inset 0 0 18px rgba(255,58,140,0.12);
        color: var(--pink-bright);
      }
      .btn-green {
        color: var(--green); border-color: var(--green-deep);
        background: rgba(45,212,126,0.04);
      }
      .btn-green:hover {
        background: rgba(45,212,126,0.16);
        box-shadow: 0 0 16px rgba(45,212,126,0.4);
      }
      .btn-yellow {
        color: var(--yellow); border-color: var(--yellow-deep);
        background: rgba(255,206,66,0.04);
      }
      .btn-yellow:hover {
        background: rgba(255,206,66,0.18);
        box-shadow: 0 0 16px rgba(255,206,66,0.45);
      }
      .btn-ghost {
        color: var(--bone-dim); border-color: var(--line-bright);
      }
      .btn-ghost:hover { color: var(--bone); border-color: var(--bone-dim); }
      .btn:disabled { opacity: 0.4; cursor: not-allowed; }

      /* Frames */
      .frame {
        border: 1px solid var(--line-bright);
        background: linear-gradient(180deg, rgba(28,23,22,0.8), rgba(10,8,8,0.9));
        position: relative;
      }
      .frame-title {
        position: absolute; top: -10px; left: 16px;
        background: var(--asphalt); padding: 0 10px;
        font-family: 'Bungee', sans-serif; font-size: 10px;
        letter-spacing: 0.22em; color: var(--bone-dim);
        text-transform: uppercase;
      }

      /* Editor */
      .editor {
        background: #060404; color: var(--green);
        border: none; outline: none; width: 100%;
        font-family: 'JetBrains Mono', monospace;
        font-size: 13px; line-height: 1.6;
        padding: 16px; resize: none; tab-size: 2;
        caret-color: var(--pink);
      }
      .editor::selection { background: rgba(255,58,140,0.3); }

      /* Rain */
      @keyframes rain-drop {
        0% { transform: translateY(-10vh); opacity: 0; }
        10% { opacity: 0.5; }
        100% { transform: translateY(110vh); opacity: 0; }
      }
      .rain-drop {
        position: absolute; top: 0;
        width: 1px; height: 60px;
        background: linear-gradient(to bottom, transparent, rgba(180,220,230,0.5), transparent);
        animation: rain-drop linear infinite;
      }

      /* Blink */
      .blink { animation: blink 1.1s steps(2) infinite; }
      @keyframes blink { 50% { opacity: 0; } }

      /* Fade in */
      @keyframes fade-up { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      .fade-in { animation: fade-up 0.6s ease forwards; }

      /* Glitch */
      @keyframes glitch-x {
        0%,100% { transform: translate(0,0); }
        20% { transform: translate(-1px,0); }
        40% { transform: translate(1px,0); }
        60% { transform: translate(-1px,0); }
        80% { transform: translate(1px,0); }
      }

      /* Title pulse */
      @keyframes pulse-glow {
        0%,100% { text-shadow: 0 0 6px rgba(255,58,140,0.7), 0 0 24px rgba(255,58,140,0.35), 0 0 48px rgba(255,58,140,0.18); }
        50% { text-shadow: 0 0 10px rgba(255,58,140,0.9), 0 0 36px rgba(255,58,140,0.55), 0 0 72px rgba(255,58,140,0.3); }
      }
      .pulse-glow { animation: pulse-glow 3.5s ease-in-out infinite; }

      .text-bone { color: var(--bone); }
      .text-bone-dim { color: var(--bone-dim); }
      .text-pink { color: var(--pink); }
      .text-green { color: var(--green); }
      .text-yellow { color: var(--yellow); }
      .text-magenta { color: var(--magenta); }
      .text-rust { color: var(--rust); }
    `}</style>
  );
}

// ============================================================================
// Atmospheric: rain (CSS particles)
// ============================================================================
function Rain({ count = 80 }) {
  const drops = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 0.8 + Math.random() * 1.4,
      opacity: 0.2 + Math.random() * 0.5,
    }));
  }, [count]);
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {drops.map((d, i) => (
        <div key={i} className="rain-drop" style={{
          left: `${d.left}%`,
          animationDelay: `${d.delay}s`,
          animationDuration: `${d.duration}s`,
          opacity: d.opacity,
        }} />
      ))}
    </div>
  );
}

// ============================================================================
// SVG: Echo Reyes character portrait (cel-shaded)
// ============================================================================
function EchoPortrait({ mood = 'neutral', className = '', width = 320 }) {
  // mood: 'neutral' | 'smile' | 'narrow' | 'surprised'
  const mouth =
    mood === 'smile'
      ? <path d="M 138 246 Q 160 262 182 246" stroke="#3a1820" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    : mood === 'narrow'
      ? <path d="M 142 250 L 178 250" stroke="#3a1820" strokeWidth="2.5" strokeLinecap="round" />
    : mood === 'surprised'
      ? <ellipse cx="160" cy="252" rx="6" ry="9" fill="#3a1820" />
    : <path d="M 144 250 Q 160 256 176 250" stroke="#3a1820" strokeWidth="2.2" fill="none" strokeLinecap="round" />;

  const leftEye = mood === 'narrow'
    ? <path d="M 122 200 Q 135 196 148 200" stroke="#1a0a08" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    : (
        <g>
          <ellipse cx="135" cy="200" rx="13" ry="10" fill="#fff" />
          <circle cx="137" cy="201" r="6.5" fill="#1a1612" />
          <circle cx="139" cy="199" r="2" fill="#fff" />
        </g>
      );

  return (
    <svg viewBox="0 0 320 420" width={width} className={className}
      style={{ filter: 'drop-shadow(0 0 24px rgba(255,58,140,0.18))' }}>
      <defs>
        <radialGradient id="cyber-eye-glow" cx="0.5" cy="0.5" r="0.7">
          <stop offset="0%" stopColor="#ff66a8" stopOpacity="1" />
          <stop offset="50%" stopColor="#ff3a8c" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#5a1135" stopOpacity="1" />
        </radialGradient>
        <filter id="echo-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Background panel for the bust */}
      <rect x="0" y="0" width="320" height="420" fill="transparent" />

      {/* Hood — outer */}
      <path d="M 60 130 Q 30 220 50 360 L 270 360 Q 290 220 260 130 Q 220 70 160 70 Q 100 70 60 130 Z"
            fill="#1a1612" stroke="#0a0808" strokeWidth="2" />
      {/* Hood inner shadow */}
      <path d="M 80 145 Q 60 230 75 350 L 245 350 Q 260 230 240 145 Q 210 100 160 100 Q 110 100 80 145 Z"
            fill="#0e0a0a" />
      {/* Hood pink trim */}
      <path d="M 80 145 Q 110 110 160 105 Q 210 110 240 145" stroke="#ff3a8c" strokeWidth="2" fill="none" opacity="0.55" />

      {/* Neck / shoulders */}
      <rect x="115" y="280" width="90" height="80" fill="#2a221e" />
      <path d="M 115 280 L 115 360 L 205 360 L 205 280 Q 200 290 160 290 Q 120 290 115 280 Z" fill="#1a1310" />

      {/* Face base */}
      <path d="M 105 175 Q 100 235 130 280 Q 160 295 190 280 Q 220 235 215 175 Q 195 145 160 142 Q 125 145 105 175 Z"
            fill="#e8d4b8" />
      {/* Face shadow (right side cel-shade) */}
      <path d="M 160 142 Q 195 145 215 175 Q 220 235 190 280 Q 175 287 175 270 Q 195 230 195 180 Q 185 152 160 148 Z"
            fill="#c9b59a" opacity="0.7" />

      {/* Hair — under hood, swept across forehead */}
      <path d="M 100 165 Q 130 130 160 138 Q 195 134 222 168 Q 215 158 190 155 Q 160 152 130 158 Q 110 162 100 165 Z"
            fill="#0a0606" />
      {/* Pink streak */}
      <path d="M 130 145 Q 145 132 162 138 L 160 158 Q 144 152 132 158 Z" fill="#ff3a8c" />

      {/* Cyber eye (right) — pink hex with glow */}
      <g filter="url(#echo-glow)">
        <polygon points="180,192 200,192 210,205 200,218 180,218 170,205"
                 fill="url(#cyber-eye-glow)" stroke="#ff3a8c" strokeWidth="1.5" />
        <circle cx="190" cy="205" r="3" fill="#fff" opacity="0.9" />
        <line x1="170" y1="205" x2="167" y2="205" stroke="#ff3a8c" strokeWidth="2" />
        <line x1="210" y1="205" x2="213" y2="205" stroke="#ff3a8c" strokeWidth="2" />
      </g>

      {/* Natural eye (left) — varies by mood */}
      {leftEye}
      {/* Eyebrow left */}
      <path d="M 118 184 Q 132 178 152 184" stroke="#0a0606" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Eyebrow right (over cyber eye) */}
      <path d="M 168 178 Q 188 172 208 180" stroke="#0a0606" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Nose */}
      <path d="M 158 218 Q 156 235 152 240 Q 156 244 162 242" stroke="#a89580" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Mouth */}
      {mouth}

      {/* Temple implant — small geometric piece with green LED */}
      <g>
        <rect x="98" y="195" width="14" height="22" fill="#2a2826" stroke="#4a4842" strokeWidth="1" />
        <circle cx="105" cy="200" r="2.5" fill="#2dd47e">
          <animate attributeName="opacity" values="1;0.4;1" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <line x1="98" y1="207" x2="112" y2="207" stroke="#4a4842" strokeWidth="0.5" />
        <line x1="98" y1="212" x2="112" y2="212" stroke="#4a4842" strokeWidth="0.5" />
      </g>

      {/* Cybernetic strand from temple to eye */}
      <path d="M 112 200 Q 140 195 168 200" stroke="#ff3a8c" strokeWidth="0.8" fill="none" opacity="0.5" />

      {/* Lighting accent — pink rim from upper right */}
      <path d="M 160 142 Q 195 145 215 175 Q 218 195 215 210"
            stroke="#ff3a8c" strokeWidth="2.5" fill="none" opacity="0.4" />
      {/* Lighting accent — green rim from lower left */}
      <path d="M 105 175 Q 100 235 130 280"
            stroke="#2dd47e" strokeWidth="2" fill="none" opacity="0.3" />

      {/* Earring — small chrome stud */}
      <circle cx="218" cy="240" r="3" fill="#cccccc" />
    </svg>
  );
}

// ============================================================================
// SVG: Diner background (atmospheric, with neon sign + window + rain)
// ============================================================================
function DinerBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice"
           className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="window-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1816" />
            <stop offset="60%" stopColor="#0e1014" />
            <stop offset="100%" stopColor="#0a0808" />
          </linearGradient>
          <radialGradient id="neon-pink-glow" cx="0.5" cy="0.5" r="0.6">
            <stop offset="0%" stopColor="#ff3a8c" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff3a8c" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="neon-green-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#2dd47e" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2dd47e" stopOpacity="0" />
          </radialGradient>
          <filter id="bg-glow"><feGaussianBlur stdDeviation="2" /></filter>
        </defs>

        {/* Sky / outside */}
        <rect x="0" y="0" width="800" height="500" fill="url(#window-grad)" />

        {/* Far city silhouette */}
        <path d="M 0 280 L 50 280 L 50 240 L 90 240 L 90 220 L 130 220 L 130 260 L 170 260 L 170 200 L 220 200 L 220 230 L 260 230 L 260 270 L 320 270 L 320 210 L 380 210 L 380 250 L 440 250 L 440 220 L 500 220 L 500 240 L 560 240 L 560 200 L 620 200 L 620 260 L 680 260 L 680 230 L 740 230 L 740 270 L 800 270 L 800 320 L 0 320 Z"
              fill="#06080c" />

        {/* Distant building windows (random lit dots) */}
        {Array.from({ length: 60 }).map((_, i) => {
          const x = (i * 137) % 800;
          const y = 220 + ((i * 53) % 80);
          const lit = (i * 7) % 3 === 0;
          return lit ? <rect key={i} x={x} y={y} width="2" height="3" fill="#ffce42" opacity="0.6" /> : null;
        })}

        {/* Neon "OPEN" sign — pink, glowing */}
        <g transform="translate(560, 90)">
          <ellipse cx="60" cy="25" rx="120" ry="60" fill="url(#neon-pink-glow)" />
          <text x="60" y="40" textAnchor="middle" fontFamily="Bungee Inline, sans-serif" fontSize="36"
                fill="#ff3a8c" style={{ filter: 'drop-shadow(0 0 6px #ff3a8c)' }}>OPEN</text>
          <text x="60" y="40" textAnchor="middle" fontFamily="Bungee Inline, sans-serif" fontSize="36"
                fill="#ff66a8">OPEN</text>
        </g>

        {/* Distant gas station sign — yellow */}
        <g transform="translate(80, 140)">
          <ellipse cx="40" cy="20" rx="80" ry="45" fill="url(#neon-green-glow)" opacity="0.4" />
          <rect x="20" y="10" width="40" height="20" fill="#ffce42" opacity="0.7" filter="url(#bg-glow)" />
          <text x="40" y="25" textAnchor="middle" fontFamily="Bungee, sans-serif" fontSize="11" fill="#0a0808">FUEL</text>
        </g>

        {/* Window frame — divides outside from booth */}
        <line x1="0" y1="370" x2="800" y2="370" stroke="#2a2422" strokeWidth="3" />
        <line x1="0" y1="375" x2="800" y2="375" stroke="#0a0808" strokeWidth="1" />

        {/* Booth back (interior, foreground) */}
        <rect x="0" y="375" width="800" height="125" fill="#1a1310" />
        {/* Booth seat */}
        <rect x="0" y="430" width="800" height="70" fill="#3a1820" />
        <rect x="0" y="430" width="800" height="3" fill="#5a2430" />

        {/* Table edge (very foreground) */}
        <rect x="0" y="465" width="800" height="35" fill="#0e0808" />
        <rect x="0" y="465" width="800" height="2" fill="#2a201e" />

        {/* Coffee cup steam (small detail, far right) */}
        <g transform="translate(680, 440)">
          <ellipse cx="0" cy="20" rx="22" ry="8" fill="#1a0e0a" />
          <rect x="-18" y="0" width="36" height="22" rx="2" fill="#d8d2c2" />
          <rect x="-18" y="0" width="36" height="3" fill="#c9b59a" />
          <path d="M -10 -5 Q -8 -15 -12 -22 Q -8 -30 -14 -40" stroke="#aaa" strokeWidth="1.2" fill="none" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.15;0.4" dur="3s" repeatCount="indefinite" />
          </path>
          <path d="M 4 -5 Q 8 -15 4 -22 Q 10 -30 4 -40" stroke="#aaa" strokeWidth="1.2" fill="none" opacity="0.35">
            <animate attributeName="opacity" values="0.35;0.1;0.35" dur="3.5s" repeatCount="indefinite" />
          </path>
        </g>
      </svg>

      <Rain count={50} />
    </div>
  );
}

// ============================================================================
// Persistent overlays
// ============================================================================
function StatusBar({ act, scene, staticLevel }) {
  const [tick, setTick] = useState(0);
  useEffect(() => { const id = setInterval(() => setTick(t => t + 1), 1000); return () => clearInterval(id); }, []);
  const ts = new Date().toISOString().replace('T', ' ').slice(11, 19);
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b text-[10px]"
         style={{ borderColor: 'var(--line)', background: 'rgba(10,8,8,0.85)', backdropFilter: 'blur(2px)' }}>
      <div className="flex items-center gap-4 text-bone-dim mono">
        <span><span className="blink text-pink">●</span> AMBER WAVES RELAY</span>
        <span>{act} :: {scene}</span>
        <span className="text-rust">DSZ-7 // BLOCK 14</span>
      </div>
      <div className="flex items-center gap-4 text-bone-dim mono">
        <span>STATIC <span className={staticLevel > 60 ? 'text-magenta' : staticLevel > 30 ? 'text-yellow' : 'text-green'}>{String(staticLevel).padStart(3, '0')}/100</span></span>
        <span>{ts}</span>
      </div>
    </div>
  );
}

function InfoBadge() {
  // Persistent reminder: this is real LeetCode / interview material
  return (
    <div className="frame mx-6 my-3 px-4 py-3 fade-in"
         style={{ borderColor: 'var(--green-deep)', background: 'rgba(45,212,126,0.04)' }}>
      <div className="flex items-start gap-4 flex-wrap">
        <div>
          <div className="text-[9px] tracking-widest text-bone-dim mono">PROBLEM ORIGIN</div>
          <div className="display text-green text-sm mt-1">LEETCODE-STYLE :: BFS · SHORTEST PATH</div>
        </div>
        <div className="flex-1" />
        <div className="text-[10px] mono text-bone-dim">
          <div>EQUIVALENT TO: <span className="text-bone">LC #1971</span> · <span className="text-bone">#841</span> · <span className="text-bone">#994</span></div>
          <div>DIFFICULTY: <span className="text-yellow">EASY / MEDIUM</span> · BIG-O TARGET: <span className="text-bone">O(V + E)</span></div>
          <div>FREQUENCY: <span className="text-pink">HIGH</span> at Amazon · Meta · Google · Microsoft · Bloomberg</div>
          <div>ROLES: Backend SWE · ML Eng · Data Eng (new grad / mid)</div>
        </div>
      </div>
    </div>
  );
}

function StaticMeter({ level }) {
  const pct = Math.min(100, level);
  const color = level > 60 ? 'var(--magenta)' : level > 30 ? 'var(--yellow)' : 'var(--green)';
  return (
    <div className="frame px-3 py-2" style={{ minWidth: 220 }}>
      <div className="flex items-center justify-between mb-1">
        <div className="text-[9px] tracking-widest text-bone-dim mono">STATIC</div>
        <div className="text-[10px] mono" style={{ color }}>{pct}/100</div>
      </div>
      <div className="h-1.5 w-full overflow-hidden" style={{ background: 'var(--tar)' }}>
        <div style={{ width: `${pct}%`, height: '100%', background: color, transition: 'width 0.4s ease' }} />
      </div>
      <div className="text-[9px] mono mt-1" style={{ color: 'var(--bone-dim)' }}>
        {level < 30 ? 'baseline · stable' : level < 60 ? 'mild signal noise' : 'approaching threshold — see Echo'}
      </div>
    </div>
  );
}

// ============================================================================
// Typewriter dialogue
// ============================================================================
function Typewriter({ text, speed = 22, onDone }) {
  const [i, setI] = useState(0);
  useEffect(() => { setI(0); }, [text]);
  useEffect(() => {
    if (i >= text.length) { onDone?.(); return; }
    const id = setTimeout(() => setI(i + 1), speed);
    return () => clearTimeout(id);
  }, [i, text, speed, onDone]);
  return <span>{text.slice(0, i)}{i < text.length && <span className="blink">▋</span>}</span>;
}

function DialogueLine({ speaker, text, color = 'var(--bone)', onDone, key: k }) {
  return (
    <div className="my-2">
      <div className="display text-[11px] tracking-widest mb-1" style={{ color }}>{speaker}</div>
      <div className="typewriter text-[15px] leading-relaxed text-bone">
        <Typewriter text={text} onDone={onDone} key={k} />
      </div>
    </div>
  );
}

// ============================================================================
// SCENE: Title
// ============================================================================
function TitleScene({ onBegin }) {
  return (
    <div className="relative" style={{ minHeight: '88vh' }}>
      <DinerBackground />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <div className="text-[10px] tracking-[0.4em] text-bone-dim mono mb-4">A CODING RPG · ACT I</div>
        <div className="display-inline text-pink pulse-glow" style={{ fontSize: 'clamp(46px, 9vw, 110px)', lineHeight: 1 }}>
          AMBER<br/>WAVES
        </div>
        <div className="display text-yellow mt-3" style={{ fontSize: 18, letterSpacing: '0.18em' }}>
          ┄ BOOT SEQUENCE ┄
        </div>
        <div className="typewriter text-bone-dim text-sm mt-5 max-w-md">
          DETROIT SALVAGE ZONE · 2046 · 03:14 LOCAL<br/>
          The federal Amber Alert grid carries everything they need you to hear.<br/>
          Tonight, you build the antenna that hijacks it.
        </div>
        <div className="flex gap-3 mt-10">
          <button className="btn btn-pink" onClick={onBegin}>▶ Begin</button>
        </div>
        <div className="text-[10px] mono text-bone-dim mt-12 tracking-widest">
          SCROLL: code mission begins after intro · est. 8–15 min
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// SCENE: Diner intro (visual novel)
// ============================================================================
const DINER_DIALOGUE = [
  { speaker: 'NARRATOR',   color: 'var(--rust)',   text: 'The Coney Island runs on a stolen OmniGrid line. Echo is in the back booth, drinking burnt coffee like a person who has not slept in three days because she has not.' },
  { speaker: 'ECHO REYES', color: 'var(--pink)',   text: 'You\'re Tanaka. The one Mira sent.', mood: 'narrow' },
  { speaker: 'KAI TANAKA', color: 'var(--green)',  text: 'Yeah. She said you needed someone who could ship.' },
  { speaker: 'ECHO REYES', color: 'var(--pink)',   text: 'I need someone who can build a node tonight. Not next week. Tonight. The Block 14 mesh is one antenna away from coverage and our old wirehead got picked up by Verity on Tuesday.', mood: 'neutral' },
  { speaker: 'KAI TANAKA', color: 'var(--green)',  text: 'What\'s the node do.' },
  { speaker: 'ECHO REYES', color: 'var(--pink)',   text: 'Routes a pirate broadcast across the federal Amber Alert band. That\'s the trick — the corps can\'t legally jam Amber Alerts, so we ride the channel. We just need every building on the block to know how many hops it is from this diner. Otherwise the broadcast routes wrong and dies.', mood: 'smile' },
  { speaker: 'ECHO REYES', color: 'var(--pink)',   text: 'BFS. Single source. Should be a warmup for someone with your résumé.', mood: 'narrow' },
  { speaker: 'KAI TANAKA', color: 'var(--green)',  text: 'And the chrome?' },
  { speaker: 'ECHO REYES', color: 'var(--pink)',   text: 'Basic neural processor. You can\'t edit a routing table in your head without one. Wrench is in the back, she\'ll install it. It\'s a small piece. Almost everyone has one.', mood: 'neutral' },
  { speaker: 'ECHO REYES', color: 'var(--pink)',   text: 'Almost.', mood: 'narrow' },
  { speaker: 'NARRATOR',   color: 'var(--rust)',   text: 'She slides a battered tablet across the table. The schematic of Block 14 is already loaded.' },
];

function DinerScene({ onContinue }) {
  const [idx, setIdx] = useState(0);
  const [showSkip, setShowSkip] = useState(false);
  const line = DINER_DIALOGUE[idx];
  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => { setDoneTyping(false); const id = setTimeout(() => setShowSkip(true), 600); return () => clearTimeout(id); }, [idx]);

  const next = () => {
    if (idx < DINER_DIALOGUE.length - 1) { setIdx(idx + 1); }
    else { onContinue(); }
  };

  // Track Echo's mood from the script
  const lastEchoMood = useMemo(() => {
    let mood = 'neutral';
    for (let i = 0; i <= idx; i++) {
      if (DINER_DIALOGUE[i].speaker === 'ECHO REYES' && DINER_DIALOGUE[i].mood) mood = DINER_DIALOGUE[i].mood;
    }
    return mood;
  }, [idx]);

  return (
    <div className="relative" style={{ minHeight: '88vh' }} onClick={() => { if (doneTyping) next(); }}>
      <DinerBackground />

      {/* Portrait (Echo on the right) */}
      <div className="absolute right-6 bottom-32 fade-in" key={`portrait-${lastEchoMood}`} style={{ pointerEvents: 'none' }}>
        <EchoPortrait mood={lastEchoMood} width={320} />
      </div>

      {/* Dialogue panel at bottom */}
      <div className="absolute bottom-8 left-6 right-6 fade-in" style={{ maxWidth: 720 }}>
        <div className="frame px-6 py-5" style={{ background: 'rgba(10,8,8,0.92)', backdropFilter: 'blur(4px)' }}>
          <DialogueLine
            key={idx}
            speaker={line.speaker}
            text={line.text}
            color={line.color}
            onDone={() => setDoneTyping(true)}
          />
          <div className="flex items-center justify-between mt-3">
            <div className="text-[10px] mono text-bone-dim">
              [{idx + 1}/{DINER_DIALOGUE.length}] · click anywhere to continue
            </div>
            <div className="flex gap-2">
              {showSkip && (
                <button className="btn btn-ghost" onClick={(e) => { e.stopPropagation(); onContinue(); }}>
                  skip cutscene
                </button>
              )}
              <button className="btn btn-pink" onClick={(e) => { e.stopPropagation(); next(); }}>
                {idx < DINER_DIALOGUE.length - 1 ? 'next ▸' : 'continue'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// SCENE: Briefing — accept the chrome install
// ============================================================================
function BriefingScene({ onAccept }) {
  return (
    <div className="px-6 py-6 fade-in">
      <div className="display-inline text-pink mb-2" style={{ fontSize: 36 }}>MISSION 001</div>
      <div className="display text-yellow mb-6" style={{ fontSize: 16, letterSpacing: '0.18em' }}>
        ┄ ROUTE THE BLOCK ┄
      </div>

      <InfoBadge />

      <div className="frame mx-6 mt-4 p-5 pt-6">
        <div className="frame-title">▼ MISSION BRIEF · IN-WORLD</div>
        <div className="text-bone leading-relaxed text-[15px] typewriter">
          Echo's diner is your <span className="text-pink">source node (0)</span>. Block 14 has{' '}
          <span className="text-green">{VIZ_N} buildings</span> connected by short-range comm hops.
          For the pirate broadcast to route correctly across the mesh, every building needs to know
          its <span className="text-yellow">minimum hop count</span> from the diner.
        </div>
        <div className="text-bone leading-relaxed text-[15px] mt-3 typewriter">
          Some buildings won't be reachable — corp jammers, structural decay, dead lines. Those get{' '}
          <span className="text-magenta">-1</span>.
        </div>
      </div>

      <div className="frame mx-6 mt-4 p-5 pt-6">
        <div className="frame-title">▼ FORMAL PROBLEM</div>
        <div className="mono text-[13px] text-green leading-relaxed">
{`solve(n: int, edges: [[a, b], ...]) -> int[]

Given n buildings (0-indexed) and a list of undirected
edges between them, return an array dist of length n where
  dist[i] = minimum hop count from node 0 to node i,
  or -1 if node i is unreachable from node 0.

Constraints:
  1 <= n <= 10^4
  0 <= edges.length <= 2*10^4
  edges[i] = [a, b], 0 <= a, b < n, a != b
  graph may be disconnected
  no self-loops, no duplicate edges

Targets:
  time  : O(n + e)
  space : O(n + e)`}
        </div>
      </div>

      <div className="frame mx-6 mt-4 p-5 pt-6" style={{ borderColor: 'var(--yellow-deep)', background: 'rgba(255,206,66,0.04)' }}>
        <div className="frame-title text-yellow">▼ CHROME INSTALL · CONSENT REQUIRED</div>
        <div className="text-bone leading-relaxed text-[14px] typewriter">
          Wrench's neural processor grafts to your cervical spine and lights up the visual cortex.
          You'll be able to compile and step through code without a screen. <br/>
          <br/>
          <span className="text-yellow">STATIC COST:</span> +10 (baseline · low risk).<br/>
          <span className="text-bone-dim">Echo will keep an eye on it. She always does.</span>
        </div>
        <div className="flex gap-3 mt-4">
          <button className="btn btn-yellow" onClick={onAccept}>▶ accept install · begin mission</button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// SCENE: Code (the meat — editor + BFS visualization)
// ============================================================================
function CodeEditor({ code, onChange, onRun, onTestAll, onSolution, busy }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const ta = e.target;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      onChange(code.slice(0, start) + '  ' + code.slice(end));
      requestAnimationFrame(() => { ta.selectionStart = ta.selectionEnd = start + 2; });
    }
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') { e.preventDefault(); onRun(); }
  };
  return (
    <div className="frame">
      <div className="frame-title">▼ /tmp/mesh_route.js</div>
      <div className="flex items-center gap-2 px-3 py-2 border-b" style={{ borderColor: 'var(--line)' }}>
        <span className="text-[10px] tracking-widest text-bone-dim mono">JS · BFS · CTRL+ENTER TO RUN</span>
      </div>
      <textarea className="editor" value={code} onChange={(e) => onChange(e.target.value)}
                onKeyDown={handleKeyDown} spellCheck={false} rows={22} />
      <div className="flex flex-wrap items-center gap-2 px-3 py-3 border-t" style={{ borderColor: 'var(--line)' }}>
        <button className="btn btn-pink" onClick={onRun} disabled={busy}>▶ run on block 14</button>
        <button className="btn btn-yellow" onClick={onTestAll} disabled={busy}>⌘ test all 6</button>
        <div className="flex-1" />
        <button className="btn btn-ghost" onClick={onSolution}>reveal canonical</button>
      </div>
    </div>
  );
}

function GraphVisualizer({ steps, idx, setIdx, playing, setPlaying, speed, setSpeed }) {
  const step = steps[idx];

  useEffect(() => {
    if (!playing) return;
    if (idx >= steps.length - 1) { setPlaying(false); return; }
    const id = setTimeout(() => setIdx(i => Math.min(i + 1, steps.length - 1)), speed);
    return () => clearTimeout(id);
  }, [playing, idx, steps.length, speed, setIdx, setPlaying]);

  const ek = (a, b) => `${Math.min(a,b)}-${Math.max(a,b)}`;
  const colorForNode = (i) => {
    if (i === step.discovered) return 'var(--pink)';
    if (i === step.current) return 'var(--yellow)';
    if (step.visited.has(i)) return 'var(--green)';
    return 'var(--steel)';
  };

  return (
    <div className="frame">
      <div className="frame-title">▼ MESH · BLOCK 14 · BFS TRACE</div>
      <div className="p-3 pt-5">
        <svg viewBox="0 0 680 460" className="w-full" style={{ background: '#060404', border: '1px solid var(--line)' }}>
          <defs>
            <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          {/* Edges */}
          {VIZ_EDGES.map(([a, b], i) => {
            const pa = NODE_POSITIONS[a];
            const pb = NODE_POSITIONS[b];
            const key = ek(a, b);
            const traversed = step.visitedEdges.has(key);
            const justEdge = step.edgeJust === key;
            return (
              <g key={i}>
                {(traversed || justEdge) && (
                  <line x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y}
                        stroke={justEdge ? 'var(--pink)' : 'var(--green)'}
                        strokeWidth="3" opacity="0.4" filter="url(#node-glow)" />
                )}
                <line x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y}
                      stroke={justEdge ? 'var(--pink)' : traversed ? 'var(--green)' : 'var(--steel)'}
                      strokeWidth={justEdge ? 2 : 1.5}
                      opacity={traversed || justEdge ? 1 : 0.3} />
              </g>
            );
          })}

          {/* Nodes */}
          {NODE_POSITIONS.map((p, i) => {
            const isSource = i === 0;
            const inMesh = step.visited.has(i);
            const isCurrent = i === step.current;
            const isDiscovered = i === step.discovered;
            const stroke = colorForNode(i);
            const r = isSource ? 28 : 22;
            return (
              <g key={i}>
                {(inMesh || isCurrent || isDiscovered) && (
                  <circle cx={p.x} cy={p.y} r={r + 8} fill={stroke} opacity="0.18" filter="url(#node-glow)" />
                )}
                <circle cx={p.x} cy={p.y} r={r} fill="#0a0808" stroke={stroke} strokeWidth={isCurrent ? 3 : 2} />
                {isSource && (
                  <text x={p.x} y={p.y - 4} textAnchor="middle" fontFamily="Bungee" fontSize="9"
                        fill="var(--pink)">DINER</text>
                )}
                {!isSource && (
                  <text x={p.x} y={p.y - 4} textAnchor="middle" fontFamily="Bungee" fontSize="9"
                        fill={inMesh ? 'var(--bone)' : 'var(--bone-dim)'}>{p.label}</text>
                )}
                <text x={p.x} y={p.y + 9} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" fontWeight="700"
                      fill={inMesh ? 'var(--green)' : 'var(--bone-dim)'}>
                  {step.dist[i] === -1 ? '—' : step.dist[i]}
                </text>
              </g>
            );
          })}

          {/* Legend */}
          <g transform="translate(20, 420)" fontFamily="JetBrains Mono" fontSize="9">
            <circle cx="6" cy="0" r="5" fill="#0a0808" stroke="var(--steel)" strokeWidth="1.5" />
            <text x="16" y="3" fill="var(--bone-dim)">unreached</text>
            <circle cx="106" cy="0" r="5" fill="#0a0808" stroke="var(--green)" strokeWidth="1.5" />
            <text x="116" y="3" fill="var(--bone-dim)">in mesh</text>
            <circle cx="186" cy="0" r="5" fill="#0a0808" stroke="var(--yellow)" strokeWidth="2.5" />
            <text x="196" y="3" fill="var(--bone-dim)">processing</text>
            <circle cx="286" cy="0" r="5" fill="#0a0808" stroke="var(--pink)" strokeWidth="2" />
            <text x="296" y="3" fill="var(--bone-dim)">just discovered</text>
          </g>
        </svg>

        {/* Status line */}
        <div className="mt-3 px-3 py-2 border" style={{ borderColor: 'var(--line-bright)', background: 'var(--asphalt-2)' }}>
          <div className="text-[9px] tracking-widest text-bone-dim mono mb-1">STATE [{idx}/{steps.length - 1}]</div>
          <div className="text-[13px] mono" style={{
            color: step.type === 'discover' ? 'var(--pink)' :
                   step.type === 'dequeue'  ? 'var(--yellow)' :
                   step.type === 'done'     ? 'var(--green)' :
                   step.type === 'skip'     ? 'var(--bone-dim)' : 'var(--bone)'
          }}>{step.msg}</div>
        </div>

        {/* Queue + dist arrays */}
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="border p-3" style={{ borderColor: 'var(--line-bright)', background: 'var(--asphalt-2)' }}>
            <div className="text-[9px] tracking-widest text-bone-dim mono mb-2">QUEUE (FIFO)</div>
            <div className="flex flex-wrap gap-1">
              {step.queue.length === 0 && <div className="text-bone-dim text-xs italic">empty</div>}
              {step.queue.map((q, i) => (
                <div key={i} className="text-xs px-2 py-1 border mono"
                     style={{ borderColor: 'var(--yellow-deep)', color: 'var(--yellow)', background: 'rgba(255,206,66,0.06)' }}>
                  {q}
                </div>
              ))}
            </div>
          </div>
          <div className="border p-3" style={{ borderColor: 'var(--line-bright)', background: 'var(--asphalt-2)' }}>
            <div className="text-[9px] tracking-widest text-bone-dim mono mb-2">DIST ARRAY</div>
            <div className="flex flex-wrap gap-1">
              {step.dist.map((d, i) => (
                <div key={i} className="text-xs px-2 py-1 border mono" style={{
                  borderColor: d === -1 ? 'var(--line)' : 'var(--green-deep)',
                  color: d === -1 ? 'var(--bone-dim)' : 'var(--green)',
                  background: d === -1 ? 'transparent' : 'rgba(45,212,126,0.05)',
                }}>
                  [{i}]={d === -1 ? '—' : d}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <button className="btn btn-ghost" onClick={() => { setPlaying(false); setIdx(0); }}>« reset</button>
          <button className="btn btn-ghost" onClick={() => { setPlaying(false); setIdx(i => Math.max(0, i - 1)); }}>‹ step</button>
          <button className="btn btn-pink" onClick={() => setPlaying(p => !p)}>{playing ? '∥ pause' : '▶ play'}</button>
          <button className="btn btn-ghost" onClick={() => { setPlaying(false); setIdx(i => Math.min(steps.length - 1, i + 1)); }}>step ›</button>
          <button className="btn btn-ghost" onClick={() => { setPlaying(false); setIdx(steps.length - 1); }}>end »</button>
          <div className="flex-1" />
          <span className="text-[10px] mono text-bone-dim tracking-widest">SPEED</span>
          <input type="range" min="120" max="1500" step="20" value={1700 - speed}
                 onChange={(e) => setSpeed(1700 - +e.target.value)} style={{ accentColor: 'var(--pink)' }} />
        </div>
      </div>
    </div>
  );
}

function OutputPanel({ output }) {
  if (!output) {
    return (
      <div className="frame mx-6 mt-4 p-5 pt-6">
        <div className="frame-title">▼ STDOUT</div>
        <div className="text-bone-dim text-sm italic typewriter">awaiting execution<span className="blink">_</span></div>
      </div>
    );
  }
  if (output.type === 'compile-error') {
    return (
      <div className="frame mx-6 mt-4 p-5 pt-6" style={{ borderColor: 'var(--magenta)' }}>
        <div className="frame-title text-magenta">▼ COMPILE ERROR</div>
        <div className="text-magenta mono text-[13px]">! {output.message}</div>
        <div className="text-bone-dim text-[11px] mono mt-2">echo: try again, choom. it's just a syntax slip.</div>
      </div>
    );
  }
  return (
    <div className="frame mx-6 mt-4 p-5 pt-6">
      <div className="frame-title">▼ TEST RESULTS</div>
      <div className="space-y-1.5">
        {output.results.map((r, i) => (
          <div key={i} className="flex items-start gap-3 mono text-[12px] flex-wrap">
            <span className={r.passed ? 'text-green' : 'text-magenta'} style={{ width: 18 }}>
              {r.passed ? '✓' : '✗'}
            </span>
            <span className="text-bone-dim" style={{ width: 110 }}>{r.label}</span>
            <span className="text-bone" style={{ minWidth: 240 }}>
              n={r.n}, edges={JSON.stringify(r.edges)}
            </span>
            <span style={{ minWidth: 240 }}>
              → <span className={r.passed ? 'text-green' : 'text-magenta'}>
                {r.error ? `RUNTIME: ${r.error}` : JSON.stringify(r.actual)}
              </span>
            </span>
            {!r.passed && !r.error && (
              <span className="text-bone-dim">expected {JSON.stringify(r.expected)}</span>
            )}
            {r.elapsed != null && (
              <span className="text-bone-dim ml-auto">{r.elapsed.toFixed(2)}ms</span>
            )}
          </div>
        ))}
      </div>
      <div className="border-t mt-3 pt-2" style={{ borderColor: 'var(--line)' }}>
        <div className={`mono text-sm ${output.allPassed ? 'text-green' : 'text-yellow'}`}>
          {output.allPassed
            ? '› MESH ROUTED · all 6 cases pass · echo nods'
            : `› ${output.results.filter(r => !r.passed).length}/${output.results.length} failing — echo: ${output.results.filter(r => !r.passed).length === 1 ? 'one case left, you got this' : 'walk through the trace, then try again'}`}
        </div>
      </div>
    </div>
  );
}

function CodeScene({ code, setCode, output, setOutput, staticLevel, onComplete }) {
  const steps = useMemo(() => computeBFSSteps(VIZ_N, VIZ_EDGES), []);
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(800);

  const handleRun = useCallback(() => {
    const block14 = TEST_CASES.find(t => t.label === 'block 14');
    setOutput(runUserSolution(code, [block14]));
  }, [code, setOutput]);

  const handleTestAll = useCallback(() => {
    const r = runUserSolution(code, TEST_CASES);
    setOutput(r);
    if (r.type === 'result' && r.allPassed) {
      setTimeout(() => onComplete(), 800);
    }
  }, [code, setOutput, onComplete]);

  const handleSolution = useCallback(() => setCode(SOLUTION_CODE), [setCode]);

  return (
    <div className="px-2 py-4 fade-in">
      <InfoBadge />

      <div className="px-6 mb-3 flex items-center justify-between flex-wrap gap-3">
        <div className="display text-pink text-lg">MISSION 001 :: ROUTE THE BLOCK</div>
        <StaticMeter level={staticLevel} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-6">
        <CodeEditor code={code} onChange={setCode} onRun={handleRun}
                    onTestAll={handleTestAll} onSolution={handleSolution} />
        <GraphVisualizer steps={steps} idx={idx} setIdx={setIdx}
                         playing={playing} setPlaying={setPlaying}
                         speed={speed} setSpeed={setSpeed} />
      </div>

      <OutputPanel output={output} />

      {/* Echo's small avatar in the corner of the code scene */}
      <div className="mx-6 mt-4 frame p-3 flex items-center gap-4">
        <div style={{ flexShrink: 0 }}>
          <EchoPortrait mood={output?.allPassed ? 'smile' : output?.type === 'result' ? 'narrow' : 'neutral'} width={80} />
        </div>
        <div className="text-[13px] typewriter text-bone leading-relaxed">
          <div className="display text-pink text-[11px] tracking-widest mb-1">ECHO REYES :: HEADSET</div>
          {output?.allPassed
            ? 'mesh is up. block 14 is ours. nice work, choom.'
            : output?.type === 'compile-error'
            ? 'clean it up. you\'re close.'
            : output?.type === 'result'
            ? 'walk the trace. the failing case usually shows you what you missed — disconnected nodes, the source itself, that kind of thing.'
            : 'when you\'re ready. take your time. step the visualization first if it helps — that\'s what it\'s there for.'}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// SCENE: Mission Complete
// ============================================================================
function CompleteScene({ onReset }) {
  return (
    <div className="relative" style={{ minHeight: '88vh' }}>
      <DinerBackground />

      <div className="absolute right-6 bottom-32" style={{ pointerEvents: 'none' }}>
        <EchoPortrait mood="smile" width={320} />
      </div>

      <div className="absolute bottom-8 left-6 right-6" style={{ maxWidth: 720 }}>
        <div className="frame px-6 py-5" style={{ background: 'rgba(10,8,8,0.92)', backdropFilter: 'blur(4px)' }}>
          <div className="display-inline text-pink mb-3" style={{ fontSize: 36, lineHeight: 1 }}>
            BLOCK 14 LIVE
          </div>
          <div className="text-[10px] mono text-bone-dim tracking-widest mb-4">
            MESH NODES: 8/8 · COVERAGE: 100% · STATIC: BASELINE · NEXT MISSION ARMED
          </div>

          <DialogueLine speaker="ECHO REYES" color="var(--pink)"
            text="That's a node. First of many. Mira's going to be insufferable about being right." />
          <DialogueLine speaker="ECHO REYES" color="var(--pink)"
            text="We need eight more like this before the broadcast can carry. The next one is in Hamtramck — Block 19. Different graph, more nodes, weighted edges this time. Dijkstra. You'll need it." />
          <DialogueLine speaker="ECHO REYES" color="var(--pink)"
            text="Sleep first. Wrench will check your install in the morning. Don't push the static." />
          <DialogueLine speaker="NARRATOR" color="var(--rust)"
            text="She slides another tablet across the table. Block 19 schematic. She holds your gaze for half a second longer than she has to." />

          <div className="border-t mt-4 pt-4 flex items-center justify-between flex-wrap gap-3" style={{ borderColor: 'var(--line)' }}>
            <div className="text-[11px] mono text-bone-dim">
              ACT I COMPLETE · ACT II (DIJKSTRA) NOT YET BUILT
            </div>
            <div className="flex gap-2">
              <button className="btn btn-ghost" onClick={onReset}>↻ replay act i</button>
              <button className="btn btn-pink" disabled>+ accept mission 002</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// App — scene routing
// ============================================================================
export default function App() {
  const [scene, setScene] = useState('title');
  const [code, setCode] = useState(STARTER_CODE);
  const [output, setOutput] = useState(null);
  const [staticLevel, setStaticLevel] = useState(0);

  const sceneLabel = {
    title: 'TITLE',
    diner: 'DINER · INTRO',
    briefing: 'MISSION BRIEF',
    code: 'CODE · ROUTE THE BLOCK',
    complete: 'MISSION COMPLETE',
  }[scene];

  const goCode = useCallback(() => {
    setStaticLevel(s => Math.min(100, s + 10));
    setScene('code');
  }, []);

  const reset = useCallback(() => {
    setScene('title');
    setCode(STARTER_CODE);
    setOutput(null);
    setStaticLevel(0);
  }, []);

  return (
    <div className="game-root scanlines crt">
      <GlobalStyles />
      <StatusBar act="ACT I :: BOOT SEQUENCE" scene={sceneLabel} staticLevel={staticLevel} />

      {scene === 'title'    && <TitleScene onBegin={() => setScene('diner')} />}
      {scene === 'diner'    && <DinerScene onContinue={() => setScene('briefing')} />}
      {scene === 'briefing' && <BriefingScene onAccept={goCode} />}
      {scene === 'code'     && (
        <CodeScene code={code} setCode={setCode}
                   output={output} setOutput={setOutput}
                   staticLevel={staticLevel}
                   onComplete={() => setScene('complete')} />
      )}
      {scene === 'complete' && <CompleteScene onReset={reset} />}

      <footer className="text-center py-6 text-[10px] mono text-bone-dim tracking-widest">
        ▓ AMBER WAVES · A CODING RPG · BUILT FOR DS+CS NEW GRADS · NO GODS NO SHAREHOLDERS · 2046 ▓
      </footer>
    </div>
  );
}
