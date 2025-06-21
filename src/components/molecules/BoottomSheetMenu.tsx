import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { BoottomSheet } from '..';
import { BoottomSheetMenuProps, MenuItem } from '../../services';

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
export const BoottomSheetMenu = ({
  onPress,
  visible,
  withStyle,
}: BoottomSheetMenuProps) => {
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

  const menuList = !withStyle ? menus.filter(x => x.title !== 'Gaya') : menus;
  return (
    <BoottomSheet style={styles.boottomSheet} visible={visible}>
      <View style={styles.container}>
        {menuList.map((item, index) => (
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
    </BoottomSheet>
  );
};

const styles = StyleSheet.create({
  boottomSheet: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
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
