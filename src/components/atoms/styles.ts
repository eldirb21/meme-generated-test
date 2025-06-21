import { ViewStyle, TextStyle, StyleSheet } from 'react-native';
import { colors } from '../../utils';

type Styles = {
  boottomSheet: ViewStyle;
  sheetHeader: ViewStyle;
  sheetTitle: TextStyle;
  icon: TextStyle;
  selectionBox: ViewStyle;
  absolute: ViewStyle;
  button: ViewStyle;
  sliderTrackWrapper: ViewStyle;
  slider: ViewStyle;
  overlay: ViewStyle;
};

export const styles: Styles = {
  boottomSheet: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.backgroundDark,
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 10,
    elevation: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
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
    borderRadius: 20,
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
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
