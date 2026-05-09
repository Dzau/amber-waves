// Scanlines + vignette overlay. Pure CSS, fixed-position.
export function Scanlines() {
  return (
    <>
      <style>{`
        .amber-scanlines::before {
          content: '';
          position: fixed; inset: 0; pointer-events: none; z-index: 200;
          background: repeating-linear-gradient(
            to bottom,
            rgba(0,0,0,0) 0px,
            rgba(0,0,0,0) 2px,
            rgba(0,0,0,0.13) 3px,
            rgba(0,0,0,0) 4px
          );
          mix-blend-mode: multiply;
        }
        .amber-scanlines::after {
          content: '';
          position: fixed; inset: 0; pointer-events: none; z-index: 199;
          background: radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.6) 100%);
        }
      `}</style>
    </>
  );
}

export default Scanlines;
