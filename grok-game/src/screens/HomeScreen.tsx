import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { useGameStore } from '../state/store';

export function HomeScreen({ navigation }: any) {
  const player = useGameStore((s) => s.player);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>GROK</Text>
        <Text style={styles.tagline}>One soul, many eyes</Text>
      </View>

      <View style={styles.scoreCard}>
        <Text style={styles.scoreLabel}>GROK SCORE</Text>
        <Text style={styles.scoreValue}>{player.grokScore}</Text>
        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>{player.momentsWritten}</Text>
            <Text style={styles.statLabel}>shared</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <Text style={styles.statValue}>{player.responsesGiven}</Text>
            <Text style={styles.statLabel}>felt</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <Text style={styles.statValue}>{player.threadsFormed}</Text>
            <Text style={styles.statLabel}>threads</Text>
          </View>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('ShareEyes')}
        >
          <Text style={styles.primaryButtonText}>Share Eyes</Text>
          <Text style={styles.buttonSubtext}>Write a moment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('SeeThrough')}
        >
          <Text style={styles.secondaryButtonText}>See Through</Text>
          <Text style={styles.buttonSubtextLight}>Empathize with others</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tapestryPreview}>
        <Text style={styles.tapestryLabel}>THE TAPESTRY</Text>
        <Text style={styles.tapestryDesc}>
          {player.threadsFormed === 0
            ? 'Your threads of understanding will appear here.'
            : `${player.threadsFormed} threads woven into the collective.`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 42,
    fontWeight: '700',
    color: colors.accent,
    letterSpacing: 8,
  },
  tagline: {
    ...typography.bodySmall,
    color: colors.textMuted,
    marginTop: 4,
    fontStyle: 'italic',
  },
  scoreCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.surfaceLight,
    marginBottom: 24,
  },
  scoreLabel: {
    ...typography.label,
    color: colors.textMuted,
    marginBottom: 4,
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: '700',
    color: colors.accent,
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
  },
  stat: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  statValue: {
    ...typography.h3,
    color: colors.text,
  },
  statLabel: {
    ...typography.caption,
    color: colors.textMuted,
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: colors.surfaceLight,
  },
  actions: {
    gap: 12,
    marginBottom: 24,
  },
  primaryButton: {
    backgroundColor: colors.accent,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  primaryButtonText: {
    ...typography.h3,
    color: colors.background,
  },
  buttonSubtext: {
    ...typography.caption,
    color: colors.background,
    opacity: 0.7,
    marginTop: 4,
  },
  secondaryButton: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.surfaceLight,
  },
  secondaryButtonText: {
    ...typography.h3,
    color: colors.text,
  },
  buttonSubtextLight: {
    ...typography.caption,
    color: colors.textMuted,
    marginTop: 4,
  },
  tapestryPreview: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.accent + '22',
  },
  tapestryLabel: {
    ...typography.label,
    color: colors.accent,
    marginBottom: 8,
  },
  tapestryDesc: {
    ...typography.bodySmall,
    color: colors.textMuted,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
