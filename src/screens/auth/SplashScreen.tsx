import {View, Text, Image, ImageBackground, Platform} from 'react-native';
import React from 'react';
import appImages from '../../assets/index';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN} from '../../utils/appConstants';

import authStyle from '../../styles/auth/authStyles';
import store from '../../redux/store';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const settings = store.getState().settings;
  const appThemes = settings?.appThemes;

  const authStyles = authStyle(appThemes);

  const handleScreen = async () => {
    const isToken = await AsyncStorage.getItem(TOKEN);

    setTimeout(() => {
      navigation.replace('Login');
    }, 1000);
  };

  React.useEffect(() => {
    handleScreen();
    return () => {};
  }, []);

  return (
    <View style={authStyles.backgroundStyles}>
      <Image source={appImages.APP_LOGO} style={authStyles.logoStyle} />
    </View>
  );
};

export default React.memo(SplashScreen);
