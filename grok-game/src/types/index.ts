import { EmotionName } from '../theme/colors';

export interface Moment {
  id: string;
  promptId: string;
  text: string;
  emotions: EmotionName[];
  createdAt: number;
  authorId: string;
}

export interface Response {
  id: string;
  momentId: string;
  guessedEmotions: EmotionName[];
  chosenAction: number; // index of the chosen action option
  innerVoice: string;
  responderId: string;
  createdAt: number;
}

export interface ResonanceRating {
  responseId: string;
  momentId: string;
  score: number; // 1-5
}

export interface LensPrompt {
  id: string;
  text: string;
  category: PromptCategory;
  depth: number; // 1-3, unlocked at higher Grok Scores
  actions: string[]; // 4 possible "what would they do next" options
}

export type PromptCategory =
  | 'identity'
  | 'connection'
  | 'loss'
  | 'discovery'
  | 'conflict'
  | 'growth'
  | 'memory'
  | 'hope';

export interface PlayerState {
  id: string;
  grokScore: number;
  momentsWritten: number;
  responsesGiven: number;
  averageResonance: number;
  threadsFormed: number;
}

export type GamePhase = 'onboarding' | 'shareEyes' | 'seeThrough' | 'ripple';
