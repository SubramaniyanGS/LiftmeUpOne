import {Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import inputStyle from '../styles/forms/inputStyles';
import appImages from '../assets/index';
import store from '../redux/store';

interface MyComponentProps {
  btnTitle?: string;
  btnComponent?: any;
  btnStyles?: {[key: string]: any};
  btnTitleStyle?: any;
  onPress?: () => void;
  btnColor?: string;
  loading?: boolean;
  disabled?: boolean;
}

const FullSizeBtn: React.FC<MyComponentProps> = ({
  btnTitle,
  btnComponent: ButtonComponent,
  btnStyles,
  btnTitleStyle,
  onPress,
  btnColor,
  loading,
  disabled,
}) => {
  const settings = store.getState().settings;
  const appThemes = settings?.appThemes;
  const inputStyles = inputStyle(appThemes);
  const originalColor = btnColor || appThemes?.BTN_BG;
  const transparencyLevel = 0.8;

  const red = parseInt(originalColor?.substring(1, 3), 16);
  const green = parseInt(originalColor?.substring(3, 5), 16);
  const blue = parseInt(originalColor?.substring(5, 7), 16);

  const dullerColor = `rgba(${red}, ${green}, ${blue}, ${transparencyLevel})`;

  return (
    <TouchableOpacity
      disabled={loading || disabled}
      style={{
        ...inputStyles.fullSizeBtn,
        ...btnStyles,
        backgroundColor:
          loading || disabled ? dullerColor : btnColor || appThemes.BTN_BG,
      }}
      onPress={() => {
        onPress ? onPress() : () => {};
      }}>
      {loading ? (
        <Image
          source={appImages.loaders.LOADER30}
          style={inputStyles.btnLoader}
        />
      ) : ButtonComponent ? (
        <ButtonComponent />
      ) : (
        <Text style={{...inputStyles.btnText, ...btnTitleStyle}}>
          {btnTitle}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default React.memo(FullSizeBtn);
