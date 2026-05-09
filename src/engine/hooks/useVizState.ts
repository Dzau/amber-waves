// ============================================================================
// useVizState — shared state hook for visualizations. Pure-frame model:
// the viz computes buildFrame(step) from `step`, this hook owns the index,
// playback timer, and speed slider.
// ============================================================================

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export interface VizControlsState {
  step: number;
  isPlaying: boolean;
  speed: number; // multiplier 0.25..4
  totalSteps: number;
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  stepForward: () => void;
  stepBack: () => void;
  reset: () => void;
  jumpToEnd: () => void;
  setSpeed: (s: number) => void;
  setStep: (s: number) => void;
}

const BASE_FRAME_MS = 700;

export function useVizState({
  totalSteps,
}: {
  totalSteps: number;
}): VizControlsState {
  const reduced = useReducedMotion();
  const [step, setStepState] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const stepRef = useRef(step);
  stepRef.current = step;

  // Honor reduced motion: jump to end-state when the viz mounts/changes.
  useEffect(() => {
    if (reduced) {
      setStepState(Math.max(0, totalSteps - 1));
      setIsPlaying(false);
    }
  }, [reduced, totalSteps]);

  useEffect(() => {
    if (!isPlaying || reduced) return;
    if (step >= totalSteps - 1) {
      setIsPlaying(false);
      return;
    }
    const ms = Math.max(60, BASE_FRAME_MS / speed);
    const id = window.setTimeout(() => {
      setStepState((s) => Math.min(s + 1, totalSteps - 1));
    }, ms);
    return () => window.clearTimeout(id);
  }, [isPlaying, step, totalSteps, speed, reduced]);

  const play = useCallback(() => setIsPlaying(true), []);
  const pause = useCallback(() => setIsPlaying(false), []);
  const togglePlay = useCallback(() => setIsPlaying((p) => !p), []);
  const stepForward = useCallback(() => {
    setIsPlaying(false);
    setStepState((s) => Math.min(s + 1, totalSteps - 1));
  }, [totalSteps]);
  const stepBack = useCallback(() => {
    setIsPlaying(false);
    setStepState((s) => Math.max(s - 1, 0));
  }, []);
  const reset = useCallback(() => {
    setIsPlaying(false);
    setStepState(0);
  }, []);
  const jumpToEnd = useCallback(() => {
    setIsPlaying(false);
    setStepState(Math.max(0, totalSteps - 1));
  }, [totalSteps]);
  const setStep = useCallback(
    (s: number) => {
      setStepState(Math.max(0, Math.min(totalSteps - 1, s)));
    },
    [totalSteps],
  );

  return {
    step,
    isPlaying,
    speed,
    totalSteps,
    play,
    pause,
    togglePlay,
    stepForward,
    stepBack,
    reset,
    jumpToEnd,
    setSpeed,
    setStep,
  };
}
