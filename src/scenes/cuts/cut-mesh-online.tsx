// Stub — visual-artist is rendering the real version.
import type { CSSProperties } from "react";
type Props = { className?: string; style?: CSSProperties };
export function CutMeshOnline({ className, style }: Props) {
  return (
    <svg
      viewBox="0 0 960 540"
      width="100%"
      height="100%"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="960" height="540" fill="#0a0908" />
    </svg>
  );
}
