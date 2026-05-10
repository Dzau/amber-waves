export interface DevIssue {
  id: string;
  scene: string;
  severity: "crit" | "high" | "low";
  description: string;
  status: "open" | "wip" | "fixed";
}

export const DEV_ISSUES: DevIssue[] = [
  {
    id: "001",
    scene: "cut-echo-booth",
    severity: "high",
    description:
      "slice crops too aggressively into Echo's face — fixed: changed preserveAspectRatio to xMidYMin slice so top anchors to frame edge",
    status: "fixed",
  },
  {
    id: "002",
    scene: "title",
    severity: "crit",
    description:
      "Echo silhouette not visible — parent div had no height so height='75%' on SVG resolved to 0",
    status: "fixed",
  },
  {
    id: "003",
    scene: "cut-amber-alert-band",
    severity: "low",
    description:
      "Rooftop/broadcast detail lost after slice zoom — fixed: changed preserveAspectRatio to xMinYMin slice to anchor to upper-left",
    status: "fixed",
  },
  {
    id: "004",
    scene: "cut-tablet-block14 / cut-tablet-block19",
    severity: "high",
    description:
      "Hands holding tablet look broken/stubby — proportions and anatomy need rework in visual artist pass",
    status: "open",
  },
  {
    id: "005",
    scene: "title",
    severity: "crit",
    description:
      "Echo silhouette fix applied (height:80% on parent div) — verify renders correctly across viewport sizes",
    status: "fixed",
  },
  {
    id: "006",
    scene: "diner / debrief",
    severity: "crit",
    description:
      "Character sprites invisible — height cascade bug: SVG height='65%' resolved to 0 without explicit parent height. Fix: container height=SPRITE_H, motion.div height=100%, pass height=100% to Echo/Kai",
    status: "fixed",
  },
];
