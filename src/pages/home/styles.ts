import { ViewStyle, TextStyle, Dimensions } from 'react-native';
import { colors } from '../../utils';
const { width } = Dimensions.get('window');
const size = width - 40;

type Styles = {
  container: ViewStyle;
  card: ViewStyle;
  input: TextStyle;
  text: TextStyle;
};

export const styles: Styles = {
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: size,
    width: size,
    backgroundColor: colors.white,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    elevation: 5,
    shadowColor: colors.shadowColor,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
  },
  input: {
    fontSize: 22,
    textAlign: 'center',
    padding: 0,
  },
};

export const $flex: ViewStyle = { flex: 1 };
