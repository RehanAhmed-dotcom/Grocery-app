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
import Plus from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { fonts, colors } from './constant';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../../component/Header';
import { colors, fonts, images } from '../../../component/Constant';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../../navigation/types';
import { heightPercentageToDP } from 'react-native-responsive-screen';
export default function CNICDetails() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { bottom } = useSafeAreaInsets();
  const [cnic, setCnic] = useState('');
  const [error, setError] = useState('');
  const handleChange = (text: string) => {
    // Remove spaces
    const cleaned = text.replace(/[^0-9-]/g, '');
    setCnic(cleaned);

    // CNIC format check: 5 digits - 7 digits - 1 digit
    const regex = /^[0-9]{5}-[0-9]{7}-[0-9]$/;
    if (regex.test(cleaned)) {
      setError('');
    } else {
      setError('CNIC must be like 42101-1234567-1');
    }
  };
  const passwordInputRef = useRef(null);
  const handleSubmit = () => {
    navigation.navigate('CNICPics');
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
          <Text style={styles.heading}>Add your CNIC Details</Text>
          <Text
            style={{
              marginTop: 30,
              alignSelf: 'center',
              fontSize: 18,
              fontFamily: fonts.bold,
              color: 'white',
            }}
          >
            Enter the 13 digits CNIC
          </Text>

          <View style={styles.inputcontainer}>
            {/* <Feather name="lock" size={22} color={colors.grey} /> */}
            <TextInput
              value={cnic}
              style={{ height: 50 }}
              onChangeText={handleChange}
              keyboardType="numeric"
              placeholderTextColor={'#ccc'}
              placeholder="Enter CNIC (37405-1234567-1)"
              maxLength={15}
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
        <Text
          style={{
            marginTop: 50,
            alignSelf: 'center',
            fontSize: 21,
            fontFamily: fonts.bold,
            color: 'white',
          }}
        >
          Add Front / Back Picture
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('CNICPics')}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 50,
            justifyContent: 'center',
            backgroundColor: '#D9D9D9',
          }}
        >
          <Plus name="plus" color={colors.primaryColor} size={30} />
        </TouchableOpacity>
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
    marginTop: 30,
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
    marginTop: heightPercentageToDP(10),
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
