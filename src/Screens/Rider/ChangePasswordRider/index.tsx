import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
// import Header from './components/Header';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { fonts, colors } from './constant';
import Lock from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import LinearGradient from 'react-native-linear-gradient';
import { colors, fonts } from '../../../component/Constant';
import Header from '../../../component/Header';

export default function ChangePasswordRider() {
  const navigation = useNavigation();
  const { top, bottom } = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const submitForm = () => {
    // Submit the form or navigate
    navigation.navigate('LoginRider');

    setTimeout(() => {
      setError('');
    }, 3000);
  };

  return (
    <View
      style={{
        flex: 1,
        marginBottom: bottom,
      }}
    >
      <StatusBar barStyle="dark-content" />
      <Header
        firstIcon={true}
        navigation={navigation}
        name="Password Recovery"
        lastIcon={false}
        textColor="black"
      />
      <View
        style={{ marginHorizontal: 17, marginTop: '20%', alignItems: 'center' }}
      >
        <Text
          style={{
            fontSize: 30,
            fontFamily: fonts.bold,
            color: 'black',
            textAlign: 'center',
          }}
        >
          Change Password
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: fonts.regular,
            color: 'black',
            textAlign: 'center',
            marginTop: 10,
          }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </Text>
      </View>
      <View style={styles.inputcontainer}>
        <Lock name="lock" size={22} color={colors.grey} />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputcontainer}>
        <Lock name="lock" size={22} color={colors.grey} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity
        onPress={() => submitForm()}
        style={{
          borderRadius: 10,
          overflow: 'hidden',
          elevation: 4, // Android shadow
          shadowColor: '#000', // iOS shadow
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.primaryColor,
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
          Change Password
        </Text>
        {/* </LinearGradient> */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontFamily: fonts.regular,
    color: 'black',
    flex: 1,

    marginLeft: 10,
  },
  inputcontainer: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#ddd',
    alignSelf: 'center',
    marginTop: 20,
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
