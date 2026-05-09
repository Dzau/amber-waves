// ============================================================================
// Kai Tanaka — manga-style full-body SVG portrait.
// viewBox 0 0 320 570
// Compact, confident build. Strong brow, expressive eyes. Casual lean.
// Dark navy courier jacket (#1a1e26) with amber DSZ-7 patch + stripe.
// Tousled dark hair with amber streak. Wrist device on right arm.
// Mood variants: neutral | focused | surprised (face only)
// ============================================================================

import type { CSSProperties } from "react";

export type KaiMood = "neutral" | "focused" | "surprised";

export interface KaiTanakaProps {
  mood?: KaiMood;
  size?: number;
  /** Accepts a number (px) or a percentage string (e.g. "65%") for
   *  responsive VN scene sizing inside a percentage-height container. */
  height?: number | string;
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
  // ── EYEBROWS — heavy, strong, expressive ──────────────────────────────────
  const leftBrow =
    mood === "focused" ? (
      // Angled hard inward — intense concentration
      <path
        d="M 112 166 Q 128 158 148 163"
        stroke="#1a0e06"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    ) : mood === "surprised" ? (
      // High raised
      <path
        d="M 112 160 Q 130 150 148 155"
        stroke="#1a0e06"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
    ) : (
      // Neutral — strong flat with slight natural arch
      <path
        d="M 112 168 Q 130 161 148 165"
        stroke="#1a0e06"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    );

  const rightBrow =
    mood === "focused" ? (
      <path
        d="M 172 163 Q 192 157 208 166"
        stroke="#1a0e06"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    ) : mood === "surprised" ? (
      <path
        d="M 172 155 Q 192 147 208 156"
        stroke="#1a0e06"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
    ) : (
      <path
        d="M 172 165 Q 192 159 208 166"
        stroke="#1a0e06"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    );

  // ── LEFT EYE (character's left = viewer's right) ──────────────────────────
  const leftEye =
    mood === "focused" ? (
      // Narrowed — squint, laser focus
      <g>
        <ellipse cx="130" cy="182" rx="18" ry="6" fill="#f0e4cc" />
        <ellipse cx="130" cy="182" rx="10" ry="5" fill="#1a0e06" />
        <ellipse cx="127" cy="181" rx="3.5" ry="2.5" fill="#2e2010" />
        <circle cx="135" cy="180" r="1.5" fill="#f0e4cc" opacity="0.9" />
        <path
          d="M 112 178 Q 130 172 148 178"
          stroke="#1a0e06"
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    ) : mood === "surprised" ? (
      // Wide open — whites visible above iris
      <g>
        <ellipse cx="130" cy="182" rx="18" ry="14" fill="#f0e4cc" />
        <circle cx="130" cy="183" r="9.5" fill="#1a0e06" />
        <circle cx="127" cy="179" r="4" fill="#3a2010" />
        <circle cx="134" cy="179" r="2" fill="#f0e4cc" opacity="0.9" />
        <path
          d="M 112 174 Q 130 167 148 174"
          stroke="#1a0e06"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        {/* Lower lid line */}
        <path
          d="M 113 190 Q 130 196 147 190"
          stroke="#8a6840"
          strokeWidth="0.9"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>
    ) : (
      // Neutral — almond, natural, confident
      <g>
        <ellipse cx="130" cy="182" rx="18" ry="11" fill="#f0e4cc" />
        <circle cx="130" cy="182" r="8.5" fill="#1a0e06" />
        <circle cx="127" cy="179" r="3.5" fill="#3a2010" />
        <circle cx="134" cy="179" r="2" fill="#f0e4cc" opacity="0.9" />
        <path
          d="M 112 177 Q 130 170 148 177"
          stroke="#1a0e06"
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 113 187 Q 130 193 147 187"
          stroke="#8a6840"
          strokeWidth="0.9"
          fill="none"
          strokeLinecap="round"
          opacity="0.45"
        />
      </g>
    );

