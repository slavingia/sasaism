import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, EmotionName } from '../theme/colors';
import { typography } from '../theme/typography';

interface MomentCardProps {
  text: string;
  emotions?: EmotionName[];
  showEmotions?: boolean;
}

export function MomentCard({ text, emotions = [], showEmotions = false }: MomentCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.quote}>"</Text>
      <Text style={styles.text}>{text}</Text>
      <Text style={[styles.quote, styles.quoteEnd]}>"</Text>
      {showEmotions && emotions.length > 0 && (
        <View style={styles.emotionRow}>
          {emotions.map((emotion) => (
            <View
              key={emotion}
              style={[styles.emotionTag, { backgroundColor: colors.emotions[emotion] + '33' }]}
            >
              <View style={[styles.emotionDot, { backgroundColor: colors.emotions[emotion] }]} />
              <Text style={[styles.emotionLabel, { color: colors.emotions[emotion] }]}>
                {emotion}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 24,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: colors.surfaceLight,
  },
  quote: {
    ...typography.h1,
    color: colors.accent,
    opacity: 0.4,
    lineHeight: 28,
  },
  quoteEnd: {
    textAlign: 'right',
    marginTop: -8,
  },
  text: {
    ...typography.moment,
    color: colors.text,
    paddingHorizontal: 8,
  },
  emotionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    gap: 8,
  },
  emotionTag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  emotionDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  emotionLabel: {
    ...typography.caption,
    fontWeight: '600',
  },
});
