import React, {FC} from 'react';
import {View, Image} from 'react-native';
import Style from './SplashScreenStyle';
import {Logo} from '../../common/helper/helper';

const SplashScreen: FC = () => {
  return (
    <View style={Style.container}>
      <Image source={Logo} style={Style.logo} />
    </View>
  );
};

export default SplashScreen;