  // ── RIGHT EYE (character's right = viewer's left) ─────────────────────────
  const rightEye =
    mood === "focused" ? (
      <g>
        <ellipse cx="190" cy="182" rx="18" ry="6" fill="#f0e4cc" />
        <ellipse cx="190" cy="182" rx="10" ry="5" fill="#1a0e06" />
        <ellipse cx="187" cy="181" rx="3.5" ry="2.5" fill="#2e2010" />
        <circle cx="195" cy="180" r="1.5" fill="#f0e4cc" opacity="0.9" />
        <path
          d="M 172 178 Q 190 172 208 178"
          stroke="#1a0e06"
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    ) : mood === "surprised" ? (
      <g>
        <ellipse cx="190" cy="182" rx="18" ry="14" fill="#f0e4cc" />
        <circle cx="190" cy="183" r="9.5" fill="#1a0e06" />
        <circle cx="187" cy="179" r="4" fill="#3a2010" />
        <circle cx="194" cy="179" r="2" fill="#f0e4cc" opacity="0.9" />
        <path
          d="M 172 174 Q 190 167 208 174"
          stroke="#1a0e06"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 173 190 Q 190 196 207 190"
          stroke="#8a6840"
          strokeWidth="0.9"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>
    ) : (
      <g>
        <ellipse cx="190" cy="182" rx="18" ry="11" fill="#f0e4cc" />
        <circle cx="190" cy="182" r="8.5" fill="#1a0e06" />
        <circle cx="187" cy="179" r="3.5" fill="#3a2010" />
        <circle cx="194" cy="179" r="2" fill="#f0e4cc" opacity="0.9" />
        <path
          d="M 172 177 Q 190 170 208 177"
          stroke="#1a0e06"
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 173 187 Q 190 193 207 187"
          stroke="#8a6840"
          strokeWidth="0.9"
          fill="none"
          strokeLinecap="round"
          opacity="0.45"
        />
      </g>
    );

  // ── MOUTH ─────────────────────────────────────────────────────────────────
  const mouth =
    mood === "focused" ? (
      // Tight flat line — determined, closed off
      <path
        d="M 146 228 Q 160 232 174 228"
        stroke="#1a0e06"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    ) : mood === "surprised" ? (
      // Open, jaw dropped
      <g>
        <ellipse cx="160" cy="234" rx="10" ry="14" fill="#1a0e06" />
        <ellipse
          cx="160"
          cy="226"
          rx="8"
          ry="4.5"
          fill="#f0e4cc"
          opacity="0.6"
        />
      </g>
    ) : (
      // Neutral — slight smirk right side, casual
      <g>
        <path
          d="M 146 228 Q 160 235 176 228"
          stroke="#1a0e06"
          strokeWidth="2.3"
          fill="none"
          strokeLinecap="round"
        />
        {/* Smirk crease right side */}
        <path
          d="M 174 228 Q 178 225 176 222"
          stroke="#8a5030"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          opacity="0.55"
        />
        {/* Upper lip line */}
        <path
          d="M 152 226 Q 160 223 168 226"
          stroke="#8a5030"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>
    );

  return (
    <svg
      viewBox="0 0 320 570"
      width={height ? undefined : size}
      height={height}
      className={className}
      style={{
        filter: "drop-shadow(0 0 20px rgba(255,183,0,0.18))",
        ...style,
      }}
      role="img"
      aria-label={`Kai Tanaka, mood: ${mood}`}
    >
      <defs>
        <filter id="kai-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          id="kai-amber-glow"
          x="-40%"
          y="-40%"
          width="180%"
          height="180%"
        >
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ═══════════════════════════════════════════════════════════════════
          BOOTS
      ═══════════════════════════════════════════════════════════════════ */}

