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
  Image,
} from 'react-native';
import FaceBook from 'react-native-vector-icons/EvilIcons';
import React, { useState, useRef, useEffect, RefObject } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { colors, fonts, images } from './constant';
// import Header from './components/Header';
import Fontisto from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { colors, fonts, images } from '../../../component/Constant';
import Header from '../../../component/Header';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../../navigation/types';
import { heightPercentageToDP } from 'react-native-responsive-screen';
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
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={{ marginTop: 30 }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 24,
                  fontFamily: fonts.bold,
                  textAlign: 'center',
                }}
              >
                Welcome
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
                  Enter your email address and password to access your account
                  or create an account
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 30,
                  padding: 15,
                  marginHorizontal: 15,
                  marginTop: heightPercentageToDP(10),
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    marginTop: 15,
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
                    fontSize: 16,
                    marginTop: 40,
                    marginLeft: 15,
                    color: 'black',
                  }}
                >
                  Passwrord
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
                  onPress={() => navigation.navigate('Home')}
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
                    marginTop: heightPercentageToDP(10),
                    marginBottom: 30,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: fonts.medium,
                      color: 'white',
                    }}
                  >
                    Sign in
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 16,
                    fontFamily: fonts.regular,
                    marginTop: heightPercentageToDP(10),
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
    marginTop: 5,
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
