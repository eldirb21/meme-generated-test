import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { BoottomSheetProps } from '../../services';
import { styles } from './styles';

export const BoottomSheet = ({
  children,
  visible,
  title,
  onClose,
  withHeader,
  style,
}: BoottomSheetProps) => {
  if (!visible) return null;

  return (
    <View style={[styles.boottomSheet, style]}>
      {withHeader && (
        <View style={styles.sheetHeader}>
          <Text style={styles.sheetTitle}>{title}</Text>
          {onClose && (
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.icon}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      {children}
    </View>
  );
};
