import React, {FC, FunctionComponent} from 'react';
import {View, TextInput, Text} from 'react-native';
import Style from './TextInputStyle';

type ITextInput = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children?: any;
  error: string;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'phone-pad';
  secureTextEntry?: boolean;
};

const CustomTextInput = (props: ITextInput) => {
  const {label, value, error = '', onChange} = props;

  const onTextChange = (value: any) => {
    console.log(value);
    onChange(value);
  };

  return (
    <View style={Style.container}>
      <Text style={Style.labelStyle}>{label}</Text>
      <TextInput
        {...props}
        value={value}
        onChange={onTextChange}
        style={Style.textInputStyle}
      />
      {error !== '' && <Text style={Style.errorStyle}>{error && error}</Text>}
    </View>
  );
};

export default CustomTextInput;
