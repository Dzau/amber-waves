// ============================================================================
// Echo Reyes — full-body SVG portrait for VN-style scenes.
// viewBox 0 0 320 570: head centered at y≈70-300, body y≈295-560.
// Pass height prop for VN scenes (CSS-driven); size prop sets width (legacy).
// Active cyber-eye uses --motel-pool-cyan when implantActive, else pink.
// ============================================================================

import type { CSSProperties } from "react";

export type EchoMood = "neutral" | "smile" | "narrow" | "surprised";

export interface EchoProps {
  mood?: EchoMood;
  /** Sets SVG width. Use height prop for VN scene sizing. */
  size?: number;
  /** Sets SVG height; when set, width is auto (aspect-ratio preserved). */
  height?: number;
  implantActive?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function Echo({
  mood = "neutral",
  size = 320,
  height,
  implantActive = true,
  className,
  style,
}: EchoProps) {
  const mouth =
    mood === "smile" ? (
      <path
        d="M 138 246 Q 160 262 182 246"
        stroke="#3a1820"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    ) : mood === "narrow" ? (
      <path
        d="M 142 250 L 178 250"
        stroke="#3a1820"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    ) : mood === "surprised" ? (
      <ellipse cx="160" cy="252" rx="6" ry="9" fill="#3a1820" />
    ) : (
      <path
        d="M 144 250 Q 160 256 176 250"
        stroke="#3a1820"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
    );

  const leftEye =
    mood === "narrow" ? (
      <path
        d="M 122 200 Q 135 196 148 200"
        stroke="#1a0a08"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    ) : (
      <g>
        <ellipse cx="135" cy="200" rx="13" ry="10" fill="#fff" />
        <circle cx="137" cy="201" r="6.5" fill="#1a1612" />
        <circle cx="139" cy="199" r="2" fill="#fff" />
      </g>
    );

  const eyeColor = implantActive
    ? "var(--motel-pool-cyan)"
    : "var(--open-sign-pink)";

  return (
    <svg
      viewBox="0 0 320 570"
      width={height ? undefined : size}
      height={height}
      className={className}
      style={{
        filter: "drop-shadow(0 0 32px rgba(255,45,111,0.22))",
        ...style,
      }}
      role="img"
      aria-label={`Echo Reyes, mood: ${mood}`}
    >
      <defs>
        <radialGradient id="echo-cyber-eye-glow" cx="0.5" cy="0.5" r="0.7">
          <stop
            offset="0%"
            stopColor={implantActive ? "#9bf2ed" : "#ff66a8"}
            stopOpacity="1"
          />
          <stop
            offset="50%"
            stopColor={implantActive ? "#4ad7d1" : "#ff2d6f"}
            stopOpacity="0.85"
          />
          <stop
            offset="100%"
            stopColor={implantActive ? "#0e3838" : "#5a1135"}
            stopOpacity="1"
          />
        </radialGradient>
        <filter id="echo-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          id="echo-body-shadow"
          x="-20%"
          y="-10%"
          width="140%"
          height="130%"
        >
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect x="0" y="0" width="320" height="570" fill="transparent" />

      {/* ── BODY ── drawn first so head overlaps correctly */}

      {/* Left arm sleeve */}
      <path
        d="M 68 325 Q 38 420 30 520 Q 28 544 50 548 Q 68 550 72 532 Q 68 492 76 440 Q 82 380 88 330 Z"
        fill="#1a1612"
        stroke="#0a0808"
        strokeWidth="1"
      />
      {/* Left hand */}
      <ellipse cx="50" cy="543" rx="18" ry="11" fill="#2a221e" />
      {/* Fingers hint */}
      <path
        d="M 36 543 Q 34 538 38 536"
        stroke="#1a1410"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M 46 550 Q 44 556 48 557"
        stroke="#1a1410"
        strokeWidth="1.2"
        fill="none"
      />

      {/* Right arm sleeve */}
      <path
        d="M 252 325 Q 282 420 290 520 Q 292 544 270 548 Q 252 550 248 532 Q 252 492 244 440 Q 238 380 232 330 Z"
        fill="#1a1612"
        stroke="#0a0808"
        strokeWidth="1"
      />
      {/* Right hand */}
      <ellipse cx="270" cy="543" rx="18" ry="11" fill="#2a221e" />

      {/* Main jacket body */}
      <path
        d="M 68 325 Q 48 430 52 558 L 268 558 Q 272 430 252 325 Z"
        fill="#14100e"
        stroke="#0a0808"
        strokeWidth="1.5"
      />

      {/* Jacket right-side shading */}
      <path
        d="M 160 330 Q 185 420 188 558 L 268 558 Q 272 430 252 325 Z"
        fill="#0a0606"
        opacity="0.42"
      />

      {/* Pink rim light on left edge of jacket */}
      <path
        d="M 68 325 L 52 558"
        stroke="var(--open-sign-pink)"
        strokeWidth="1.2"
        opacity="0.25"
      />

      {/* Front seam / zipper */}
      <path
        d="M 150 330 L 148 558 L 172 558 L 170 330 Z"
        fill="#0a0606"
        opacity="0.38"
      />
      {/* Zipper pulls */}
      <rect x="154" y="352" width="8" height="4" rx="1" fill="#2a2422" />
      <rect x="154" y="368" width="8" height="4" rx="1" fill="#2a2422" />
      <rect x="154" y="384" width="8" height="4" rx="1" fill="#2a2422" />

      {/* Left pocket */}
      <rect
        x="72"
        y="428"
        width="62"
        height="42"
        rx="2"
        fill="#0e0a08"
        stroke="#2a2422"
        strokeWidth="1"
      />
      <line
        x1="72"
        y1="441"
        x2="134"
        y2="441"
        stroke="#2a2422"
        strokeWidth="0.6"
      />
      {/* Data device in pocket */}
      <rect
        x="75"
        y="445"
        width="30"
        height="16"
        rx="1"
        fill="#060404"
        stroke="var(--motel-pool-cyan)"
        strokeWidth="0.9"
      />
      <circle cx="115" cy="453" r="2.8" fill="var(--gas-station-green)">
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Right pocket */}
      <rect
        x="186"
        y="428"
        width="62"
        height="42"
        rx="2"
        fill="#0e0a08"
        stroke="#2a2422"
        strokeWidth="1"
      />
      <line
        x1="186"
        y1="441"
        x2="248"
        y2="441"
        stroke="#2a2422"
        strokeWidth="0.6"
      />

      {/* Right wrist device */}
      <rect
        x="248"
        y="504"
        width="30"
        height="12"
        rx="2"
        fill="#1e1a18"
        stroke="var(--open-sign-pink)"
        strokeWidth="0.9"
      />
      <line
        x1="252"
        y1="510"
        x2="274"
        y2="510"
        stroke="var(--open-sign-pink)"
        strokeWidth="0.4"
        opacity="0.6"
      />

      {/* Pink sleeve stripe left */}
      <path
        d="M 68 340 L 44 470 L 56 473 L 80 343 Z"
        fill="var(--open-sign-pink)"
        opacity="0.28"
      />

      {/* ── HEAD (drawn on top of body) ── */}

      {/* Hood */}
      <path
        d="M 60 130 Q 30 220 50 360 L 270 360 Q 290 220 260 130 Q 220 70 160 70 Q 100 70 60 130 Z"
        fill="#1a1612"
        stroke="#0a0808"
        strokeWidth="2"
      />
      <path
        d="M 80 145 Q 60 230 75 350 L 245 350 Q 260 230 240 145 Q 210 100 160 100 Q 110 100 80 145 Z"
        fill="#0e0a0a"
      />
      <path
        d="M 80 145 Q 110 110 160 105 Q 210 110 240 145"
        stroke="var(--open-sign-pink)"
        strokeWidth="2"
        fill="none"
        opacity="0.55"
      />

      {/* Neck / shoulders */}
      <rect x="115" y="280" width="90" height="80" fill="#2a221e" />
      <path
        d="M 115 280 L 115 360 L 205 360 L 205 280 Q 200 290 160 290 Q 120 290 115 280 Z"
        fill="#1a1310"
      />

      {/* Face */}
      <path
        d="M 105 175 Q 100 235 130 280 Q 160 295 190 280 Q 220 235 215 175 Q 195 145 160 142 Q 125 145 105 175 Z"
        fill="#e8d4b8"
      />
      <path
        d="M 160 142 Q 195 145 215 175 Q 220 235 190 280 Q 175 287 175 270 Q 195 230 195 180 Q 185 152 160 148 Z"
        fill="#c9b59a"
        opacity="0.7"
      />

      {/* Hair */}
      <path
        d="M 100 165 Q 130 130 160 138 Q 195 134 222 168 Q 215 158 190 155 Q 160 152 130 158 Q 110 162 100 165 Z"
        fill="#0a0606"
      />
      {/* Pink streak */}
      <path
        d="M 130 145 Q 145 132 162 138 L 160 158 Q 144 152 132 158 Z"
        fill="var(--open-sign-pink)"
      />

      {/* Cyber eye (right) */}
      <g filter="url(#echo-glow)">
        <polygon
          points="180,192 200,192 210,205 200,218 180,218 170,205"
          fill="url(#echo-cyber-eye-glow)"
          stroke={eyeColor}
          strokeWidth="1.5"
        />
        <circle cx="190" cy="205" r="3" fill="#fff" opacity="0.9" />
        <line
          x1="170"
          y1="205"
          x2="167"
          y2="205"
          stroke={eyeColor}
          strokeWidth="2"
        />
        <line
          x1="210"
          y1="205"
          x2="213"
          y2="205"
          stroke={eyeColor}
          strokeWidth="2"
        />
      </g>

      {/* Natural eye (left) */}
      {leftEye}
      <path
        d="M 118 184 Q 132 178 152 184"
        stroke="#0a0606"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 168 178 Q 188 172 208 180"
        stroke="#0a0606"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Nose */}
      <path
        d="M 158 218 Q 156 235 152 240 Q 156 244 162 242"
        stroke="#a89580"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Mouth */}
      {mouth}

      {/* Temple implant */}
      <g>
        <rect
          x="98"
          y="195"
          width="14"
          height="22"
          fill="#2a2826"
          stroke="#4a4842"
          strokeWidth="1"
        />
        <circle cx="105" cy="200" r="2.5" fill="var(--gas-station-green)">
          <animate
            attributeName="opacity"
            values="1;0.4;1"
            dur="2.2s"
            repeatCount="indefinite"
          />
        </circle>
        <line
          x1="98"
          y1="207"
          x2="112"
          y2="207"
          stroke="#4a4842"
          strokeWidth="0.5"
        />
        <line
          x1="98"
          y1="212"
          x2="112"
          y2="212"
          stroke="#4a4842"
          strokeWidth="0.5"
        />
      </g>

      {/* Neural strand */}
      <path
        d="M 112 200 Q 140 195 168 200"
        stroke={eyeColor}
        strokeWidth="0.8"
        fill="none"
        opacity="0.5"
      />

      {/* Rim lights */}
      <path
        d="M 160 142 Q 195 145 215 175 Q 218 195 215 210"
        stroke="var(--open-sign-pink)"
        strokeWidth="2.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 105 175 Q 100 235 130 280"
        stroke="var(--gas-station-green)"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />

      {/* Earring */}
      <circle cx="218" cy="240" r="3" fill="#cccccc" />
    </svg>
  );
}

export default Echo;
