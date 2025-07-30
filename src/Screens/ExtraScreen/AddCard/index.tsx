/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
// import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../../component/Header';
// import CreditCards from '../CreditCards';
import { colors, fonts } from '../../../component/Constant';
import CreditCard from '../../../component/CreditCard';
// import { fonts } from '../constant';
// import CreditCard from '../components/CreditCard';

export default function AddCard() {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [isColor, setIsColor] = useState('white');
  const translateX = useRef(new Animated.Value(2)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isEnabled ? 19 : 2,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isEnabled]);

  const toggleSwitch = () => {
    setIsEnabled(prev => !prev);
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" />
      <Header
        firstIcon={true}
        name="Add Card"
        lastIcon={false}
        navigation={navigation}
        textColor="black"
      />
      <View style={{ backgroundColor: '#F4F5F9', flex: 1 }}>
        <View style={{ marginHorizontal: 15, marginTop: 10 }}>
          <CreditCard
            cardNumber="4234 3453 4566 4444"
            cardHolder="Saad Mughal"
            expiryDate="02/30"
          />
          <View style={styles.inputcontainer}>
            <Image
              source={require('../../../assets/icons/userIcongrey.png')}
              style={{ width: 20, height: 20, resizeMode: 'contain' }}
            />
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={text => console.log(text)}
            />
          </View>
          <View style={styles.inputcontainer}>
            <Image
              source={require('../../../assets/icons/msgIcon.png')}
              style={{ width: 20, height: 20, resizeMode: 'contain' }}
            />
            <TextInput
              style={styles.input}
              placeholder="Email address"
              onChangeText={text => console.log(text)}
            />
          </View>
          <View style={styles.inputcontainer}>
            <Image
              source={require('../../../assets/icons/phoneIcon.png')}
              style={{ width: 20, height: 20, resizeMode: 'contain' }}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              onChangeText={text => console.log(text)}
            />
          </View>
          <View style={styles.inputcontainer}>
            <Image
              source={require('../../../assets/icons/addressGrey.png')}
              style={{ width: 20, height: 20, resizeMode: 'contain' }}
            />
            <TextInput
              style={styles.input}
              placeholder="Address"
              onChangeText={text => console.log(text)}
            />
          </View>
          <View style={styles.inputcontainer}>
            <Image
              source={require('../../../assets/icons/zipcode.png')}
              style={{ width: 20, height: 20, resizeMode: 'contain' }}
            />
            <TextInput
              style={styles.input}
              placeholder="Zip Code"
              onChangeText={text => console.log(text)}
            />
          </View>

          <View style={styles.inputcontainer}>
            <Image
              source={require('../../../assets/icons/city.png')}
              style={{ width: 20, height: 20, resizeMode: 'contain' }}
            />
            <TextInput
              style={styles.input}
              placeholder="City"
              onChangeText={text => console.log(text)}
            />
          </View>

          <View style={styles.inputcontainer}>
            <Image
              source={require('../../../assets/icons/country.png')}
              style={{ width: 20, height: 20, resizeMode: 'contain' }}
            />
            <TextInput
              style={styles.input}
              placeholder="Country"
              onChangeText={text => console.log(text)}
            />
          </View>
          <TouchableOpacity
            onPress={toggleSwitch}
            activeOpacity={0.8}
            style={{
              marginVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: 40,
                height: 25,
                borderRadius: 30,
                backgroundColor: isEnabled ? '#6CC51D' : '#ccc',
                padding: 2,
                justifyContent: 'center',
              }}
            >
              <Animated.View
                style={{
                  width: 19,
                  height: 19,
                  borderRadius: 13,
                  backgroundColor: '#fff',
                  position: 'absolute',
                  top: 3,
                  left: translateX,
                }}
              />
            </View>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 18,
                fontFamily: fonts.regular,
              }}
            >
              Save Address
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            marginBottom: 25,
          }}
        >
          <TouchableOpacity
            onPress={() => Alert.alert('In Progress')}
            style={{
              borderRadius: 10,
              overflow: 'hidden',
              elevation: 4, // Android shadow
              shadowColor: '#000', // iOS shadow
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              height: 60,
              backgroundColor: colors.primaryColor,

              justifyContent: 'center',
              alignItems: 'center',
              shadowRadius: 4,
              marginHorizontal: 15,
              marginTop: 15,
            }}
          >
            {/* <LinearGradient
              colors={['#AEDC81', '#6CC51D']}
              locations={[0.01, 1]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradient}
            > */}
            <Text
              style={{
                fontSize: 20,
                fontFamily: fonts.medium,
                color: 'white',
              }}
            >
              Add Address
            </Text>
            {/* </LinearGradient> */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontFamily: fonts.regular,
    color: 'black',
    flex: 1,
    marginLeft: 5,
  },
  inputcontainer: {
    width: '100%',
    height: 50,
    // borderWidth: 1,
    borderRadius: 5,
    // borderColor: '#ddd',
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  gradient: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
