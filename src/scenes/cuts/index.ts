import type { ComponentType } from "react";
import { CutDinerNight } from "./cut-diner-night";
import { CutEchoBooth } from "./cut-echo-booth";
import { CutAmberAlertBand } from "./cut-amber-alert-band";
import { CutTabletBlock14 } from "./cut-tablet-block14";
import { CutMeshOnline } from "./cut-mesh-online";
import { CutTabletBlock19 } from "./cut-tablet-block19";

export const SCENE_CUT_REGISTRY: Record<
  string,
  ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  "cut-diner-night": CutDinerNight,
  "cut-echo-booth": CutEchoBooth,
  "cut-amber-alert-band": CutAmberAlertBand,
  "cut-tablet-block14": CutTabletBlock14,
  "cut-mesh-online": CutMeshOnline,
  "cut-tablet-block19": CutTabletBlock19,
};
