import React, {useState} from 'react';
import {
  Alert,
  Modal as M,
  StyleSheet,
  Text,
  Pressable,
  View, TouchableOpacity
} from "react-native";
import Style from './ModalStyle';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Modal = ({visible, onClose, children}: any) => {
  return (
    <View style={Style.container}>
      <M animationType="fade" transparent={true} visible={visible}>
        <View style={Style.container}>
          <View style={Style.modal}>
            <View
              style={{
                width: '100%',
                alignItems: 'flex-end',
              }}>
              <Pressable onPress={() => onClose(false)}>
                <MatComIcon name={'close-circle-outline'} size={30} />
              </Pressable>
            </View>
            {children}
          </View>
        </View>
      </M>
    </View>
  );
};

const styles = StyleSheet.create({
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Modal;