      {/* Left boot — slightly forward, weight on left leg */}
      <path
        d="M 106 532 L 100 556 Q 98 564 110 566 L 162 566 Q 170 565 168 558 L 164 532 Z"
        fill="#0e0c0a"
        stroke="#0a0808"
        strokeWidth="2.5"
      />
      {/* Left boot toe */}
      <path
        d="M 100 556 Q 98 564 110 566 L 148 566 Q 142 560 140 554 L 106 532 Z"
        fill="#181412"
      />
      <line
        x1="100"
        y1="565"
        x2="168"
        y2="565"
        stroke="#2c2c2e"
        strokeWidth="1.5"
      />
      {/* Boot lace zone */}
      <rect
        x="114"
        y="520"
        width="44"
        height="10"
        rx="1.5"
        fill="#181614"
        stroke="#2c2c2e"
        strokeWidth="0.8"
      />
      <line
        x1="120"
        y1="520"
        x2="120"
        y2="530"
        stroke="#2c2c2e"
        strokeWidth="0.6"
      />
      <line
        x1="128"
        y1="520"
        x2="128"
        y2="530"
        stroke="#2c2c2e"
        strokeWidth="0.6"
      />
      <line
        x1="136"
        y1="520"
        x2="136"
        y2="530"
        stroke="#2c2c2e"
        strokeWidth="0.6"
      />
      <line
        x1="144"
        y1="520"
        x2="144"
        y2="530"
        stroke="#2c2c2e"
        strokeWidth="0.6"
      />
      <line
        x1="152"
        y1="520"
        x2="152"
        y2="530"
        stroke="#2c2c2e"
        strokeWidth="0.6"
      />

      {/* Right boot — set back, relaxed */}
      <path
        d="M 168 536 L 172 558 Q 174 566 164 568 L 214 568 Q 222 567 220 560 L 212 536 Z"
        fill="#0e0c0a"
        stroke="#0a0808"
        strokeWidth="2.5"
      />
      {/* Right boot toe */}
      <path
        d="M 172 558 Q 174 566 164 568 L 198 568 Q 196 562 200 558 Z"
        fill="#181412"
      />
      <line
        x1="172"
        y1="567"
        x2="220"
        y2="567"
        stroke="#2c2c2e"
        strokeWidth="1.5"
      />
      {/* Boot lace zone right */}
      <rect
        x="176"
        y="526"
        width="30"
        height="8"
        rx="1.5"
        fill="#181614"
        stroke="#2c2c2e"
        strokeWidth="0.8"
      />

      {/* ═══════════════════════════════════════════════════════════════════
          CARGO PANTS — dark charcoal
      ═══════════════════════════════════════════════════════════════════ */}

      {/* Left leg — forward lean */}
      <path
        d="M 114 416 L 106 534 L 168 534 L 164 416 Z"
        fill="#1c1a18"
        stroke="#0a0808"
        strokeWidth="2"
      />
      {/* Left leg inner shadow */}
      <path
        d="M 148 416 L 144 534 L 168 534 L 164 416 Z"
        fill="#0e0c0a"
        opacity="0.55"
      />
      {/* Left cargo pocket */}
      <path
        d="M 108 448 L 106 492 L 138 494 L 140 450 Z"
        fill="#161412"
        stroke="#2c2c2e"
        strokeWidth="1.2"
      />
      <line
        x1="108"
        y1="460"
        x2="140"
        y2="460"
        stroke="#2c2c2e"
        strokeWidth="0.7"
        opacity="0.6"
      />
      <rect
        x="114"
        y="454"
        width="20"
        height="5"
        rx="1"
        fill="#2c2c2e"
        stroke="#3a3838"
        strokeWidth="0.7"
      />

      {/* Right leg — slightly behind */}
      <path
        d="M 160 416 L 164 538 L 220 538 L 210 416 Z"
        fill="#1c1a18"
        stroke="#0a0808"
        strokeWidth="2"
      />
      {/* Right leg shadow */}
      <path
        d="M 160 416 L 163 538 L 155 538 L 160 416 Z"
        fill="#0a0808"
        opacity="0.45"
      />
      {/* Right cargo pocket */}
      <path
        d="M 182 452 L 180 494 L 210 496 L 212 454 Z"
        fill="#161412"
        stroke="#2c2c2e"
        strokeWidth="1.2"
      />
      <line
        x1="182"
        y1="464"
        x2="212"
        y2="464"
        stroke="#2c2c2e"
        strokeWidth="0.7"
        opacity="0.6"
      />

