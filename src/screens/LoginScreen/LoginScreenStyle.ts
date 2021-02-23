import {StyleSheet} from 'react-native';
import {CommonStyle} from '../../common/style/style';
import color from '../../common/color/color';
import constant from '../../common/constant/constant';

const Style = StyleSheet.create({
  container: {
    ...CommonStyle.containerCentered,
    backgroundColor: color.whiteColor,
    paddingHorizontal: constant.standardGapMedium,
  },
  containerMain: {
    ...CommonStyle.container,
    justifyContent: 'space-between',
  },
  logo: {
    height: constant.deviceWidth / 4,
    width: constant.deviceWidth / 4,
  },
  headingContainer: {
    alignItems: 'center',
  },
  heading: {
    fontSize: constant.fontSizeLarge,
    fontWeight: 'bold',
  },
});

export default Style;
