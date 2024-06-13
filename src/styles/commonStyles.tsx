import {StyleSheet, Platform} from 'react-native';
import {DARK_THEME, LIGHT_THEME} from '../utils/appThemes';
import {BOTTOM_NAV_HEIGHT, SCREEN_HEIGHT} from '../utils/appConstants';
import store from '../redux/store';

const commonStyles = (theme?: any) => {
  const appThemes = theme || LIGHT_THEME;
  const chosenTheme = store.getState().settings.theme;

  return StyleSheet.create({
    responsiveCont: {
      backgroundColor: appThemes.BG_COLOR,
      flex: 1,
      paddingBottom: BOTTOM_NAV_HEIGHT,
    },
    fullCont: {
      width: '100%',
      height: '100%',
    },
    shadowEffect: {
      elevation: 8,
      shadowColor:
        chosenTheme === 'dark' ? appThemes.WHITE : appThemes?.OVERLAY,
      shadowOffset: {width: 0, height: 5},
      shadowOpacity: 5,
      shadowRadius: 5,
    },
    shadowEffect2: {
      ...Platform.select({
        android: {
          elevation: 5,
        },
      }),
      shadowColor:
        chosenTheme === 'dark' ? appThemes.WHITE : appThemes?.OVERLAY,
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.9,
      shadowRadius: 2,
    },
    container: {
      backgroundColor: appThemes?.BG_COLOR,
      minHeight: SCREEN_HEIGHT - 100,
      flex: 1,
      height: undefined,
    },
    containerWithHeight: {
      backgroundColor: appThemes?.BG_COLOR,
      minHeight: SCREEN_HEIGHT - 100,
      flex: 1,
      height: undefined,
    },
    subContainer: {
      flex: 1,
      width: '95%',
      alignSelf: 'center',
      backgroundColor: 'transparent',
    },
    pageTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: appThemes?.TEXT_COLOR,
      marginTop: 10,
    },
    rowJC: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    },
    rowAC: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    halfWidth: {width: '50%'},
    halfWidth40: {width: '40%'},
    rowItem: {width: 100, alignItems: 'center', justifyContent: 'center'},
    text: {
      color: DARK_THEME.TEXT_COLOR,
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
};

export default commonStyles;