      {/* Belt */}
      <rect
        x="106"
        y="408"
        width="110"
        height="11"
        rx="2"
        fill="#0e0c0a"
        stroke="#2c2c2e"
        strokeWidth="1.5"
      />
      {/* Belt buckle — center */}
      <rect
        x="146"
        y="408"
        width="24"
        height="11"
        rx="1.5"
        fill="#2c2c2e"
        stroke="#3a3838"
        strokeWidth="1"
      />
      <rect x="151" y="410" width="14" height="7" rx="0.8" fill="#3a3838" />

      {/* ═══════════════════════════════════════════════════════════════════
          COURIER JACKET — dark navy #1a1e26
      ═══════════════════════════════════════════════════════════════════ */}

      {/* Left sleeve — bent, arm slightly forward */}
      <path
        d="M 84 292 Q 56 346 44 408 Q 38 440 50 456 Q 62 468 76 458 Q 90 448 90 424 Q 88 390 94 354 Q 100 316 106 292 Z"
        fill="#1a1e26"
        stroke="#0a0808"
        strokeWidth="2.5"
      />
      {/* Left sleeve shadow inner */}
      <path
        d="M 106 292 Q 100 316 94 354 Q 88 390 90 424 Q 90 446 78 458"
        stroke="#0a0808"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
      {/* Amber stripe left sleeve */}
      <path
        d="M 86 308 L 60 408 L 70 412 L 96 312 Z"
        fill="#ffb700"
        opacity="0.9"
      />
      {/* Amber stripe shadow edge */}
      <path
        d="M 96 312 L 70 412 L 74 413 L 100 314 Z"
        fill="#8a5a00"
        opacity="0.4"
      />

      {/* Right sleeve — relaxed, hanging */}
      <path
        d="M 236 292 Q 264 354 272 426 Q 276 456 264 468 Q 250 478 238 466 Q 228 454 232 424 Q 236 386 226 346 Q 220 312 214 292 Z"
        fill="#1a1e26"
        stroke="#0a0808"
        strokeWidth="2.5"
      />
      {/* Right sleeve shadow */}
      <path
        d="M 214 292 Q 220 312 226 346 Q 236 386 234 424"
        stroke="#0a0808"
        strokeWidth="1.2"
        fill="none"
        opacity="0.55"
      />

      {/* Left hand — relaxed, fingers loose */}
      <path
        d="M 50 442 Q 38 450 40 466 Q 42 480 58 482 Q 74 482 78 466 Q 80 450 66 442 Z"
        fill="#c8945a"
        stroke="#0a0808"
        strokeWidth="2"
      />
      {/* Finger lines */}
      <line
        x1="44"
        y1="460"
        x2="54"
        y2="458"
        stroke="#8a5830"
        strokeWidth="1"
        opacity="0.7"
      />
      <line
        x1="52"
        y1="468"
        x2="62"
        y2="466"
        stroke="#8a5830"
        strokeWidth="1"
        opacity="0.7"
      />
      <line
        x1="60"
        y1="474"
        x2="70"
        y2="472"
        stroke="#8a5830"
        strokeWidth="1"
        opacity="0.6"
      />

      {/* Right wrist — device visible */}
      <path
        d="M 238 456 Q 226 464 228 478 Q 230 490 246 492 Q 262 492 264 478 Q 266 464 252 456 Z"
        fill="#c8945a"
        stroke="#0a0808"
        strokeWidth="2"
      />
      {/* Finger lines right */}
      <line
        x1="232"
        y1="472"
        x2="242"
        y2="470"
        stroke="#8a5830"
        strokeWidth="1"
        opacity="0.6"
      />
      <line
        x1="240"
        y1="480"
        x2="250"
        y2="478"
        stroke="#8a5830"
        strokeWidth="1"
        opacity="0.6"
      />

