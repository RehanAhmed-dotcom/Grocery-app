import {
  Alert,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import FaceBook from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import React, { useState, useRef, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { colors, fonts, images } from './constant';
// import Header from './components/Header';

import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { colors, fonts, images } from '../../../component/Constant';
import Header from '../../../component/Header';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../../navigation/types';
export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const scrollViewRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const scrollToInput = inputRef => {
    inputRef.current.measureLayout(
      scrollViewRef.current,
      (x, y) => {
        scrollViewRef.current.scrollTo({ y: y - 50, animated: true });
      },
      error => console.log('Error measuring layout:', error),
    );
  };
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1, marginBottom: bottom }}>
      <ImageBackground
        source={images.auth1}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={
            Platform.OS === 'ios'
              ? 'padding'
              : keyboardStatus === true
              ? 'height'
              : 'undefined'
          }
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        >
          <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={{ marginTop: 30 }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 36,
                  fontFamily: fonts.bold,
                  textAlign: 'center',
                }}
              >
                Sign Up
              </Text>
              <View style={{ alignSelf: 'center' }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    marginTop: 30,
                    width: 250,
                    // backgroundColor: 'red',
                    fontFamily: fonts.regular,
                    textAlign: 'center',
                  }}
                >
                  To get more advantages sign up your accouts by filling in some
                  information
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 30,
                  marginBottom: 30,
                  padding: 15,
                  marginHorizontal: 15,
                  marginTop: 30,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,

                    fontFamily: fonts.semibold,
                    marginTop: 15,
                    marginLeft: 15,
                    color: 'black',
                  }}
                >
                  Enter name
                </Text>
                <View style={styles.inputcontainer}>
                  {/* <Fontisto name="email" size={22} color={colors.grey} /> */}
                  <TextInput
                    ref={emailInputRef}
                    style={styles.input}
                    placeholderTextColor={'grey'}
                    placeholder="Alex William"
                    onFocus={() => scrollToInput(emailInputRef)}
                    keyboardType="email-address"
                  />
                </View>
                <Text
                  style={{
                    fontSize: 14,

                    fontFamily: fonts.semibold,
                    marginTop: 10,
                    marginLeft: 15,
                    color: 'black',
                  }}
                >
                  Email address
                </Text>
                <View style={styles.inputcontainer}>
                  {/* <Fontisto name="email" size={22} color={colors.grey} /> */}
                  <TextInput
                    ref={emailInputRef}
                    style={styles.input}
                    placeholderTextColor={'grey'}
                    placeholder="abc@gmail.com"
                    onFocus={() => scrollToInput(emailInputRef)}
                    keyboardType="email-address"
                  />
                </View>
                <Text
                  style={{
                    fontSize: 14,

                    fontFamily: fonts.semibold,
                    marginTop: 10,
                    marginLeft: 15,
                    color: 'black',
                  }}
                >
                  Enter your number
                </Text>
                <View style={styles.inputcontainer}>
                  {/* <Fontisto name="email" size={22} color={colors.grey} /> */}
                  <TextInput
                    ref={emailInputRef}
                    style={styles.input}
                    placeholderTextColor={'grey'}
                    placeholder="+92 1234567890"
                    onFocus={() => scrollToInput(emailInputRef)}
                    keyboardType="number-pad"
                  />
                </View>
                <Text
                  style={{
                    fontSize: 14,

                    fontFamily: fonts.semibold,
                    marginTop: 10,
                    marginLeft: 15,
                    color: 'black',
                  }}
                >
                  Create a passwrord
                </Text>
                <View style={styles.inputcontainer}>
                  {/* <Feather name="lock" size={22} color={colors.grey} /> */}
                  <TextInput
                    ref={passwordInputRef}
                    style={styles.input}
                    placeholderTextColor={'grey'}
                    placeholder="........."
                    secureTextEntry={!showPassword}
                    onFocus={() => scrollToInput(passwordInputRef)}
                  />
                  {/* <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Feather
                      name={!showPassword ? 'eye-off' : 'eye'}
                      size={20}
                      color={colors.grey}
                    />
                  </TouchableOpacity> */}
                </View>

                <TouchableOpacity
                  onPress={() => navigation.navigate('VerifyNumber')}
                  style={{
                    borderRadius: 10,
                    overflow: 'hidden',
                    backgroundColor: colors.primaryColor,
                    elevation: 4, // Android shadow
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    shadowColor: '#000', // iOS shadow
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                    marginHorizontal: 15,
                    marginTop: 30,
                    marginBottom: 30,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 22,
                      fontFamily: fonts.medium,
                      color: 'white',
                    }}
                  >
                    Sign up
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 15,
                    marginTop: 20,
                    marginHorizontal: 15,
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 20,
                      fontFamily: fonts.bold,
                      fontSize: 14,
                      lineHeight: 25,
                      color: '#263238',
                    }}
                  >
                    Already have an account ?{' '}
                    <Text
                      onPress={() => navigation.navigate('Login')}
                      style={{
                        fontFamily: fonts.bold,
                        // marginLeft: 20,
                        fontSize: 14,
                        color: colors.primaryColor,
                      }}
                    >
                      {' '}
                      Login
                    </Text>
                  </Text>
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontFamily: fonts.regular,
                    marginTop: 30,
                  }}
                >
                  Other sign up options
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                  }}
                >
                  <FaceBook name="sc-facebook" size={25} color={'blue'} />
                  <Fontisto
                    name="google"
                    size={20}
                    style={{ marginLeft: 2 }}
                    color={'black'}
                  />
                  <Ionicons
                    name="apple"
                    size={20}
                    style={{ marginLeft: 7 }}
                    color={'black'}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: fonts.medium,
    marginLeft: 20,
    color: colors.grey,
  },
  input: {
    fontFamily: fonts.regular,
    color: 'black',
    flex: 1,
    marginLeft: 5,
  },
  inputcontainer: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#ddd',
    alignSelf: 'center',
    marginTop: 15,
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
