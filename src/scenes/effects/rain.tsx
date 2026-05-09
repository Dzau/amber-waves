// Rain — CSS-particle rain layer. Honors prefers-reduced-motion (renders
// fewer, slower drops).
import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";

export interface RainProps {
  count?: number;
}

export function Rain({ count = 60 }: RainProps) {
  const reduced = useReducedMotion();
  const effective = reduced ? Math.min(count, 12) : count;
  const drops = useMemo(() => {
    return Array.from({ length: effective }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: reduced ? 4 : 0.8 + Math.random() * 1.4,
      opacity: 0.2 + Math.random() * 0.5,
    }));
  }, [effective, reduced]);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <style>{`
        @keyframes amber-rain-drop {
          0% { transform: translateY(-10vh); opacity: 0; }
          10% { opacity: 0.5; }
          100% { transform: translateY(110vh); opacity: 0; }
        }
        .amber-rain-drop {
          position: absolute; top: 0;
          width: 1px; height: 60px;
          background: linear-gradient(to bottom, transparent, rgba(180,220,230,0.5), transparent);
          animation: amber-rain-drop linear infinite;
        }
      `}</style>
      {drops.map((d) => (
        <div
          key={d.id}
          className="amber-rain-drop"
          style={{
            left: `${d.left}%`,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
            opacity: d.opacity,
          }}
        />
      ))}
    </div>
  );
}

export default Rain;
