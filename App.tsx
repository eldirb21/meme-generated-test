import React from 'react';
import { KeyboardAvoidingView, Platform, ViewStyle } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Home from './src/pages/home';

export default function App() {
  return (
    <GestureHandlerRootView style={$flex}>
      <KeyboardAvoidingView
        style={$flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
      >
        <Home />
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
}

const $flex: ViewStyle = { flex: 1 };
