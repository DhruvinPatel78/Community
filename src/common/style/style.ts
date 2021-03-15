import {StyleSheet} from 'react-native';
import color from '../color/color';
import constant from '../constant/constant';

export const CommonStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.whiteColor,
  },
  containerCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.whiteColor,
  },
  heading1: {
    fontSize: constant.fontSizeLarge,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    marginVertical: constant.standardGapTiny,
    borderRadius: constant.standardGapTiny,
    padding: constant.standardGapTiny,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginHorizontal: constant.standardGapTiny,
  },
  profilePhoto: {
    height: 100,
    width: 100,
    borderRadius: constant.standardGapTiny,
  },
});
