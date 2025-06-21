import { FlatList, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { BoottomSheet, Icons } from '..';
import { BoottomSheetTextProps, dataSheetText } from '../../services';
import { styles } from './styles';
import { colors } from '../../utils';

export const BoottomSheetText = ({
  onPress,
  visible,
  onClose,
}: BoottomSheetTextProps) => {
  if (!visible) return null;

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
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onPress(item.title)}
            style={styles.sheetItem}
          >
            <Icons
              name={item.icon}
              color={colors.white}
              type="MaterialCommunityIcons"
              size={18}
            />
            <Text style={styles.sheetItemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </BoottomSheet>
  );
};
