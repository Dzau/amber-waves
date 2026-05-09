// Generic styled info badge — thin wrapper used by sub-badges.
import type { CSSProperties, ReactNode } from "react";

export interface InfoBadgeProps {
  children: ReactNode;
  tone?: "green" | "amber" | "pink" | "neutral";
  className?: string;
  style?: CSSProperties;
}

const toneToBorder: Record<NonNullable<InfoBadgeProps["tone"]>, string> = {
  green: "rgba(57,255,122,0.4)",
  amber: "rgba(255,183,0,0.5)",
  pink: "rgba(255,45,111,0.5)",
  neutral: "#2c2c2e",
};
const toneToBg: Record<NonNullable<InfoBadgeProps["tone"]>, string> = {
  green: "rgba(57,255,122,0.04)",
  amber: "rgba(255,183,0,0.04)",
  pink: "rgba(255,45,111,0.04)",
  neutral: "rgba(255,255,255,0.02)",
};

export function InfoBadge({
  children,
  tone = "neutral",
  className = "",
  style,
}: InfoBadgeProps) {
  return (
    <div
      className={`relative px-4 py-3 ${className}`}
      style={{
        border: `1px solid ${toneToBorder[tone]}`,
        background: toneToBg[tone],
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default InfoBadge;
