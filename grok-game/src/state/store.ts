import { create } from 'zustand';
import { Moment, Response, PlayerState, GamePhase } from '../types';
import { EmotionName } from '../theme/colors';

// Mock moments for the SeeThrough phase (simulating other players)
const mockMoments: Moment[] = [
  {
    id: 'mock1',
    promptId: 'lo01',
    text: 'The oak tree is smaller than I remember. The tire swing is gone. Someone painted the door red — it was always blue. I stood there until the new owner waved at me, and I waved back like a stranger.',
    emotions: ['sadness', 'loneliness', 'hope'],
    createdAt: Date.now() - 86400000,
    authorId: 'anon-1',
  },
  {
    id: 'mock2',
    promptId: 'di01',
    text: 'It doesn\'t fall — it floats. Each flake is different and I catch one and it dies on my palm. The whole world is quiet. I didn\'t know quiet had a color.',
    emotions: ['wonder', 'joy', 'surprise'],
    createdAt: Date.now() - 43200000,
    authorId: 'anon-2',
  },
  {
    id: 'mock3',
    promptId: 'cf01',
    text: 'The words left my mouth like a door slamming. Her face changed in a way I\'ve never seen before — not anger, just... closing. Like watching a light turn off behind someone\'s eyes.',
    emotions: ['shame', 'fear', 'grief'],
    createdAt: Date.now() - 21600000,
    authorId: 'anon-3',
  },
];

interface GameStore {
  // Player
  player: PlayerState;
  hasCompletedOnboarding: boolean;

  // Game state
  currentPhase: GamePhase;
  currentMoments: Moment[]; // moments to empathize with
  myMoments: Moment[]; // moments I've written
  myResponses: Response[];

  // Draft state for ShareEyes
  draftText: string;
  draftEmotions: EmotionName[];

  // Actions
  setPhase: (phase: GamePhase) => void;
  completeOnboarding: () => void;

  // ShareEyes actions
  setDraftText: (text: string) => void;
  toggleDraftEmotion: (emotion: EmotionName) => void;
  submitMoment: (promptId: string) => void;

  // SeeThrough actions
  loadMockMoments: () => void;
  submitResponse: (momentId: string, guessedEmotions: EmotionName[], chosenAction: number, innerVoice: string) => void;

  // Score
  addGrokScore: (delta: number) => void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  player: {
    id: 'local-player',
    grokScore: 0,
    momentsWritten: 0,
    responsesGiven: 0,
    averageResonance: 0,
    threadsFormed: 0,
  },
  hasCompletedOnboarding: false,
  currentPhase: 'onboarding',
  currentMoments: [],
  myMoments: [],
  myResponses: [],
  draftText: '',
  draftEmotions: [],

  setPhase: (phase) => set({ currentPhase: phase }),
  completeOnboarding: () => set({ hasCompletedOnboarding: true, currentPhase: 'shareEyes' }),

  setDraftText: (text) => set({ draftText: text }),
  toggleDraftEmotion: (emotion) => {
    const current = get().draftEmotions;
    if (current.includes(emotion)) {
      set({ draftEmotions: current.filter((e) => e !== emotion) });
    } else if (current.length < 3) {
      set({ draftEmotions: [...current, emotion] });
    }
  },

  submitMoment: (promptId) => {
    const { draftText, draftEmotions, myMoments, player } = get();
    const newMoment: Moment = {
      id: `m-${Date.now()}`,
      promptId,
      text: draftText,
      emotions: draftEmotions,
      createdAt: Date.now(),
      authorId: player.id,
    };
    set({
      myMoments: [...myMoments, newMoment],
      draftText: '',
      draftEmotions: [],
      player: { ...player, momentsWritten: player.momentsWritten + 1 },
      currentPhase: 'seeThrough',
    });
  },

  loadMockMoments: () => set({ currentMoments: mockMoments }),

  submitResponse: (momentId, guessedEmotions, chosenAction, innerVoice) => {
    const { myResponses, player } = get();
    const newResponse: Response = {
      id: `r-${Date.now()}`,
      momentId,
      guessedEmotions,
      chosenAction,
      innerVoice,
      responderId: player.id,
      createdAt: Date.now(),
    };
    set({
      myResponses: [...myResponses, newResponse],
      player: { ...player, responsesGiven: player.responsesGiven + 1 },
    });
  },

  addGrokScore: (delta) => {
    const { player } = get();
    set({ player: { ...player, grokScore: player.grokScore + delta } });
  },
}));
