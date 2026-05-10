// Diner scene — VN-style: large centered character sprites, full-width dialogue
// box at bottom, 400ms hold before typewriter, slide transitions per speaker.
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import ConeyIslandDinerBackground from "./backgrounds/coney-island-diner";
import Echo from "../characters/echo";
import { KaiTanaka } from "../characters/kai-tanaka";
import { SCENE_CUT_REGISTRY } from "./cuts";
import { M001_DINER_DIALOGUE } from "../missions/m001.narrative";
import type { NarrativeLine } from "../missions/_mission.types";

const COLOR_FOR_SPEAKER: Record<NarrativeLine["speaker"], string> = {
  "ECHO REYES": "var(--open-sign-pink)",
  "KAI TANAKA": "var(--gas-station-green)",
  NARRATOR: "var(--diesel-orange)",
  WRENCH: "var(--sodium-amber)",
  MIRA: "var(--motel-pool-cyan)",
};

// Slide direction per speaker: -1 = from left, +1 = from right
const SLIDE_DIR: Partial<Record<NarrativeLine["speaker"], number>> = {
  "ECHO REYES": -1,
  "KAI TANAKA": 1,
};

// Horizontal offset from center (px) per speaker
const X_OFFSET: Partial<Record<NarrativeLine["speaker"], number>> = {
  "ECHO REYES": -28,
  "KAI TANAKA": 28,
};

// Responsive sizing: percentage strings so values scale with the 16:9 viewport.
// "27%" of container height ≈ 190px at 700px tall; "65%" ≈ 500px at 770px tall.
const DIALOGUE_H = "27%";
const SPRITE_H = "65%";

interface TypewriterProps {
  text: string;
  speed?: number;
  onDone?: () => void;
}

function Typewriter({ text, speed = 19, onDone }: TypewriterProps) {
  const [i, setI] = useState(0);
  useEffect(() => setI(0), [text]);
  useEffect(() => {
    if (i >= text.length) {
      onDone?.();
      return;
    }
    const id = window.setTimeout(() => setI(i + 1), speed);
    return () => window.clearTimeout(id);
  }, [i, text, speed, onDone]);
  return (
    <span>
      {text.slice(0, i)}
      {i < text.length && <span className="amber-blink">▋</span>}
    </span>
  );
}

export interface DinerSceneProps {
  onContinue: () => void;
  announce: (msg: string) => void;
}

