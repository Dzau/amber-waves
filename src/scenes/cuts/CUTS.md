# Scene Cuts — Visual Artist Brief

Each cut is a full-bleed illustrated SVG panel. It overlays the background for the duration of one dialogue line, then fades out.
All panels share the same viewBox so the renderer can scale them uniformly.

**Render contract:**
- viewBox: `0 0 960 540` (16:9)
- Format: SVG component, exported as named React component from `./[cut-id].tsx`
- Animation: panel fades in over ~200ms, holds, fades out over ~300ms (handled by the scene renderer — do NOT bake transitions into the SVG)
- Cel-shaded, not photorealistic. Hard shadows, limited fill palette, thick stroke outlines (3–5px at 960 wide)
- No dialogue or UI text inside the SVG — all text lives in the dialogue box layer above

---

## Palette reference (from lore.md)

| Variable           | Hex       | Use                          |
|--------------------|-----------|------------------------------|
| `--asphalt`        | `#0a0908` | Deep background / night sky  |
| `--open-sign-pink` | `#ff2d6f` | Primary accent / pirate signal |
| `--gas-station-green` | `#39ff7a` | Mesh nodes / broadcast pulse |
| `--sodium-amber`   | `#ffb700` | Warning / federal Amber Alert band |
| `--smoked-chrome`  | `#2c2c2e` | Lines, edges, structural detail |
| `--halogen-white`  | `#f4ede4` | Highlights, rim light          |
| `--diesel-orange`  | `#ff5500` | Alert states / hot elements    |
| `--motel-pool-cyan`| `#4ad7d1` | Echo's cyber-eye / implant glow |

---

## Cut registry

| Cut ID | viewBox | Source scene | Trigger line |
|--------|---------|--------------|--------------|
| `cut-diner-night` | 0 0 960 540 | M001 cold open | NARRATOR opening line |
| `cut-echo-booth` | 0 0 960 540 | M001 cold open | Echo's first line |
| `cut-amber-alert-band` | 0 0 960 540 | M001 cold open | Echo's Amber Alert band explanation |
| `cut-tablet-block14` | 0 0 960 540 | M001 cold open | NARRATOR closing line |
| `cut-mesh-online` | 0 0 960 540 | M001 debrief | Echo's "eight more like this" line |
| `cut-tablet-block19` | 0 0 960 540 | M001 debrief | NARRATOR final line |

---

## cut-diner-night

**What to draw:**
Exterior establishing shot of the Coney Island diner at 3am. Flat-front American diner architecture — chrome trim, steamed windows, a hand-lettered menu board visible through the glass. OmniGrid power cables run illegally across the roofline (oversized, bundled, clearly not city-sanctioned — one is visibly tapped with a jury-rigged splice box). Rain-wet asphalt reflects the diner's neon in a long amber smear. The neon sign reads "CONEY" — the "I" is dead. No cars. Detroit Salvage Zone emptiness: a distant fire barrel, a collapsed parking structure edge-framing the right side.

**Camera:** Wide establishing. Low angle, slightly Dutch. Diner centered but pushed left by one third. Sky takes the upper-right quadrant — just asphalt black with distant OmniGrid tower blinkered red.

**Palette:**
- Dominant: `--asphalt` background, `--sodium-amber` for neon spill on wet ground
- Accent: `--open-sign-pink` bleeds from inside the diner onto the pavement (the pirate broadcast hardware is already running in there)
- Structural lines: `--smoked-chrome`
- The jury-rigged splice box should glow faintly `--diesel-orange` — it's hot, it's wrong, it's working

**Mood:** Quiet, not menacing. This place has been surviving longer than it should. The Coney is not dramatic — it just refuses to close.

---

## cut-echo-booth

**What to draw:**
Interior close-medium shot. Echo in the back booth, hands wrapped around a diner mug. She is looking directly at the viewer (i.e., at Kai — and therefore at the player). Neural implant at her left temple pulses a soft `--motel-pool-cyan` — a small disc-shaped port, not grotesque, almost jewelry. Her Kiroshi optical implant is her left eye: the iris is a flat cyan ring, not glowing aggressively, just present. Behind her: two small surveillance screens mounted high on the wall, showing grainy parking-lot feeds. A third screen shows static.

**Camera:** Three-quarter medium shot across the booth table. Eye level. The booth's vinyl is cracked red. An ashtray nobody uses. Her coffee mug is diner-thick white ceramic. She has not slept.

**Palette:**
- Echo's skin: warm brown, halogen-lit from above (the diner's fluorescents are barely holding on)
- Implant pulse: `--motel-pool-cyan` — subtle, not a beacon
- Booth background: deep `--asphalt` shadows, `--smoked-chrome` for the surveillance monitor frames
- The surveillance feeds should show just enough detail to register as "watching"
- Rim light from the diner's front neon catches her cheekbone: `--sodium-amber`

**Mood:** Assessment. She is deciding if you are worth her time. She has made this call before and been wrong.

---

## cut-amber-alert-band

