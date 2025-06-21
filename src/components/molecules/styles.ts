import { ViewStyle, TextStyle } from 'react-native';
import { colors } from '../../utils';

type Styles = {
  bottomSheet: ViewStyle;
  panelTitle: TextStyle;
  colorRow: ViewStyle;
  colorCircle: ViewStyle;
  formatRow: ViewStyle;
  formatButton: ViewStyle;
  formatText: TextStyle;
  boottomSheetMenu: ViewStyle;
  itemMenu: ViewStyle;
  itemText: TextStyle;
  container: ViewStyle;
  sheetItem: ViewStyle;
  sheetItemText: TextStyle;
  deleteIcon: ViewStyle;
  duplicateIcon: ViewStyle;
};

export const styles: Styles = {
  bottomSheet: {
    zIndex: 99,
  },
  panelTitle: {
    color: colors.white,
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 4,
  },
  colorRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 8,
  },
  colorCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    margin: 4,
    borderWidth: 1,
    borderColor: colors.borderSecondary,
  },
  formatRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
  },
  formatButton: {
    backgroundColor: colors.buttonBackground,
    padding: 8,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  formatText: {
    color: colors.white,
    fontSize: 14,
  },
  boottomSheetMenu: {
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
  sheetItem: {
    paddingVertical: 10,
  },
  sheetItemText: {
    fontSize: 16,
    color: colors.white,
  },
  deleteIcon: {
    position: 'absolute',
    top: -10,
    right: -10,
  },
  duplicateIcon: {
    position: 'absolute',
    top: -10,
    left: -10,
  },
};
export const $font = (bold: boolean, italic: boolean): TextStyle => ({
  fontWeight: bold ? 'bold' : 'normal',
  fontStyle: italic ? 'italic' : 'normal',
});

export const styled = {
  item: (color: string) => ({
    borderColor: color,
    ...styles.itemMenu,
  }),
  itemText: (color: string) => ({
    color: color,
    ...styles.itemText,
  }),
};
