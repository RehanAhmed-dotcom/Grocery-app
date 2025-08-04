import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
// import Header from './components/Header';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { fonts, colors } from './constant';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-native-phone-number-input';
import Header from '../../../component/Header';
import { colors, fonts } from '../../../component/Constant';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../../navigation/types';
export default function VerifyNumber() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { bottom } = useSafeAreaInsets();
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  console.log('formattedValue', formattedValue);
  console.log('Value', value);
  const phoneInput = useRef<PhoneInput>(null);
  const validatePhoneNumber = () => {
    const checkValid = phoneInput.current?.isValidNumber(value);

    if (!value) {
      Alert.alert('Error', 'Please enter your phone number.');
    } else if (!checkValid) {
      Alert.alert('Invalid Number', 'Please enter a valid phone number.');
    } else {
      Alert.alert('Success', `Phone number is valid:\n${formattedValue}`);
      navigation.navigate('ConfirmCode');
    }
  };
  return (
    <View
      style={{
        flex: 1,
        marginBottom: bottom,
      }}
    >
      <StatusBar barStyle="dark-content" />
      <Header
        firstIcon={true}
        navigation={navigation}
        name="Verify Number"
        lastIcon={false}
        textColor="black"
      />
      <View
        style={{ marginHorizontal: 17, marginTop: '20%', alignItems: 'center' }}
      >
        <Text
          style={{
            fontSize: 30,
            fontFamily: fonts.bold,
            color: 'black',
            textAlign: 'center',
          }}
        >
          Verify your number
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: fonts.regular,
            color: 'black',
            textAlign: 'center',
            marginTop: 10,
          }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </Text>
      </View>
      <View style={styles.inputcontainer}>
        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="US"
          layout="second" // or "second"
          onChangeText={text => {
            setValue(text);
          }}
          onChangeFormattedText={text => {
            setFormattedValue(text);
          }}
          withDarkTheme={true} // optional
          containerStyle={{ backgroundColor: 'transparent' }}
          textContainerStyle={{
            paddingVertical: 0,
            backgroundColor: 'transparent',
            paddingHorizontal: 0,
          }}
          flagButtonStyle={{
            backgroundColor: 'transparent',
            marginHorizontal: 0,
          }}
          countryPickerButtonStyle={{ height: 50 }}
          textInputProps={{ placeholder: 'Enter phone number' }}
        />
      </View>
      <TouchableOpacity
        onPress={() => validatePhoneNumber()}
        style={{
          borderRadius: 10,
          overflow: 'hidden',
          height: 60,
          backgroundColor: colors.primaryColor,
          elevation: 4, // Android shadow
          shadowColor: '#000', // iOS shadow
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          alignItems: 'center',
          justifyContent: 'center',
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
          Next
        </Text>
        {/* </LinearGradient> */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontFamily: fonts.regular,
    color: 'black',
    flex: 1,
  },
  inputcontainer: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#ddd',
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  gradient: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
