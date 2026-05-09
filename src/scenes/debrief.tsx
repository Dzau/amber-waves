// Debrief scene — VN-style: Echo portrait full-height, dialogue panel at bottom.
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ConeyIslandDinerBackground from "./backgrounds/coney-island-diner";
import Echo from "../characters/echo";
import type {
  MissionNarrative,
  NarrativeLine,
} from "../missions/_mission.types";

const COLOR_FOR_SPEAKER: Record<NarrativeLine["speaker"], string> = {
  "ECHO REYES": "var(--open-sign-pink)",
  "KAI TANAKA": "var(--gas-station-green)",
  NARRATOR: "var(--diesel-orange)",
  WRENCH: "var(--sodium-amber)",
  MIRA: "var(--motel-pool-cyan)",
};

const PANEL_H = 350;
const SPRITE_H = 480;

export interface DebriefSceneProps {
  narrative: MissionNarrative;
  onReplay: () => void;
  meshNodes: number;
}

export function DebriefScene({
  narrative,
  onReplay,
  meshNodes,
}: DebriefSceneProps) {
  const lines = narrative.debrief;
  const [shown, setShown] = useState(1);
  useEffect(() => {
    if (shown >= lines.length) return;
    const id = window.setTimeout(() => setShown((s) => s + 1), 1600);
    return () => window.clearTimeout(id);
  }, [shown, lines.length]);

  const lastEchoMood =
    lines
      .slice(0, shown)
      .reverse()
      .find((l) => l.speaker === "ECHO REYES" && l.mood)?.mood ?? "smile";

  return (
    <motion.div
      key="debrief"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
      style={{ minHeight: "88vh" }}
      aria-label="Mission debrief"
    >
      <ConeyIslandDinerBackground />

      {/* Echo portrait — large, centered-left, grows upward from panel */}
      <div
        className="absolute flex justify-center pointer-events-none"
        style={{ bottom: PANEL_H, left: 0, right: 0 }}
        aria-hidden="true"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ x: -24 }}
        >
          <Echo mood={lastEchoMood} height={SPRITE_H} />
        </motion.div>
      </div>

      {/* Debrief panel at bottom */}
      <div
        className="absolute left-0 right-0 bottom-0 px-8 pt-5 pb-5"
        style={{
          height: PANEL_H,
          background: "rgba(5,3,3,0.95)",
          borderTop: "1px solid #4a3e3a",
          backdropFilter: "blur(12px)",
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <div className="flex items-baseline gap-4 mb-1">
          <div
            className="font-display"
            style={{
              color: "var(--open-sign-pink)",
              fontSize: 26,
              lineHeight: 1,
            }}
          >
            BLOCK 14 LIVE
          </div>
          <div
            className="text-[10px] font-terminal tracking-widest"
            style={{ color: "#8a8170" }}
          >
            MESH: {meshNodes}/{meshNodes} · 100% COVERAGE · STATIC: BASELINE
          </div>
        </div>

        <div className="border-b mb-3" style={{ borderColor: "#2c2422" }} />

        {/* Progressive dialogue lines */}
        <div className="space-y-2">
          {lines.slice(0, shown).map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div
                className="font-display text-[10px] tracking-widest mb-0.5"
                style={{ color: COLOR_FOR_SPEAKER[l.speaker] }}
              >
                {l.speaker}
              </div>
              <div
                className="font-scrawl text-[14px] leading-snug"
                style={{
                  color: "var(--halogen-white)",
                  fontStyle: l.speaker === "NARRATOR" ? "italic" : "normal",
                }}
              >
                {l.text}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buttons — only once all lines shown */}
        {shown >= lines.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center justify-between flex-wrap gap-3 border-t mt-3 pt-3"
            style={{ borderColor: "#2c2422" }}
          >
            <div
              className="text-[11px] font-terminal"
              style={{ color: "#8a8170" }}
            >
              ACT I COMPLETE · ACT II (DIJKSTRA) NOT YET BUILT
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="px-3 py-1.5 font-display text-[11px] tracking-[0.18em] border"
                style={{ borderColor: "#4a3e3a", color: "#8a8170" }}
                onClick={onReplay}
              >
                ↻ REPLAY ACT I
              </button>
              <button
                type="button"
                className="px-3 py-1.5 font-display text-[11px] tracking-[0.18em] border"
                style={{
                  borderColor: "rgba(255,45,111,0.3)",
                  color: "rgba(255,45,111,0.4)",
                  background: "rgba(255,45,111,0.02)",
                }}
                disabled
              >
                + ACCEPT MISSION 002
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default DebriefScene;
