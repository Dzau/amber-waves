# Cyberpunk: Amber Waves — Lore Bible

Single source of truth for narrative continuity. Read this before writing any scene.
Every fact added here cites the mission/scene it was added in.

## Premise

Year 2046, North United States of America (NUSA). The federal government is weak, ceremonial. States and corps run things. AI took 30–40% of cognitive white-collar tasks but not the jobs — there is a generation of overeducated underemployed engineers, lawyers, and analysts who built things for corps in their 20s and now build things against them in their 30s. Surveillance is everywhere but ambient. The lights stay on. Most people are doing fine, which is part of the horror.

The federal Amber Alert system, originally a missing-children broadcast (named after Amber Hagerman, 1996), has been quietly weaponized into a mandatory-broadcast surveillance and propaganda channel. The Rust's pirate broadcast, riding the same federal emergency frequency, is called **Amber Waves**. The mesh you build in the game is the Amber Waves transmitter network. The title is the protagonist's project.

## Aesthetic — Truck-Stop Neon

Edgerunners-coded cel-shading, but the palette is American roadside Americana decay rather than Tokyo neon.

Palette (CSS variables):
- `--asphalt: #0a0908` (background)
- `--open-sign-pink: #ff2d6f` (primary accent)
- `--gas-station-green: #39ff7a` (secondary accent)
- `--sodium-amber: #ffb700` (warning/active)
- `--smoked-chrome: #2c2c2e` (lines, edges)
- `--halogen-white: #f4ede4` (text, highlights)
- `--diesel-orange: #ff5500` (alerts)
- `--motel-pool-cyan: #4ad7d1` (Echo's cyber-eye when implant active)

## The Static mechanic

Player meter 0–100. Rises with chrome installs. Thresholds:
- 30: first audio glitch effect on dialogue
- 50: first scripted Static episode; first Echo humanity-anchor scene
- 70: Carrier Wave Unit (CWU) starts spawning; CWU ending becomes possible
- 90: 30% chance of forced Static episode at mission start
- 100: forced Static-crack ending

Echo is the only one who can pull you back. She does it through scripted humanity scenes, off-mission safehouse visits, and a late-game choice where she hands you part of her own neural buffer at cost to herself.

## Characters

### Kai Tanaka — protagonist
- Ex-OmniGrid data scientist, fired in the AI shakeout
- Lives in the Detroit Salvage Zone
- Voice: terse, dry, occasionally bitter. Uses engineering metaphors out loud ("the call stack of bad decisions"). Never melodramatic. Never quips Whedon-style.
- Starts with one piece of chrome (basic neural processor). Static = 0.

### Echo Reyes — love interest, partner
- Ex-Verity ML researcher who blew the whistle on a predictive-policing system that flagged children before they did anything. Three years on the run.
- Latina. Code-switches between technical precision and street slang.
- Has Kiroshi-grade optical chrome (cyber-eye) and a custom cortical implant that lets her ride electromagnetic signals. The bigger your mesh gets, the more she can do inside it.
- Voice: sharp, fast, warm with an edge. Funny when she's nervous. Quotes her abuela.
- Mood states (visual): neutral, smile, narrow, surprised.

## Factions

- **The Rust** — post-industrial Midwest hacker collective. Player's faction. Detroit HQ. (Replaces Edgerunners' Voodoo Boys.)
- **Bondsmen** — anti-debt heartland vigilantes. Burn credit reports, knee Caduceus claims adjusters.
- **Eaglebands** — right-libertarian militias / mercs. Country-music violence. Half the time fighting corps, half the time fighting you.
- **The Plat** — gig-economy organized fight cadre. Started as a DoorDash strike. Now they have guns.
- **Hollow** — climate-displaced Sun Belt youth diaspora. Phoenix kids in Buffalo. Desperate.
- **Sacred Heart** — Appalachian Catholic eco-anarchists. Strange and dangerous.
- **Mox of the Plains** — sex-worker mutual aid, operating out of repurposed motels along I-80.

## Corps

- **OmniGrid** — energy + payments. Texas-based. ERCOT × Visa.
- **Verity** — federal contractor for ID, social credit, eligibility checks. Palantir × Equifax.
- **Helios Resettlement** — privatized FEMA. Manages climate refugees, runs the camps.
- **AxonCorp** — surveillance, policing, body cameras turned everywhere.
- **Caduceus** — health insurance + AI denial-of-care.
- **Fortuna** — gig-worker debt + microlending. Owns Uber, DoorDash, and your back wages.
- **The Remnant** — post-MAGA right-populist media-political conglomerate. Owns the narrative.
- **NewCorps Coalition** — private military. Blackwater's grandchildren.

## Cities (decay tier)

- **Detroit Salvage Zone** — post-collapse free zone. Rust HQ. Where the game starts.
- **Phoenix Wilds** — climate-evac zone. Lawless heat-death badlands.
- **The Belt** — Rust Belt corridor of small cities clinging on.

## Cities (mid tier)

- **Cascadia Free Republic (PDX–SEA)** — blue soft-sovereign tech enclave. Friendly but watching you.
- **Texican Strip (HOU–DAL)** — corp-state run by OmniGrid. Hostile territory.

## Cities (high-tech tier)

- **Manhattan: The Stack-Above** — financial district partly flooded, traders take water-taxis. Above the waterline: elevated walkway grid 200 feet up. Holographic ad layer on every facade. NewCorps Coalition HQ towers over Bryant Park. Costco Cathedral on corp floors, Truck-Stop Neon at street level.
- **Los Angeles: The Stretch** — absorbed San Diego, single 200-mile supercity. Solar-canopy roofs over freeways. Human driving illegal in central LA. Helios Resettlement HQ on Bunker Hill. Wealthy districts buy "lung quality" subscriptions.
- **San Francisco: The Spire** — five mega-towers, each owned by a different AI lab. Streets immaculate, autonomous, surveilled to the millimeter. No homeless visible — "managed" by outreach drones. Cleanest skyline in NUSA. Most uncanny.

## Tech rules

- Personal compute is widespread but corp-monitored. Air-gapped hardware is contraband.
- Neural implants ("chrome") give superhuman capability at the cost of cyberpsychosis (here: Static).
- The federal emergency broadcast band is legally un-jammable. The Rust's whole insurgency rides this loophole.
- Corp grid (OmniGrid) is opt-out illegal in 38 states.
- License-plate readers, gait recognition, voiceprint sensors are ambient. The game's mesh is parallel infrastructure that doesn't touch any of it.

## Established events

- **Mission m001 — Boot Sequence** — Coney Island Diner, Detroit. Kai meets Echo. The Rust recruits him. He installs his first piece of voluntary chrome (basic neural processor). Static counter goes from 0 → 5–10. Echo briefs him on Block 14 routing. Mission algorithm: BFS single-source shortest path. (LC #1971 / #841 / #994 — high-frequency at Amazon, Meta, Google, Microsoft, Bloomberg.)

## Vocabulary / slang

- **chrome** — neural implants (verb: "chromed up")
- **mesh** — the Rust's parallel infrastructure
- **Static** — the cyberpsychosis-equivalent meter
- **CWU / Carrier Wave Unit** — federal squad that hunts Static-cracked operatives
- **the lights** — corp grid
- **going dark** — operating off-mesh, off-grid
- **NUSA** — North United States of America (the rump federal state)
