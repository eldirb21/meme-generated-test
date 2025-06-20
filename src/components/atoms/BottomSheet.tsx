import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  visible?: boolean;
  title?: string;
  onClose?: () => void;
};

export const BottomSheet = ({ children, visible, title, onClose }: Props) => {
  if (!visible) return null;

  return (
    <View style={styles.bottomSheet}>
      <View style={styles.sheetHeader}>
        <Text style={styles.sheetTitle}>{title}</Text>
        {onClose && (
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.icon}>✕</Text>
          </TouchableOpacity>
        )}
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#1c1c1e',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sheetTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  icon: {
    fontSize: 18,
    color: '#fff',
  },
});
