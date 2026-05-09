// ============================================================================
// Kai Tanaka — player-character full-body SVG portrait.
// viewBox 0 0 320 570. Short tousled hair, courier windbreaker, amber earpiece.
// No cyber implant — they're fresh to the scene.
// Color accents: --sodium-amber (amber), --gas-station-green (earpiece).
// ============================================================================

import type { CSSProperties } from "react";

export type KaiMood = "neutral" | "focused" | "surprised";

export interface KaiTanakaProps {
  mood?: KaiMood;
  size?: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
}

export function KaiTanaka({
  mood = "neutral",
  size = 320,
  height,
  className,
  style,
}: KaiTanakaProps) {
  const leftEye =
    mood === "focused" ? (
      <path
        d="M 116 193 Q 131 187 146 193"
        stroke="#241408"
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
      />
    ) : (
      <g>
        <ellipse cx="131" cy="193" rx="13" ry="9.5" fill="#fff" />
        <circle cx="133" cy="194" r="6" fill="#241408" />
        <circle cx="135" cy="192" r="1.8" fill="#fff" />
      </g>
    );

  const rightEye =
    mood === "focused" ? (
      <path
        d="M 174 193 Q 189 187 204 193"
        stroke="#241408"
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
      />
    ) : (
      <g>
        <ellipse cx="189" cy="193" rx="13" ry="9.5" fill="#fff" />
        <circle cx="191" cy="194" r="6" fill="#241408" />
        <circle cx="193" cy="192" r="1.8" fill="#fff" />
      </g>
    );

  const mouth =
    mood === "surprised" ? (
      <ellipse cx="160" cy="248" rx="7" ry="10" fill="#3a1820" />
    ) : mood === "focused" ? (
      <path
        d="M 145 248 L 175 248"
        stroke="#3a1820"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    ) : (
      <path
        d="M 146 248 Q 160 255 174 248"
        stroke="#3a1820"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    );

  return (
    <svg
      viewBox="0 0 320 570"
      width={height ? undefined : size}
      height={height}
      className={className}
      style={{
        filter: "drop-shadow(0 0 32px rgba(255,183,0,0.15))",
        ...style,
      }}
      role="img"
      aria-label={`Kai Tanaka, mood: ${mood}`}
    >
      <defs>
        <filter id="kai-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect x="0" y="0" width="320" height="570" fill="transparent" />

      {/* ── BODY ── drawn first */}

      {/* Left arm sleeve */}
      <path
        d="M 74 322 Q 44 415 36 516 Q 34 540 56 544 Q 74 546 78 528 Q 74 490 82 438 Q 88 378 92 328 Z"
        fill="#1a1e26"
        stroke="#0e1018"
        strokeWidth="1"
      />
      {/* Left hand */}
      <ellipse cx="46" cy="539" rx="18" ry="11" fill="#2a1e14" />
      <path
        d="M 32 539 Q 30 534 34 532"
        stroke="#1a1208"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M 42 546 Q 40 552 44 553"
        stroke="#1a1208"
        strokeWidth="1.2"
        fill="none"
      />

      {/* Right arm sleeve */}
      <path
        d="M 246 322 Q 276 415 284 516 Q 286 540 264 544 Q 246 546 242 528 Q 246 490 238 438 Q 232 378 228 328 Z"
        fill="#1a1e26"
        stroke="#0e1018"
        strokeWidth="1"
      />
      {/* Right hand */}
      <ellipse cx="274" cy="539" rx="18" ry="11" fill="#2a1e14" />

      {/* Main jacket body */}
      <path
        d="M 74 322 Q 54 428 58 556 L 262 556 Q 266 428 246 322 Z"
        fill="#1a1e26"
        stroke="#0e1018"
        strokeWidth="1.5"
      />

      {/* Jacket right-side shading */}
      <path
        d="M 160 328 Q 188 420 192 556 L 262 556 Q 266 428 246 322 Z"
        fill="#0e1018"
        opacity="0.45"
      />

      {/* Amber sleeve stripe left */}
      <path
        d="M 74 336 L 50 460 L 62 463 L 86 340 Z"
        fill="var(--sodium-amber)"
        opacity="0.4"
      />
      {/* Amber sleeve stripe right */}
      <path
        d="M 246 336 L 270 460 L 258 463 L 234 340 Z"
        fill="var(--sodium-amber)"
        opacity="0.32"
      />

      {/* Front seam */}
      <path
        d="M 152 328 L 150 556 L 170 556 L 168 328 Z"
        fill="#0e1018"
        opacity="0.35"
      />

      {/* Left pocket */}
      <rect
        x="76"
        y="430"
        width="60"
        height="40"
        rx="2"
        fill="#0e1018"
        stroke="#2a3040"
        strokeWidth="1"
      />
      <line
        x1="76"
        y1="443"
        x2="136"
        y2="443"
        stroke="#2a3040"
        strokeWidth="0.6"
      />

      {/* Right pocket */}
      <rect
        x="184"
        y="430"
        width="60"
        height="40"
        rx="2"
        fill="#0e1018"
        stroke="#2a3040"
        strokeWidth="1"
      />
      <line
        x1="184"
        y1="443"
        x2="244"
        y2="443"
        stroke="#2a3040"
        strokeWidth="0.6"
      />

      {/* Amber chest patch / courier logo area */}
      <rect
        x="88"
        y="358"
        width="44"
        height="28"
        rx="2"
        fill="#0e1018"
        stroke="var(--sodium-amber)"
        strokeWidth="0.9"
        opacity="0.7"
      />
      <text
        x="110"
        y="376"
        textAnchor="middle"
        fontSize="7"
        fontFamily="monospace"
        fill="var(--sodium-amber)"
        opacity="0.8"
      >
        DSZ-7
      </text>

      {/* Right wrist device */}
      <rect
        x="244"
        y="502"
        width="28"
        height="11"
        rx="2"
        fill="#1a1e26"
        stroke="var(--sodium-amber)"
        strokeWidth="0.9"
      />
      <line
        x1="248"
        y1="507"
        x2="268"
        y2="507"
        stroke="var(--sodium-amber)"
        strokeWidth="0.4"
        opacity="0.6"
      />

      {/* Amber jacket collar glow rim */}
      <path
        d="M 74 322 L 58 556"
        stroke="var(--sodium-amber)"
        strokeWidth="1"
        opacity="0.18"
      />

      {/* ── HEAD ── */}

      {/* Jacket collar (high, structured) */}
      <path
        d="M 82 292 Q 62 318 66 360 L 254 360 Q 258 318 238 292 Q 200 272 160 270 Q 120 272 82 292 Z"
        fill="#1a1e26"
        stroke="#0e1018"
        strokeWidth="1.5"
      />
      {/* Collar right shading */}
      <path
        d="M 160 270 Q 200 274 232 298 Q 248 320 244 360 L 205 360 Q 218 328 215 298 Q 196 278 160 274 Z"
        fill="#0e1018"
        opacity="0.55"
      />
      {/* Collar left amber trim */}
      <path
        d="M 95 302 Q 80 330 84 360 L 97 360 Q 94 330 108 305 Z"
        fill="var(--sodium-amber)"
        opacity="0.38"
      />
      {/* Collar right amber trim */}
      <path
        d="M 225 302 Q 240 330 236 360 L 223 360 Q 226 330 213 305 Z"
        fill="var(--sodium-amber)"
        opacity="0.32"
      />
      {/* Collar fold left */}
      <path
        d="M 140 272 Q 128 292 122 325 L 140 325 Q 140 300 148 278 Z"
        fill="#222838"
        stroke="#0e1018"
        strokeWidth="0.8"
      />
      {/* Collar fold right */}
      <path
        d="M 180 272 Q 192 292 198 325 L 180 325 Q 180 300 172 278 Z"
        fill="#222838"
        stroke="#0e1018"
        strokeWidth="0.8"
      />

      {/* Neck */}
      <rect x="130" y="265" width="60" height="46" fill="#2a1e14" />
      <path
        d="M 130 265 L 130 311 L 190 311 L 190 265 Q 185 275 160 278 Q 135 275 130 265 Z"
        fill="#1e160e"
      />

      {/* Face */}
      <path
        d="M 95 158 Q 88 222 122 268 Q 160 286 198 268 Q 232 222 225 158 Q 205 122 160 118 Q 115 122 95 158 Z"
        fill="#ddc8a8"
      />
      {/* Face right-side shading */}
      <path
        d="M 160 118 Q 205 122 225 158 Q 232 222 198 268 Q 182 276 178 260 Q 205 218 206 168 Q 196 130 160 124 Z"
        fill="#bea888"
        opacity="0.6"
      />

      {/* Hair — short, tousled */}
      <path
        d="M 95 158 Q 98 98 160 92 Q 222 98 225 158 Q 215 142 190 136 Q 160 130 130 136 Q 108 140 95 158 Z"
        fill="#241408"
      />
      {/* Hair volume — left side tuft */}
      <path d="M 95 158 Q 88 174 90 196 Q 95 165 97 148 Z" fill="#241408" />
      {/* Hair volume — right side */}
      <path
        d="M 225 158 Q 232 174 230 196 Q 225 165 223 148 Z"
        fill="#241408"
      />
      {/* Tousled top pieces */}
      <path d="M 135 95 Q 148 84 162 90 Q 155 86 148 94 Z" fill="#2e1a08" />
      <path d="M 162 90 Q 175 82 188 90 Q 180 85 172 94 Z" fill="#2e1a08" />
      {/* Amber hair streak */}
      <path
        d="M 180 96 Q 195 90 210 100 L 207 126 Q 192 112 178 118 Z"
        fill="var(--sodium-amber)"
        opacity="0.65"
      />

      {/* Left eyebrow */}
      <path
        d="M 114 178 Q 131 172 149 177"
        stroke="#241408"
        strokeWidth="2.8"
        fill="none"
        strokeLinecap="round"
      />
      {/* Right eyebrow */}
      <path
        d="M 171 178 Q 189 172 207 177"
        stroke="#241408"
        strokeWidth="2.8"
        fill="none"
        strokeLinecap="round"
      />

      {/* Left eye */}
      {leftEye}

      {/* Right eye */}
      {rightEye}

      {/* Nose */}
      <path
        d="M 158 215 Q 155 232 151 237 Q 155 241 162 239"
        stroke="#a89070"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Mouth */}
      {mouth}

      {/* Left ear */}
      <ellipse cx="95" cy="210" rx="6" ry="10" fill="#bea888" />

      {/* Right ear + data earpiece */}
      <ellipse cx="225" cy="210" rx="6" ry="10" fill="#bea888" />
      <g filter="url(#kai-glow)">
        <rect
          x="224"
          y="202"
          width="14"
          height="16"
          rx="3"
          fill="#1a1614"
          stroke="var(--sodium-amber)"
          strokeWidth="1.2"
        />
        <circle cx="231" cy="210" r="2.2" fill="var(--sodium-amber)">
          <animate
            attributeName="opacity"
            values="0.9;0.35;0.9"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
        <line
          x1="238"
          y1="210"
          x2="244"
          y2="210"
          stroke="var(--sodium-amber)"
          strokeWidth="1.5"
          opacity="0.7"
        />
      </g>

      {/* Rain-wet rim light on left cheek */}
      <path
        d="M 95 158 Q 90 222 122 268"
        stroke="var(--motel-pool-cyan)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.2"
      />
    </svg>
  );
}

export default KaiTanaka;
