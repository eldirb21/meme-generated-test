import { ViewStyle, TextStyle } from 'react-native';
import { colors } from '../../utils';

type Styles = {
  boottomSheet: ViewStyle;
  sheetHeader: ViewStyle;
  sheetTitle: TextStyle;
  icon: TextStyle;
  selectionBox: ViewStyle;
  absolute: ViewStyle;
  button: ViewStyle;
  iconButton: TextStyle;
  sliderTrackWrapper: ViewStyle;
  slider: ViewStyle;
};

export const styles: Styles = {
  boottomSheet: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.backgroundDark,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sheetTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  icon: {
    fontSize: 18,
    color: colors.white,
  },
  selectionBox: {
    padding: 16,
    borderWidth: 1,
    borderColor: colors.borderPrimary,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  absolute: {
    position: 'absolute',
  },
  button: {
    backgroundColor: colors.textSecondary,
    borderRadius: 20,
    height: 24,
    width: 24,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    fontSize: 10,
    color: colors.white,
  },
  sliderTrackWrapper: {
    height: 40,
    justifyContent: 'center',
    borderRadius: 999,
  },

  slider: {
    width: '100%',
    height: '100%',
    transform: [{ scaleY: 1.5 }],
  },
};
