import {StyleSheet} from 'react-native';

import {WINDOW_WIDTH} from '../../utils/appConstants';
import commonStyle from '../commonStyles';
import {LIGHT_THEME} from '../../utils/appThemes';
import store from '../../redux/store';

const exampleStyles = (theme?: any) => {
  const appThemes = theme || LIGHT_THEME;
  const commonStyles = commonStyle(appThemes);
  const chosenTheme = store.getState().settings.theme;

  return StyleSheet.create({});
};

export default exampleStyles;
