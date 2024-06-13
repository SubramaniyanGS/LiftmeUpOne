import React, {FC} from 'react';
import {Platform, Text} from 'react-native';
import {Animated, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import GetIcon from '../components/GetIcon';
// import bottomNavStyles from "../styles/nav/bottomNavStyles";
import bottomStyles from '../styles/nav/bottomNavStyles';
import {useSelector} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
interface BottomNavProps {
  currentRoute?: string;
}

const BottomNavBar: FC<BottomNavProps> = ({currentRoute}) => {
  const navigation = useNavigation<any>();
  const settings = useSelector((state: any) => state?.settings);
  const appThemes = settings?.appThemes;
  const bottomNavStyles = bottomStyles(appThemes);

  const routes = settings?.menuOptions;

  const totalTabs = routes?.length || 0;
  const tabWidth = 100 / totalTabs;
  const translateX = Animated.divide(new Animated.Value(0), tabWidth);
  const insets = useSafeAreaInsets();
  console.log('BOTTOMNAV::', routes);

  return (
    <View
      style={{
        ...bottomNavStyles?.navCont,
        bottom: Platform.OS === 'android' ? 0 : insets.bottom,
      }}>
      {routes &&
        Array.isArray(routes) &&
        routes.map((route, index) => {
          const isFocused = currentRoute === (route?.routeName || '');
          const opacity = isFocused ? 1 : 1;

          return (
            <TouchableOpacity
              key={index}
              style={[bottomNavStyles.singleNavMenu]}
              onPress={() => navigation.navigate(route?.routeName || '')}>
              {isFocused && (
                <View
                  style={{
                    width: '50%',
                    height: 4,
                    backgroundColor: appThemes?.TEXT_COLOR,
                  }}
                />
              )}

              <Animated.View
                style={[
                  bottomNavStyles?.navInMenu,
                  {
                    opacity,
                    borderRightWidth: index != routes?.length - 1 ? 1 : 0,
                    borderRightColor: appThemes?.PRIMARY,
                    borderTopLeftRadius: index == 0 ? 25 : 0,
                    borderTopRightRadius: index === routes?.length - 1 ? 25 : 0,
                  },
                ]}>
                <GetIcon
                  iconFamily={route?.iconFamily}
                  iconName={route?.iconName}
                  iconStyles={{
                    ...bottomNavStyles.menuIcon,
                    color: appThemes.TEXT_COLOR,
                  }}
                />
                <Text
                  style={{
                    ...bottomNavStyles.menuName,
                    fontSize: isFocused ? 16 : 12,
                    color: appThemes.TEXT_COLOR,
                  }}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {route?.menuName}
                </Text>
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      <Animated.View
        style={[
          bottomNavStyles?.highlighter,
          {width: `${tabWidth}%`, transform: [{translateX}]},
        ]}
      />
    </View>
  );
};

export default BottomNavBar;
