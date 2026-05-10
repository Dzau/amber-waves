import { useEffect, useState } from "react";
import { DEV_ISSUES, type DevIssue } from "./issues";

const SEV_COLOR = { crit: "#ff2d6f", high: "#ff5500", low: "#ffb700" };
const STATUS_COLOR = { open: "#ff2d6f", wip: "#ffb700", fixed: "#39ff7a" };
const LS_KEY = "amber-waves-dev-issues";

function loadCustomIssues(): DevIssue[] {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) ?? "[]");
  } catch {
    return [];
  }
}

function saveCustomIssues(issues: DevIssue[]) {
  localStorage.setItem(LS_KEY, JSON.stringify(issues));
}

const BLANK = {
  scene: "",
  severity: "high" as DevIssue["severity"],
  description: "",
};

export function DevIssuesPanel() {
  const [open, setOpen] = useState(false);
  const [customIssues, setCustomIssues] =
    useState<DevIssue[]>(loadCustomIssues);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState(BLANK);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "`") setOpen((v) => !v);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const allIssues = [...DEV_ISSUES, ...customIssues];

  function addIssue() {
    if (!form.scene.trim() || !form.description.trim()) return;
    const nextId = String(allIssues.length + 1).padStart(3, "0");
    const newIssue: DevIssue = {
      id: nextId,
      scene: form.scene.trim(),
      severity: form.severity,
      description: form.description.trim(),
      status: "open",
    };
    const updated = [...customIssues, newIssue];
    setCustomIssues(updated);
    saveCustomIssues(updated);
    setForm(BLANK);
    setAdding(false);
  }

  function updateStatus(id: string, status: DevIssue["status"]) {
    const isBuiltIn = DEV_ISSUES.some((i) => i.id === id);
    if (isBuiltIn) return; // built-in issues are read-only
    const updated = customIssues.map((i) =>
      i.id === id ? { ...i, status } : i,
    );
    setCustomIssues(updated);
    saveCustomIssues(updated);
  }

  if (!open) return null;

  const openCount = allIssues.filter((i) => i.status !== "fixed").length;

  return (
    <div
      style={{
        position: "fixed",
        top: 32,
        right: 16,
        zIndex: 9999,
        width: 420,
        background: "rgba(10,9,8,0.97)",
        border: "1px solid #ff2d6f",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        color: "#f4ede4",
        pointerEvents: "all",
      }}
    >
      {/* Header */}
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
          ▼ DEV ISSUES ({openCount} open)
        </span>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button
            type="button"
            onClick={() => setAdding((v) => !v)}
            style={{
              background: "rgba(255,45,111,0.15)",
              border: "1px solid rgba(255,45,111,0.4)",
              color: "#ff2d6f",
              fontSize: 10,
              padding: "2px 7px",
              cursor: "pointer",
              letterSpacing: "0.1em",
            }}
          >
            {adding ? "✕ cancel" : "+ add"}
          </button>
          <span style={{ color: "#8a8170", fontSize: 10 }}>` to close</span>
        </div>
      </div>

      {/* Add form */}
      {adding && (
        <div
          style={{
            padding: "10px",
            borderBottom: "1px solid #2c2c2e",
            background: "rgba(255,45,111,0.04)",
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <input
            placeholder="scene / component"
            value={form.scene}
            onChange={(e) => setForm((f) => ({ ...f, scene: e.target.value }))}
            style={inputStyle}
          />
          <textarea
            placeholder="description"
            value={form.description}
            onChange={(e) =>
              setForm((f) => ({ ...f, description: e.target.value }))
            }
            rows={2}
            style={{ ...inputStyle, resize: "vertical" }}
          />
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ color: "#8a8170", fontSize: 10 }}>SEV:</span>
            {(["crit", "high", "low"] as DevIssue["severity"][]).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setForm((f) => ({ ...f, severity: s }))}
                style={{
                  fontSize: 9,
                  padding: "2px 6px",
                  cursor: "pointer",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  border: `1px solid ${SEV_COLOR[s]}`,
                  color: form.severity === s ? "#0a0908" : SEV_COLOR[s],
                  background:
                    form.severity === s ? SEV_COLOR[s] : "transparent",
                }}
              >
                {s}
              </button>
            ))}
            <button
              type="button"
              onClick={addIssue}
              style={{
                marginLeft: "auto",
                fontSize: 10,
                padding: "3px 10px",
                cursor: "pointer",
                letterSpacing: "0.12em",
                border: "1px solid #39ff7a",
                color: "#0a0908",
                background: "#39ff7a",
              }}
            >
              LOG ISSUE
            </button>
          </div>
        </div>
      )}

      {/* Issue list */}
      <div style={{ maxHeight: 400, overflowY: "auto" }}>
        {allIssues.map((issue) => {
          const isCustom = !DEV_ISSUES.some((i) => i.id === issue.id);
          return (
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
                {isCustom ? (
                  <select
                    value={issue.status}
                    onChange={(e) =>
                      updateStatus(
                        issue.id,
                        e.target.value as DevIssue["status"],
                      )
                    }
                    style={{
                      marginLeft: "auto",
                      background: "transparent",
                      border: `1px solid ${STATUS_COLOR[issue.status]}`,
                      color: STATUS_COLOR[issue.status],
                      fontSize: 9,
                      padding: "1px 4px",
                      cursor: "pointer",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    <option value="open">open</option>
                    <option value="wip">wip</option>
                    <option value="fixed">fixed</option>
                  </select>
                ) : (
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
                )}
              </div>
              <div style={{ color: "#ff5500", fontSize: 10, marginBottom: 2 }}>
                {issue.scene}
              </div>
              <div style={{ color: "#c4b99a", lineHeight: 1.4 }}>
                {issue.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid #2c2c2e",
  color: "#f4ede4",
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
  padding: "4px 7px",
  outline: "none",
  boxSizing: "border-box",
};
