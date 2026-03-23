import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { colors, EmotionName, emotionNames } from '../theme/colors';
import { typography } from '../theme/typography';

interface EmotionWheelProps {
  selected: EmotionName[];
  onToggle: (emotion: EmotionName) => void;
  maxSelections?: number;
}

export function EmotionWheel({ selected, onToggle, maxSelections = 3 }: EmotionWheelProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Select emotions ({selected.length}/{maxSelections})
      </Text>
      <ScrollView
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      >
        {emotionNames.map((emotion) => {
          const isSelected = selected.includes(emotion);
          const isDisabled = !isSelected && selected.length >= maxSelections;
          const emotionColor = colors.emotions[emotion];

          return (
            <TouchableOpacity
              key={emotion}
              onPress={() => onToggle(emotion)}
              disabled={isDisabled}
              style={[
                styles.chip,
                {
                  backgroundColor: isSelected ? emotionColor + '33' : colors.surface,
                  borderColor: isSelected ? emotionColor : colors.surfaceLight,
                  opacity: isDisabled ? 0.4 : 1,
                },
              ]}
            >
              <View style={[styles.dot, { backgroundColor: emotionColor }]} />
              <Text
                style={[
                  styles.chipText,
                  { color: isSelected ? emotionColor : colors.textSecondary },
                ]}
              >
                {emotion}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    ...typography.bodySmall,
    color: colors.textMuted,
    marginBottom: 12,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    paddingBottom: 16,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 24,
    borderWidth: 1.5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  chipText: {
    ...typography.bodySmall,
    fontWeight: '500',
  },
});