**What to draw:**
Wide rooftop view of the Detroit skyline at night — not dystopian rubble, just a city that stopped getting investment. OmniGrid towers at intervals, each trailing a data-stream visualized as falling amber lines (think: matrix rain but amber, slower, federal). In the gaps between the towers, a different signal bleeds through: `--open-sign-pink` filaments, thin and irregular, riding the same frequency but in the white space between the amber streams. The pirate signal is not louder or brighter — it is just *there*, in the cracks.

A rooftop cell antenna (the mesh node) is visible in the foreground left, small and hand-built — a length of conduit, a zip-tied PCB, a blinking LED. The viewer is standing near it.

**Camera:** Looking across the skyline from rooftop height. Slight upward angle on the towers. The antenna is close — it is ours. The OmniGrid towers are far but tall. Amber sky at the horizon from light pollution; pure asphalt-black above.

**Palette:**
- Sky: gradient from `--sodium-amber` at the horizon to `--asphalt` overhead
- OmniGrid data streams: `--sodium-amber` falling lines, semi-transparent
- Pirate signal: `--open-sign-pink` — thinner, weaving *between* the amber streams, not overriding them
- Mesh node antenna: `--gas-station-green` LED blink, `--smoked-chrome` conduit
- City silhouette: near-black with `--halogen-white` window clusters

**Mood:** The pirate signal is not winning yet. It is surviving. That is enough for now.

---

## cut-tablet-block14

**What to draw:**
Extreme close-up. A battered tablet slides across a Formica diner table. The tablet screen glows with a graph schematic: Block 14's buildings as nodes (small circles, labeled 0–7), edges between them as lines, the diner at node 0 with a faint `--open-sign-pink` halo. The schematic style is technical — think hand-annotated whiteboard digitized, not a slick UI. Some edges have handwritten hop counts penciled in. The tablet case is scratched, one corner is taped. Two hands visible: one (Echo's, warm brown, a ring on the middle finger) withdrawing — she has let it go. The other (Kai's, lighter, slightly hesitant) just touching the edge — not taking it yet. The moment of transfer.

**Camera:** Bird's-eye, tight. The table fills the frame. The tablet is center. The hands are the story.

**Palette:**
- Table surface: `--smoked-chrome` Formica, coffee-ring stains in near-`--asphalt`
- Tablet screen: `--gas-station-green` for node circles, `--halogen-white` for edge lines, `--open-sign-pink` halo on node 0
- Echo's hand: warm brown with `--sodium-amber` ambient bounce from the table's neon reflection
- Kai's hand: cooler, slightly more `--halogen-white` lit — he is newer to this light

**Mood:** The job just became real. There is no going back from touching it.

---

## cut-mesh-online

**What to draw:**
Aerial view — directly overhead — of Block 14 at night. The city block is a grid of rooftops: flat, some with AC units, one with a water tower. Mesh nodes are visible on several rooftops as small green pulses. The BFS propagation is visible: node 0 (the diner's rooftop) at the center is the brightest `--gas-station-green`. Rings of nodes light outward in order — the visual should feel like a slow bloom or a sonar ping, not a lightning strike. Buildings that are unreachable (the -1 nodes) are dark. An OmniGrid substation on the block's south end is the dark anchor — it kills the signal around itself.

**Camera:** Directly overhead, high altitude. The block is small enough to see completely. City context visible at the edges — adjacent blocks, dark.

**Palette:**
- Block 14 nodes: `--gas-station-green` pulses, brighter at node 0, dimming slightly at greater hop distance (but all reachable nodes are lit)
- Unreachable building(s): `--smoked-chrome` rooftop, no glow
- OmniGrid substation: `--diesel-orange` warning outline, dark interior
- Street grid: `--smoked-chrome` lines on `--asphalt`
- Ambient haze: faint `--sodium-amber` from light pollution washing the upper atmosphere

**Mood:** Something just turned on that has never been on before. Eight more to go.

---

## cut-tablet-block19

**What to draw:**
The same composition as `cut-tablet-block14` — same table, same angle, same motion. Echo's hand withdrawing, Kai's hand reaching. But the tablet now shows Block 19's schematic. The graph is larger: more nodes (12–15), weighted edges marked with numbers, the topology more complex. The hand that reaches this time is less hesitant — Kai's fingers are already closing. He knows what this is now. Echo's hand has already let go completely; you can see the edge of her sleeve, that is all.

**Camera:** Same bird's-eye tight composition as `cut-tablet-block14`. Deliberate visual rhyme.

**Palette:**
- Same as `cut-tablet-block14` exactly — the rhyme depends on the palette match
- Block 19 schematic: same `--gas-station-green` nodes, `--halogen-white` edges, but weighted edge labels in `--sodium-amber` (they cost something now)
- Kai's hand is lit slightly warmer this time — he has been sitting in this diner long enough to pick up the ambient neon

**Mood:** The cold open closed a loop. This is what sequel looks like: the same shape, one more time, with more at stake.
