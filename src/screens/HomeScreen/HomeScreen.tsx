import React, {FC} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {CommonStyle} from '../../common/style/style';
import Style from './HomeScreenStyle';

const HomeScreen: FC = () => {
  return (
    <SafeAreaView style={CommonStyle.containerCentered}>
      <View style={Style.tileContainer}>
        <View style={[Style.tile, {backgroundColor: '#16a085'}]}>
          <Text style={Style.number}>1000</Text>
          <Text style={Style.label}>Members</Text>
        </View>
        <View style={[Style.tile, {backgroundColor: '#2980b9'}]}>
          <Text style={Style.number}>100</Text>
          <Text style={Style.label}>Family</Text>
        </View>
      </View>
      <View style={Style.tileContainer}>
        <View style={[Style.tile, {backgroundColor: '#8e44ad'}]}>
          <Text style={Style.number}>65</Text>
          <Text style={Style.label}>Firms</Text>
        </View>
        <View style={[Style.tile, {backgroundColor: '#2c3e50'}]}>
          <Text style={Style.number}>900</Text>
          <Text style={Style.label}>YSK</Text>
        </View>
      </View>
      <View style={Style.screenTitle}>
        <Text style={CommonStyle.heading1}>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
