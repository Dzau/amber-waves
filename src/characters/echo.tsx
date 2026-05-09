// ============================================================================
// Echo Reyes — manga-style full-body SVG portrait.
// viewBox 0 0 320 570
// Tall, lean, confident. Asymmetric undercut. Kiroshi left-eye implant.
// Fitted tactical jacket, cargo trousers, boots.
// Mood variants: neutral | smile | narrow | surprised (face only)
// implantActive: left eye iris shifts to motel-pool-cyan, glow intensifies.
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
  const eyeColor = implantActive ? "#4ad7d1" : "#ff2d6f";
  const eyeGlowColor = implantActive
    ? "rgba(74,215,209,0.55)"
    : "rgba(255,45,111,0.45)";

  // ── EYEBROWS ──────────────────────────────────────────────────────────────
  // Right natural brow (character's right = viewer's left)
  const rightBrow =
    mood === "surprised" ? (
      // High arched — shock
      <path
        d="M 118 164 Q 136 154 156 158"
        stroke="#1a0e08"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
    ) : mood === "narrow" ? (
      // Angled down inner edge — focused/suspicious
      <path
        d="M 118 168 Q 134 163 156 165"
        stroke="#1a0e08"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
    ) : (
      // Neutral / smile — slight natural arch with attitude
      <path
        d="M 118 170 Q 136 162 156 165"
        stroke="#1a0e08"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
    );

  // Left implant-side brow
  const leftBrow =
    mood === "surprised" ? (
      <path
        d="M 166 158 Q 186 150 204 155"
        stroke="#1a0e08"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    ) : mood === "narrow" ? (
      // Inner edge pushed down harder on implant side
      <path
        d="M 166 165 Q 186 158 204 161"
        stroke="#1a0e08"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    ) : (
      <path
        d="M 166 162 Q 186 156 204 160"
        stroke="#1a0e08"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    );

  // ── RIGHT EYE (natural, character's right = viewer's left) ────────────────
  const rightEye =
    mood === "narrow" ? (
      // Narrow slit — suspicious squint
      <g>
        <ellipse cx="137" cy="182" rx="19" ry="6" fill="#f0e8dc" />
        <ellipse cx="137" cy="182" rx="10" ry="5" fill="#1a0e08" />
        <ellipse cx="140" cy="180" rx="3" ry="2.5" fill="#3a3030" />
        <circle cx="143" cy="179" r="1.5" fill="#f0e8dc" opacity="0.9" />
        {/* Upper lid shadow */}
        <path
          d="M 118 178 Q 137 172 156 178"
          stroke="#1a0e08"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    ) : mood === "surprised" ? (
      // Wide open
      <g>
        <ellipse cx="137" cy="182" rx="19" ry="13" fill="#f0e8dc" />
        <circle cx="137" cy="182" r="9" fill="#1a0e08" />
        <circle cx="135" cy="178" r="3.5" fill="#2e2828" />
        <circle cx="140" cy="179" r="2" fill="#f0e8dc" opacity="0.9" />
        <path
          d="M 118 175 Q 137 168 156 175"
          stroke="#1a0e08"
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    ) : (
      // Neutral / smile — almond shaped
      <g>
        <ellipse cx="137" cy="182" rx="19" ry="11" fill="#f0e8dc" />
        <circle cx="137" cy="182" r="8" fill="#1a0e08" />
        <circle cx="135" cy="179" r="3" fill="#2e2828" />
        <circle cx="140" cy="179" r="1.8" fill="#f0e8dc" opacity="0.9" />
        {/* Upper lid line */}
        <path
          d="M 118 177 Q 137 171 156 177"
          stroke="#1a0e08"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Lower lid */}
        <path
          d="M 118 187 Q 137 192 156 187"
          stroke="#8a7060"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>
    );

  // ── LEFT EYE — Kiroshi implant (character's left = viewer's right) ─────────
  const leftEyeAperture =
    mood === "narrow" ? 5 : mood === "surprised" ? 13 : 11;
  const leftEye = (
    <g>
      {/* Eye white */}
      <ellipse cx="185" cy="182" rx="18" ry={leftEyeAperture} fill="#f0e8dc" />
      {/* Iris ring — flat cyan (Kiroshi) */}
      <circle cx="185" cy="182" r={leftEyeAperture - 2} fill={eyeColor} />
      {/* Pupil — dark center */}
      <circle cx="185" cy="182" r={leftEyeAperture - 5} fill="#061212" />
      {/* Iris scan lines — minimal tech feel */}
      <line
        x1="172"
        y1="182"
        x2="198"
        y2="182"
        stroke="#061212"
        strokeWidth="0.6"
        opacity="0.5"
      />
      <line
        x1="185"
        y1={182 - (leftEyeAperture - 3)}
        x2="185"
        y2={182 + (leftEyeAperture - 3)}
        stroke="#061212"
        strokeWidth="0.6"
        opacity="0.5"
      />
      {/* Highlight */}
      <circle cx="188" cy={179} r="1.8" fill="#f4ede4" opacity="0.9" />
      {/* Upper lid */}
      <path
        d="M 167 177 Q 185 171 203 177"
        stroke="#1a0e08"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Implant glow rim around eye */}
      <ellipse
        cx="185"
        cy="182"
        rx="20"
        ry={leftEyeAperture + 2}
        fill="none"
        stroke={eyeColor}
        strokeWidth="1.2"
        opacity="0.55"
        filter="url(#echo-glow)"
      />
    </g>
  );

  // ── MOUTH ─────────────────────────────────────────────────────────────────
  const mouth =
    mood === "smile" ? (
      <g>
        <path
          d="M 146 225 Q 161 240 176 225"
          stroke="#1a0e08"
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
        />
        {/* Teeth hint */}
        <path d="M 150 228 Q 161 236 172 228" fill="#f4ede4" stroke="none" />
      </g>
    ) : mood === "narrow" ? (
      // Flat compressed line — attitude
      <path
        d="M 148 228 Q 161 231 174 228"
        stroke="#1a0e08"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    ) : mood === "surprised" ? (
      // Open jaw oval
      <g>
        <ellipse cx="161" cy="232" rx="9" ry="13" fill="#1a0e08" />
        <ellipse cx="161" cy="226" rx="7" ry="4" fill="#f4ede4" opacity="0.7" />
      </g>
    ) : (
      // Neutral — slight natural curve, lips defined
      <g>
        <path
          d="M 147 226 Q 161 232 175 226"
          stroke="#1a0e08"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Upper lip definition */}
        <path
          d="M 153 224 Q 161 221 169 224"
          stroke="#8a6050"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
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
        filter: `drop-shadow(0 0 24px ${eyeGlowColor})`,
        ...style,
      }}
      role="img"
      aria-label={`Echo Reyes, mood: ${mood}`}
    >
      <defs>
        <filter id="echo-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          id="echo-soft-glow"
          x="-40%"
          y="-40%"
          width="180%"
          height="180%"
        >
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ═══════════════════════════════════════════════════════════════════
          BOOTS — drawn first, lowest layer
      ═══════════════════════════════════════════════════════════════════ */}

      {/* Left boot */}
      <path
        d="M 108 528 L 104 555 Q 102 562 112 564 L 158 564 Q 166 563 166 556 L 162 528 Z"
        fill="#0e0c0a"
        stroke="#0a0808"
        strokeWidth="2.5"
      />
      {/* Left boot toe cap */}
      <path
        d="M 104 555 Q 102 562 112 564 L 145 564 Q 140 558 138 552 L 108 528 Z"
        fill="#181412"
        stroke="#0a0808"
        strokeWidth="1"
      />
      {/* Left boot sole line */}
      <line
        x1="104"
        y1="563"
        x2="166"
        y2="563"
        stroke="#2c2c2e"
        strokeWidth="1.5"
      />

      {/* Right boot */}
      <path
        d="M 158 528 L 162 555 Q 164 562 154 564 L 108 564 Q 100 563 102 556"
        fill="none"
      />
      <path
        d="M 172 528 L 176 555 Q 178 562 168 564 L 220 564 Q 228 563 226 556 L 216 528 Z"
        fill="#0e0c0a"
        stroke="#0a0808"
        strokeWidth="2.5"
      />
      {/* Right boot highlight */}
      <path
        d="M 172 528 L 174 548 L 184 548 L 182 528 Z"
        fill="#1e1c1a"
        opacity="0.6"
      />
      {/* Right boot sole line */}
      <line
        x1="178"
        y1="563"
        x2="226"
        y2="563"
        stroke="#2c2c2e"
        strokeWidth="1.5"
      />
      {/* Boot ankle buckle left */}
      <rect
        x="116"
        y="518"
        width="36"
        height="8"
        rx="1.5"
        fill="#2c2c2e"
        stroke="#3a3838"
        strokeWidth="1"
      />
      <rect
        x="130"
        y="519"
        width="8"
        height="6"
        rx="1"
        fill="#ff2d6f"
        opacity="0.7"
      />
      {/* Boot ankle buckle right */}
      <rect
        x="180"
        y="518"
        width="36"
        height="8"
        rx="1.5"
        fill="#2c2c2e"
        stroke="#3a3838"
        strokeWidth="1"
      />
      <rect
        x="194"
        y="519"
        width="8"
        height="6"
        rx="1"
        fill="#ff2d6f"
        opacity="0.7"
      />

      {/* ═══════════════════════════════════════════════════════════════════
          CARGO TROUSERS
      ═══════════════════════════════════════════════════════════════════ */}

      {/* Left leg */}
      <path
        d="M 116 412 L 108 530 L 166 530 L 162 412 Z"
        fill="#1e1c1a"
        stroke="#0a0808"
        strokeWidth="2"
      />
      {/* Left leg inner shadow */}
      <path
        d="M 148 412 L 144 530 L 166 530 L 162 412 Z"
        fill="#141210"
        opacity="0.6"
      />
      {/* Left cargo pocket */}
      <path
        d="M 110 450 L 108 490 L 138 492 L 140 452 Z"
        fill="#181614"
        stroke="#2c2c2e"
        strokeWidth="1.2"
      />
      <line
        x1="110"
        y1="462"
        x2="140"
        y2="462"
        stroke="#2c2c2e"
        strokeWidth="0.7"
        opacity="0.7"
      />
      {/* Pocket strap */}
      <rect
        x="116"
        y="456"
        width="18"
        height="5"
        rx="1"
        fill="#2c2c2e"
        stroke="#3a3838"
        strokeWidth="0.8"
      />

      {/* Right leg */}
      <path
        d="M 158 412 L 154 530 L 216 530 L 212 412 Z"
        fill="#1e1c1a"
        stroke="#0a0808"
        strokeWidth="2"
      />
      {/* Right leg shadow */}
      <path
        d="M 158 412 L 162 530 L 154 530 L 158 412 Z"
        fill="#0a0808"
        opacity="0.5"
      />
      {/* Right cargo pocket */}
      <path
        d="M 180 450 L 178 490 L 208 492 L 210 452 Z"
        fill="#181614"
        stroke="#2c2c2e"
        strokeWidth="1.2"
      />
      <line
        x1="180"
        y1="462"
        x2="210"
        y2="462"
        stroke="#2c2c2e"
        strokeWidth="0.7"
        opacity="0.7"
      />
      {/* Pocket strap */}
      <rect
        x="186"
        y="456"
        width="18"
        height="5"
        rx="1"
        fill="#2c2c2e"
        stroke="#3a3838"
        strokeWidth="0.8"
      />

      {/* Crotch panel */}
      <path
        d="M 116 412 Q 139 422 162 412 L 158 412 Q 139 418 120 412 Z"
        fill="#0a0808"
        stroke="#0a0808"
        strokeWidth="1"
      />

      {/* Belt */}
      <rect
        x="108"
        y="406"
        width="112"
        height="10"
        rx="2"
        fill="#0e0c0a"
        stroke="#2c2c2e"
        strokeWidth="1.5"
      />
      {/* Belt buckle */}
      <rect
        x="148"
        y="406"
        width="22"
        height="10"
        rx="1"
        fill="#2c2c2e"
        stroke="#3a3838"
        strokeWidth="1"
      />
      <rect x="153" y="408" width="12" height="6" rx="0.5" fill="#3a3838" />

      {/* ═══════════════════════════════════════════════════════════════════
          JACKET BODY — tactical, near-black
      ═══════════════════════════════════════════════════════════════════ */}

      {/* Left sleeve — slightly bent at elbow, hand in pocket area */}
      <path
        d="M 88 290 Q 62 340 52 400 Q 46 430 56 448 Q 66 460 78 452 Q 90 444 88 420 Q 84 390 90 360 Q 96 320 104 290 Z"
        fill="#1a1410"
        stroke="#0a0808"
        strokeWidth="2.5"
      />
      {/* Left sleeve inner edge shadow */}
      <path
        d="M 104 290 Q 98 320 92 360 Q 88 390 90 420 Q 91 435 88 452"
        stroke="#0a0808"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
      {/* Left sleeve highlight — top edge */}
      <path
        d="M 88 290 Q 68 330 58 395"
        stroke="#2e2a24"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />

      {/* Right sleeve — relaxed, hanging */}
      <path
        d="M 232 290 Q 262 350 272 420 Q 278 450 266 462 Q 254 472 242 462 Q 232 452 236 420 Q 240 380 232 340 Q 226 310 216 290 Z"
        fill="#1a1410"
        stroke="#0a0808"
        strokeWidth="2.5"
      />
      {/* Right sleeve cel-shade shadow */}
      <path
        d="M 216 290 Q 222 310 230 340 Q 236 380 234 420 Q 232 452 242 462"
        stroke="#0a0808"
        strokeWidth="1.2"
        fill="none"
        opacity="0.6"
      />

      {/* Left hand / gloved fist resting near hip */}
      <path
        d="M 56 432 Q 44 440 46 456 Q 48 470 62 472 Q 78 472 80 456 Q 82 440 70 432 Z"
        fill="#2a2218"
        stroke="#0a0808"
        strokeWidth="2"
      />
      {/* Knuckle lines */}
      <line
        x1="52"
        y1="448"
        x2="60"
        y2="448"
        stroke="#1a1410"
        strokeWidth="1"
      />
      <line
        x1="58"
        y1="454"
        x2="66"
        y2="454"
        stroke="#1a1410"
        strokeWidth="1"
      />
      <line
        x1="64"
        y1="458"
        x2="72"
        y2="458"
        stroke="#1a1410"
        strokeWidth="1"
      />

      {/* Right hand — relaxed open, thumb hooked in pocket */}
      <path
        d="M 242 452 Q 232 460 234 472 Q 236 482 248 484 Q 262 484 266 472 Q 268 460 256 452 Z"
        fill="#2a2218"
        stroke="#0a0808"
        strokeWidth="2"
      />
      {/* Thumb hook */}
      <path
        d="M 242 452 Q 236 444 238 438 Q 242 432 250 434"
        stroke="#0a0808"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Main jacket torso */}
      <path
        d="M 88 290 Q 74 360 78 410 L 116 416 L 116 290 Z"
        fill="#1a1410"
        stroke="#0a0808"
        strokeWidth="2"
      />
      <path
        d="M 232 290 Q 246 360 242 410 L 204 416 L 204 290 Z"
        fill="#1a1410"
        stroke="#0a0808"
        strokeWidth="2"
      />

      {/* Center jacket front panels */}
      {/* Left panel */}
      <path
        d="M 116 290 L 116 416 L 152 416 L 152 290 Z"
        fill="#1c1612"
        stroke="#0a0808"
        strokeWidth="1.5"
      />
      {/* Right panel */}
      <path
        d="M 168 290 L 168 416 L 204 416 L 204 290 Z"
        fill="#1c1612"
        stroke="#0a0808"
        strokeWidth="1.5"
      />

      {/* Central front gap / zipper open at collar */}
      <path
        d="M 152 290 L 149 360 L 160 370 L 171 360 L 168 290 Z"
        fill="#0e0c0a"
        stroke="#0a0808"
        strokeWidth="1"
      />
      {/* Zipper teeth */}
      <line
        x1="152"
        y1="305"
        x2="168"
        y2="305"
        stroke="#2c2c2e"
        strokeWidth="0.8"
        opacity="0.6"
      />
      <line
        x1="152"
        y1="318"
        x2="168"
        y2="318"
        stroke="#2c2c2e"
        strokeWidth="0.8"
        opacity="0.6"
      />
      <line
        x1="151"
        y1="331"
        x2="169"
        y2="331"
        stroke="#2c2c2e"
        strokeWidth="0.8"
        opacity="0.6"
      />
      <line
        x1="150"
        y1="344"
        x2="170"
        y2="344"
        stroke="#2c2c2e"
        strokeWidth="0.8"
        opacity="0.6"
      />

      {/* Open collar v-shape */}
      <path
        d="M 140 280 L 152 290 L 160 310 L 168 290 L 180 280"
        fill="#0e0c0a"
        stroke="#0a0808"
        strokeWidth="1.5"
      />

      {/* Left lapel */}
      <path
        d="M 116 290 Q 128 296 140 280 L 152 290 L 116 310 Z"
        fill="#222018"
        stroke="#0a0808"
        strokeWidth="1.5"
      />

      {/* Right lapel */}
      <path
        d="M 204 290 Q 192 296 180 280 L 168 290 L 204 310 Z"
        fill="#222018"
        stroke="#0a0808"
        strokeWidth="1.5"
      />

      {/* Left lapel cel-shade highlight */}
      <path
        d="M 116 290 Q 124 294 134 284 L 140 280"
        stroke="#2e2a24"
        strokeWidth="1"
        fill="none"
        opacity="0.8"
      />

      {/* PINK accent stripe on left sleeve */}
      <path
        d="M 90 308 L 66 400 L 74 403 L 98 312 Z"
        fill="#ff2d6f"
        opacity="0.85"
      />
      {/* Pink stripe shadow/depth */}
      <path
        d="M 98 312 L 74 403 L 78 404 L 102 313 Z"
        fill="#8a0030"
        opacity="0.4"
      />

      {/* PINK lapel accent stripe */}
      <path
        d="M 118 290 L 116 302 L 130 310 L 132 298 Z"
        fill="#ff2d6f"
        opacity="0.8"
      />

      {/* Right side jacket shadow — cel shade */}
      <path
        d="M 194 290 L 204 290 L 242 410 L 224 410 Z"
        fill="#0a0808"
        opacity="0.5"
      />

      {/* Right side chest pocket */}
      <rect
        x="176"
        y="328"
        width="36"
        height="24"
        rx="1.5"
        fill="#141210"
        stroke="#2c2c2e"
        strokeWidth="1"
      />
      <line
        x1="176"
        y1="337"
        x2="212"
        y2="337"
        stroke="#2c2c2e"
        strokeWidth="0.7"
        opacity="0.7"
      />
      {/* Pocket data chip LED */}
      <circle cx="202" cy="343" r="2.2" fill="#4ad7d1" opacity="0.8">
        <animate
          attributeName="opacity"
          values="0.8;0.3;0.8"
          dur="2.4s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Left inner jacket lining — visible at hem */}
      <path
        d="M 116 406 L 116 416 L 152 416 L 152 406 Z"
        fill="#2a2018"
        stroke="#0a0808"
        strokeWidth="0.5"
      />

      {/* ═══════════════════════════════════════════════════════════════════
          NECK — slim, defined
      ═══════════════════════════════════════════════════════════════════ */}
      <path
        d="M 144 268 L 140 290 L 160 295 L 180 290 L 176 268 Q 168 275 160 276 Q 152 275 144 268 Z"
        fill="#b87040"
        stroke="#0a0808"
        strokeWidth="2"
      />
      {/* Neck shadow right side */}
      <path
        d="M 168 268 L 180 290 L 160 295 L 176 268 Z"
        fill="#8a4e28"
        opacity="0.55"
      />
      {/* Neck tendon line left */}
      <line
        x1="150"
        y1="270"
        x2="146"
        y2="290"
        stroke="#8a4e28"
        strokeWidth="0.8"
        opacity="0.5"
      />

      {/* ═══════════════════════════════════════════════════════════════════
          HEAD — angular manga face, cheekbones, defined jaw
      ═══════════════════════════════════════════════════════════════════ */}

      {/* Head base shape — angular jaw, sharp cheekbones */}
      <path
        d="M 110 148 Q 98 178 100 210 Q 102 240 116 262 Q 132 280 160 284 Q 188 280 204 262 Q 218 240 220 210 Q 222 178 210 148 Q 196 126 160 122 Q 124 126 110 148 Z"
        fill="#c07848"
        stroke="#0a0808"
        strokeWidth="3"
      />

      {/* Face highlight — forehead and nose bridge area */}
      <path
        d="M 140 128 Q 160 122 180 128 Q 192 140 196 165 Q 180 152 160 150 Q 140 152 124 165 Q 128 140 140 128 Z"
        fill="#d4906a"
        opacity="0.6"
      />

      {/* Cheekbone highlight left */}
      <path
        d="M 106 210 Q 108 228 120 242 Q 112 232 106 210 Z"
        fill="#d4906a"
        opacity="0.5"
      />

      {/* Jaw shadow — strong, angular */}
      {/* Right jaw cel-shade */}
      <path
        d="M 204 210 Q 220 232 208 260 Q 196 278 172 284 L 200 260 Q 218 236 212 210 Z"
        fill="#8a4e28"
        opacity="0.5"
      />
      {/* Left jaw shadow */}
      <path
        d="M 100 210 Q 100 245 116 264 L 130 280 Q 114 258 106 234 Q 102 222 100 210 Z"
        fill="#8a4e28"
        opacity="0.3"
      />

      {/* Under-chin shadow */}
      <path
        d="M 134 280 Q 160 290 186 280 Q 172 286 160 286 Q 148 286 134 280 Z"
        fill="#6a3818"
        opacity="0.6"
      />

      {/* ── HAIR ─────────────────────────────────────────────────────────── */}

      {/* Undercut left side — buzzed close */}
      <path
        d="M 108 148 Q 102 175 100 210 Q 96 185 97 162 Q 100 140 112 128 Q 122 120 140 122 L 138 130 Q 122 128 112 138 Q 108 143 108 148 Z"
        fill="#141010"
        stroke="#0a0808"
        strokeWidth="1.5"
      />
      {/* Buzzed texture strokes left */}
      <line
        x1="100"
        y1="175"
        x2="108"
        y2="172"
        stroke="#1e1a18"
        strokeWidth="0.8"
        opacity="0.7"
      />
      <line
        x1="100"
        y1="183"
        x2="109"
        y2="180"
        stroke="#1e1a18"
        strokeWidth="0.8"
        opacity="0.7"
      />
      <line
        x1="101"
        y1="191"
        x2="109"
        y2="188"
        stroke="#1e1a18"
        strokeWidth="0.7"
        opacity="0.6"
      />
      <line
        x1="102"
        y1="199"
        x2="110"
        y2="196"
        stroke="#1e1a18"
        strokeWidth="0.7"
        opacity="0.6"
      />

      {/* Main top hair — dark, swept */}
      <path
        d="M 108 148 Q 104 132 112 122 Q 130 108 160 106 Q 194 108 208 126 Q 214 136 212 148 Q 200 128 180 124 Q 160 120 140 124 Q 120 128 108 148 Z"
        fill="#1a1410"
        stroke="#0a0808"
        strokeWidth="2.5"
      />

      {/* Hair falls left side — longer over forehead */}
      <path
        d="M 112 122 Q 108 134 106 152 Q 110 140 118 132 Q 126 124 140 122 Z"
        fill="#0e0c0a"
      />

      {/* Hair volume top — tousled, forward swept */}
      <path
        d="M 124 110 Q 140 96 160 94 Q 180 92 198 102 Q 208 110 210 124 Q 200 112 184 108 Q 160 104 136 110 Q 128 112 124 116 Z"
        fill="#0e0c0a"
        stroke="#0a0808"
        strokeWidth="2"
      />

      {/* Hair strand falling across forehead — right-to-left diagonal */}
      <path
        d="M 186 108 Q 174 114 162 126 Q 152 136 148 148 Q 154 134 164 122 Q 176 110 190 106 Z"
        fill="#141010"
      />
      {/* Same strand, highlight edge */}
      <path
        d="M 186 108 Q 178 112 170 122 Q 162 132 158 148 Q 163 132 173 120 Q 182 110 190 106 Z"
        fill="#2a2020"
        opacity="0.5"
      />

      {/* Hair strand falling over LEFT eye — covering top of brow */}
      <path
        d="M 138 112 Q 128 120 122 136 Q 118 148 120 162 Q 118 148 122 132 Q 128 116 138 108 Z"
        fill="#1a1410"
      />

      {/* Right side hair — pulled back slightly over ear */}
      <path
        d="M 208 126 Q 216 140 216 158 Q 218 148 214 134 Q 210 120 204 114 Z"
        fill="#1a1410"
        stroke="#0a0808"
        strokeWidth="1.5"
      />

      {/* Hair highlight — sheen on top */}
      <path
        d="M 148 100 Q 164 94 180 98 Q 170 96 160 95 Q 152 96 148 100 Z"
        fill="#2e2820"
        opacity="0.8"
      />

      {/* ── EARS ──────────────────────────────────────────────────────────── */}

      {/* Right ear (character right = viewer left) — mostly hidden by hair */}
      <path
        d="M 108 198 Q 102 208 104 220 Q 106 228 112 224 Q 116 218 114 210 Q 112 202 108 198 Z"
        fill="#b87040"
        stroke="#0a0808"
        strokeWidth="1.5"
      />
      <path
        d="M 108 204 Q 106 212 108 218"
        stroke="#8a4e28"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />

      {/* Left ear — visible, with small earring */}
      <path
        d="M 212 198 Q 218 208 216 220 Q 214 228 208 224 Q 204 218 206 210 Q 208 202 212 198 Z"
        fill="#b87040"
        stroke="#0a0808"
        strokeWidth="1.5"
      />
      <path
        d="M 212 204 Q 214 212 212 218"
        stroke="#8a4e28"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      {/* Earring — small hoop */}
      <circle
        cx="214"
        cy="226"
        r="3.5"
        fill="none"
        stroke="#c8c0b8"
        strokeWidth="1.5"
      />
      <circle cx="214" cy="229" r="1.2" fill="#a8a098" />

      {/* ── EYEBROWS ─────────────────────────────────────────────────────── */}
      {rightBrow}
      {leftBrow}

      {/* ── EYES ─────────────────────────────────────────────────────────── */}
      {rightEye}
      {leftEye}

      {/* ── NOSE — sharp, defined bridge ─────────────────────────────────── */}
      {/* Bridge */}
      <path
        d="M 158 172 L 156 205 Q 154 212 150 216"
        stroke="#8a4e28"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Nose tip/wing left */}
      <path
        d="M 150 216 Q 148 220 152 222 Q 157 223 160 220"
        stroke="#8a4e28"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Nose wing right */}
      <path
        d="M 160 220 Q 163 223 168 222 Q 172 220 170 216"
        stroke="#8a4e28"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Nose shadow fill */}
      <path
        d="M 150 218 Q 155 224 160 222 Q 155 220 150 218 Z"
        fill="#8a4e28"
        opacity="0.35"
      />

      {/* ── MOUTH ────────────────────────────────────────────────────────── */}
      {mouth}

      {/* ── NEURAL IMPLANT — left temple ─────────────────────────────────── */}
      <g filter="url(#echo-glow)">
        {/* Implant disc base */}
        <circle
          cx="108"
          cy="194"
          r="9"
          fill="#1a1816"
          stroke="#2c2c2e"
          strokeWidth="1.5"
        />
        {/* Inner circuit ring */}
        <circle
          cx="108"
          cy="194"
          r="6"
          fill="none"
          stroke={eyeColor}
          strokeWidth="1"
          opacity="0.8"
        />
        {/* Center glow dot */}
        <circle cx="108" cy="194" r="2.5" fill={eyeColor} opacity="0.9">
          <animate
            attributeName="opacity"
            values="0.9;0.4;0.9"
            dur="2.8s"
            repeatCount="indefinite"
          />
        </circle>
        {/* Connector line to skull */}
        <line
          x1="117"
          y1="194"
          x2="124"
          y2="192"
          stroke={eyeColor}
          strokeWidth="0.8"
          opacity="0.5"
        />
        {/* Implant cross hatch detail */}
        <line
          x1="104"
          y1="194"
          x2="112"
          y2="194"
          stroke={eyeColor}
          strokeWidth="0.5"
          opacity="0.4"
        />
        <line
          x1="108"
          y1="190"
          x2="108"
          y2="198"
          stroke={eyeColor}
          strokeWidth="0.5"
          opacity="0.4"
        />
      </g>

      {/* Neural thread from implant toward eye */}
      <path
        d="M 117 192 Q 140 186 166 180"
        stroke={eyeColor}
        strokeWidth="0.7"
        fill="none"
        strokeDasharray="3 2"
        opacity="0.35"
      />

      {/* ── RIM LIGHTS / ambient light painting ──────────────────────────── */}
      {/* Pink neon rim on right side of face */}
      <path
        d="M 210 148 Q 222 178 220 220 Q 218 250 204 264"
        stroke="#ff2d6f"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
        strokeLinecap="round"
      />
      {/* Cyan rim on left edge of face */}
      <path
        d="M 110 148 Q 98 178 100 218 Q 102 246 116 264"
        stroke={eyeColor}
        strokeWidth="1.5"
        fill="none"
        opacity="0.22"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Echo;
