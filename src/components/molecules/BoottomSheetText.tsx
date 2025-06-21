import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { BoottomSheet } from '..';
import { BoottomSheetTextProps } from '../../services';

export const BoottomSheetText = ({
  onPress,
  visible,
  onClose,
}: BoottomSheetTextProps) => {
  return (
    <BoottomSheet
      withHeader
      style={styles.boottomSheet}
      visible={visible}
      onClose={onClose}
      title="Pilihan"
    >
      <FlatList
        data={['Teks', 'Gambar', 'Hapus semua']}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onPress(item)}
            style={styles.sheetItem}
          >
            <Text style={styles.sheetItemText}>
              {item === 'Teks' && '🅣 '}
              {item === 'Gambar' && '🖼 '}
              {item === 'Hapus semua' && '🗑 '}
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </BoottomSheet>
  );
};

const styles = StyleSheet.create({
  boottomSheet: {
    zIndex: 99,
  },
  sheetItem: {
    paddingVertical: 10,
  },
  sheetItemText: {
    fontSize: 16,
    color: '#fff',
  },
});
