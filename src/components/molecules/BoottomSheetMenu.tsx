import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { BoottomSheet, Icons } from '..';
import { BoottomSheetMenuProps, menus } from '../../services';
import { styled, styles } from './styles';

export const BoottomSheetMenu = ({
  onPress,
  visible,
  withStyle,
}: BoottomSheetMenuProps) => {
  const menuList = !withStyle ? menus.filter(x => x.title !== 'Gaya') : menus;

  return (
    <BoottomSheet style={styles.boottomSheetMenu} visible={visible}>
      <View style={styles.container}>
        {menuList.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onPress(item)}
            style={styled.item(item.color)}
          >
            <Icons
              name={item.icon}
              type="MaterialCommunityIcons"
              color={item.color}
              size={20}
            />
            <Text style={styled.itemText(item.color)}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </BoottomSheet>
  );
};
