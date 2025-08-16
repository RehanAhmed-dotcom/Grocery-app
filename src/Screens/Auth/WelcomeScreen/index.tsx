import React, { useEffect } from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, fonts, images } from '../../../component/Constant';
import { useNavigation } from '@react-navigation/native';
import Left from 'react-native-vector-icons/AntDesign';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../../navigation/types';
import { heightPercentageToDP } from 'react-native-responsive-screen';
const WelcomeScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={{ flex: 1, marginBottom: bottom }}>
      <View
        style={{
          position: 'absolute',
          //   backgroundColor: 'red',
          width: '100%',
          top: 50,
          zIndex: 100,
        }}
      >
        <Text
          style={{
            color: 'white',

            textAlign: 'center',
            fontSize: 55,
            fontFamily: fonts.medium,
          }}
        >
          Welcome
        </Text>
      </View>
      <ImageBackground
        source={images.auth1}
        style={{ width: '100%', height: '100%', justifyContent: 'flex-end' }}
        resizeMode="cover"
      >
        <View
          style={{
            width: '100%',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            paddingVertical: 30,
            paddingHorizontal: 15,
            alignItems: 'center',
            backgroundColor: colors.primaryColor,
          }}
        >
          <Text
            style={{
              color: 'black',
              fontSize: 28,
              //   gap: 10,

              letterSpacing: 4,
              fontFamily: fonts.medium,
              textAlign: 'center',
            }}
          >
            Let's find the Best & Health Grocery
          </Text>
          <Text
            style={{
              color: 'white',
              marginTop: 60,
              fontSize: 16,
              fontFamily: fonts.regular,
              textAlign: 'center',
            }}
          >
            Start your journey with Save & shop and Discover a wide range of
            fresh.
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Welcome')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              paddingHorizontal: 20,
              marginTop: 50,
              paddingVertical: 10,
              borderRadius: 10,
              marginBottom: 30,
            }}
          >
            <Text
              style={{
                fontSize: 21,
                fontFamily: fonts.bold,
                color: colors.primaryColor,
              }}
            >
              Get Started{' '}
            </Text>
            <Left name="arrowright" size={24} color={colors.primaryColor} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
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
