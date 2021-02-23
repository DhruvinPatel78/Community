import {StyleSheet} from 'react-native';
import {CommonStyle} from '../../common/style/style';
import color from '../../common/color/color';
import constant from '../../common/constant/constant';

const Style = StyleSheet.create({
  container: {
    ...CommonStyle.containerCentered,
    backgroundColor: color.whiteColor,
  },
  logo: {
    height: constant.deviceWidth / 2,
    width: constant.deviceWidth / 2,
  },
});

export default Style;
