import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import Header from './components/Header';
import { useNavigation } from '@react-navigation/native';
// import { colors, fonts } from './constant';
import UserIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import ProfileCom from './components/ProfileCom';
import Header from '../../../component/Header';
import { colors, fonts } from '../../../component/Constant';
import ProfileCom from '../../../component/ProfileCom';

export default function Profile() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        firstIcon={false}
        name=""
        navigation={navigation}
        textColor="black"
      />
      <View style={styles.body}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../../../assets/user.png')}
            style={styles.image}
          />
          <Text style={{ marginTop: 10, fontFamily: fonts.bold, fontSize: 20 }}>
            Olivia Austin
          </Text>
          <Text style={{ color: colors.grey }}>oliviaaustin@gmail.com</Text>
        </View>
        <View style={{ marginHorizontal: 20, flex: 1, marginTop: 25 }}>
          <ProfileCom />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F4F5F9',
    marginTop: 50,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -60,
  },
});
