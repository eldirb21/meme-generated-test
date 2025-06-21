import { colors } from '../utils';
import { MenuItem } from './types';

const colorData = colors.palette;

const menus: MenuItem[] = [
  {
    title: 'Gaya',
    color: colors.gold,
    icon: 'brush',
  },
  {
    title: 'Tambah',
    color: colors.blueLight,
    icon: 'plus',
  },
  {
    title: 'Export',
    color: colors.blue,
    icon: 'tray-arrow-down',
  },
];

const dataSheetText = [
  {
    title: 'Teks',
    icon: 'format-text',
  },
  {
    title: 'Gambar',
    icon: 'image-outline',
  },
  {
    title: 'Hapus semua',
    icon: 'trash-can-outline',
  },
];

export { colorData, menus, dataSheetText };
