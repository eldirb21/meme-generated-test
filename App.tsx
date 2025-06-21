import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Home from './src/pages/home';
import { $flex } from './src/pages/home/styles';

export default function App() {
  return (
    <GestureHandlerRootView style={$flex}>
      <KeyboardAvoidingView
        style={$flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <Home />
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
}
