import { ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type BoottomSheetProps = {
  children: ReactNode;
  visible?: boolean;
  title?: string;
  withHeader?: boolean;
  onClose?: () => void;
  style?: ViewStyle;
};

export type DraggableTextItemProps = {
  item: ElementProps;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (text: string) => void;
  onBlur: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
  styleInput?: StyleProp<TextStyle>;
  styleText?: StyleProp<TextStyle>;
};
export type IconButtonProps = {
  onPress: () => void;
  style: ViewStyle;
  icon: string;
};
export type SlidersProps = {
  onValueChange: (item: number) => void;
  value: string | number;
};
export type BooleanKeys = Extract<
  {
    [K in keyof ElementProps]: ElementProps[K] extends boolean ? K : never;
  }[keyof ElementProps],
  string
>;

export type BoottomSheetLayoutProps = {
  onStyleSelected: (item: Partial<ElementProps>) => void;
  visible: boolean;
  onClose: () => void;
  setTextStyle: (item: BooleanKeys) => void;
  strokeValue: string;
};
export type BoottomSheetMenuProps = {
  onPress: (item: MenuItem) => void;
  visible: boolean;
  withStyle: boolean;
};
export interface MenuItem {
  title: string;
  color: string;
  icon: string;
}
export type BoottomSheetTextProps = {
  onPress: (item: string) => void;
  visible: boolean;
  onClose: () => void;
};
export type IconGroupProps = {
  visible: boolean;
  onCopy: () => void;
  onDelete: () => void;
};

export type ElementProps = {
  id: number;
  text: string;
  editable: boolean;
  color: string;
  strokeColor: string;
  bold: boolean;
  italic: boolean;
  strokeWidth: number;
  x: number;
  y: number;
};
