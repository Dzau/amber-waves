// Title scene — boot screen with Echo silhouette behind the title.
import { motion } from "framer-motion";
import ConeyIslandDinerBackground from "./backgrounds/coney-island-diner";
import Echo from "../characters/echo";

export interface TitleSceneProps {
  onBegin: () => void;
}

export function TitleScene({ onBegin }: TitleSceneProps) {
  return (
    <motion.div
      key="title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative h-full"
    >
      <ConeyIslandDinerBackground />

      {/* Echo silhouette — large, right side, low opacity, tinted pink */}
      <div
        className="absolute pointer-events-none"
        style={{ right: "4%", bottom: 0 }}
        aria-hidden="true"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
        >
          <Echo
            mood="neutral"
            height={520}
            implantActive
            style={{
              opacity: 0.22,
              filter:
                "drop-shadow(0 0 40px rgba(255,45,111,0.55)) saturate(0) brightness(3)",
            }}
          />
        </motion.div>
      </div>

      {/* Pink glow bloom behind title text */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 38% at 42% 48%, rgba(255,45,111,0.09) 0%, transparent 100%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div
            className="text-[10px] tracking-[0.4em] font-terminal mb-4"
            style={{ color: "#8a8170" }}
          >
            A CODING RPG · ACT I
          </div>
          <div
            className="font-display neon-pink"
            style={{ fontSize: "clamp(46px, 9vw, 110px)", lineHeight: 1 }}
          >
            AMBER
            <br />
            WAVES
          </div>
          <div
            className="font-display mt-3"
            style={{
              fontSize: 18,
              letterSpacing: "0.18em",
              color: "var(--sodium-amber)",
            }}
          >
            ┄ BOOT SEQUENCE ┄
          </div>
          <div
            className="font-scrawl text-sm mt-5 max-w-md"
            style={{ color: "#8a8170" }}
          >
            DETROIT SALVAGE ZONE · 2046 · 03:14 LOCAL
            <br />
            The federal Amber Alert grid carries everything they need you to
            hear.
            <br />
            Tonight, you build the antenna that hijacks it.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex gap-3 mt-10"
        >
          <button
            type="button"
            className="px-6 py-3 font-display text-xs tracking-[0.18em]"
            style={{
              border: "2px solid rgba(255,45,111,0.5)",
              color: "var(--open-sign-pink)",
              background: "rgba(255,45,111,0.06)",
            }}
            onClick={onBegin}
            autoFocus
          >
            ▶ BEGIN
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-[10px] font-terminal mt-12 tracking-widest"
          style={{ color: "#8a8170" }}
        >
          code mission begins after intro · est. 8–15 min
        </motion.div>
      </div>
    </motion.div>
  );
}

export default TitleScene;
