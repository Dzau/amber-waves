// ============================================================================
// Mission registry — single import point for the SceneController.
//
// Adding a new mission is a one-file change here: import the bundle, add it to
// the map. The Mission interface guarantees shape across the registry.
// ============================================================================

import { m001 } from "./m001";
import { m001Narrative } from "./m001.narrative";
import M001Viz from "../visualizations/m001";
import type { MissionBundle, MissionId } from "./_mission.types";

// We widen the per-mission generic to the registry's lowest common type so the
// registry can be a uniform map. Per-mission code retains its own narrow types.
type AnyMissionBundle = MissionBundle<readonly unknown[], unknown>;

export const MISSIONS: Readonly<Record<MissionId, AnyMissionBundle>> = {
  m001: {
    spec: m001 as AnyMissionBundle["spec"],
    visualization: M001Viz,
    narrative: m001Narrative,
  },
};

export function getMission(id: MissionId): AnyMissionBundle {
  const bundle = MISSIONS[id];
  if (!bundle) throw new Error(`Mission not found: ${id}`);
  return bundle;
}
