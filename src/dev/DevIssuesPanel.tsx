import { useEffect, useState } from "react";
import { DEV_ISSUES } from "./issues";

const SEV_COLOR = { crit: "#ff2d6f", high: "#ff5500", low: "#ffb700" };
const STATUS_COLOR = { open: "#ff2d6f", wip: "#ffb700", fixed: "#39ff7a" };

export function DevIssuesPanel() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "`") setOpen((v) => !v);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 32,
        right: 16,
        zIndex: 9999,
        width: 400,
        background: "rgba(10,9,8,0.96)",
        border: "1px solid #ff2d6f",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        color: "#f4ede4",
        pointerEvents: "all",
      }}
    >
      <div
        style={{
          padding: "6px 10px",
          borderBottom: "1px solid #2c2c2e",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(255,45,111,0.08)",
        }}
      >
        <span style={{ color: "#ff2d6f", letterSpacing: "0.15em" }}>
          ▼ DEV ISSUES ({DEV_ISSUES.filter((i) => i.status !== "fixed").length}{" "}
          open)
        </span>
        <span style={{ color: "#8a8170", fontSize: 10 }}>` to close</span>
      </div>
      <div style={{ maxHeight: 400, overflowY: "auto" }}>
        {DEV_ISSUES.map((issue) => (
          <div
            key={issue.id}
            style={{
              padding: "8px 10px",
              borderBottom: "1px solid #1a1a1a",
              opacity: issue.status === "fixed" ? 0.4 : 1,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                marginBottom: 3,
              }}
            >
              <span style={{ color: "#8a8170" }}>#{issue.id}</span>
              <span
                style={{
                  color: SEV_COLOR[issue.severity],
                  textTransform: "uppercase",
                  fontSize: 9,
                  letterSpacing: "0.12em",
                }}
              >
                {issue.severity}
              </span>
              <span
                style={{
                  color: STATUS_COLOR[issue.status],
                  textTransform: "uppercase",
                  fontSize: 9,
                  letterSpacing: "0.12em",
                  marginLeft: "auto",
                }}
              >
                {issue.status}
              </span>
            </div>
            <div style={{ color: "#ff5500", fontSize: 10, marginBottom: 2 }}>
              {issue.scene}
            </div>
            <div style={{ color: "#c4b99a", lineHeight: 1.4 }}>
              {issue.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
