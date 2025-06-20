import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
  style: ViewStyle;
  icon: string;
};

export const IconButton = ({ onPress, style, icon }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.icon}>{icon}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 4,
    elevation: 2,
  },
  icon: {
    fontSize: 18,
    color: '#fff',
  },
});
