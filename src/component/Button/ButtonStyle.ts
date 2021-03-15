import {StyleSheet} from 'react-native';
import constant from '../../common/constant/constant';
import color from '../../common/color/color';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
    height: constant.heightLargest,
    justifyContent: 'center',
    borderRadius: constant.standardGapTiny,
    borderColor: color.grayColorDark,
  },
  textStyle: {
    color: color.whiteColor,
    fontWeight: 'bold',
    fontSize: constant.fontSizeSmall,
  },
});
