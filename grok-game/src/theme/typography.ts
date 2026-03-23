import { TextStyle } from 'react-native';

export const typography: Record<string, TextStyle> = {
  h1: { fontSize: 28, fontWeight: '700', letterSpacing: 0.5 },
  h2: { fontSize: 22, fontWeight: '600', letterSpacing: 0.3 },
  h3: { fontSize: 18, fontWeight: '600' },
  body: { fontSize: 16, fontWeight: '400', lineHeight: 24 },
  bodySmall: { fontSize: 14, fontWeight: '400', lineHeight: 20 },
  caption: { fontSize: 12, fontWeight: '400', lineHeight: 16 },
  label: { fontSize: 13, fontWeight: '600', letterSpacing: 1, textTransform: 'uppercase' },
  moment: { fontSize: 18, fontWeight: '400', lineHeight: 28, fontStyle: 'italic' },
};
