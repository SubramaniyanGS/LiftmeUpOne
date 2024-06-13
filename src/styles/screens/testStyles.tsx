import {Platform, StyleSheet} from 'react-native';
import {LIGHT_THEME} from '../../utils/appThemes';
import {
  HEADER_HEIGHT,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../../utils/appConstants';
import store from '../../redux/store';

const testStyles = (theme?: any) => {
  const appThemes = theme || LIGHT_THEME;
  const chosenTheme = store.getState().settings.theme;

  return StyleSheet.create({});
};

export default testStyles;