      {/* Wrist device — right wrist strap */}
      <rect
        x="226"
        y="444"
        width="38"
        height="14"
        rx="3"
        fill="#1a1e26"
        stroke="#ffb700"
        strokeWidth="1.5"
      />
      {/* Wrist device screen */}
      <rect x="230" y="446" width="26" height="10" rx="1.5" fill="#0a0e14" />
      {/* Wrist screen data lines */}
      <line
        x1="232"
        y1="449"
        x2="254"
        y2="449"
        stroke="#ffb700"
        strokeWidth="0.7"
        opacity="0.8"
      />
      <line
        x1="232"
        y1="452"
        x2="250"
        y2="452"
        stroke="#ffb700"
        strokeWidth="0.5"
        opacity="0.5"
      />
      <line
        x1="232"
        y1="455"
        x2="244"
        y2="455"
        stroke="#ffb700"
        strokeWidth="0.5"
        opacity="0.4"
      />
      {/* Active dot */}
      <circle cx="256" cy="451" r="2" fill="#ffb700">
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Left torso side panel */}
      <path
        d="M 84 292 Q 70 364 74 412 L 114 418 L 114 292 Z"
        fill="#1a1e26"
        stroke="#0a0808"
        strokeWidth="2"
      />
      {/* Right torso side panel */}
      <path
        d="M 236 292 Q 250 364 246 412 L 206 418 L 206 292 Z"
        fill="#1a1e26"
        stroke="#0a0808"
        strokeWidth="2"
      />

      {/* Jacket front — left panel */}
      <path
        d="M 114 292 L 114 418 L 152 418 L 152 292 Z"
        fill="#1e2230"
        stroke="#0a0808"
        strokeWidth="1.5"
      />
      {/* Jacket front — right panel */}
      <path
        d="M 168 292 L 168 418 L 206 418 L 206 292 Z"
        fill="#1e2230"
        stroke="#0a0808"
        strokeWidth="1.5"
      />

      {/* Right-side jacket shadow — cel shade */}
      <path
        d="M 194 292 L 206 292 L 246 412 L 228 412 Z"
        fill="#0a0e18"
        opacity="0.5"
      />

      {/* Center front closure / half-zip */}
      <path
        d="M 152 292 L 150 355 L 160 364 L 170 355 L 168 292 Z"
        fill="#0e1018"
        stroke="#0a0808"
        strokeWidth="1"
      />
      {/* Zip pull */}
      <rect
        x="154"
        y="353"
        width="12"
        height="6"
        rx="2"
        fill="#2c3040"
        stroke="#ffb700"
        strokeWidth="0.8"
      />

      {/* Left lapel — structured, angular */}
      <path
        d="M 114 292 Q 128 300 138 282 L 152 292 L 116 316 Z"
        fill="#242838"
        stroke="#0a0808"
        strokeWidth="1.5"
      />
      {/* Right lapel */}
      <path
        d="M 206 292 Q 192 300 182 282 L 168 292 L 204 316 Z"
        fill="#242838"
        stroke="#0a0808"
        strokeWidth="1.5"
      />
      {/* Left lapel amber trim edge */}
      <path
        d="M 114 292 Q 124 298 132 286"
        stroke="#ffb700"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      {/* Right lapel amber trim edge */}
      <path
        d="M 206 292 Q 196 298 188 286"
        stroke="#ffb700"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />

      {/* V-collar open area — skin / undershirt */}
      <path
        d="M 140 282 L 152 292 L 160 312 L 168 292 L 180 282 Q 170 274 160 272 Q 150 274 140 282 Z"
        fill="#c8945a"
        stroke="#0a0808"
        strokeWidth="1.2"
      />

      {/* DSZ-7 SHOULDER PATCH — right shoulder */}
      <g filter="url(#kai-amber-glow)">
        <rect
          x="192"
          y="298"
          width="44"
          height="30"
          rx="2"
          fill="#0a0e18"
          stroke="#ffb700"
          strokeWidth="1.5"
        />
        {/* Patch inner lines */}
        <rect x="196" y="301" width="36" height="24" rx="1" fill="#0e1220" />
        <text
          x="214"
          y="314"
          textAnchor="middle"
          fontSize="8"
          fontFamily="monospace"
          fontWeight="bold"
          fill="#ffb700"
        >
          DSZ-7
        </text>
        {/* Patch detail line */}
        <line
          x1="196"
          y1="320"
          x2="232"
          y2="320"
          stroke="#ffb700"
          strokeWidth="0.6"
          opacity="0.5"
        />
        {/* Small icon */}
        <path
          d="M 204 323 L 208 327 L 212 323"
          stroke="#ffb700"
          strokeWidth="0.8"
          fill="none"
          opacity="0.6"
        />
      </g>

      {/* Amber accent stripe right sleeve — matching left */}
      <path
        d="M 234 308 L 258 408 L 248 412 L 224 312 Z"
        fill="#ffb700"
        opacity="0.75"
      />

      {/* Left chest pocket */}
      <rect
        x="116"
        y="330"
        width="36"
        height="26"
        rx="1.5"
        fill="#141820"
        stroke="#2c3040"
        strokeWidth="1"
      />
      <line
        x1="116"
        y1="340"
        x2="152"
        y2="340"
        stroke="#2c3040"
        strokeWidth="0.7"
        opacity="0.7"
      />
      {/* Small green LED */}
      <circle cx="144" cy="346" r="2.2" fill="#39ff7a" opacity="0.85">
        <animate
          attributeName="opacity"
          values="0.85;0.3;0.85"
          dur="3.1s"
          repeatCount="indefinite"
        />
      </circle>

      {/* ═══════════════════════════════════════════════════════════════════
          NECK
      ═══════════════════════════════════════════════════════════════════ */}
      <path
        d="M 142 266 L 138 292 L 160 298 L 182 292 L 178 266 Q 170 274 160 276 Q 150 274 142 266 Z"
        fill="#c8945a"
        stroke="#0a0808"
        strokeWidth="2"
      />
      {/* Neck right shadow */}
      <path
        d="M 168 266 L 182 292 L 160 298 L 178 266 Z"
        fill="#8a5830"
        opacity="0.5"
      />
      {/* Neck tendon */}
      <line
        x1="150"
        y1="268"
        x2="146"
        y2="290"
        stroke="#8a5830"
        strokeWidth="0.9"
        opacity="0.45"
      />

      {/* High jacket collar around neck */}
      <path
        d="M 116 292 Q 116 280 140 272 L 142 266 Q 130 272 120 282 Q 114 290 114 300 Z"
        fill="#242838"
        stroke="#0a0808"
        strokeWidth="1"
      />
      <path
        d="M 204 292 Q 204 280 180 272 L 178 266 Q 190 272 200 282 Q 206 290 206 300 Z"
        fill="#242838"
        stroke="#0a0808"
        strokeWidth="1"
      />

      {/* ═══════════════════════════════════════════════════════════════════
          HEAD — strong jaw, defined cheekbones, slightly wider than Echo
      ═══════════════════════════════════════════════════════════════════ */}

      {/* Head base — angular but slightly rounder jaw than Echo */}
      <path
        d="M 106 148 Q 94 180 96 214 Q 98 246 114 268 Q 132 284 160 288 Q 188 284 206 268 Q 222 246 224 214 Q 226 180 214 148 Q 198 122 160 118 Q 122 122 106 148 Z"
        fill="#c8945a"
        stroke="#0a0808"
        strokeWidth="3"
      />

      {/* Forehead highlight */}
      <path
        d="M 138 124 Q 160 118 182 124 Q 196 138 200 164 Q 182 148 160 146 Q 138 148 120 164 Q 124 138 138 124 Z"
        fill="#daa870"
        opacity="0.55"
      />

      {/* Cheekbone right highlight */}
      <path
        d="M 102 216 Q 104 234 118 248 Q 108 236 102 216 Z"
        fill="#daa870"
        opacity="0.45"
      />

      {/* Right side jaw shadow — strong, angular */}
      <path
        d="M 214 214 Q 224 238 212 264 Q 198 282 172 288 L 202 264 Q 222 240 218 214 Z"
        fill="#8a5830"
        opacity="0.48"
      />
      {/* Left jaw shadow */}
      <path
        d="M 96 214 Q 96 248 112 268 L 128 282 Q 110 260 104 236 Q 100 224 96 214 Z"
        fill="#8a5830"
        opacity="0.3"
      />

      {/* Under-chin shadow */}
      <path
        d="M 132 284 Q 160 294 188 284 Q 174 290 160 290 Q 146 290 132 284 Z"
        fill="#6a3a18"
        opacity="0.6"
      />

      {/* ── HAIR — tousled dark, amber streak ─────────────────────────────── */}

      {/* Hair base — wraps head */}
      <path
        d="M 104 152 Q 100 130 110 116 Q 128 100 160 98 Q 192 100 210 116 Q 220 130 216 152 Q 204 128 184 122 Q 160 118 136 122 Q 116 128 104 152 Z"
        fill="#1a1008"
        stroke="#0a0808"
        strokeWidth="2.5"
      />

      {/* Left sideburn hair — comes down toward ear */}
      <path
        d="M 104 152 Q 98 172 96 196 Q 98 172 100 154 Q 102 138 108 128 Z"
        fill="#1a1008"
        stroke="#0a0808"
        strokeWidth="1.5"
      />
      {/* Right side hair */}
      <path
        d="M 216 152 Q 222 172 224 196 Q 222 172 220 154 Q 218 138 212 128 Z"
        fill="#1a1008"
        stroke="#0a0808"
        strokeWidth="1.5"
      />

      {/* Tousled hair top — several clumps forward */}
      <path
        d="M 128 102 Q 136 88 152 90 Q 148 86 140 92 Q 132 96 128 102 Z"
        fill="#0e0a06"
        stroke="#0a0808"
        strokeWidth="1.5"
      />
      <path
        d="M 148 90 Q 158 80 172 84 Q 162 82 156 88 Q 152 92 150 98 Z"
        fill="#0e0a06"
        stroke="#0a0808"
        strokeWidth="1.5"
      />
      <path
        d="M 170 84 Q 182 78 196 86 Q 188 82 180 88 Q 174 94 172 102 Z"
        fill="#0e0a06"
        stroke="#0a0808"
        strokeWidth="1.5"
      />
      <path
        d="M 194 88 Q 206 86 212 98 Q 206 90 200 96 Q 196 100 194 106 Z"
        fill="#1a1008"
        stroke="#0a0808"
        strokeWidth="1"
      />

      {/* AMBER HAIR STREAK — signature Kai detail */}
      <path
        d="M 184 90 Q 200 86 212 100 L 208 128 Q 196 112 182 116 Q 186 106 188 98 Z"
        fill="#ffb700"
        opacity="0.85"
      />
      {/* Streak shadow edge */}
      <path
        d="M 208 128 Q 196 112 182 116 L 186 110 Q 196 108 210 124 Z"
        fill="#8a5a00"
        opacity="0.5"
      />

      {/* Hair highlight — sheen */}
      <path
        d="M 144 98 Q 162 92 178 96 Q 166 94 160 93 Q 154 94 144 98 Z"
        fill="#2e2010"
        opacity="0.9"
      />

      {/* Loose strand over forehead — casual */}
      <path
        d="M 156 104 Q 148 112 146 128 Q 148 116 154 108 Q 158 102 164 100 Z"
        fill="#0e0a06"
      />
      <path
        d="M 162 100 Q 168 108 166 124 Q 166 112 164 104 Q 162 100 160 98 Z"
        fill="#1a1008"
      />

      {/* ── EARS ──────────────────────────────────────────────────────────── */}

      {/* Left ear */}
      <path
        d="M 104 198 Q 98 210 100 224 Q 102 232 108 228 Q 114 222 112 212 Q 110 204 104 198 Z"
        fill="#b87848"
        stroke="#0a0808"
        strokeWidth="1.5"
      />
      <path
        d="M 104 204 Q 102 212 104 220"
        stroke="#8a5030"
        strokeWidth="1"
        fill="none"
        opacity="0.55"
      />

      {/* Right ear + amber earpiece device */}
      <path
        d="M 216 198 Q 222 210 220 224 Q 218 232 212 228 Q 206 222 208 212 Q 210 204 216 198 Z"
        fill="#b87848"
        stroke="#0a0808"
        strokeWidth="1.5"
      />
      {/* Earpiece device */}
      <g filter="url(#kai-amber-glow)">
        <rect
          x="214"
          y="200"
          width="16"
          height="20"
          rx="4"
          fill="#141820"
          stroke="#ffb700"
          strokeWidth="1.5"
        />
        {/* Earpiece speaker dot pattern */}
        <circle cx="222" cy="206" r="1.5" fill="#ffb700" opacity="0.7" />
        <circle cx="218" cy="210" r="1" fill="#ffb700" opacity="0.5" />
        <circle cx="222" cy="214" r="1" fill="#ffb700" opacity="0.5" />
        <circle cx="226" cy="210" r="1" fill="#ffb700" opacity="0.5" />
        {/* Pulsing indicator */}
        <circle cx="222" cy="206" r="2.5" fill="#ffb700" opacity="0.0">
          <animate
            attributeName="opacity"
            values="0;0.5;0"
            dur="2.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="2.5;5;2.5"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
        {/* Antenna wire */}
        <line
          x1="230"
          y1="208"
          x2="238"
          y2="206"
          stroke="#ffb700"
          strokeWidth="1.5"
          opacity="0.7"
        />
        <circle cx="239" cy="206" r="1.5" fill="#ffb700" opacity="0.6" />
      </g>

      {/* ── EYEBROWS ─────────────────────────────────────────────────────── */}
      {leftBrow}
      {rightBrow}

      {/* ── EYES ─────────────────────────────────────────────────────────── */}
      {leftEye}
      {rightEye}

      {/* ── NOSE — defined, broader bridge than Echo ──────────────────────── */}
      <path
        d="M 158 172 L 156 208 Q 154 215 149 219"
        stroke="#8a5030"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        opacity="0.65"
      />
      {/* Nose tip + nostril flare */}
      <path
        d="M 149 219 Q 148 223 152 225 Q 158 226 160 222"
        stroke="#8a5030"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        opacity="0.65"
      />
      <path
        d="M 160 222 Q 162 226 168 225 Q 172 223 171 219"
        stroke="#8a5030"
        strokeWidth="1.3"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Nose shadow under tip */}
      <path
        d="M 150 221 Q 156 227 160 225 Q 155 223 150 221 Z"
        fill="#8a5030"
        opacity="0.35"
      />

      {/* ── MOUTH ────────────────────────────────────────────────────────── */}
      {mouth}

      {/* ── RIM LIGHTS ────────────────────────────────────────────────────── */}
      {/* Amber neon on right face edge */}
      <path
        d="M 214 148 Q 226 180 224 222 Q 222 252 208 270"
        stroke="#ffb700"
        strokeWidth="2"
        fill="none"
        opacity="0.28"
        strokeLinecap="round"
      />
      {/* Cool left rim light */}
      <path
        d="M 106 148 Q 94 182 96 220 Q 98 250 114 268"
        stroke="#4ad7d1"
        strokeWidth="1.5"
        fill="none"
        opacity="0.16"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default KaiTanaka;
