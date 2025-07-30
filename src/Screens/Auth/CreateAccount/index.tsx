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
import React, { useState, useRef, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { colors, fonts, images } from './constant';
// import Header from './components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { colors, fonts, images } from '../../../component/Constant';
import Header from '../../../component/Header';

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation();
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
        <Header
          firstIcon={true}
          navigation={navigation}
          name="Create Account"
          lastIcon={false}
        />
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
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
            keyboardShouldPersistTaps="handled"
          >
            <View
              style={{
                backgroundColor: '#F4F5F9',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                paddingVertical: 10,
                width: '100%',
              }}
            >
              <Text
                style={{
                  marginLeft: 20,
                  fontFamily: fonts.bold,
                  fontSize: 40,
                  lineHeight: 55,
                  marginTop: 20,
                }}
              >
                Create account
              </Text>
              <Text
                style={{
                  marginLeft: 20,
                  fontFamily: fonts.regular,
                  fontSize: 20,
                  lineHeight: 25,
                  color: colors.grey,
                }}
              >
                Quickly create account
              </Text>
              <View style={styles.inputcontainer}>
                <Fontisto name="email" size={22} color={colors.grey} />
                <TextInput
                  ref={emailInputRef}
                  style={styles.input}
                  placeholder="Email address"
                  onFocus={() => scrollToInput(emailInputRef)}
                  keyboardType="email-address"
                />
              </View>
              <View style={styles.inputcontainer}>
                <Feather name="phone" size={22} color={colors.grey} />
                <TextInput
                  ref={phoneInputRef}
                  style={styles.input}
                  placeholder="Phone number"
                  keyboardType="phone-pad"
                  onFocus={() => scrollToInput(phoneInputRef)}
                />
              </View>
              <View style={styles.inputcontainer}>
                <Feather name="lock" size={22} color={colors.grey} />
                <TextInput
                  ref={passwordInputRef}
                  style={styles.input}
                  placeholder="........."
                  secureTextEntry={!showPassword}
                  onFocus={() => scrollToInput(passwordInputRef)}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Feather
                    name={!showPassword ? 'eye-off' : 'eye'}
                    size={20}
                    color={colors.grey}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('VerifyNumber')}
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  elevation: 4, // Android shadow
                  shadowColor: '#000', // iOS shadow
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                  height: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: colors.primaryColor,
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
                  Signup
                </Text>
                {/* </LinearGradient> */}
              </TouchableOpacity>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 15,
                  marginHorizontal: 15,
                }}
              >
                <Text
                  style={{
                    marginLeft: 20,
                    fontFamily: fonts.regular,
                    fontSize: 20,
                    lineHeight: 25,
                    color: colors.grey,
                  }}
                >
                  Already have an account?{' '}
                  <Text
                    onPress={() => navigation.navigate('Login')}
                    style={{ fontFamily: fonts.medium, color: 'black' }}
                  >
                    Login
                  </Text>
                </Text>
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
