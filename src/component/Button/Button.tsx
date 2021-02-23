import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Style from './ButtonStyle';
import color from '../../common/color/color';

interface IButton {
  onPress: () => void;
  label: string;
  variant: 'contain' | 'outline';
}

const Button = ({onPress, label, variant}: IButton) => {
  const customContainerStyle = {
    ...Style.container,
    backgroundColor:
      variant === 'contain' ? color.grayColorDark : color.whiteColor,
  };

  const customTextStyle = {
    ...Style.textStyle,
    color: variant === 'contain' ? color.whiteColor : color.grayColorDark,
  };

  return (
    <TouchableOpacity style={customContainerStyle} onPress={onPress}>
      <Text style={customTextStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
