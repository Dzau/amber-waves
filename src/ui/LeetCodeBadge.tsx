// ============================================================================
// LeetCodeBadge — the persistent meta-game tooltip. Visible on briefing AND
// the code-mission scene so the player always sees what they're studying.
// ============================================================================

import type { LeetCodeMeta } from "../missions/_mission.types";
import InfoBadge from "./InfoBadge";

export interface LeetCodeBadgeProps {
  meta: LeetCodeMeta;
  /** Optional Big-O target line. */
  bigOTarget?: string;
}

export function LeetCodeBadge({ meta, bigOTarget }: LeetCodeBadgeProps) {
  const equiv = meta.equivalentLcNumbers ?? [];
  return (
    <InfoBadge tone="green" className="mx-6 my-3">
      <div className="flex items-start gap-4 flex-wrap">
        <div>
          <div
            className="text-[9px] tracking-widest font-terminal"
            style={{ color: "var(--smoked-chrome)", opacity: 0.85 }}
          >
            PROBLEM ORIGIN
          </div>
          <div
            className="font-display text-sm mt-1"
            style={{ color: "var(--gas-station-green)" }}
          >
            LEETCODE-STYLE ::{" "}
            {meta.topicTags.slice(0, 2).join(" · ").toUpperCase()}
          </div>
        </div>
        <div className="flex-1" />
        <div className="text-[10px] font-terminal" style={{ color: "#a89580" }}>
          <div>
            EQUIVALENT TO:{" "}
            <span style={{ color: "var(--halogen-white)" }}>
              LC #{meta.lcNumber}
            </span>
            {equiv.map((n) => (
              <span key={n}>
                {" · "}
                <span style={{ color: "var(--halogen-white)" }}>#{n}</span>
              </span>
            ))}
          </div>
          <div>
            DIFFICULTY:{" "}
            <span style={{ color: "var(--sodium-amber)" }}>
              {meta.difficulty.toUpperCase()}
            </span>
            {bigOTarget && (
              <>
                {" · "}BIG-O TARGET:{" "}
                <span style={{ color: "var(--halogen-white)" }}>
                  {bigOTarget}
                </span>
              </>
            )}
          </div>
          <div>
            FREQUENCY:{" "}
            <span style={{ color: "var(--open-sign-pink)" }}>HIGH</span> at{" "}
            {meta.companies.join(" · ")}
          </div>
          <div>ROLES: {meta.roles.join(" · ")}</div>
        </div>
      </div>
    </InfoBadge>
  );
}

export default LeetCodeBadge;
