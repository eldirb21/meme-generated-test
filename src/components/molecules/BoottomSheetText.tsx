import { FlatList, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { BoottomSheet } from '..';
import { BoottomSheetTextProps, dataSheetText } from '../../services';
import { styles } from './styles';

export const BoottomSheetText = ({
  onPress,
  visible,
  onClose,
}: BoottomSheetTextProps) => {
  return (
    <BoottomSheet
      withHeader
      style={styles.bottomSheet}
      visible={visible}
      onClose={onClose}
      title="Pilihan"
    >
      <FlatList
        data={dataSheetText}
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
