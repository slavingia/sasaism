import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { LensPrompt as LensPromptType } from '../types';

interface LensPromptProps {
  prompt: LensPromptType;
}

export function LensPrompt({ prompt }: LensPromptProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{prompt.category.toUpperCase()}</Text>
      <Text style={styles.promptText}>{prompt.text}</Text>
      <View style={styles.depthIndicator}>
        {[1, 2, 3].map((level) => (
          <View
            key={level}
            style={[
              styles.depthDot,
              { backgroundColor: level <= prompt.depth ? colors.accent : colors.surfaceLight },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: colors.accent + '44',
    alignItems: 'center',
  },
  label: {
    ...typography.label,
    color: colors.accent,
    marginBottom: 12,
  },
  promptText: {
    ...typography.h3,
    color: colors.text,
    textAlign: 'center',
    lineHeight: 28,
  },
  depthIndicator: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 16,
  },
  depthDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});
