import React, {FC, useState} from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import Style from './LoginScreenStyle';
import {isIOS, Logo} from '../../common/helper/helper';
import {CommonStyle} from '../../common/style/style';
import CustomTextInput from '../../component/TextInput/TextInput';
import Button from '../../component/Button/Button';

const LoginScreen: FC = () => {
  const [familyId, setFamilyId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loginHandler = () => {
    console.log('Login');
  };

  return (
    <SafeAreaView style={CommonStyle.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Style.containerMain}>
          <View style={Style.headingContainer}>
            <Text style={Style.heading}>Login</Text>
          </View>
          <KeyboardAvoidingView
            style={Style.container}
            behavior={isIOS ? 'padding' : 'height'}>
            <Image source={Logo} style={Style.logo} />
            <CustomTextInput
              label={'Family ID'}
              value={familyId}
              onChange={setFamilyId}
              error={''}
            />
            <CustomTextInput
              label={'Password'}
              value={password}
              onChange={setPassword}
              error={'Invalid'}
              secureTextEntry={true}
            />
            <Button
              label={'Login'}
              onPress={loginHandler}
              variant={'contain'}
            />
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default LoginScreen;
