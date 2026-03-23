import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { colors } from '../theme/colors';
import { useGameStore } from '../state/store';

import { OnboardingScreen } from '../screens/OnboardingScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { ShareEyesScreen } from '../screens/ShareEyesScreen';
import { SeeThroughScreen } from '../screens/SeeThroughScreen';
import { RippleScreen } from '../screens/RippleScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabIcon({ label, focused }: { label: string; focused: boolean }) {
  return (
    <Text style={{ color: focused ? colors.accent : colors.textMuted, fontSize: 10, fontWeight: focused ? '700' : '400' }}>
      {label}
    </Text>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.surfaceLight,
          borderTopWidth: 1,
          height: 80,
          paddingBottom: 20,
          paddingTop: 10,
        },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textMuted,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <Text style={{ fontSize: 24 }}>{focused ? '◉' : '○'}</Text>,
          tabBarLabel: ({ focused }) => <TabIcon label="HOME" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="ShareEyes"
        component={ShareEyesScreen}
        options={{
          tabBarIcon: ({ focused }) => <Text style={{ fontSize: 24 }}>{focused ? '✦' : '✧'}</Text>,
          tabBarLabel: ({ focused }) => <TabIcon label="SHARE" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="SeeThrough"
        component={SeeThroughScreen}
        options={{
          tabBarIcon: ({ focused }) => <Text style={{ fontSize: 24 }}>{focused ? '◈' : '◇'}</Text>,
          tabBarLabel: ({ focused }) => <TabIcon label="SEE" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Ripple"
        component={RippleScreen}
        options={{
          tabBarIcon: ({ focused }) => <Text style={{ fontSize: 24 }}>{focused ? '◎' : '○'}</Text>,
          tabBarLabel: ({ focused }) => <TabIcon label="RIPPLE" focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
}

export function RootNavigator() {
  const hasCompletedOnboarding = useGameStore((s) => s.hasCompletedOnboarding);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!hasCompletedOnboarding ? (
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        ) : (
          <Stack.Screen name="Main" component={MainTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
