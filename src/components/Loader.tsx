import {View, Text} from 'react-native';
import React, {FC} from 'react';
import appImages from '../assets/index';
import {Image} from 'react-native';
import store from '../redux/store';

interface ComponentProps {
  containerStyles?: any;
}

const Loader: FC<ComponentProps> = ({containerStyles}) => {
  const settings = store.getState().settings;

  const chosenTheme = settings.theme;

  return (
    <View
      style={{
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        ...containerStyles,
      }}>
      <Image
        source={appImages.loaders.LOADER50}
        style={{height: 50, width: 50, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default React.memo(Loader);
