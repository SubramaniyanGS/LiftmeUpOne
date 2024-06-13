import {StyleSheet} from 'react-native';
import {LIGHT_THEME} from '../../utils/appThemes';
import {HEADER_HEIGHT, SCREEN_HEIGHT} from '../../utils/appConstants';

const headerStyles = (theme?: any) => {
  const appThemes = theme || LIGHT_THEME;

  return StyleSheet.create({
    headerCont: {
      height: HEADER_HEIGHT,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexDirection: 'row',
    },
    headerInCont: {
      width: '100%',
      flexDirection: 'row',
      height: '100%',
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: appThemes?.HEADER_COLOR,
      alignItems: 'center',
      justifyContent: 'space-between',
      alignSelf: 'center',
    },
    lhsCont: {
      width: '50%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    rhsCont: {
      width: '50%',
      alignItems: 'flex-end',
    },
    appHeadName: {
      fontSize: 18,
      paddingLeft: 10,
      color: appThemes?.TEXT_COLOR,
      fontWeight: '500',
      // textTransform: "uppercase",
    },
    appVersion: {
      fontSize: 12,
      paddingLeft: 10,
      color: 'grey',
    },
    appLogo: {height: 50, width: 50, resizeMode: 'contain'},
    sideMenuCont: {
      // height: SCREEN_HEIGHT,
      width: '100%',
      backgroundColor: appThemes?.OVERLAY_2,
    },
    sideMenuInCont: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
    },
    appLogoSideMenu: {height: 75, width: 75, resizeMode: 'contain'},
    sideLhsMenuCont: {
      alignItems: 'flex-end',
      width: '70%',
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      // backgroundColor: appThemes?.LIGHT_THEME,
      backgroundColor: appThemes?.SIDE_BAR_BG,
      maxHeight: SCREEN_HEIGHT,
      // ...commonStyles.shadowEffect,
    },
    sideRhsMenuCont: {
      width: '30%',
      alignItems: 'flex-end',
    },
    sideMenuLogoCont: {
      width: '100%',
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 0.5,
      borderBottomColor: appThemes?.TEXT_COLOR,
    },
    modalView: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      elevation: 5,
    },
    singleSideMenu: {
      backgroundColor: appThemes?.SIDE_BAR_BG,
      height: 40,
      // justifyContent: "center",
      paddingLeft: 20,
      marginTop: 10,
      width: '100%',
      borderBottomWidth: 0.25,
      borderColor: appThemes?.TEXT_COLOR,
      flexDirection: 'row',
    },
    sideMenuTitle: {
      fontSize: 14,
      fontWeight: '500',
      color: appThemes?.TEXT_COLOR,
    },
    sideMenuIconStyles: {
      marginRight: 10,
      color: appThemes?.TEXT_COLOR,
    },
    sideMenuProfCont: {
      width: '100%',
      height: HEADER_HEIGHT * 1.75,
      // alignItems: "center",
      justifyContent: 'center',
      borderBottomWidth: 0.25,
      borderColor: appThemes?.TEXT_COLOR,
      paddingLeft: 20,
    },
    welcomeHead: {
      fontSize: 16,
      fontWeight: '500',
      color: appThemes?.GREY,
    },
    profileName: {
      marginTop: 5,
      fontSize: 18,
      fontWeight: '500',
      // textTransform: "uppercase",
      color: appThemes?.TEXT_COLOR,
    },
    logoutCont: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    logoutInCont: {
      backgroundColor: appThemes?.LIGHT_THEME,
      width: '60%',
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: appThemes?.GREY,
    },
    logoutText: {
      fontSize: 16,
      fontWeight: '500',
      color: appThemes?.GREY,
      maxWidth: '95%',
    },
    loginBtnsCont: {
      width: '60%',
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
};
export default headerStyles;
