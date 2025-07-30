/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  View,
  ScrollView,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
// import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../../component/Header';
// import CreditCards from '../CreditCards';
import Cycle from 'react-native-vector-icons/Ionicons';
import { colors, fonts } from '../../../component/Constant';
import CreditCard from '../../../component/CreditCard';
import BalanceCard from '../../../component/BalanceCard';
// import { fonts } from '../constant';
// import CreditCard from '../components/CreditCard';

export default function HomeRider() {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [isColor, setIsColor] = useState('white');
  const translateX = useRef(new Animated.Value(2)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isEnabled ? 19 : 2,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isEnabled]);

  const toggleSwitch = () => {
    setIsEnabled(prev => !prev);
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" />
      <Header
        // firstIcon={true}
        firstIcon={true}
        name="Home"
        lastIcon={true}
        navigation={navigation}
        textColor="black"
      />
      <View style={{ backgroundColor: '#F4F5F9', flex: 1 }}>
        <View style={{ marginHorizontal: 15, flex: 1, marginTop: 10 }}>
          <BalanceCard
            unmask={true}
            cardNumber="Available Balance"
            cardHolder="$550"
            // expiryDate="02/30"
          />
          <ScrollView style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 20,
                marginVertical: 10,
                color: 'black',
                fontFamily: fonts.bold,
              }}
            >
              Available Orders
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('MapRider')}
              style={styles.inputcontainer}
            >
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text
                    style={{
                      fontSize: 18,
                      marginTop: 10,
                      fontFamily: fonts.medium,
                      color: 'black',
                    }}
                  >
                    Food Items/Grocery
                  </Text>
                </View>
                <Text
                  style={{ marginVertical: 5, fontSize: 12, color: 'grey' }}
                >
                  Recipient: John Nolan
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center',
                  }}
                >
                  <Cycle
                    name="bicycle-sharp"
                    size={35}
                    color="black"
                    style={{ marginRight: 10 }}
                  />

                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginBottom: 5,
                        alignItems: 'center',
                      }}
                    >
                      <Cycle
                        name="location"
                        size={14}
                        color="black"
                        style={{ marginRight: 5 }}
                      />

                      <Text
                        style={{
                          fontSize: 10,
                          fontFamily: fonts.medium,
                          color: 'black',
                        }}
                      >
                        Drop off
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: fonts.medium,
                        color: 'black',
                      }}
                    >
                      Address: Shop no 15 I8 markaz Islamabad
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 20,
                    //   backgroundColor: 'red',
                    width: '100%',
                    justifyContent: 'space-between',
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'red',
                      width: '47%',
                      borderRadius: 10,
                      height: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={{ color: 'white' }}>Reject</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.primaryColor,
                      width: '47%',
                      borderRadius: 10,
                      height: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={{ color: 'white' }}>Accept</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* <Image
              source={require('../../../assets/icons/userIcongrey.png')}
              style={{ width: 20, height: 20, resizeMode: 'contain' }}
            />
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={text => console.log(text)}
            /> */}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('MapRider')}
              style={styles.inputcontainer}
            >
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text
                    style={{
                      fontSize: 18,
                      marginTop: 10,
                      fontFamily: fonts.medium,
                      color: 'black',
                    }}
                  >
                    Food Items/Grocery
                  </Text>
                </View>
                <Text
                  style={{ marginVertical: 5, fontSize: 12, color: 'grey' }}
                >
                  Recipient: John Nolan
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center',
                  }}
                >
                  <Cycle
                    name="bicycle-sharp"
                    size={35}
                    color="black"
                    style={{ marginRight: 10 }}
                  />

                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginBottom: 5,
                        alignItems: 'center',
                      }}
                    >
                      <Cycle
                        name="location"
                        size={14}
                        color="black"
                        style={{ marginRight: 5 }}
                      />

                      <Text
                        style={{
                          fontSize: 10,
                          fontFamily: fonts.medium,
                          color: 'black',
                        }}
                      >
                        Drop off
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: fonts.medium,
                        color: 'black',
                      }}
                    >
                      Address: Shop no 12 I8 markaz Islamabad
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 20,
                    //   backgroundColor: 'red',
                    width: '100%',
                    justifyContent: 'space-between',
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'red',
                      width: '47%',
                      borderRadius: 10,
                      height: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={{ color: 'white' }}>Reject</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.primaryColor,
                      width: '47%',
                      borderRadius: 10,
                      height: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={{ color: 'white' }}>Accept</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* <Image
              source={require('../../../assets/icons/userIcongrey.png')}
              style={{ width: 20, height: 20, resizeMode: 'contain' }}
            />
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={text => console.log(text)}
            /> */}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('MapRider')}
              style={styles.inputcontainer}
            >
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text
                    style={{
                      fontSize: 18,
                      marginTop: 10,
                      fontFamily: fonts.medium,
                      color: 'black',
                    }}
                  >
                    Food Items/Grocery
                  </Text>
                </View>
                <Text
                  style={{ marginVertical: 5, fontSize: 12, color: 'grey' }}
                >
                  Recipient: John Nolan
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center',
                  }}
                >
                  <Cycle
                    name="bicycle-sharp"
                    size={35}
                    color="black"
                    style={{ marginRight: 10 }}
                  />

                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginBottom: 5,
                        alignItems: 'center',
                      }}
                    >
                      <Cycle
                        name="location"
                        size={14}
                        color="black"
                        style={{ marginRight: 5 }}
                      />

                      <Text
                        style={{
                          fontSize: 10,
                          fontFamily: fonts.medium,
                          color: 'black',
                        }}
                      >
                        Drop off
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: fonts.medium,
                        color: 'black',
                      }}
                    >
                      Address: Shop no 06 I8 markaz Islamabad
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 20,
                    //   backgroundColor: 'red',
                    width: '100%',
                    justifyContent: 'space-between',
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'red',
                      width: '47%',
                      borderRadius: 10,
                      height: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={{ color: 'white' }}>Reject</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.primaryColor,
                      width: '47%',
                      borderRadius: 10,
                      height: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={{ color: 'white' }}>Accept</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* <Image
              source={require('../../../assets/icons/userIcongrey.png')}
              style={{ width: 20, height: 20, resizeMode: 'contain' }}
            />
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={text => console.log(text)}
            /> */}
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontFamily: fonts.regular,
    color: 'black',
    flex: 1,
    marginLeft: 5,
  },
  inputcontainer: {
    width: '100%',
    // height: 50,
    // borderWidth: 1,
    borderRadius: 5,
    // borderColor: '#ddd',
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: 8,
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
