import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Platform,
} from 'react-native';
import React from 'react';
import commonStyle from '../../styles/commonStyles';

import appImages from '../../assets/index';
import GetIcon from '../../components/GetIcon';

import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../../redux/reducers/settingsReducer';

const Settings = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state: any) => state?.settings);
  const appThemes = settings?.appThemes;
  const commonStyles = commonStyle(appThemes);

  return (
    <View style={commonStyles.responsiveCont}>
      <View
        style={{
          ...commonStyles.subContainer,
          paddingBottom: 10,
        }}>
        <ScrollView>
          <View
            style={{
              padding: 10,
              borderRadius: 10,
              backgroundColor: appThemes?.SUB_PRIMARY,
              marginTop: 10,
              marginBottom: 5,
            }}>
            <Text style={{...commonStyles.pageTitle, marginTop: 0}}>
              Theme{' '}
            </Text>
            <View style={{marginTop: 10, ...commonStyles.rowJC}}>
              <View style={{width: '48%'}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color:
                      settings?.theme === 'light'
                        ? appThemes.GREY
                        : appThemes.LIGHT_GREY,
                  }}>
                  Dark Mode
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#bbb',
                    padding: 1.5,
                    marginTop: 10,
                    width: '100%',
                    position: 'relative',
                  }}
                  onPress={() => {
                    settings.theme !== 'dark' && dispatch(toggleTheme('dark'));
                  }}>
                  <ImageBackground
                    source={appImages.DARK_THEME}
                    style={{
                      height: 250,
                      width: '100%',
                      position: 'relative',
                    }}
                    resizeMode="stretch">
                    {settings?.theme === 'dark' && (
                      <GetIcon
                        iconSize={25}
                        iconColor={appThemes.SUCCESS}
                        iconFamily="FontAwesome5"
                        iconName="check"
                        iconStyles={{
                          top: 2.5,
                          right: 2.5,
                          position: 'absolute',
                        }}
                      />
                    )}
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View style={{width: '48%'}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color:
                      settings?.theme === 'light'
                        ? appThemes.GREY
                        : appThemes.LIGHT_GREY,
                  }}>
                  Light Mode
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#bbb',
                    padding: 1.5,
                    marginTop: 10,
                    width: '100%',
                  }}
                  onPress={() => {
                    settings.theme !== 'light' &&
                      dispatch(toggleTheme('light'));
                    dispatch(toggleTheme('light'));
                  }}>
                  <ImageBackground
                    source={appImages.LIGHT_THEME}
                    style={{
                      height: 250,
                      width: '100%',
                      position: 'relative',
                    }}
                    resizeMode="stretch">
                    {settings?.theme === 'light' && (
                      <GetIcon
                        iconSize={25}
                        iconColor={appThemes.SUCCESS}
                        iconFamily="FontAwesome5"
                        iconName="check"
                        iconStyles={{
                          top: 2.5,
                          right: 2.5,
                          position: 'absolute',
                        }}
                      />
                    )}
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Settings;
