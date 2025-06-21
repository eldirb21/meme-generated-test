import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { IconButtonProps } from '../../services';

export const IconButton = ({ onPress, style, icon }: IconButtonProps) => {
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
    height: 24,
    width: 24,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 10,
    color: '#fff',
  },
});
