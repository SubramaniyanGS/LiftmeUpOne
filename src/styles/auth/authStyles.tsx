import {StyleSheet} from 'react-native';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../../utils/appConstants';
import {DARK_THEME, LIGHT_THEME} from '../../utils/appThemes';
// import commonStyles from "../commonStyles";

const authStyles = (theme: any) => {
  const appThemes = theme || LIGHT_THEME;

  return StyleSheet.create({
    backgroundStyles: {
      height: WINDOW_HEIGHT,
      width: SCREEN_WIDTH,
      backgroundColor: appThemes?.LIGHT_THEME,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoStyle: {
      height: 100,
      width: 100,
      resizeMode: 'contain',
    },
  });
};

export default authStyles;
