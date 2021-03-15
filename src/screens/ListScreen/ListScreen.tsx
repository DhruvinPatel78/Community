import React, {FC, useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Pressable,
  FlatList,
  Image,
  Alert, TouchableHighlight
} from "react-native";
import Style from './ListScreenStyle';
import {CommonStyle} from '../../common/style/style';
import Modal from '../../component/Modal/Modal';
import EntIcon from 'react-native-vector-icons/Entypo';
import {MemberList, FamilyList, FirmList} from '../../common/constant/data';
import constant from '../../common/constant/constant';
import color from '../../common/color/color';
import { ListScreenProps } from "../../navigation/PropType";

const ListScreen: FC<ListScreenProps> = ({navigation}) => {
  const [listCategory, setListCategory] = useState<string>('member');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [List, setList] = useState<any>(MemberList);

  const [modalType, setModalType] = useState<string>('category');
  const [sort, setSort] = useState('A-Z');

  const filterChangeHandler = (field: string, value: string) => {
    const updateState = field === 'category' ? setListCategory : setSort;
    updateState(value);
    if (field === 'category') {
      setList(
        value === 'member'
          ? MemberList
          : value === 'family'
          ? FamilyList
          : FirmList,
      );
    }
    setModalVisible(false);
  };

  const renderFilterModal = () => {
    return modalVisible ? (
      <Modal visible={modalVisible} onClose={setModalVisible}>
        <View style={Style.alignCenter}>
          {modalType === 'category' ? (
            <>
              <Pressable
                onPress={() => filterChangeHandler('category', 'member')}>
                <Text style={Style.modalItem}>Member</Text>
              </Pressable>
              <Pressable
                onPress={() => filterChangeHandler('category', 'family')}>
                <Text style={Style.modalItem}>Family</Text>
              </Pressable>
              <Pressable
                onPress={() => filterChangeHandler('category', 'firm')}>
                <Text style={Style.modalItem}>Firm</Text>
              </Pressable>
            </>
          ) : (
            <>
              <Pressable onPress={() => filterChangeHandler('sort', 'a-z')}>
                <Text style={Style.modalItem}>A - Z</Text>
              </Pressable>
              <Pressable onPress={() => filterChangeHandler('sort', 'z-a')}>
                <Text style={Style.modalItem}>Z - A</Text>
              </Pressable>
            </>
          )}
        </View>
      </Modal>
    ) : null;
  };

  const openModal = (field: string) => {
    setModalType(field);
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
      <TouchableHighlight
        underlayColor={color.whiteColor}
        style={CommonStyle.card}
        onPress={() => navigation.navigate('PeopleDetailScreen')}>
        <View style={{flexDirection: 'row'}}>
          {listCategory === 'member' ? (
            <Image
              source={{uri: item.image}}
              height={100}
              width={100}
              style={CommonStyle.profilePhoto}
            />
          ) : null}
          <View style={Style.detailContainer}>
            {listCategory === 'member' && (
              <>
                {renderDetail('Name', item.name)}
                {renderDetail('DOB', item.birthDate)}
                {renderDetail('Firm', item.firmName)}
              </>
            )}
            {listCategory === 'family' && (
              <>
                {renderDetail('Family ID', item.familyId)}
                {renderDetail('Name', item.familyMain)}
                {renderDetail('Firm', item.firmName)}
              </>
            )}
            {listCategory === 'firm' && (
              <>
                {renderDetail('Name', item.name)}
                {renderDetail('Family Member', item.members)}
              </>
            )}
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={Style.container}>
        <Text style={CommonStyle.heading1}>List</Text>
      </View>
      <View>
        {renderFilterModal()}
        <View style={Style.filterContainer}>
          <View style={Style.filterOption}>
            <Text style={Style.filterOptionText}>View :</Text>
            <TouchableOpacity
              style={Style.filterOptionDropdown}
              onPress={() => openModal('category')}>
              <Text>{listCategory.toUpperCase()}</Text>
              <EntIcon name={'select-arrows'} />
            </TouchableOpacity>
          </View>
          <View style={Style.filterOption}>
            <Text style={Style.filterOptionText}>Sort By :</Text>
            <TouchableOpacity
              style={Style.filterOptionDropdown}
              onPress={() => openModal('sort')}>
              <Text>{sort.toUpperCase()}</Text>
              <EntIcon name={'select-arrows'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FlatList
        data={List}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ListScreen;
