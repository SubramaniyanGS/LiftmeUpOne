import {View} from 'react-native';
import React, {FC} from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Zocial from 'react-native-vector-icons/Zocial';

import {useSelector} from 'react-redux';
import store from '../redux/store';
import {LIGHT_THEME} from '../utils/appThemes';

interface MyComponentProps {
  iconFamily?: string;
  iconSize?: any;
  iconStyles?: any;
  iconColor?: string;
  iconName: string;
}
const iconComponentMap: {[key: string]: React.ComponentType<any>} = {
  IonIcon,
  AntDesign,
  FontAwesome,
  EntypoIcon,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  Foundation,
  EvilIcons,
  Fontisto,
  Zocial,
};
const GetIcon: FC<MyComponentProps> = ({
  iconFamily,
  iconName,
  iconSize,
  iconStyles,
  iconColor,
}) => {
  const getIconByFamily = () => {
    const settings = store.getState().settings;
    const appThemes = settings?.appThemes;

    const IconComponent = iconComponentMap[iconFamily || 'IonIcon'];
    if (IconComponent) {
      return (
        <IconComponent
          name={iconName}
          style={iconStyles}
          size={iconSize || 20}
          color={iconColor || appThemes.TEXT_COLOR}
        />
      );
    } else {
      return <></>;
    }
  };
  return <View>{getIconByFamily()}</View>;
};

export default React.memo(GetIcon);
