// Briefing scene — mission intro + LeetCodeBadge + chrome consent.
import { motion } from "framer-motion";
import LeetCodeBadge from "../ui/LeetCodeBadge";
import type { Mission, MissionNarrative } from "../missions/_mission.types";

export interface BriefingSceneProps {
  mission: Mission;
  narrative: MissionNarrative;
  onAccept: () => void;
}

export function BriefingScene({
  mission,
  narrative,
  onAccept,
}: BriefingSceneProps) {
  const consent = narrative.briefing.chromeConsent;
  return (
    <motion.div
      key="briefing"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5 }}
      className="px-6 py-6"
    >
      <div
        className="font-display"
        style={{ color: "var(--open-sign-pink)", fontSize: 36 }}
      >
        MISSION {mission.id.replace(/^m/, "")}
      </div>
      <div
        className="font-display mb-6"
        style={{
          color: "var(--sodium-amber)",
          fontSize: 16,
          letterSpacing: "0.18em",
        }}
      >
        {narrative.briefing.tagline}
      </div>

      <LeetCodeBadge
        meta={mission.leetcodeMeta}
        bigOTarget={mission.complexity.time}
      />

      <div
        className="mx-6 mt-4 p-5 pt-6 relative"
        style={{
          border: "1px solid #4a3e3a",
          background: "rgba(28,23,22,0.4)",
        }}
      >
        <div
          className="absolute -top-2 left-4 px-2 text-[10px] tracking-widest font-display"
          style={{ background: "var(--asphalt)", color: "#8a8170" }}
        >
          ▼ MISSION BRIEF · IN-WORLD
        </div>
        <div
          className="font-scrawl text-[15px] leading-relaxed whitespace-pre-line"
          style={{ color: "var(--halogen-white)" }}
        >
          {narrative.briefing.body}
        </div>
      </div>

      <div
        className="mx-6 mt-4 p-5 pt-6 relative"
        style={{
          border: "1px solid #4a3e3a",
          background: "rgba(28,23,22,0.4)",
        }}
      >
        <div
          className="absolute -top-2 left-4 px-2 text-[10px] tracking-widest font-display"
          style={{ background: "var(--asphalt)", color: "#8a8170" }}
        >
          ▼ FORMAL PROBLEM
        </div>
        <pre
          className="font-terminal text-[13px] leading-relaxed whitespace-pre-wrap"
          style={{ color: "var(--gas-station-green)" }}
        >
          {`${mission.signature}

${mission.realProblemStatement}`}
        </pre>
      </div>

      {consent && (
        <div
          className="mx-6 mt-4 p-5 pt-6 relative"
          style={{
            border: "1px solid rgba(255,183,0,0.5)",
            background: "rgba(255,183,0,0.04)",
          }}
        >
          <div
            className="absolute -top-2 left-4 px-2 text-[10px] tracking-widest font-display"
            style={{
              background: "var(--asphalt)",
              color: "var(--sodium-amber)",
            }}
          >
            {consent.title}
          </div>
          <div
            className="font-scrawl text-[14px] leading-relaxed whitespace-pre-line"
            style={{ color: "var(--halogen-white)" }}
          >
            {consent.body}
          </div>
          <div className="flex gap-3 mt-4">
            <button
              type="button"
              className="px-4 py-2 font-display text-xs tracking-[0.18em]"
              style={{
                border: "2px solid rgba(255,183,0,0.5)",
                color: "var(--sodium-amber)",
                background: "rgba(255,183,0,0.04)",
              }}
              onClick={onAccept}
              autoFocus
            >
              {consent.cta}
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default BriefingScene;