export function DinerScene({ onContinue, announce }: DinerSceneProps) {
  const [idx, setIdx] = useState(0);
  const [held, setHeld] = useState(true);
  const [showSkip, setShowSkip] = useState(false);
  const [doneTyping, setDoneTyping] = useState(false);
  const line = M001_DINER_DIALOGUE[idx];

  // 400ms hold before typewriter fires on each new line
  useEffect(() => {
    setHeld(true);
    setDoneTyping(false);
    const holdId = window.setTimeout(() => setHeld(false), 400);
    const skipId = window.setTimeout(() => setShowSkip(true), 900);
    return () => {
      window.clearTimeout(holdId);
      window.clearTimeout(skipId);
    };
  }, [idx]);

  useEffect(() => {
    announce(`${line.speaker}: ${line.text}`);
  }, [idx, line.speaker, line.text, announce]);

  const next = () => {
    if (idx < M001_DINER_DIALOGUE.length - 1) setIdx(idx + 1);
    else onContinue();
  };

  const echoMood = useMemo<NonNullable<NarrativeLine["mood"]>>(() => {
    let mood: NonNullable<NarrativeLine["mood"]> = "neutral";
    for (let i = 0; i <= idx; i++) {
      const l = M001_DINER_DIALOGUE[i];
      if (l.speaker === "ECHO REYES" && l.mood) mood = l.mood;
    }
    return mood;
  }, [idx]);

  const speaker = line.speaker;
  const hasSprite = speaker === "ECHO REYES" || speaker === "KAI TANAKA";
  const slideDir = SLIDE_DIR[speaker] ?? 0;
  const xOff = X_OFFSET[speaker] ?? 0;
  const isNarrator = speaker === "NARRATOR";

  const SceneCut = line.sceneCut ? SCENE_CUT_REGISTRY[line.sceneCut] : null;

  return (
    <motion.div
      key="diner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative h-full"
      onClick={() => {
        if (doneTyping && !held) next();
      }}
      role="region"
      aria-label="Diner cutscene"
    >
      <style>{`
        .amber-blink { animation: amber-blink 1.1s steps(2) infinite; }
        @keyframes amber-blink { 50% { opacity: 0; } }
      `}</style>

      <ConeyIslandDinerBackground />

      {/* Scene cut overlay — full-bleed illustrated panel, fades over character sprites */}
      <AnimatePresence>
        {SceneCut && (
          <motion.div
            key={line.sceneCut}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 pointer-events-none"
            style={{ top: 0, bottom: DIALOGUE_H, zIndex: 5 }}
            aria-hidden="true"
          >
            <SceneCut
              style={{ width: "100%", height: "100%", display: "block" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cinematic letterbox bars — only for NARRATOR lines */}
      <AnimatePresence>
        {isNarrator && (
          <motion.div
            key="narrator-bars"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="absolute inset-x-0 top-0"
              style={{ height: 50, background: "rgba(4,3,3,0.76)" }}
            />
            <div
              className="absolute inset-x-0"
              style={{
                bottom: DIALOGUE_H,
                height: 50,
                background: "rgba(4,3,3,0.76)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Character sprite — container height set explicitly so % heights on SVG resolve */}
      <div
        className="absolute inset-x-0 flex justify-center pointer-events-none"
        style={{
          bottom: DIALOGUE_H,
          height: SPRITE_H,
          opacity: SceneCut ? 0 : 1,
          transition: "opacity 0.2s",
        }}
        aria-hidden="true"
      >
        <AnimatePresence mode="wait">
          {hasSprite && (
            <motion.div
              key={speaker}
              style={{ height: "100%" }}
              initial={{ opacity: 0, x: xOff + slideDir * 38, y: 10 }}
              animate={{ opacity: 1, x: xOff, y: 0 }}
              exit={{ opacity: 0, x: xOff - slideDir * 22, y: -8 }}
              transition={{ duration: 0.26, ease: "easeOut" }}
            >
              {speaker === "ECHO REYES" && (
                <Echo mood={echoMood} height="100%" />
              )}
              {speaker === "KAI TANAKA" && (
                <KaiTanaka mood="neutral" height="100%" />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Full-width dialogue box pinned to bottom */}
      <div
        className="absolute left-0 right-0 bottom-0 px-8 pt-5 pb-4"
        style={{
          height: DIALOGUE_H,
          background: "rgba(5,3,3,0.95)",
          borderTop: "1px solid #4a3e3a",
          backdropFilter: "blur(12px)",
        }}
      >
        <div
          className="font-display text-[11px] tracking-[0.22em] mb-2"
          style={{ color: COLOR_FOR_SPEAKER[line.speaker] }}
        >
          {line.speaker}
        </div>

        <div
          className="font-scrawl leading-relaxed"
          style={{
            color: "var(--halogen-white)",
            fontSize: 15,
            minHeight: 56,
            fontStyle: isNarrator ? "italic" : "normal",
          }}
        >
          {held ? (
            <span style={{ opacity: 0 }}>_</span>
          ) : (
            <Typewriter
              text={line.text}
              onDone={() => setDoneTyping(true)}
              key={idx}
            />
          )}
        </div>

        <div className="flex items-center justify-between mt-2">
          <div
            className="text-[10px] font-terminal"
            style={{ color: "#6a6158" }}
          >
            [{idx + 1}/{M001_DINER_DIALOGUE.length}] · click anywhere to
            continue
          </div>
          <div className="flex gap-2">
            {showSkip && (
              <button
                type="button"
                className="px-3 py-1.5 text-[11px] tracking-widest font-display border"
                style={{ borderColor: "#4a3e3a", color: "#6a6158" }}
                onClick={(e) => {
                  e.stopPropagation();
                  onContinue();
                }}
              >
                SKIP CUTSCENE
              </button>
            )}
            <button
              type="button"
              className="px-3 py-1.5 text-[11px] tracking-widest font-display border"
              style={{
                borderColor: "rgba(255,45,111,0.5)",
                color: "var(--open-sign-pink)",
                background: "rgba(255,45,111,0.06)",
              }}
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
            >
              {idx < M001_DINER_DIALOGUE.length - 1 ? "NEXT ▸" : "CONTINUE"}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DinerScene;
