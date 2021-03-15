import {StyleSheet} from 'react-native';
import color from '../../common/color/color';
import constant from '../../common/constant/constant';

const Style = StyleSheet.create({
  container: {
    padding: constant.standardGapMedium,
    backgroundColor: color.whiteColor,
  },
  filterContainer: {
    borderBottomColor: color.grayColorDark,
    borderBottomWidth: 1,
    paddingBottom: constant.standardGapTiniest,
    height: constant.heightLarge,
    flexDirection: 'row',
  },
  filterOption: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: constant.standardGapMedium,
    alignItems: 'center',
  },
  filterOptionText: {
    fontSize: constant.fontSizeTiny,
    flex: 1,
  },
  filterOptionDropdown: {
    borderWidth: 1,
    borderColor: color.grayColorDark,
    flex: 1.9,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: constant.standardGapTiniest,
    borderRadius: constant.standardGapTiniest,
  },
  modalItem: {
    fontSize: constant.fontSizeNormal,
    paddingVertical: 15,
  },
  alignCenter: {
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  detailLabel: {
    flex: 1,
    fontSize: constant.fontSizeTiny,
    fontWeight: 'bold',
  },
  flexTwo: {
    flex: 2,
  },
  detailContainer: {
    flex: 2,
    paddingHorizontal: constant.standardGapTiny,
    justifyContent: 'space-around',
  },
});

export default Style;
