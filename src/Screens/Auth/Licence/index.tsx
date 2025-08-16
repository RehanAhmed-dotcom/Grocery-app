import {
  Alert,
  Image,
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
import ImagePicker from 'react-native-image-crop-picker';
import { colors, fonts, images } from '../../../component/Constant';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../../navigation/types';
import { heightPercentageToDP } from 'react-native-responsive-screen';
export default function Licence() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { bottom } = useSafeAreaInsets();
  const [bill, setBill] = useState('');
  const ImagePick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setBill(image.path);

      console.log(image);
    });
  };
  const handleSubmit = () => {
    navigation.navigate('Login');
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
          <Text style={styles.heading}>Add your License Details</Text>
        </View>
        <Text
          style={{
            marginTop: 20,
            alignSelf: 'center',
            fontSize: 21,
            fontFamily: fonts.regular,
            color: 'white',
          }}
        >
          (Learner / permanent )
        </Text>
        <Text
          style={{
            marginTop: 30,
            alignSelf: 'center',
            fontSize: 21,
            fontFamily: fonts.bold,
            color: 'white',
          }}
        >
          Add Picture
        </Text>
        {bill ? (
          <TouchableOpacity
            onPress={() => {
              ImagePick();
            }}
            style={{
              height: 150,
              alignSelf: 'center',
              marginTop: 30,
              width: 225,
            }}
          >
            <Image
              resizeMode="cover"
              style={{ height: '100%', width: '100%' }}
              source={
                bill
                  ? { uri: bill }
                  : require('../.././../assets/FrontCNIC.png')
              }
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => ImagePick()}
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
        )}

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
    fontSize: 29,
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
