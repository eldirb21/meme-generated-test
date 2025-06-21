import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { IconButtonProps } from '../../services';
import { styles } from './styles';
import { Icons } from './Icons';
import { colors } from '../../utils';

export const IconButton = ({ onPress, style, icon }: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      {/* <Text style={styles.iconButton}>{icon}</Text> */}
      <Icons name={icon} color={colors.black} size={14} />
    </TouchableOpacity>
  );
};
