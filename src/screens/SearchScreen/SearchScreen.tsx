import React, {FC, useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Pressable,
  FlatList,
  TouchableHighlight,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Style from './SearchScreenStyle';
import {CommonStyle} from '../../common/style/style';
import Modal from '../../component/Modal/Modal';
import EntIcon from 'react-native-vector-icons/Entypo';
import {MemberList, FirmList} from '../../common/constant/data';
import constant from '../../common/constant/constant';
import color from '../../common/color/color';
import CustomTextInput from '../../component/TextInput/TextInput';
import Button from '../../component/Button/Button';

const SearchSceen: FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [List, setList] = useState<any>(MemberList);
  const [searchOption, setSerchOption] = useState<string>('name');

  const filterChangeHandler = (value: string) => {
    // setList(value === 'member' ? MemberList : FirmList);
    setSerchOption(value);
    setModalVisible(false);
  };

  const getKeyboardType = ():
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'phone-pad' => {
    let keyBoard: any = 'default';
    if (
      searchOption === 'contact no' ||
      searchOption === 'family id' ||
      searchOption === 'ysk'
    ) {
      keyBoard = 'number-pad';
    }
    return keyBoard;
  };

  const renderFilterModal = () => {
    return modalVisible ? (
      <Modal visible={modalVisible} onClose={setModalVisible}>
        <View style={Style.alignCenter}>
          <Pressable onPress={() => filterChangeHandler('name')}>
            <Text style={Style.modalItem}>Name</Text>
          </Pressable>
          <Pressable onPress={() => filterChangeHandler('contact no')}>
            <Text style={Style.modalItem}>Contact No</Text>
          </Pressable>
          <Pressable onPress={() => filterChangeHandler('family id')}>
            <Text style={Style.modalItem}>Family ID</Text>
          </Pressable>
          <Pressable onPress={() => filterChangeHandler('firm')}>
            <Text style={Style.modalItem}>Firm</Text>
          </Pressable>
          <Pressable onPress={() => filterChangeHandler('ysk')}>
            <Text style={Style.modalItem}>YSK</Text>
          </Pressable>
          <Pressable onPress={() => filterChangeHandler('blood group')}>
            <Text style={Style.modalItem}>Blood Group</Text>
          </Pressable>
        </View>
      </Modal>
    ) : null;
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const renderDetail = (title: string, value: string) => {
    return (
      <View style={Style.flexRow}>
        <Text style={Style.detailLabel}>{title} :</Text>
        <Text style={Style.flexTwo}>{value}</Text>
      </View>
    );
  };

  const renderItem = ({item}: any) => {
    return (
      <TouchableHighlight style={CommonStyle.card}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: item.image}}
            height={100}
            width={100}
            style={CommonStyle.profilePhoto}
          />
          <View style={Style.detailContainer}>
            {renderDetail('Name', item.name)}
            {renderDetail('DOB', item.birthDate)}
            {renderDetail('Firm', item.firmName)}
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={CommonStyle.container}>
        <View style={Style.container}>
          <Text style={CommonStyle.heading1}>Search</Text>
        </View>
        <View>
          {renderFilterModal()}
          <View style={Style.searchContainer}>
            <View style={Style.searchContainerSelect}>
              <Text style={Style.filterOptionText}>Search By :</Text>
              <TouchableOpacity
                style={Style.filterOptionDropdown}
                onPress={openModal}>
                <Text>{searchOption.toUpperCase()}</Text>
                <EntIcon name={'select-arrows'} />
              </TouchableOpacity>
            </View>
            <View style={Style.searchTextContainer}>
              <View style={Style.searchTextField}>
                <CustomTextInput
                  label={'Search'}
                  value={searchText}
                  onChange={(value) => setSearchText(value)}
                  keyboardType={getKeyboardType()}
                />
              </View>
              <View style={Style.searchButton}>
                <Button
                  onPress={() => console.log('Hello')}
                  label={'Go'}
                  variant={'contain'}
                />
              </View>
            </View>
          </View>
        </View>
        <FlatList
          data={List}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SearchSceen;
