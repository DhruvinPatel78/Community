import {StyleSheet} from 'react-native';
import color from '../../common/color/color';
import constant from '../../common/constant/constant';

const Style = StyleSheet.create({
  container: {
    padding: constant.standardGapMedium,
    backgroundColor: color.whiteColor,
  },
  searchContainer: {
    borderBottomColor: color.grayColorDark,
    borderBottomWidth: 1,
    paddingBottom: constant.standardGapTiniest,
    paddingHorizontal: constant.standardGapSmall,
  },
  searchContainerSelect: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  filterOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: constant.standardGapMedium,
    alignItems: 'center',
  },
  filterOptionText: {
    fontSize: constant.fontSizeTiny,
    marginRight: constant.standardGapTiniest,
  },
  filterOptionDropdown: {
    borderWidth: 1,
    borderColor: color.grayColorDark,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: constant.standardGapTiniest,
    paddingHorizontal: constant.standardGapBig,
    borderRadius: constant.standardGapTiniest,
  },
  searchTextContainer: {
    flexDirection: 'row',
  },
  searchTextField: {
    flex: 2,
  },
  searchButton: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: -constant.standardGapTiniest,
    marginLeft: constant.standardGapTiny,
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
