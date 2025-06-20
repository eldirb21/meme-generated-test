import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { BottomSheet } from '../atoms/BottomSheet';

type Props = {
  onPress: (item: MenuItem) => void;
  visible: boolean;
};
export interface MenuItem {
  title: string;
  color: string;
  icon: string;
}

const menus: MenuItem[] = [
  {
    title: 'Gaya',
    color: '#cfa150',
    icon: '🖌',
  },
  {
    title: 'Tambah',
    color: '#79adec',
    icon: '＋',
  },
  {
    title: 'Export',
    color: '#75adef',
    icon: '⬇️',
  },
];
export const BottomSheetMenu = ({ onPress, visible }: Props) => {
  const styled = {
    item: (color: string) => ({
      borderColor: color,
      ...styles.itemMenu,
    }),
    itemText: (color: string) => ({
      color: color,
      ...styles.itemText,
    }),
  };
  return (
    <BottomSheet style={styles.bottomSheet} visible={visible}>
      <View style={styles.container}>
        {menus.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onPress(item)}
            style={styled.item(item.color)}
          >
            <Text style={styled.itemText(item.color)}>{item.icon}</Text>
            <Text style={styled.itemText(item.color)}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemMenu: {
    borderWidth: 1,
    padding: 10,
    width: '30%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 50,
  },
  itemText: {
    fontWeight: '700',
    fontSize: 14,
  },
});
