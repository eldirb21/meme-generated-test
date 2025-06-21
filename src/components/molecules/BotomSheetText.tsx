import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { BottomSheet } from '../atoms/BottomSheet';

type Props = {
  onPress: (item: string) => void;
  visible: boolean;
  onClose: () => void;
};

export const BotomSheetText = ({ onPress, visible, onClose }: Props) => {
  return (
    <BottomSheet
      withHeader
      style={styles.bottomSheet}
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
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
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
