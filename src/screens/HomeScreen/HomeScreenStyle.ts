import {StyleSheet} from 'react-native';
import {CommonStyle} from '../../common/style/style';
import color from '../../common/color/color';
import constant from '../../common/constant/constant';

const Style = StyleSheet.create({
  container: {
    ...CommonStyle.containerCentered,
    backgroundColor: color.whiteColor,
  },
  tileContainer: {
    width: '100%',
    marginVertical: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  tile: {
    backgroundColor: 'green',
    width: constant.deviceWidth / 2.5,
    height: constant.deviceWidth / 2.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: constant.standardGapBig,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  number: {
    textAlign: 'center',
    fontSize: constant.fontSizeNormal,
    fontWeight: 'bold',
    color: color.whiteColor,
  },
  label: {
    textAlign: 'center',
    fontSize: constant.fontSizeMedium,
    fontWeight: 'bold',
    marginTop: constant.standardGapTiny,
    color: color.whiteColor,
  },
  screenTitle: {
    position: 'absolute',
    height: '100%',
    paddingTop: 40,
    left: 15,
  },
});

export default Style;
