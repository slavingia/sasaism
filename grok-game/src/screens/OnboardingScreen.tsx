import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { useGameStore } from '../state/store';

const { width } = Dimensions.get('window');

const slides = [
  {
    title: 'One Soul',
    subtitle: 'Many Eyes',
    body: 'What if every person you\'ve ever met was you — seeing the world from a different perspective?',
  },
  {
    title: 'Share Eyes',
    subtitle: 'Write moments',
    body: 'Step into a stranger\'s shoes. Write what they see, feel, and think. Your words become someone else\'s window.',
  },
  {
    title: 'See Through',
    subtitle: 'Feel deeply',
    body: 'Read anonymous moments from other souls. Guess their emotions. Speak as their inner voice. The more you understand, the more you grow.',
  },
  {
    title: 'Ripple',
    subtitle: 'Impact is real',
    body: 'Every act of empathy creates a thread between you. Together, we weave a tapestry of understanding — measurable, visible, beautiful.',
  },
];

export function OnboardingScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const completeOnboarding = useGameStore((s) => s.completeOnboarding);

  const isLast = currentSlide === slides.length - 1;
  const slide = slides[currentSlide];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{slide.title}</Text>
        <Text style={styles.subtitle}>{slide.subtitle}</Text>
        <Text style={styles.body}>{slide.body}</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.dots}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, i === currentSlide && styles.dotActive]}
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (isLast) {
              completeOnboarding();
            } else {
              setCurrentSlide(currentSlide + 1);
            }
          }}
        >
          <Text style={styles.buttonText}>
            {isLast ? 'Begin' : 'Next'}
          </Text>
        </TouchableOpacity>

        {!isLast && (
          <TouchableOpacity onPress={completeOnboarding}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingTop: 120,
    paddingBottom: 60,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    ...typography.h1,
    color: colors.accent,
    fontSize: 36,
    marginBottom: 8,
  },
  subtitle: {
    ...typography.h2,
    color: colors.textSecondary,
    marginBottom: 32,
  },
  body: {
    ...typography.body,
    color: colors.text,
    textAlign: 'center',
    lineHeight: 28,
    maxWidth: width * 0.8,
  },
  footer: {
    alignItems: 'center',
    gap: 20,
  },
  dots: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.surfaceLight,
  },
  dotActive: {
    backgroundColor: colors.accent,
    width: 24,
  },
  button: {
    backgroundColor: colors.accent,
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 32,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    ...typography.h3,
    color: colors.background,
  },
  skipText: {
    ...typography.bodySmall,
    color: colors.textMuted,
  },
});
