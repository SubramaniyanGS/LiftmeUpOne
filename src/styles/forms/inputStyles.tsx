import {StyleSheet} from 'react-native';
import {LIGHT_THEME} from '../../utils/appThemes';
import commonStyle from '../commonStyles';

const inputStyles = (theme?: any) => {
  const appThemes = theme || LIGHT_THEME;
  // const commonStyles = commonStyle(appThemes);

  return StyleSheet.create({
    textInput: {
      backgroundColor: appThemes?.INPUT_BG,
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
      height: 40,
      width: '100%',
      zIndex: 2,
      color: appThemes.BLACK,
      borderWidth: 1,
      borderColor: appThemes.LIGHT_GREY,
      // ...commonStyles.shadowEffect,
    },
    fullSizeBtn: {
      width: '100%',
      marginTop: 20,
      borderRadius: 5,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
      // ...commonStyles.shadowEffect,
    },
    btnText: {
      color: appThemes?.BTN_TITLE,
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
    btnLoader: {
      height: 30,
      width: 30,
      resizeMode: 'contain',
    },
    iconBtnCont: {
      position: 'relative',
      flexDirection: 'row',
      width: '100%',
      marginTop: 10,
      borderRadius: 5,
    },
    inputBtnIcon: {
      right: 10,
      alignSelf: 'center',
      position: 'absolute',
      zIndex: 3,
    },
  });
};

export default inputStyles;
