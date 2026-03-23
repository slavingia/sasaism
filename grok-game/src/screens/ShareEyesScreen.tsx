import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { useGameStore } from '../state/store';
import { LensPrompt } from '../components/LensPrompt';
import { EmotionWheel } from '../components/EmotionWheel';
import { getRandomPrompt } from '../utils/prompts';
import { getUnlockedDepth } from '../utils/scoring';

export function ShareEyesScreen({ navigation }: any) {
  const { draftText, draftEmotions, setDraftText, toggleDraftEmotion, submitMoment, player } =
    useGameStore();

  const maxDepth = getUnlockedDepth(player.grokScore);
  const prompt = useMemo(() => getRandomPrompt(maxDepth), []);

  const charCount = draftText.length;
  const isValid = charCount >= 20 && charCount <= 280 && draftEmotions.length >= 1;

  const handleSubmit = () => {
    submitMoment(prompt.id);
    navigation.navigate('SeeThrough');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <Text style={styles.phase}>SHARE EYES</Text>
        <Text style={styles.instruction}>Step into this perspective. Write what they feel.</Text>

        <LensPrompt prompt={prompt} />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Write their moment..."
            placeholderTextColor={colors.textMuted}
            multiline
            maxLength={280}
            value={draftText}
            onChangeText={setDraftText}
          />
          <Text style={[styles.charCount, charCount > 280 && styles.charCountOver]}>
            {charCount}/280
          </Text>
        </View>

        <EmotionWheel selected={draftEmotions} onToggle={toggleDraftEmotion} />

        <TouchableOpacity
          style={[styles.submitButton, !isValid && styles.submitButtonDisabled]}
          disabled={!isValid}
          onPress={handleSubmit}
        >
          <Text style={styles.submitText}>Release into the world</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
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
  instruction: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 8,
  },
  inputContainer: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.surfaceLight,
  },
  input: {
    ...typography.body,
    color: colors.text,
    minHeight: 120,
    textAlignVertical: 'top',
  },
  charCount: {
    ...typography.caption,
    color: colors.textMuted,
    textAlign: 'right',
    marginTop: 8,
  },
  charCountOver: {
    color: colors.error,
  },
  submitButton: {
    backgroundColor: colors.accent,
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
  },
  submitButtonDisabled: {
    opacity: 0.4,
  },
  submitText: {
    ...typography.h3,
    color: colors.background,
  },
});
