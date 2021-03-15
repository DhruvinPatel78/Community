import React, {FC, useState} from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  // ActivityIndicator,
} from 'react-native';
import Style from './LoginScreenStyle';
import {isIOS, Logo} from '../../common/helper/helper';
import {CommonStyle} from '../../common/style/style';
import CustomTextInput from '../../component/TextInput/TextInput';
import Button from '../../component/Button/Button';
// import color from '../../common/color/color';
import {LoginScreenProps} from '../../navigation/PropType';

const LoginScreen: FC<LoginScreenProps> = ({navigation}) => {
  const [familyId, setFamilyId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const [loading, setLoading] = useState<boolean>(false);

  const loginHandler = () => {
    console.log('Login');
    navigation.navigate('HomeScreen');
  };

  return (
    <SafeAreaView style={CommonStyle.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Style.containerMain}>
          <View style={Style.headingContainer}>
            <Text style={CommonStyle.heading1}>Login</Text>
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
              error={''}
              secureTextEntry={true}
            />
            <Button
              label={'Login'}
              onPress={loginHandler}
              variant={'contain'}
              // disabled={loading}
            />
            {/*{loading && (*/}
            {/*  <ActivityIndicator*/}
            {/*    size="large"*/}
            {/*    color={color.grayColorDark}*/}
            {/*    style={{marginVertical: 10}}*/}
            {/*  />*/}
            {/*)}*/}
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default LoginScreen;
