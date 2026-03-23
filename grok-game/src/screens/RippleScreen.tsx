import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { useGameStore } from '../state/store';

export function RippleScreen({ navigation }: any) {
  const player = useGameStore((s) => s.player);
  const myResponses = useGameStore((s) => s.myResponses);
  const myMoments = useGameStore((s) => s.myMoments);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <Text style={styles.phase}>RIPPLE</Text>
      <Text style={styles.subtitle}>Your impact on the tapestry</Text>

      <View style={styles.impactCard}>
        <Text style={styles.impactLabel}>TOTAL GROK SCORE</Text>
        <Text style={styles.impactValue}>{player.grokScore}</Text>
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{myMoments.length}</Text>
          <Text style={styles.statLabel}>Moments Shared</Text>
          <Text style={styles.statDesc}>Eyes you've opened for others</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{myResponses.length}</Text>
          <Text style={styles.statLabel}>Souls Felt</Text>
          <Text style={styles.statDesc}>Perspectives you've inhabited</Text>
        </View>
      </View>

      <View style={styles.philosophyCard}>
        <Text style={styles.philosophyText}>
          "Every moment of empathy is a thread. Every thread strengthens the tapestry. You are not
          just playing — you are weaving understanding into the world."
        </Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('ShareEyes')}
        >
          <Text style={styles.primaryButtonText}>Share Another Moment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('SeeThrough')}
        >
          <Text style={styles.secondaryButtonText}>See Through More Eyes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
    gap: 20,
  },
  phase: {
    ...typography.label,
    color: colors.accent,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 8,
  },
  impactCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.accent + '44',
  },
  impactLabel: {
    ...typography.label,
    color: colors.textMuted,
  },
  impactValue: {
    fontSize: 64,
    fontWeight: '700',
    color: colors.accent,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.surfaceLight,
  },
  statValue: {
    ...typography.h1,
    color: colors.text,
  },
  statLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    fontWeight: '600',
    marginTop: 4,
  },
  statDesc: {
    ...typography.caption,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 4,
  },
  philosophyCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 24,
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
  },
  philosophyText: {
    ...typography.moment,
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 24,
  },
  actions: {
    gap: 12,
    marginTop: 8,
  },
  primaryButton: {
    backgroundColor: colors.accent,
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
  },
  primaryButtonText: {
    ...typography.h3,
    color: colors.background,
  },
  secondaryButton: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.surfaceLight,
  },
  secondaryButtonText: {
    ...typography.h3,
    color: colors.text,
  },
});
