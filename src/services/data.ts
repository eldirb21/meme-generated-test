import { colors } from '../utils';
import { MenuItem } from './types';

const colorData = colors.palette;

const menus: MenuItem[] = [
  {
    title: 'Gaya',
    color: colors.gold,
    icon: '🖌',
  },
  {
    title: 'Tambah',
    color: colors.blueLight,
    icon: '＋',
  },
  {
    title: 'Export',
    color: colors.blue,
    icon: '⬇️',
  },
];

const dataSheetText = ['Teks', 'Gambar', 'Hapus semua'];



export { colorData, menus, dataSheetText };
