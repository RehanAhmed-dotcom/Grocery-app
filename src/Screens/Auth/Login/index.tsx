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
  Switch,
} from 'react-native';
import React, { useState, useRef, useEffect, RefObject } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { colors, fonts, images } from './constant';
// import Header from './components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, fonts, images } from '../../../component/Constant';
import Header from '../../../component/Header';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../../navigation/types';
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const scrollViewRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const scrollToInput = (inputRef: RefObject<TextInput>) => {
    inputRef.current.measureLayout(
      scrollViewRef.current,
      (x: number, y: number) => {
        scrollViewRef.current.scrollTo({ y: y - 50, animated: true });
      },
      (error: unknown) => console.log('Error measuring layout:', error),
    );
  };
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
          name="Login"
          lastIcon={false}
        />
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={
            Platform.OS === 'ios'
              ? 'padding'
              : keyboardStatus === true
              ? 'height'
              : undefined
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
                Welcome Back !
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
                Sign in to your account
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
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                  alignItems: 'center',
                  marginTop: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      toggleSwitch();
                    }}
                    style={{}}
                  >
                    <Ionicons
                      name={isEnabled ? 'checkbox' : 'checkbox-outline'}
                      color={isEnabled ? '#6CC51D' : '#ccc'}
                      size={24}
                    />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 17, fontFamily: fonts.regular }}>
                    Remember Me
                  </Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Forgot')}
                  >
                    <Text
                      style={{
                        fontSize: 17,
                        fontFamily: fonts.regular,
                        color: '#407EC7',
                      }}
                    >
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('BottomNav', { screen: 'Home' })
                }
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  backgroundColor: colors.primaryColor,
                  elevation: 4, // Android shadow
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 60,
                  shadowColor: '#000', // iOS shadow
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
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
                  Log in
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
                  Don't have an account?{' '}
                  <Text
                    onPress={() => navigation.navigate('CreateAccount')}
                    style={{ fontFamily: fonts.medium, color: 'black' }}
                  >
                    Sign up
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
