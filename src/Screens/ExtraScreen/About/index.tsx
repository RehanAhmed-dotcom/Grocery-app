import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
// import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
// import { colors, fonts } from '../constant';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../../../component/Header';
import { colors, fonts } from '../../../component/Constant';

export default function About() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const navigation = useNavigation();
  const { top, bottom } = useSafeAreaInsets();
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
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" />
      <Header
        firstIcon={true}
        name="About me"
        lastIcon={false}
        navigation={navigation}
        textColor="blacks"
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
      >
        <View style={{ backgroundColor: '#F4F5F9', flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            <View style={{ marginHorizontal: 15, marginTop: 40 }}>
              <Text style={{ fontFamily: fonts.bold, fontSize: 20 }}>
                Personal Details
              </Text>
              <View style={styles.inputcontainer}>
                <View>
                  <Image
                    source={require('../../../assets/icons/userIcongrey.png')}
                    style={{ width: 24, height: 24, resizeMode: 'contain' }}
                  />
                </View>
                <TextInput
                  placeholder="Enter Name"
                  placeholderTextColor={colors.grey}
                  style={styles.input}
                  value="Saad Mughal"
                  focusable={false}
                />
              </View>
              <View style={styles.inputcontainer}>
                <View>
                  <Image
                    source={require('../../../assets/icons/msgIcon.png')}
                    style={{ width: 24, height: 24, resizeMode: 'contain' }}
                  />
                </View>
                <TextInput
                  placeholder="Enter Email"
                  placeholderTextColor={colors.grey}
                  style={styles.input}
                  value="saadey7@gmail.com"
                  focusable={false}
                />
              </View>
              <View style={styles.inputcontainer}>
                <View>
                  <Image
                    source={require('../../../assets/icons/phoneIcon.png')}
                    style={{ width: 24, height: 24, resizeMode: 'contain' }}
                  />
                </View>
                <TextInput
                  placeholder="Enter Phone"
                  placeholderTextColor={colors.grey}
                  style={styles.input}
                  value="03035122229"
                  focusable={false}
                />
              </View>
            </View>
            <View style={{ marginHorizontal: 15, marginTop: 30 }}>
              <Text style={{ fontFamily: fonts.bold, fontSize: 20 }}>
                Change Password
              </Text>
              <View style={styles.inputcontainer}>
                <View>
                  <Image
                    source={require('../../../assets/icons/lockIcon.png')}
                    style={{ width: 24, height: 24, resizeMode: 'contain' }}
                  />
                </View>
                <TextInput
                  placeholder="Current password"
                  placeholderTextColor={colors.grey}
                  style={styles.input}
                  secureTextEntry={!showPassword}
                  focusable={false}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={{ padding: 8 }}
                >
                  <Feather
                    name={!showPassword ? 'eye-off' : 'eye'}
                    size={20}
                    color={colors.grey}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.inputcontainer}>
                <View>
                  <Image
                    source={require('../../../assets/icons/lockIcon.png')}
                    style={{ width: 24, height: 24, resizeMode: 'contain' }}
                  />
                </View>
                <TextInput
                  placeholder="New password"
                  placeholderTextColor={colors.grey}
                  style={styles.input}
                  secureTextEntry={!showPassword1}
                  focusable={false}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword1(!showPassword1)}
                  style={{ padding: 8 }}
                >
                  <Feather
                    name={!showPassword1 ? 'eye-off' : 'eye'}
                    size={20}
                    color={colors.grey}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.inputcontainer}>
                <View>
                  <Image
                    source={require('../../../assets/icons/lockIcon.png')}
                    style={{ width: 24, height: 24, resizeMode: 'contain' }}
                  />
                </View>
                <TextInput
                  placeholder="Confirm Password"
                  placeholderTextColor={colors.grey}
                  style={styles.input}
                  secureTextEntry={!showPassword2}
                  focusable={false}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword2(!showPassword2)}
                  style={{ padding: 8 }}
                >
                  <Feather
                    name={!showPassword2 ? 'eye-off' : 'eye'}
                    size={20}
                    color={colors.grey}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {keyboardStatus === true ? (
              <View style={{ marginTop: 100 }}></View>
            ) : null}
          </ScrollView>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              marginBottom: 25,
            }}
          >
            <TouchableOpacity
              onPress={() => Alert.alert('Kaam chal rha ha')}
              style={{
                borderRadius: 10,
                overflow: 'hidden',
                elevation: 4, // Android shadow
                shadowColor: '#000', // iOS shadow
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                height: 60,
                backgroundColor: colors.primaryColor,
                justifyContent: 'center',
                alignItems: 'center',

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
                Save Setting
              </Text>
              {/* </LinearGradient> */}
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontFamily: fonts.regular,
    color: 'black',
    fontSize: 15,
    flex: 1,
    marginLeft: 5,
  },
  inputcontainer: {
    width: '100%',
    height: 60,
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
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
