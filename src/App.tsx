// ============================================================================
// SceneController — root of the game. Reads scene from Zustand, routes to the
// active scene, fades between with framer-motion's <AnimatePresence>.
// ============================================================================

import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useGameStore } from "./engine/store/gameStore";
import { getMission } from "./missions/_registry";
import TitleScene from "./scenes/title";
import DinerScene from "./scenes/diner";
import BriefingScene from "./scenes/briefing";
import CodeMissionScene from "./scenes/code-mission";
import DebriefScene from "./scenes/debrief";
import Scanlines from "./scenes/effects/scanlines";
import CrtFlickerStyles, {
  useCrtFlickerClass,
} from "./scenes/effects/crt-flicker";
import NeonGlowStyles, { NeonGlowSvgDefs } from "./scenes/effects/neon-glow";

const SCENE_LABELS: Record<string, string> = {
  title: "TITLE",
  diner: "DINER · INTRO",
  briefing: "MISSION BRIEF",
  code: "CODE · ROUTE THE BLOCK",
  debrief: "MISSION COMPLETE",
};

function StatusBar({
  scene,
  staticLevel,
}: {
  scene: string;
  staticLevel: number;
}) {
  return (
    <div
      className="flex items-center justify-between px-4 py-2 text-[10px]"
      style={{
        borderBottom: "1px solid #2c2c2e",
        background: "rgba(10,9,8,0.85)",
        backdropFilter: "blur(2px)",
      }}
      role="banner"
    >
      <div
        className="flex items-center gap-4 font-terminal"
        style={{ color: "#8a8170" }}
      >
        <span>
          <span
            className="amber-blink"
            style={{ color: "var(--open-sign-pink)" }}
          >
            ●
          </span>{" "}
          AMBER WAVES RELAY
        </span>
        <span>ACT I :: BOOT SEQUENCE :: {SCENE_LABELS[scene] ?? scene}</span>
        <span style={{ color: "var(--diesel-orange)" }}>DSZ-7 // BLOCK 14</span>
      </div>
      <div
        className="flex items-center gap-4 font-terminal"
        style={{ color: "#8a8170" }}
      >
        <span>
          STATIC{" "}
          <span
            style={{
              color:
                staticLevel > 60
                  ? "var(--diesel-orange)"
                  : staticLevel > 30
                    ? "var(--sodium-amber)"
                    : "var(--gas-station-green)",
            }}
          >
            {String(staticLevel).padStart(3, "0")}/100
          </span>
        </span>
      </div>
    </div>
  );
}

export default function App() {
  const scene = useGameStore((s) => s.scene);
  const setScene = useGameStore((s) => s.setScene);
  const missionId = useGameStore((s) => s.missionId);
  const setCode = useGameStore((s) => s.setCode);
  const installChrome = useGameStore((s) => s.installChrome);
  const staticLevel = useGameStore((s) => s.staticLevel);
  const announcement = useGameStore((s) => s.announcement);
  const announce = useGameStore((s) => s.announce);
  const resetAll = useGameStore((s) => s.resetAll);

  const bundle = getMission(missionId);
  const { spec: mission, narrative, visualization: Viz } = bundle;
  const crtClass = useCrtFlickerClass();

  // Seed mission code on first load.
  useEffect(() => {
    setCode(mission.id, mission.starterCode);
  }, [mission.id, mission.starterCode, setCode]);

  return (
    <div
      className={`h-full flex flex-col overflow-hidden amber-scanlines ${crtClass}`}
      style={{
        background:
          "radial-gradient(ellipse at 80% 0%, rgba(255,45,111,0.06), transparent 50%), radial-gradient(ellipse at 0% 100%, rgba(57,255,122,0.05), transparent 60%), var(--asphalt)",
        color: "var(--halogen-white)",
      }}
    >
      <CrtFlickerStyles />
      <Scanlines />
      <NeonGlowStyles />
      <NeonGlowSvgDefs />
      <style>{`
        .amber-blink { animation: amber-blink 1.1s steps(2) infinite; }
        @keyframes amber-blink { 50% { opacity: 0; } }
      `}</style>

      <StatusBar scene={scene} staticLevel={staticLevel} />

      {/* Live region for announcements (test results, scene changes) */}
      <div aria-live="polite" role="status" className="sr-only">
        {announcement}
      </div>

      <div className="relative flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          {scene === "title" && (
            <TitleScene
              key="title"
              onBegin={() => {
                announce("Entering diner.");
                setScene("diner");
              }}
            />
          )}
          {scene === "diner" && (
            <DinerScene
              key="diner"
              onContinue={() => {
                announce("Mission briefing.");
                setScene("briefing");
              }}
              announce={announce}
            />
          )}
          {scene === "briefing" && (
            <BriefingScene
              key="briefing"
              mission={mission}
              narrative={narrative}
              onAccept={() => {
                installChrome({
                  name: "basic neural processor",
                  staticCost: mission.staticCost,
                });
                announce(
                  `Chrome installed. Static +${mission.staticCost}. Beginning mission.`,
                );
                setScene("code");
              }}
            />
          )}
          {scene === "code" && (
            <CodeMissionScene
              key="code"
              mission={mission}
              narrative={narrative}
              Visualization={Viz}
              onComplete={() => {
                announce("Mission complete. Block 14 live.");
                setScene("debrief");
              }}
            />
          )}
          {scene === "debrief" && (
            <DebriefScene
              key="debrief"
              narrative={narrative}
              meshNodes={8}
              onReplay={() =>
                resetAll({
                  missionId: mission.id,
                  starterCode: mission.starterCode,
                })
              }
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
