import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { colors, EmotionName } from '../theme/colors';
import { typography } from '../theme/typography';
import { useGameStore } from '../state/store';
import { MomentCard } from '../components/MomentCard';
import { EmotionWheel } from '../components/EmotionWheel';
import { getPromptById } from '../utils/prompts';
import { calculateEmotionAccuracy, calculateEmpathyScore, calculateGrokDelta } from '../utils/scoring';

type Step = 'read' | 'emotions' | 'action' | 'voice' | 'result';

export function SeeThroughScreen({ navigation }: any) {
  const { currentMoments, loadMockMoments, submitResponse, addGrokScore } = useGameStore();

  const [momentIndex, setMomentIndex] = useState(0);
  const [step, setStep] = useState<Step>('read');
  const [guessedEmotions, setGuessedEmotions] = useState<EmotionName[]>([]);
  const [chosenAction, setChosenAction] = useState<number>(-1);
  const [innerVoice, setInnerVoice] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    loadMockMoments();
  }, []);

  const moment = currentMoments[momentIndex];
  if (!moment) {
    return (
      <View style={styles.container}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>No moments yet</Text>
          <Text style={styles.emptyBody}>
            Write a moment first, then come back to see through others' eyes.
          </Text>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('ShareEyes')}
          >
            <Text style={styles.primaryButtonText}>Share Eyes First</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const prompt = getPromptById(moment.promptId);
  const actions = prompt?.actions ?? ['Reflect quietly', 'Reach out', 'Move forward', 'Wait'];

  const toggleEmotion = (emotion: EmotionName) => {
    if (guessedEmotions.includes(emotion)) {
      setGuessedEmotions(guessedEmotions.filter((e) => e !== emotion));
    } else if (guessedEmotions.length < 3) {
      setGuessedEmotions([...guessedEmotions, emotion]);
    }
  };

  const handleComplete = () => {
    // Calculate score (simulating a resonance rating of 4 for mock data)
    const accuracy = calculateEmotionAccuracy(moment.emotions, guessedEmotions);
    const bestAction = 0; // mock: first action is "correct"
    const empathy = calculateEmpathyScore(accuracy, chosenAction === bestAction, 4);
    const { responderDelta } = calculateGrokDelta(empathy);

    setScore(responderDelta);
    submitResponse(moment.id, guessedEmotions, chosenAction, innerVoice);
    addGrokScore(responderDelta);
    setStep('result');
  };

  const handleNext = () => {
    if (momentIndex < currentMoments.length - 1) {
      setMomentIndex(momentIndex + 1);
      setStep('read');
      setGuessedEmotions([]);
      setChosenAction(-1);
      setInnerVoice('');
      setScore(0);
    } else {
      navigation.navigate('Ripple');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <Text style={styles.phase}>SEE THROUGH</Text>
      <Text style={styles.counter}>
        Moment {momentIndex + 1} of {currentMoments.length}
      </Text>

      <MomentCard text={moment.text} emotions={moment.emotions} showEmotions={step === 'result'} />

      {step === 'read' && (
        <View style={styles.section}>
          <Text style={styles.instruction}>Read this moment. Feel it. When you're ready, guess what they felt.</Text>
          <TouchableOpacity style={styles.primaryButton} onPress={() => setStep('emotions')}>
            <Text style={styles.primaryButtonText}>I feel them</Text>
          </TouchableOpacity>
        </View>
      )}

      {step === 'emotions' && (
        <View style={styles.section}>
          <Text style={styles.instruction}>What emotions do you sense in this moment?</Text>
          <EmotionWheel selected={guessedEmotions} onToggle={toggleEmotion} />
          <TouchableOpacity
            style={[styles.primaryButton, guessedEmotions.length === 0 && styles.disabled]}
            disabled={guessedEmotions.length === 0}
            onPress={() => setStep('action')}
          >
            <Text style={styles.primaryButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}

      {step === 'action' && (
        <View style={styles.section}>
          <Text style={styles.instruction}>What would this person do next?</Text>
          {actions.map((action, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.actionOption, chosenAction === i && styles.actionSelected]}
              onPress={() => setChosenAction(i)}
            >
              <Text
                style={[styles.actionText, chosenAction === i && styles.actionTextSelected]}
              >
                {action}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={[styles.primaryButton, chosenAction === -1 && styles.disabled]}
            disabled={chosenAction === -1}
            onPress={() => setStep('voice')}
          >
            <Text style={styles.primaryButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}

      {step === 'voice' && (
        <View style={styles.section}>
          <Text style={styles.instruction}>
            Speak as their inner voice. What would you whisper to them?
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="You are not alone in this..."
              placeholderTextColor={colors.textMuted}
              value={innerVoice}
              onChangeText={setInnerVoice}
              maxLength={140}
              multiline
            />
          </View>
          <TouchableOpacity
            style={[styles.primaryButton, innerVoice.length < 5 && styles.disabled]}
            disabled={innerVoice.length < 5}
            onPress={handleComplete}
          >
            <Text style={styles.primaryButtonText}>Complete</Text>
          </TouchableOpacity>
        </View>
      )}

      {step === 'result' && (
        <View style={styles.section}>
          <View style={styles.resultCard}>
            <Text style={styles.resultLabel}>EMPATHY SCORE</Text>
            <Text style={styles.resultScore}>+{score}</Text>
            <Text style={styles.resultDetail}>
              You matched {guessedEmotions.filter((e) => moment.emotions.includes(e)).length} of{' '}
              {moment.emotions.length} emotions
            </Text>
          </View>
          <TouchableOpacity style={styles.primaryButton} onPress={handleNext}>
            <Text style={styles.primaryButtonText}>
              {momentIndex < currentMoments.length - 1 ? 'Next Moment' : 'See Your Ripple'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
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
  },
  phase: {
    ...typography.label,
    color: colors.accent,
    textAlign: 'center',
  },
  counter: {
    ...typography.caption,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 16,
  },
  section: {
    marginTop: 20,
    gap: 16,
  },
  instruction: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: colors.accent,
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    marginTop: 8,
  },
  primaryButtonText: {
    ...typography.h3,
    color: colors.background,
  },
  disabled: {
    opacity: 0.4,
  },
  actionOption: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1.5,
    borderColor: colors.surfaceLight,
  },
  actionSelected: {
    borderColor: colors.accent,
    backgroundColor: colors.accent + '15',
  },
  actionText: {
    ...typography.body,
    color: colors.text,
  },
  actionTextSelected: {
    color: colors.accent,
  },
  inputContainer: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.surfaceLight,
  },
  input: {
    ...typography.body,
    color: colors.text,
    minHeight: 60,
    textAlignVertical: 'top',
  },
  resultCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.accent + '44',
  },
  resultLabel: {
    ...typography.label,
    color: colors.textMuted,
  },
  resultScore: {
    fontSize: 56,
    fontWeight: '700',
    color: colors.accent,
    marginVertical: 8,
  },
  resultDetail: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    gap: 16,
  },
  emptyTitle: {
    ...typography.h2,
    color: colors.text,
  },
  emptyBody: {
    ...typography.body,
    color: colors.textMuted,
    textAlign: 'center',
  },
});
