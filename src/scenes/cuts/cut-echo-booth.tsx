// cut-echo-booth.tsx
// Interior close-medium shot — Echo in the back booth, looking directly at the viewer.
// Three-quarter medium shot across the booth table. Eye level.
// Neural implant at left temple pulses motel-pool-cyan. Surveillance screens behind her.

import type { CSSProperties } from "react";

type Props = { className?: string; style?: CSSProperties };

export function CutEchoBooth({ className, style }: Props) {
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
        {/* Deep diner interior background */}
        <linearGradient id="ceb-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0908" />
          <stop offset="100%" stopColor="#110c0a" />
        </linearGradient>

        {/* Overhead fluorescent — halogen-white, barely holding on */}
        <linearGradient id="ceb-light-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4ede4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#f4ede4" stopOpacity="0" />
        </linearGradient>

        {/* Sodium amber rim light from diner neon — catches cheekbone */}
        <radialGradient id="ceb-rim-amber" cx="0.85" cy="0.35" r="0.4">
          <stop offset="0%" stopColor="#ffb700" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ffb700" stopOpacity="0" />
        </radialGradient>

        {/* Motel-pool-cyan implant glow — subtle */}
        <radialGradient id="ceb-implant-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#4ad7d1" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#4ad7d1" stopOpacity="0" />
        </radialGradient>

        {/* Surveillance screen glow */}
        <radialGradient id="ceb-screen-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#f4ede4" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#f4ede4" stopOpacity="0" />
        </radialGradient>

        {/* Skin warm tone gradient */}
        <linearGradient id="ceb-skin" x1="0.3" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#c97a52" />
          <stop offset="60%" stopColor="#a85e3a" />
          <stop offset="100%" stopColor="#7a3e22" />
        </linearGradient>

        {/* Skin shadow */}
        <linearGradient id="ceb-skin-shadow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5c2c18" />
          <stop offset="100%" stopColor="#7a3e22" />
        </linearGradient>
      </defs>

      {/* ── Background: diner wall, deep shadow ──────────────────── */}
      <g id="background">
        <rect x="0" y="0" width="960" height="540" fill="url(#ceb-bg)" />
        {/* Wall paneling — smoked chrome strips */}
        <rect x="0" y="0" width="960" height="540" fill="#0e0c0a" />
        {/* Horizontal wainscot lines */}
        <line
          x1="0"
          y1="310"
          x2="960"
          y2="310"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        <line
          x1="0"
          y1="320"
          x2="960"
          y2="320"
          stroke="#1a1816"
          strokeWidth="1"
        />
        {/* Vertical wall strips */}
        <line
          x1="200"
          y1="0"
          x2="200"
          y2="310"
          stroke="#1a1816"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="500"
          y1="0"
          x2="500"
          y2="310"
          stroke="#1a1816"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="760"
          y1="0"
          x2="760"
          y2="310"
          stroke="#1a1816"
          strokeWidth="1"
          opacity="0.5"
        />
        {/* Overhead light wash */}
        <rect x="0" y="0" width="960" height="220" fill="url(#ceb-light-top)" />
        {/* Amber rim spill on right wall */}
        <rect x="0" y="0" width="960" height="540" fill="url(#ceb-rim-amber)" />
      </g>

      {/* ── Surveillance monitors — upper right wall ─────────────── */}
      <g id="surveillance-screens">
        {/* Monitor 1 */}
        <g transform="translate(630, 40)">
          <rect
            x="0"
            y="0"
            width="100"
            height="76"
            rx="3"
            fill="#1a1816"
            stroke="#2c2c2e"
            strokeWidth="3"
          />
          {/* Screen face — grainy parking lot feed */}
          <rect x="4" y="4" width="92" height="68" fill="#0d1210" />
          {/* Grainy scan lines */}
          {[0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60].map(
            (y) => (
              <line
                key={y}
                x1="4"
                y1={4 + y}
                x2="96"
                y2={4 + y}
                stroke="#f4ede4"
                strokeWidth="0.5"
                opacity="0.04"
              />
            ),
          )}
          {/* Parking lot shapes — concrete lines */}
          <line
            x1="4"
            y1="40"
            x2="96"
            y2="42"
            stroke="#2c2c2e"
            strokeWidth="1"
            opacity="0.6"
          />
          <line
            x1="30"
            y1="4"
            x2="32"
            y2="72"
            stroke="#2c2c2e"
            strokeWidth="0.8"
            opacity="0.4"
          />
          <line
            x1="60"
            y1="4"
            x2="62"
            y2="72"
            stroke="#2c2c2e"
            strokeWidth="0.8"
            opacity="0.4"
          />
          {/* A parked vehicle blob */}
          <rect
            x="8"
            y="20"
            width="20"
            height="14"
            rx="2"
            fill="#2c2c2e"
            opacity="0.7"
          />
          {/* Timestamp */}
          <rect
            x="5"
            y="62"
            width="50"
            height="8"
            fill="#0a0908"
            opacity="0.7"
          />
          <line
            x1="7"
            y1="66"
            x2="40"
            y2="66"
            stroke="#39ff7a"
            strokeWidth="1"
            opacity="0.5"
          />
          {/* Mount bracket */}
          <rect x="45" y="-8" width="10" height="12" fill="#2c2c2e" />
          {/* Glow behind screen */}
          <ellipse
            cx="50"
            cy="38"
            rx="55"
            ry="40"
            fill="url(#ceb-screen-glow)"
          />
        </g>

        {/* Monitor 2 */}
        <g transform="translate(750, 40)">
          <rect
            x="0"
            y="0"
            width="100"
            height="76"
            rx="3"
            fill="#1a1816"
            stroke="#2c2c2e"
            strokeWidth="3"
          />
          <rect x="4" y="4" width="92" height="68" fill="#0d1210" />
          {/* Scan lines */}
          {[0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60].map(
            (y) => (
              <line
                key={y}
                x1="4"
                y1={4 + y}
                x2="96"
                y2={4 + y}
                stroke="#f4ede4"
                strokeWidth="0.5"
                opacity="0.04"
              />
            ),
          )}
          {/* Different angle — overhead feed */}
          <line
            x1="4"
            y1="36"
            x2="96"
            y2="36"
            stroke="#2c2c2e"
            strokeWidth="1"
            opacity="0.5"
          />
          <rect
            x="40"
            y="10"
            width="30"
            height="20"
            rx="2"
            fill="#2c2c2e"
            opacity="0.5"
          />
          <rect
            x="55"
            y="8"
            width="18"
            height="12"
            rx="1"
            fill="#1a1816"
            opacity="0.8"
          />
          <rect
            x="5"
            y="62"
            width="50"
            height="8"
            fill="#0a0908"
            opacity="0.7"
          />
          <line
            x1="7"
            y1="66"
            x2="40"
            y2="66"
            stroke="#39ff7a"
            strokeWidth="1"
            opacity="0.5"
          />
          <rect x="45" y="-8" width="10" height="12" fill="#2c2c2e" />
          <ellipse
            cx="50"
            cy="38"
            rx="55"
            ry="40"
            fill="url(#ceb-screen-glow)"
          />
        </g>

        {/* Monitor 3 — static / dead signal */}
        <g transform="translate(870, 40)">
          <rect
            x="0"
            y="0"
            width="80"
            height="60"
            rx="3"
            fill="#1a1816"
            stroke="#2c2c2e"
            strokeWidth="3"
          />
          <rect x="4" y="4" width="72" height="52" fill="#0e0e0e" />
          {/* Static noise — irregular fill blocks */}
          {[
            [5, 5, 10, 3],
            [18, 5, 8, 3],
            [30, 5, 14, 3],
            [48, 5, 10, 3],
            [5, 10, 6, 3],
            [14, 10, 12, 3],
            [30, 10, 8, 3],
            [42, 10, 14, 3],
            [5, 15, 14, 3],
            [22, 15, 6, 3],
            [32, 15, 10, 3],
            [46, 15, 10, 3],
            [5, 20, 8, 3],
            [16, 20, 14, 3],
            [34, 20, 8, 3],
            [46, 20, 10, 3],
            [5, 25, 12, 3],
            [20, 25, 8, 3],
            [32, 25, 14, 3],
            [50, 25, 6, 3],
            [5, 30, 6, 3],
            [14, 30, 10, 3],
            [28, 30, 12, 3],
            [44, 30, 12, 3],
            [5, 35, 10, 3],
            [18, 35, 6, 3],
            [28, 35, 14, 3],
            [46, 35, 10, 3],
            [5, 40, 8, 3],
            [16, 40, 12, 3],
            [32, 40, 6, 3],
            [42, 40, 14, 3],
            [5, 45, 14, 3],
            [22, 45, 8, 3],
            [34, 45, 10, 3],
            [48, 45, 8, 3],
          ].map(([x, y, w, h], i) => (
            <rect
              key={i}
              x={4 + x}
              y={4 + y}
              width={w}
              height={h}
              fill="#f4ede4"
              opacity={0.03 + (i % 5) * 0.02}
            />
          ))}
          <rect x="45" y="-8" width="10" height="12" fill="#2c2c2e" />
        </g>

        {/* Cable drops from monitors */}
        <line
          x1="680"
          y1="116"
          x2="676"
          y2="160"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        <line
          x1="800"
          y1="116"
          x2="796"
          y2="160"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        <line
          x1="910"
          y1="100"
          x2="906"
          y2="140"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
      </g>

      {/* ── Booth back — cracked red vinyl ──────────────────────── */}
      <g id="booth-back">
        <rect
          x="80"
          y="240"
          width="680"
          height="300"
          rx="8"
          fill="#2a0a10"
          stroke="#3a1018"
          strokeWidth="3"
        />
        {/* Vinyl crease lines */}
        <line
          x1="80"
          y1="310"
          x2="760"
          y2="310"
          stroke="#1a0608"
          strokeWidth="2"
          opacity="0.8"
        />
        <line
          x1="80"
          y1="380"
          x2="760"
          y2="380"
          stroke="#1a0608"
          strokeWidth="2"
          opacity="0.6"
        />
        {/* Top rail */}
        <rect x="80" y="240" width="680" height="18" rx="8" fill="#3a1420" />
        <rect
          x="80"
          y="240"
          width="680"
          height="6"
          rx="8"
          fill="#5a2030"
          opacity="0.6"
        />
        {/* Crack detail — vinyl failing */}
        <path
          d="M 220,260 Q 230,280 225,300"
          stroke="#1a0608"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 520,270 Q 515,285 522,305"
          stroke="#1a0608"
          strokeWidth="2"
          fill="none"
        />
        {/* Tape patch */}
        <rect
          x="520"
          y="275"
          width="18"
          height="8"
          fill="#2c2c2e"
          opacity="0.7"
          rx="1"
        />
      </g>

      {/* ── Table surface ────────────────────────────────────────── */}
      <g id="table">
        <rect
          x="0"
          y="450"
          width="960"
          height="90"
          fill="#1a1210"
          stroke="#2c2c2e"
          strokeWidth="3"
        />
        <rect
          x="0"
          y="450"
          width="960"
          height="5"
          fill="#2c2c2e"
          opacity="0.7"
        />
        {/* Coffee ring stains */}
        <ellipse
          cx="200"
          cy="480"
          rx="28"
          ry="8"
          fill="none"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <ellipse
          cx="202"
          cy="482"
          rx="20"
          ry="6"
          fill="none"
          stroke="#1a1210"
          strokeWidth="1"
          opacity="0.4"
        />
        <ellipse
          cx="680"
          cy="470"
          rx="22"
          ry="6"
          fill="none"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          opacity="0.4"
        />
        {/* Ashtray nobody uses */}
        <ellipse
          cx="720"
          cy="460"
          rx="22"
          ry="8"
          fill="#1a1816"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        <ellipse
          cx="720"
          cy="460"
          rx="14"
          ry="5"
          fill="#141010"
          stroke="#2c2c2e"
          strokeWidth="1"
        />
        {/* Notches in ashtray */}
        <line
          x1="706"
          y1="455"
          x2="706"
          y2="465"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        <line
          x1="734"
          y1="455"
          x2="734"
          y2="465"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
      </g>

      {/* ── Coffee mug ───────────────────────────────────────────── */}
      <g id="mug" transform="translate(390, 420)">
        {/* Mug body — diner thick white ceramic */}
        <rect
          x="0"
          y="0"
          width="52"
          height="58"
          rx="4"
          fill="#d8d4cc"
          stroke="#2c2c2e"
          strokeWidth="3"
        />
        {/* Mug interior top */}
        <ellipse
          cx="26"
          cy="4"
          rx="22"
          ry="6"
          fill="#b8b2a8"
          stroke="#2c2c2e"
          strokeWidth="2"
        />
        {/* Coffee surface */}
        <ellipse cx="26" cy="4" rx="18" ry="4" fill="#3a1e0c" />
        {/* Handle */}
        <path
          d="M 52,15 Q 72,15 72,35 Q 72,50 52,50"
          stroke="#2c2c2e"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M 52,18 Q 66,18 66,35 Q 66,47 52,47"
          stroke="#d8d4cc"
          strokeWidth="2"
          fill="none"
        />
        {/* Highlight on ceramic */}
        <line
          x1="8"
          y1="8"
          x2="8"
          y2="50"
          stroke="#f4ede4"
          strokeWidth="2"
          opacity="0.4"
        />
        {/* Halogen bounce on mug base */}
        <rect
          x="2"
          y="52"
          width="48"
          height="4"
          rx="2"
          fill="#f4ede4"
          opacity="0.1"
        />
      </g>

      {/* ── Echo figure — three-quarter medium shot ──────────────── */}
      <g id="echo">
        {/* ── Shoulders / clothing ── */}
        {/* Jacket — dark, slightly textured */}
        <path
          d="M 220,430 L 180,380 L 160,310 L 200,270 L 280,255 L 360,260 L 440,260
             L 520,255 L 600,270 L 640,310 L 620,380 L 580,430 Z"
          fill="#141010"
          stroke="#2c2c2e"
          strokeWidth="3"
        />
        {/* Jacket collar */}
        <path
          d="M 300,255 L 340,230 L 380,255 L 420,230 L 460,255"
          fill="#1a1210"
          stroke="#2c2c2e"
          strokeWidth="2.5"
        />
        {/* Jacket highlight — left shoulder rim */}
        <path
          d="M 200,270 L 180,310 L 165,340"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        {/* Jacket seams */}
        <line
          x1="380"
          y1="255"
          x2="385"
          y2="430"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          opacity="0.5"
        />
        {/* Amber rim catch on right shoulder */}
        <path
          d="M 580,265 Q 625,300 635,350"
          stroke="#ffb700"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />

        {/* ── Neck ── */}
        <rect
          x="355"
          y="210"
          width="90"
          height="60"
          rx="8"
          fill="#a85e3a"
          stroke="#2c2c2e"
          strokeWidth="2.5"
        />
        {/* Neck shadow side */}
        <rect
          x="355"
          y="210"
          width="32"
          height="60"
          rx="8"
          fill="#7a3e22"
          opacity="0.7"
        />

        {/* ── Head / face ── */}
        {/* Head shape */}
        <ellipse
          cx="400"
          cy="175"
          rx="95"
          ry="105"
          fill="#a85e3a"
          stroke="#2c2c2e"
          strokeWidth="3"
        />
        {/* Jaw line refinement */}
        <path
          d="M 320,195 Q 310,230 350,255 L 400,265 L 450,255 Q 490,230 480,195"
          fill="#a85e3a"
          stroke="#2c2c2e"
          strokeWidth="2.5"
        />

        {/* Face shadow — left side, in booth shadow */}
        <path
          d="M 310,130 Q 295,165 300,210 Q 308,240 330,258 L 355,265 L 355,155 Z"
          fill="#7a3e22"
          opacity="0.8"
        />
        {/* Under-chin shadow */}
        <path
          d="M 350,258 Q 400,275 450,258 Q 430,270 400,272 Q 370,270 350,258 Z"
          fill="#5c2c18"
          opacity="0.6"
        />

        {/* Forehead highlight — halogen from above */}
        <ellipse
          cx="400"
          cy="130"
          rx="55"
          ry="22"
          fill="#c97a52"
          opacity="0.5"
        />

        {/* ── Amber rim light on right cheekbone ── */}
        <ellipse
          cx="468"
          cy="170"
          rx="30"
          ry="20"
          fill="#ffb700"
          opacity="0.22"
        />
        <path
          d="M 462,150 Q 490,165 485,190"
          stroke="#ffb700"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />

        {/* ── Hair ── */}
        {/* Dark, pulled back with loose strands */}
        <path
          d="M 310,130 Q 295,80 330,60 Q 370,40 400,45 Q 440,40 470,55
                 Q 510,75 495,130 Q 480,90 460,80 Q 430,70 400,72
                 Q 368,70 340,82 Q 320,95 318,130 Z"
          fill="#1a1210"
          stroke="#2c2c2e"
          strokeWidth="2.5"
        />
        {/* Hair continuation down sides */}
        <path
          d="M 310,130 Q 298,165 305,195"
          stroke="#1a1210"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 495,130 Q 504,160 500,195"
          stroke="#1a1210"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        {/* Loose strand across forehead */}
        <path
          d="M 350,80 Q 370,100 360,125"
          stroke="#1a1210"
          strokeWidth="3"
          fill="none"
        />
        {/* Hair highlight */}
        <path
          d="M 340,68 Q 360,58 390,55 Q 420,53 445,60"
          stroke="#2c2c2e"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />

        {/* ── Eyes ── */}
        {/* Right eye — natural */}
        <ellipse
          cx="440"
          cy="165"
          rx="22"
          ry="14"
          fill="#0a0806"
          stroke="#2c2c2e"
          strokeWidth="2.5"
        />
        {/* Right iris */}
        <circle cx="440" cy="165" r="9" fill="#3d2010" />
        <circle cx="440" cy="165" r="5" fill="#1a0e08" />
        {/* Right eye highlight */}
        <circle cx="445" cy="162" r="3" fill="#f4ede4" opacity="0.7" />
        {/* Right eyelid line */}
        <path
          d="M 418,157 Q 440,152 462,158"
          stroke="#2c2c2e"
          strokeWidth="2"
          fill="none"
        />
        {/* Right lower lash */}
        <path
          d="M 420,172 Q 440,178 460,172"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Left eye — Kiroshi cyber-eye (left from Echo's perspective = right of frame) */}
        <ellipse
          cx="358"
          cy="165"
          rx="22"
          ry="14"
          fill="#0a0c0c"
          stroke="#2c2c2e"
          strokeWidth="2.5"
        />
        {/* Cyber iris — flat cyan ring, not glowing aggressively, just present */}
        <circle cx="358" cy="165" r="10" fill="#0d1a1a" />
        <circle
          cx="358"
          cy="165"
          r="10"
          fill="none"
          stroke="#4ad7d1"
          strokeWidth="3"
        />
        {/* Inner pupil */}
        <circle cx="358" cy="165" r="4" fill="#0a0c0c" />
        {/* Micro circuit detail in iris */}
        <line
          x1="350"
          y1="165"
          x2="366"
          y2="165"
          stroke="#4ad7d1"
          strokeWidth="0.8"
          opacity="0.5"
        />
        <line
          x1="358"
          y1="157"
          x2="358"
          y2="173"
          stroke="#4ad7d1"
          strokeWidth="0.8"
          opacity="0.5"
        />
        {/* Left eye highlight */}
        <circle cx="363" cy="162" r="2.5" fill="#4ad7d1" opacity="0.4" />
        {/* Left eyelid line */}
        <path
          d="M 336,157 Q 358,152 380,158"
          stroke="#2c2c2e"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 338,172 Q 358,178 378,172"
          stroke="#2c2c2e"
          strokeWidth="1.5"
          fill="none"
        />

        {/* ── Neural implant at left temple ── */}
        <g transform="translate(296, 158)">
          {/* Glow aura — subtle, motel-pool-cyan */}
          <circle cx="0" cy="0" r="22" fill="url(#ceb-implant-glow)" />
          {/* Disc port */}
          <circle
            cx="0"
            cy="0"
            r="9"
            fill="#1a2a2a"
            stroke="#4ad7d1"
            strokeWidth="2"
          />
          <circle
            cx="0"
            cy="0"
            r="5"
            fill="#0d1a1a"
            stroke="#4ad7d1"
            strokeWidth="1.5"
          />
          {/* Center dot */}
          <circle cx="0" cy="0" r="2" fill="#4ad7d1" />
          {/* Four connector pins */}
          <circle cx="-7" cy="0" r="1.2" fill="#4ad7d1" opacity="0.7" />
          <circle cx="7" cy="0" r="1.2" fill="#4ad7d1" opacity="0.7" />
          <circle cx="0" cy="-7" r="1.2" fill="#4ad7d1" opacity="0.7" />
          <circle cx="0" cy="7" r="1.2" fill="#4ad7d1" opacity="0.7" />
        </g>

        {/* ── Nose ── */}
        <path
          d="M 396,175 Q 392,210 385,220 Q 395,228 405,228 Q 415,228 420,220 Q 410,210 404,175"
          fill="#9a5430"
          stroke="#2c2c2e"
          strokeWidth="1.5"
        />
        {/* Nose shadow under bridge */}
        <path
          d="M 390,220 Q 400,225 410,220"
          stroke="#5c2c18"
          strokeWidth="2"
          fill="none"
          opacity="0.8"
        />

        {/* ── Mouth — direct gaze, set, not smiling ── */}
        <path
          d="M 368,235 Q 380,240 400,240 Q 420,240 432,235"
          stroke="#5c2c18"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        {/* Lower lip */}
        <path
          d="M 375,240 Q 400,250 425,240"
          fill="#8a3e28"
          stroke="#2c2c2e"
          strokeWidth="1.5"
        />
        {/* Upper lip line */}
        <path
          d="M 375,234 Q 390,230 400,232 Q 410,230 425,234"
          stroke="#5c2c18"
          strokeWidth="2"
          fill="none"
        />

        {/* ── Hands wrapped around mug ── */}
        {/* Left hand, partially visible */}
        <path
          d="M 350,455 Q 340,440 345,425 L 390,422 L 395,455 Z"
          fill="#a85e3a"
          stroke="#2c2c2e"
          strokeWidth="2.5"
        />
        {/* Fingers suggestion */}
        <path
          d="M 348,430 Q 342,422 345,415"
          stroke="#2c2c2e"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 358,427 Q 353,418 356,412"
          stroke="#2c2c2e"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 368,425 Q 364,416 367,410"
          stroke="#2c2c2e"
          strokeWidth="2"
          fill="none"
        />
        {/* Shadow on hand */}
        <path
          d="M 350,455 Q 345,440 347,428 L 360,426 L 362,455 Z"
          fill="#7a3e22"
          opacity="0.6"
        />

        {/* Right hand, partially visible behind mug */}
        <path
          d="M 450,455 Q 458,440 454,425 L 410,422 L 408,455 Z"
          fill="#a85e3a"
          stroke="#2c2c2e"
          strokeWidth="2.5"
        />
        {/* Fingers */}
        <path
          d="M 452,430 Q 458,422 455,415"
          stroke="#2c2c2e"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 443,427 Q 448,418 445,412"
          stroke="#2c2c2e"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 434,425 Q 438,416 436,410"
          stroke="#2c2c2e"
          strokeWidth="2"
          fill="none"
        />
      </g>

      {/* ── Fluorescent light fixture — barely holding on ────────── */}
      <g id="light-fixture" transform="translate(330, 0)">
        <rect
          x="0"
          y="0"
          width="140"
          height="12"
          rx="2"
          fill="#2c2c2e"
          stroke="#1a1816"
          strokeWidth="2"
        />
        <rect
          x="4"
          y="3"
          width="132"
          height="6"
          fill="#f4ede4"
          opacity="0.15"
        />
        {/* Light tube — one end dimmer */}
        <rect
          x="6"
          y="4"
          width="80"
          height="4"
          fill="#f4ede4"
          opacity="0.25"
          rx="2"
        />
        <rect
          x="90"
          y="4"
          width="44"
          height="4"
          fill="#ffb700"
          opacity="0.15"
          rx="2"
        />
        {/* Mount screws */}
        <circle
          cx="10"
          cy="6"
          r="3"
          fill="#1a1816"
          stroke="#2c2c2e"
          strokeWidth="1"
        />
        <circle
          cx="130"
          cy="6"
          r="3"
          fill="#1a1816"
          stroke="#2c2c2e"
          strokeWidth="1"
        />
        {/* Light wash downward */}
        <polygon
          points="0,12 140,12 180,120 -40,120"
          fill="#f4ede4"
          opacity="0.04"
        />
      </g>

      {/* ── Vignette ─────────────────────────────────────────────── */}
      <g id="vignette">
        <polygon points="0,0 300,0 0,300" fill="#0a0908" opacity="0.5" />
        <polygon points="960,0 660,0 960,300" fill="#0a0908" opacity="0.5" />
        <polygon points="0,540 0,380 200,540" fill="#0a0908" opacity="0.6" />
        <polygon
          points="960,540 960,380 760,540"
          fill="#0a0908"
          opacity="0.6"
        />
        {/* Bottom strip — table rises from dark */}
        <rect
          x="0"
          y="480"
          width="960"
          height="60"
          fill="#0a0908"
          opacity="0.4"
        />
      </g>
    </svg>
  );
}
