/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { fonts } from '../Constant';
// import { fonts } from '../../Constant';
// import { fonts } from '../../constant';

interface HeaderProps {
  firstIcon: boolean;
  name: string;
  navigation: any;
  textColor?: string;
  lastIcon?: boolean;
}
export default function Header({
  firstIcon,
  name,
  navigation,
  textColor,
  lastIcon,
}: HeaderProps) {
  return (
    <View
      style={{
        height: 100,
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
      }}
    >
      <View style={{ width: 50, alignItems: 'center' }}>
        {firstIcon ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={24}
              color={textColor ?? 'white'}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontFamily: fonts.medium,
            color: textColor ?? 'white',
          }}
        >
          {name}
        </Text>
      </View>
      <View style={{ width: 50, alignItems: 'center' }}>
        {name === 'My Orders' && lastIcon ? (
          <TouchableOpacity onPress={() => Alert.alert('Kaam Chal rha ha')}>
            <Image
              source={require('../../assets/icons/setting.png')}
              style={{ width: 22, height: 22 }}
            />
          </TouchableOpacity>
        ) : name === 'My Address' && lastIcon ? (
          <TouchableOpacity
            style={{ padding: 5 }}
            onPress={() => navigation.navigate('AddAddress')}
          >
            <Image
              source={require('../../assets/icons/plus.png')}
              style={{ width: 22, height: 22, resizeMode: 'contain' }}
            />
          </TouchableOpacity>
        ) : name === 'My Cards' && lastIcon ? (
          <TouchableOpacity
            style={{ padding: 5 }}
            onPress={() => navigation.navigate('AddCard')}
          >
            <Image
              source={require('../../assets/icons/plus.png')}
              style={{ width: 22, height: 22, resizeMode: 'contain' }}
            />
          </TouchableOpacity>
        ) : null}
        {/* <Text>Last</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
