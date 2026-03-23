export const colors = {
  // Primary palette — warm, organic, interconnected
  gold: '#D4A853',
  goldLight: '#E8C97A',
  goldDark: '#B08930',
  deepBlue: '#1B2A4A',
  deepBlueLighter: '#2A3D66',
  midnight: '#0F1A2E',
  earth: '#8B6F47',
  earthLight: '#A68B5B',
  warmWhite: '#F5F0E8',
  softCream: '#FAF7F0',
  mist: '#D9D2C7',

  // Semantic
  background: '#0F1A2E',
  surface: '#1B2A4A',
  surfaceLight: '#2A3D66',
  text: '#F5F0E8',
  textSecondary: '#D9D2C7',
  textMuted: '#8B8578',
  accent: '#D4A853',
  accentLight: '#E8C97A',
  success: '#6BAF7A',
  error: '#C75D5D',

  // Emotion tag colors
  emotions: {
    joy: '#E8C97A',
    sadness: '#5B7FA6',
    anger: '#C75D5D',
    fear: '#8B6F9E',
    surprise: '#6BAF7A',
    disgust: '#8B7355',
    trust: '#5BA6A6',
    anticipation: '#D4A853',
    love: '#C77A8B',
    grief: '#5B6FA6',
    wonder: '#7AB5E8',
    relief: '#7AC7A6',
    shame: '#9E6B8B',
    pride: '#C7A65B',
    hope: '#A6C77A',
    loneliness: '#6B7A9E',
  },
} as const;

export type EmotionName = keyof typeof colors.emotions;
export const emotionNames = Object.keys(colors.emotions) as EmotionName[];
