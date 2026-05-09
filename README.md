# Cyberpunk: Amber Waves

An algorithm-RPG set in 2046 dystopian America. Real LeetCode-grade interview problems wrapped in narrative missions. Calibrated to UVA Data Science + Computer Science new-grad interview surface.

## Stack

- Vite + React 18 + TypeScript (strict)
- Tailwind CSS (Truck-Stop Neon palette in `tailwind.config.js`)
- Zustand (state + persist for save/load)
- framer-motion (scene transitions, viz)
- Howler (audio buses: music / sfx / voice)

## Run

```bash
npm install
npm run dev
```

## Project layout

```
src/
  App.tsx                  # SceneController root
  main.tsx                 # React entry
  engine/                  # state, save/load, audio, sandbox, hooks
    store/                 # zustand slices
    sandbox/               # web-worker code execution
    hooks/                 # useVizState, useScene, etc.
    balance.ts             # all gameplay numbers in one place
  scenes/                  # cinematic scenes (title, diner, debrief, ...)
    backgrounds/           # SVG backgrounds (coney-island-diner.tsx, ...)
  characters/              # SVG portraits (echo.tsx, kai.tsx, ...)
  missions/                # one file per mission
    _mission.types.ts      # the Mission interface every mission implements
    m001.ts                # mission spec (algo + tests + canonical)
    m001.narrative.ts      # mission prose (narrative-writer's output)
  visualizations/          # animated algorithm visualizations
    _VizControls.tsx       # shared play/pause/step/speed bar
    m001.tsx               # one viz per mission
  ui/                      # reusable UI (LeetCodeBadge, StaticMeter, ...)
  styles/
    palette.css            # CSS variables for Truck-Stop Neon
    index.css              # tailwind + globals

docs/
  lore.md                  # narrative-writer reads this before every scene
  macro/                   # macro-game design specs

../amber_waves_act1.jsx    # original prototype (kept for reference until ported)
```

## Agent roster

Specialist subagents at `~/.claude/agents/`:
- **algo-author** — LeetCode-grade problems + tests + canonical
- **viz-engineer** — animated SVG/framer-motion visualizations
- **narrative-writer** — scenes, dialogue, lore continuity
- **visual-artist** — SVG portraits, backgrounds, UI
- **systems-eng** — engine systems (state, save, audio, sandbox)
- **macro-game** — territory map, Static curve, endings logic

QA skill at `~/.claude/skills/requirement-check/` runs at the end of every build wave.

## Mission build cycle

Wave 1 (parallel): algo-author + narrative-writer + visual-artist (only if new character/location)
Wave 2 (parallel): viz-engineer + audio (if needed)
Wave 3 (sequential): integrate → requirement-check → playtest → commit

See `~/.claude/plans/plan-out-the-optimal-unified-widget.md` for the full plan.
