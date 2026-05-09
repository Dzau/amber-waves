// ============================================================================
// Mission 001 — Narrative
// All prose preserved verbatim from the prototype. narrative-writer owns this
// surface; this is just the relocation.
// ============================================================================

import type { MissionNarrative, NarrativeLine } from "./_mission.types";

export const M001_DINER_DIALOGUE: ReadonlyArray<NarrativeLine> = [
  {
    speaker: "NARRATOR",
    text: "The Coney Island runs on a stolen OmniGrid line. Echo is in the back booth, drinking burnt coffee like a person who has not slept in three days because she has not.",
    sceneCut: "cut-diner-night",
  },
  {
    speaker: "ECHO REYES",
    text: "You're Tanaka. The one Mira sent.",
    mood: "narrow",
    sceneCut: "cut-echo-booth",
  },
  {
    speaker: "KAI TANAKA",
    text: "Yeah. She said you needed someone who could ship.",
  },
  {
    speaker: "ECHO REYES",
    text: "I need someone who can build a node tonight. Not next week. Tonight. The Block 14 mesh is one antenna away from coverage and our old wirehead got picked up by Verity on Tuesday.",
    mood: "neutral",
  },
  {
    speaker: "KAI TANAKA",
    text: "What's the node do.",
  },
  {
    speaker: "ECHO REYES",
    text: "Routes a pirate broadcast across the federal Amber Alert band. That's the trick — the corps can't legally jam Amber Alerts, so we ride the channel. We just need every building on the block to know how many hops it is from this diner. Otherwise the broadcast routes wrong and dies.",
    mood: "smile",
    sceneCut: "cut-amber-alert-band",
  },
  {
    speaker: "ECHO REYES",
    text: "BFS. Single source. Should be a warmup for someone with your résumé.",
    mood: "narrow",
  },
  {
    speaker: "KAI TANAKA",
    text: "And the chrome?",
  },
  {
    speaker: "ECHO REYES",
    text: "Basic neural processor. You can't edit a routing table in your head without one. Wrench is in the back, she'll install it. It's a small piece. Almost everyone has one.",
    mood: "neutral",
  },
  {
    speaker: "ECHO REYES",
    text: "Almost.",
    mood: "narrow",
  },
  {
    speaker: "NARRATOR",
    text: "She slides a battered tablet across the table. The schematic of Block 14 is already loaded.",
    sceneCut: "cut-tablet-block14",
  },
];

export const m001Narrative: MissionNarrative = {
  coldOpen: M001_DINER_DIALOGUE,
  briefing: {
    tagline: "┄ ROUTE THE BLOCK ┄",
    body: "Echo's diner is your source node (0). Block 14 has 8 buildings connected by short-range comm hops. For the pirate broadcast to route correctly across the mesh, every building needs to know its minimum hop count from the diner.\n\nSome buildings won't be reachable — corp jammers, structural decay, dead lines. Those get -1.",
    chromeConsent: {
      title: "▼ CHROME INSTALL · CONSENT REQUIRED",
      body: "Wrench's neural processor grafts to your cervical spine and lights up the visual cortex. You'll be able to compile and step through code without a screen.\n\nSTATIC COST: +10 (baseline · low risk).\nEcho will keep an eye on it. She always does.",
      cta: "▶ accept install · begin mission",
    },
  },
  idle: "when you're ready. take your time. step the visualization first if it helps — that's what it's there for.",
  failure:
    "walk the trace. the failing case usually shows you what you missed — disconnected nodes, the source itself, that kind of thing.",
  hintReveal: "okay. stop. think about the pattern.",
  success: "mesh is up. block 14 is ours. nice work, choom.",
  debrief: [
    {
      speaker: "ECHO REYES",
      text: "That's a node. First of many. Mira's going to be insufferable about being right.",
      mood: "smile",
    },
    {
      speaker: "ECHO REYES",
      text: "We need eight more like this before the broadcast can carry. The next one is in Hamtramck — Block 19. Different graph, more nodes, weighted edges this time. Dijkstra. You'll need it.",
      mood: "neutral",
      sceneCut: "cut-mesh-online",
    },
    {
      speaker: "ECHO REYES",
      text: "Sleep first. Wrench will check your install in the morning. Don't push the static.",
      mood: "narrow",
    },
    {
      speaker: "NARRATOR",
      text: "She slides another tablet across the table. Block 19 schematic. She holds your gaze for half a second longer than she has to.",
      sceneCut: "cut-tablet-block19",
    },
  ],
};
