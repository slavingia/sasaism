import { EmotionName } from '../theme/colors';

/**
 * Calculate empathy accuracy: how many emotions the responder guessed correctly.
 * Returns 0-1 score.
 */
export function calculateEmotionAccuracy(
  actual: EmotionName[],
  guessed: EmotionName[]
): number {
  if (actual.length === 0) return 0;
  const correct = guessed.filter((e) => actual.includes(e)).length;
  const total = Math.max(actual.length, guessed.length);
  return correct / total;
}

/**
 * Calculate overall empathy score for a response.
 * Weights: emotion accuracy (40%), action prediction (30%), resonance rating (30%).
 */
export function calculateEmpathyScore(
  emotionAccuracy: number,
  correctAction: boolean,
  resonanceRating: number // 1-5
): number {
  const normalizedResonance = (resonanceRating - 1) / 4; // 0-1
  const actionScore = correctAction ? 1 : 0;
  return emotionAccuracy * 0.4 + actionScore * 0.3 + normalizedResonance * 0.3;
}

/**
 * Calculate Grok Score delta from a single interaction.
 * Both the author and responder gain points — conservation of justice.
 */
export function calculateGrokDelta(empathyScore: number): {
  responderDelta: number;
  authorDelta: number;
} {
  const base = empathyScore * 10;
  return {
    responderDelta: Math.round(base),
    authorDelta: Math.round(base * 0.5), // authors gain from being understood
  };
}

/**
 * Determine depth tier unlocked by a Grok Score.
 */
export function getUnlockedDepth(grokScore: number): number {
  if (grokScore >= 200) return 3;
  if (grokScore >= 50) return 2;
  return 1;
}
