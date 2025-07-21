import {
  Alert,
  Image,
  ImageBackground,
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
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';
import { colors, fonts, images } from '../../../component/Constant';
import Header from '../../../component/Header';

export default function Welcome() {
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, marginBottom: bottom }}>
      <ImageBackground
        source={images.auth1}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      >
        <Header firstIcon={false} name="Welcome" lastIcon={false} />
        <View
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
              backgroundColor: 'green',
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
            {/* <LinearGradient
              colors={['#AEDC81', '#6CC51D']}
              locations={[0.01, 1]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradient}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
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
            </LinearGradient> */}
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
        </View>
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
