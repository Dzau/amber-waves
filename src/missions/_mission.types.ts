// ============================================================================
// Mission framework types — the contract every mission implements.
//
// Shape comes directly from `~/.claude/agents/algo-author.md`. Visualizations
// and narrative are decoupled (separate types exported here) so each
// specialist agent can own its own surface without colliding.
// ============================================================================

import type { ComponentType } from "react";

// ----------------------------------------------------------------------------
// Mission identity
// ----------------------------------------------------------------------------

/** Sequential, zero-padded mission id. e.g. 'm001'. */
export type MissionId = `m${string}`;

export type ActNumber = 1 | 2 | 3 | 4 | 5;

export type Difficulty = "Easy" | "Medium" | "Hard";

// ----------------------------------------------------------------------------
// LeetCode pedigree — surfaced via LeetCodeBadge in briefing + code scenes
// ----------------------------------------------------------------------------

export interface LeetCodeMeta {
  /** LC problem number this mission's algorithm mirrors. */
  lcNumber: number;
  /** Exact LC title. */
  lcTitle: string;
  difficulty: Difficulty;
  /** ≥3 FAANG/big-tech companies known to ask it. */
  companies: readonly string[];
  /** Roles the problem maps to. */
  roles: readonly string[];
  /** LC topic tags. */
  topicTags: readonly string[];
  /** Optional sibling LC problems with the same pattern. */
  equivalentLcNumbers?: readonly number[];
}

// ----------------------------------------------------------------------------
// Test cases — generic over the input tuple shape
// ----------------------------------------------------------------------------

export interface TestCase<TInput extends readonly unknown[], TOutput> {
  /** Short label, e.g. 'trivial', 'cycle', 'block 14'. */
  name: string;
  /** Argument list passed to `solve(...input)`. */
  input: TInput;
  expected: TOutput;
  /** Optional human-readable description for failure UI. */
  description?: string;
}

// ----------------------------------------------------------------------------
// Complexity & cost
// ----------------------------------------------------------------------------

export interface Complexity {
  /** Big-O time, e.g. 'O(V + E)'. */
  time: string;
  /** Big-O space, e.g. 'O(V)'. */
  space: string;
}

// ----------------------------------------------------------------------------
// The core Mission spec — generic over input/output of `solve`
// ----------------------------------------------------------------------------

export interface Mission<
  TInput extends readonly unknown[] = readonly unknown[],
  TOutput = unknown,
> {
  id: MissionId;
  act: ActNumber;
  /** In-world mission name, e.g. 'Route the Block'. */
  title: string;
  leetcodeMeta: LeetCodeMeta;
  /** Markdown, in the game's voice (fictional wrapper). */
  problemStatement: string;
  /** The dry LC version, for the "show me the textbook" toggle. */
  realProblemStatement: string;
  /** TS-style signature, e.g. 'function solve(n, edges) -> number[]'. */
  signature: string;
  /** Code shown in the editor on first load. */
  starterCode: string;
  /** Test cases run against the player's solve(). */
  testCases: ReadonlyArray<TestCase<TInput, TOutput>>;
  /** Reference implementation, hits the optimal complexity. */
  canonicalSolution: string;
  complexity: Complexity;
  /**
   * Hint ladder — escalates with failed attempts.
   *  - hints[0]: first failure
   *  - hints[1]: third failure
   *  - hints[2]: reveal-hint (algorithm name, not the code)
   */
  hints: readonly [string, string, string];
  /** Static gained on mission accept. Per-act range in algo-author.md. */
  staticCost: number;
}

// ----------------------------------------------------------------------------
// Visualization — a self-contained React component per mission
// ----------------------------------------------------------------------------

export interface MissionVisualizationProps {
  /** Optional initial speed multiplier (0.25 – 4). */
  speed?: number;
}

export type MissionVisualization = ComponentType<MissionVisualizationProps>;

// ----------------------------------------------------------------------------
// Narrative — narrative-writer's surface for the mission
// ----------------------------------------------------------------------------

/** Reactive line keyed to a moment Echo (or NARRATOR / KAI) speaks. */
export interface NarrativeLine {
  speaker: "ECHO REYES" | "KAI TANAKA" | "NARRATOR" | "WRENCH" | "MIRA";
  text: string;
  /** Echo's mood at this beat — drives the portrait. */
  mood?: "neutral" | "smile" | "narrow" | "surprised";
  /** If set, a full-bleed illustrated panel overlays the background for this line. Key maps to SceneCutRegistry. */
  sceneCut?: string;
}

export interface MissionNarrative {
  /** Optional pre-mission cinematic before briefing (a cold open). */
  coldOpen?: readonly NarrativeLine[];
  /** Briefing prose shown alongside the formal problem statement. */
  briefing: {
    /** In-world tagline shown under the mission number. */
    tagline: string;
    /** Markdown body, the in-world spin on the problem. */
    body: string;
    /** Consent / install copy on the chrome panel. */
    chromeConsent?: {
      title: string;
      body: string;
      cta: string;
    };
  };
  /** Echo's headset chatter while the player is at the editor. */
  idle: string;
  /** Echo's reaction when tests are failing. */
  failure: string;
  /** Hint reveal voiceline (precedes hints[2]). */
  hintReveal?: string;
  /** Echo's reaction on all-pass. */
  success: string;
  /** Post-mission debrief lines (full cinematic). */
  debrief: readonly NarrativeLine[];
}

// ----------------------------------------------------------------------------
// Bundle: spec + visualization + narrative for the registry
// ----------------------------------------------------------------------------

export interface MissionBundle<
  TInput extends readonly unknown[] = readonly unknown[],
  TOutput = unknown,
> {
  spec: Mission<TInput, TOutput>;
  visualization: MissionVisualization;
  narrative: MissionNarrative;
}
