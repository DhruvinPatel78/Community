import {StyleSheet} from 'react-native';
import Constant from '../constant/constant';

export const CommonStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: Constant.standardGapSmall,
  },
  containerCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
