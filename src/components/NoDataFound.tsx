import {View, Text} from 'react-native';
import React, {FC} from 'react';
import store from '../redux/store';

interface ComponentProps {
  containerStyles?: any;
  msg?: any;
}
const NoDataFound: FC<ComponentProps> = ({containerStyles, msg}) => {
  const settings = store.getState().settings;
  const appThemes = settings?.appThemes;

  return (
    <View
      style={{
        height: 50,
        justifyContent: 'center',
        zIndex: 10,
        ...containerStyles,
      }}>
      <Text style={{color: appThemes.TERTIARY_COLOR}}>
        {msg || 'No Data Found'}
      </Text>
    </View>
  );
};

export default React.memo(NoDataFound);
