import {StyleSheet} from 'react-native';
import constant from '../../common/constant/constant';
import color from '../../common/color/color';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 5,
  },
  textInputStyle: {
    backgroundColor: color.whiteColor,
    width: '100%',
    height: constant.heightLarge,
    borderRadius: constant.standardGapTiny,
    borderColor: color.grayColor,
    borderWidth: 2,
    paddingHorizontal: 10,
  },
  labelStyle: {
    fontSize: constant.fontSizeSmall,
    marginVertical: 5,
    color: color.secondaryColor,
  },
  errorStyle: {
    fontSize: constant.fontSizeTiny,
    marginTop: 5,
    color: color.redColor,
  },
});
