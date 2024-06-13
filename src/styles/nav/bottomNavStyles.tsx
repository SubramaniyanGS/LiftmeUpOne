import {StyleSheet} from 'react-native';
import {BOTTOM_NAV_HEIGHT} from '../../utils/appConstants';
import {LIGHT_THEME} from '../../utils/appThemes';

const bottomNavStyles = (theme?: any) => {
  const appThemes = theme || LIGHT_THEME;

  return StyleSheet.create({
    navCont: {
      height: BOTTOM_NAV_HEIGHT,
      flexDirection: 'row',
      backgroundColor: appThemes?.HEADER_COLOR,
      width: '100%',
      justifyContent: 'space-between',
      bottom: 0,
      position: 'absolute',
      alignSelf: 'center',
      padding: 0,
    },
    singleNavMenu: {
      maxHeight: '100%',
      width: '33%',
      alignItems: 'center',
    },
    highlighter: {
      position: 'absolute',
      bottom: 0,
      height: 3,
    },
    navInMenu: {
      width: '100%',
      height: '100%',
      backgroundColor: appThemes?.TAB_COLOR,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 10,
      paddingBottom: 10,
    },
    marginRight: {
      height: '50%',
      width: 1,
      backgroundColor: appThemes?.LIGHT_GREY,
      alignSelf: 'center',
    },
    menuIcon: {
      fontSize: 25,
      color: appThemes?.TAB_COLOR,
      // height: "50%",
    },
    menuName: {
      fontSize: 14,
      color: appThemes?.TAB_COLOR,
      textAlign: 'center',
      fontWeight: '500',
    },
  });
};

export default bottomNavStyles;
