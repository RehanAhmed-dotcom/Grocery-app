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
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { colors, fonts, images } from './constant';
// import Header from './components/Header';
import Cycle from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';
import { colors, fonts, images } from '../../../component/Constant';
import Header from '../../../component/Header';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../../navigation/types';
import { heightPercentageToDP } from 'react-native-responsive-screen';
export default function Welcome() {
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={{ flex: 1, marginBottom: bottom }}>
      <ImageBackground
        source={images.auth1}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      >
        <StatusBar backgroundColor={'#09a13c'} barStyle={'light-content'} />

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
              Enter your email address and password to access your account or
              create an account
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
                color: 'green',
                fontSize: 18,
                fontFamily: fonts.bold,
                marginTop: 20,
                textAlign: 'center',
              }}
            >
              Sign Up
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('CreateAccount')}
              style={{
                borderRadius: 10,
                // overflow: 'hidden',
                // elevation: 4, // Android shadow
                // shadowColor: '#000', // iOS shadow
                // shadowOffset: { width: 0, height: 2 },
                // shadowOpacity: 0.2,
                // shadowRadius: 4,
                backgroundColor: 'white',
                alignItems: 'center',
                borderWidth: 1,

                borderColor: '#ccc',
                height: 50,
                marginHorizontal: 15,
                marginTop: 15,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  // backgroundColor: 'red',
                  width: '100%',
                  height: '100%',
                }}
              >
                <EvilIcons
                  name="user"
                  size={35}
                  color="black"
                  style={{ marginRight: 10 }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: fonts.regular,
                    marginLeft: 0,
                    color: 'black',
                  }}
                >
                  Create an account as a user
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('CreateAccountRider')}
              style={{
                borderRadius: 10,
                // overflow: 'hidden',
                // elevation: 4, // Android shadow
                // shadowColor: '#000', // iOS shadow
                // shadowOffset: { width: 0, height: 2 },
                // shadowOpacity: 0.2,
                // shadowRadius: 4,

                backgroundColor: 'white',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#ccc',
                marginBottom: 50,
                height: 50,
                marginHorizontal: 15,
                marginTop: 50,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  // backgroundColor: 'red',
                  width: '100%',
                  height: '100%',
                }}
              >
                <Cycle
                  name="bicycle-sharp"
                  size={35}
                  color="black"
                  style={{ marginRight: 10 }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: fonts.regular,
                    marginLeft: 0,
                    color: 'black',
                  }}
                >
                  Create an account as a rider
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 15,
              marginTop: 40,
              marginHorizontal: 15,
            }}
          >
            <Text
              style={{
                marginLeft: 20,
                fontFamily: fonts.regular,
                fontSize: 20,
                lineHeight: 25,
                color: 'black',
              }}
            >
              Already have an account ?{' '}
              <Text
                onPress={() => navigation.navigate('Login')}
                style={{ fontFamily: fonts.medium, color: 'white' }}
              >
                Login
              </Text>
            </Text>
          </View>
        </View>
        {/* <Header firstIcon={false} name="Welcome" lastIcon={false} /> */}
        {/* <View
          style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#F4F5F9',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingVertical: 10,
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
            Welcome
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
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </Text>
          <TouchableOpacity
            onPress={() => Alert.alert('Info', 'Feature Coming Soon')}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 10,
              height: 60,
              marginTop: 15,
              marginHorizontal: 15,
            }}
          >
            <Image
              source={images.googleIcon}
              style={{ width: 22, height: 22, marginRight: 20 }}
            />
            <Text
              style={{ fontSize: 20, fontFamily: fonts.medium, marginLeft: 20 }}
            >
              Continue with google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateAccount')}
            style={{
              borderRadius: 10,
              // overflow: 'hidden',
              elevation: 4, // Android shadow
              shadowColor: '#000', // iOS shadow
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              backgroundColor: colors.primaryColor,
              alignItems: 'center',
              height: 60,
              marginHorizontal: 15,
              marginTop: 15,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: 'red',
                width: '100%',
                height: '100%',
              }}
            >
              <EvilIcons
                name="user"
                size={35}
                color="#fff"
                style={{ marginRight: 20 }}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: fonts.medium,
                  marginLeft: 20,
                  color: 'white',
                }}
              >
                Create an account
              </Text>
            </View>
           
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateAccountRider')}
            style={{
              borderRadius: 10,
              // overflow: 'hidden',
              elevation: 4, // Android shadow
              shadowColor: '#000', // iOS shadow
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              backgroundColor: colors.primaryColor,
              alignItems: 'center',
              height: 60,
              marginHorizontal: 15,
              marginTop: 15,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: 'red',
                width: '100%',
                height: '100%',
              }}
            >
              <Cycle
                name="bicycle-sharp"
                size={35}
                color="#fff"
                style={{ marginRight: 20 }}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: fonts.medium,
                  marginLeft: 20,
                  color: 'white',
                }}
              >
                Switch to rider
              </Text>
            </View>
            
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
              Already have an account ?{' '}
              <Text
                onPress={() => navigation.navigate('Login')}
                style={{ fontFamily: fonts.medium, color: 'black' }}
              >
                Login
              </Text>
            </Text>
          </View>
        </View> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  tagline: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 20,
    fontFamily: fonts.regular,
  },
  gradient: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
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
    paddingHorizontal: 10,
  },
});
