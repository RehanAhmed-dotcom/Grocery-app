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
import Header from '../../../component/Header';
import { colors, fonts } from '../../../component/Constant';

export default function ConfirmCode() {
  const navigation = useNavigation();
  const { bottom } = useSafeAreaInsets();

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (index < 5) {
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

  const handleSubmit = () => {
    const code = otp.join('');
    if (code.length < 6) {
      Alert.alert('Error', 'Please enter complete 6-digit OTP');
    } else {
      navigation.navigate('BottomNav');
    }
  };

  return (
    <View style={{ flex: 1, marginBottom: bottom }}>
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
        <Text style={styles.heading}>Verify your number</Text>
        <Text style={styles.subHeading}>Enter your OTP code below</Text>
      </View>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <View style={styles.inputcontainer} key={index}>
            <TextInput
              ref={ref => (inputs.current[index] = ref)}
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={text => handleChange(text, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              autoFocus={index === 0}
            />
          </View>
        ))}
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
            fontSize: 18,
            lineHeight: 25,
            color: colors.grey,
          }}
        >
          Did’nt receive the code ?{' '}
        </Text>
        <Text
          onPress={() => Alert.alert('In Progress')}
          style={{ fontFamily: fonts.medium, fontSize: 18, color: 'black' }}
        >
          Resend a new code
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontFamily: fonts.bold,
    color: 'black',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 15,
    fontFamily: fonts.regular,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
  },
  inputcontainer: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontFamily: fonts.regular,
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    width: '100%',
    height: '100%',
  },
  buttonWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    backgroundColor: colors.primaryColor,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginHorizontal: 15,
    marginTop: 30,
  },
  gradient: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: fonts.medium,
    color: 'white',
  },
});
