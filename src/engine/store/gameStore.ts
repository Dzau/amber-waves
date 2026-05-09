// ============================================================================
// Zustand store — the single source of truth for scene + mission + Static.
// Save/load (persist) is left for systems-eng to wire later.
// ============================================================================

import { create } from "zustand";
import type { MissionId } from "../../missions/_mission.types";

export type SceneId = "title" | "diner" | "briefing" | "code" | "debrief";

export interface ChromeInstall {
  name: string;
  staticCost: number;
}

export interface GameState {
  scene: SceneId;
  missionId: MissionId;
  staticLevel: number;
  chrome: ChromeInstall[];
  /** Player code per mission, keyed by mission id. */
  codeByMission: Record<MissionId, string>;
  /** Number of failed test runs for the current mission (drives hint ladder). */
  failedAttempts: number;
  /** Live announcement string for aria-live region. */
  announcement: string;

  // ---- actions ----
  setScene: (scene: SceneId) => void;
  setMission: (id: MissionId) => void;
  setCode: (id: MissionId, code: string) => void;
  installChrome: (install: ChromeInstall) => void;
  bumpStatic: (delta: number) => void;
  registerFailedAttempt: () => void;
  resetMissionAttempts: () => void;
  announce: (msg: string) => void;
  resetAll: (defaults: { missionId: MissionId; starterCode: string }) => void;
}

export const useGameStore = create<GameState>((set) => ({
  scene: "title",
  missionId: "m001",
  staticLevel: 0,
  chrome: [],
  codeByMission: {} as Record<MissionId, string>,
  failedAttempts: 0,
  announcement: "",

  setScene: (scene) =>
    set((s) => ({
      scene,
      announcement: `Scene: ${scene}` + (s.announcement === "" ? "" : ""),
    })),
  setMission: (missionId) => set({ missionId, failedAttempts: 0 }),
  setCode: (id, code) =>
    set((s) => ({ codeByMission: { ...s.codeByMission, [id]: code } })),
  installChrome: (install) =>
    set((s) => ({
      chrome: [...s.chrome, install],
      staticLevel: Math.min(100, s.staticLevel + install.staticCost),
    })),
  bumpStatic: (delta) =>
    set((s) => ({
      staticLevel: Math.max(0, Math.min(100, s.staticLevel + delta)),
    })),
  registerFailedAttempt: () =>
    set((s) => ({ failedAttempts: s.failedAttempts + 1 })),
  resetMissionAttempts: () => set({ failedAttempts: 0 }),
  announce: (msg) => set({ announcement: msg }),
  resetAll: ({ missionId, starterCode }) =>
    set({
      scene: "title",
      missionId,
      staticLevel: 0,
      chrome: [],
      codeByMission: { [missionId]: starterCode } as Record<MissionId, string>,
      failedAttempts: 0,
      announcement: "Game reset.",
    }),
}));
