import {
  Alert,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { RefObject, useRef, useState } from 'react';
// import Header from './components/Header';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { fonts, colors } from './constant';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../../component/Header';
import { colors, fonts, images } from '../../../component/Constant';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../../navigation/types';
import { heightPercentageToDP } from 'react-native-responsive-screen';
export default function EnterPassword() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { bottom } = useSafeAreaInsets();

  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (index < 3) {
        inputs.current[index + 1].focus();
      }
    } else if (text === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };
  const passwordInputRef = useRef(null);
  const handleSubmit = () => {
    navigation.navigate('ConfirmCode');
  };
  // const passwordInputRef = useRef(null);
  const scrollViewRef = useRef(null);
  const scrollToInput = (inputRef: RefObject<TextInput>) => {
    inputRef.current.measureLayout(
      scrollViewRef.current,
      (x: number, y: number) => {
        scrollViewRef.current.scrollTo({ y: y - 50, animated: true });
      },
      (error: unknown) => console.log('Error measuring layout:', error),
    );
  };
  return (
    <View style={{ flex: 1, marginBottom: bottom }}>
      <ImageBackground
        source={images.auth1}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      >
        <StatusBar barStyle="dark-content" />
        {/* <Header
        firstIcon={true}
        navigation={navigation}
        name="Verify Number"
        lastIcon={false}
        textColor="black"
      /> */}

        <View
          style={{
            marginHorizontal: 17,
            marginTop: '20%',
            // alignItems: 'center',
          }}
        >
          <Text style={styles.heading}>Enter your password</Text>
          <Text
            style={{
              fontSize: 14,

              fontFamily: fonts.semibold,
              marginTop: 40,
              marginLeft: 15,
              color: 'white',
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
              secureTextEntry={true}
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
        </View>

        <TouchableOpacity onPress={handleSubmit} style={styles.buttonWrapper}>
          {/* <LinearGradient
          colors={['#AEDC81', '#6CC51D']}
          locations={[0.01, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        > */}
          <Text style={styles.buttonText}>Next</Text>
          {/* </LinearGradient> */}
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 31,
    fontFamily: fonts.bold,
    color: 'white',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 18,
    fontFamily: fonts.medium,
    color: 'white',
    width: 250,
    textAlign: 'center',
    marginTop: 30,
  },
  subHeading1: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: 'white',
    width: 250,
    textAlign: 'center',
    marginTop: 40,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 20,
  },
  inputcontainer: {
    width: '90%',
    height: 50,
    // borderWidth: 1,
    borderRadius: 12,
    borderColor: '#ddd',
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: 5,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    paddingHorizontal: 15,
  },
  input: {
    fontFamily: fonts.regular,
    color: 'black',
    fontSize: 14,
    // textAlign: 'center',
    width: '100%',
    height: '100%',
  },
  buttonWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    backgroundColor: 'white',
    height: 60,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginHorizontal: 15,
    marginTop: heightPercentageToDP(15),
  },
  gradient: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 21,
    fontFamily: fonts.medium,
    color: colors.primaryColor,
  },
});
