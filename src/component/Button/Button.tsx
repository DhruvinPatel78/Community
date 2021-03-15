import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Style from './ButtonStyle';
import color from '../../common/color/color';

interface IButton {
  onPress: () => void;
  label: string;
  variant: 'contain' | 'outline';
  disabled?: boolean;
}

const Button = ({onPress, label, variant, disabled = false}: IButton) => {
  const customContainerStyle = {
    ...Style.container,
    backgroundColor:
      variant === 'contain' ? color.grayColorDark : color.whiteColor,
    borderWidth: variant === 'contain' ? 0 : 2,
  };

  const customTextStyle = {
    ...Style.textStyle,
    color: variant === 'contain' ? color.whiteColor : color.grayColorDark,
  };

  return (
    <TouchableOpacity
      style={[
        {...customContainerStyle},
        // {backgroundColor: disabled ? color.grayColor : color.grayColorDark},
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={customTextStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
