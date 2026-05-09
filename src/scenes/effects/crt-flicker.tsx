// CRT flicker — class injector. Apply the className to the root container.
import { useReducedMotion } from "framer-motion";

export function useCrtFlickerClass(): string {
  const reduced = useReducedMotion();
  return reduced ? "" : "amber-crt";
}

export function CrtFlickerStyles() {
  return (
    <style>{`
      @keyframes amber-crt-flicker {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.92; }
        92% { opacity: 0.97; }
      }
      .amber-crt { animation: amber-crt-flicker 7s infinite; }
    `}</style>
  );
}

export default CrtFlickerStyles;
