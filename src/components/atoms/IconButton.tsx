import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { IconButtonProps } from '../../services';
import { styles } from './styles';

export const IconButton = ({ onPress, style, icon }: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.iconButton}>{icon}</Text>
    </TouchableOpacity>
  );
};
