import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Keyboard,
} from 'react-native';
import Arrow from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { colors, fonts, images, products } from '../../../component/Constant';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../../navigation/types';
import Product from '../../../component/Product';
import CategoriesHome from '../../../component/CategoriesHome';
import ForYou from '../../../component/ForYou';
import ProductView from '../../../component/ProductView';
import CartItem from '../../../component/CartItem';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import CheckoutItem from '../../../component/CheckoutItem';

// import Categories from '../Categories';
const { width, height } = Dimensions.get('window');
const bannerHeight = height * 0.3;
const Checkout = () => {
  const scrollRef = useRef(null);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [reasonShow, setReasonShow] = useState(false);
  const [reason, setReason] = useState('');
  const [verifyShow, setVerifyShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [voucher, setVoucher] = useState('');
  const images1 = [
    require('../../../assets/slide1.png'),
    require('../../../assets/slide2.png'),
    require('../../../assets/slide3.png'),
  ];
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

  const { top } = useSafeAreaInsets();
  const categories = [
    {
      id: '1',
      name: 'Vegetables',
      image: require('../../../assets/VegetablesImg.jpg'),
    },
    {
      id: '2',
      name: 'Fruits',
      image: require('../../../assets/FruitsImg.jpg'),
    },
    {
      id: '3',
      name: 'Beverages',
      image: require('../../../assets/BeveragesImg.jpg'),
    },
    {
      id: '4',
      name: 'Grocery',
      image: require('../../../assets/GroceryImg.jpg'),
    },
    {
      id: '5',
      name: 'Edible oil',
      image: require('../../../assets/OilImg.jpg'),
    },
    {
      id: '6',
      name: 'Household',
      image: require('../../../assets/HouseholdImg.jpg'),
    },
  ];
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('Keyboard Hidden');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  const [keyboardStatus, setKeyboardStatus] = useState('');
  const numberModal = () => (
    <Modal
      animationType="slide"
      onRequestClose={() => setReasonShow(false)}
      transparent={true}
      visible={reasonShow}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => Keyboard.dismiss()}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00000088',
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => Keyboard.dismiss()}
          style={{
            // height: '50%',
            backgroundColor: 'white',
            borderColor: '#EDF1F3',
            borderWidth: 1,
            width: '100%',
            borderRadius: 10,
          }}
        >
          <View
            style={{
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              paddingHorizontal: 10,
            }}
          >
            {/* <View style={{width: 20}} /> */}
            <Text
              style={{
                color: '#000000',
                fontSize: 18,
                alignSelf: 'center',
                fontFamily: fonts.bold,
              }}
            >
              Enter phone number
            </Text>
          </View>
          <View style={{ margin: 15 }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                marginBottom: 10,
                fontFamily: fonts.medium,
                // fontWeight: Fonts.Medium.fontWeight,
              }}
            >
              Add your number
            </Text>
            <TextInput
              placeholder={'+92 1234567890'}
              placeholderTextColor="#ccc"
              value={reason}
              textAlignVertical="top"
              onChangeText={text => setReason(text)}
              // multiline
              // numberOfLines={5}
              style={{
                color: '#151515',
                fontFamily: 'SourceSansPro-Regular',
                // paddingHorizontal: 10,
                paddingHorizontal: 10,
                borderWidth: 0.5,
                borderColor: '#ccc',
                borderRadius: 10,
                height: keyboardStatus == 'Keyboard Shown' ? 50 : 50,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              justifyContent: 'center',
              marginHorizontal: 15,
            }}
          >
            {/* <FillButton
              customColor="#2D2D35"
              customTextColor="white"
              Name={t('Submit')}
              onPress={() => (user?.email ? reportReason() : showGuest())}
            /> */}
            <View
              style={{
                marginTop: heightPercentageToDP(1),
                marginBottom: 20,
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setReasonShow(false);
                  setTimeout(() => {
                    setVerifyShow(true);
                  }, 300);
                }}
                style={{
                  height: 50,
                  width: '100%',
                  paddingRight: 15,
                  flexDirection: 'row',
                  backgroundColor: colors.red,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  alignSelf: 'center',
                  marginTop: 10,
                  borderRadius: 30,
                }}
              >
                <View
                  style={{
                    // backgroundColor: colors.primaryColor,
                    borderRadius: 20,
                    padding: 15,
                    // height: 40,
                    // width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: fonts.regular,
                      color: 'white',
                    }}
                  >
                    Continue
                  </Text>
                </View>

                <Arrow name="arrowright" size={20} color={'white'} />
              </TouchableOpacity>
              {/* <View style={{ marginLeft: 0, width: widthPercentageToDP(85) }}>
                <FillButton
                  customColor={darkMode ? Colors.Blue : Colors.Blue}
                  customTextColor={'white'}
                  // icon={
                  //   <Image
                  //     source={require('../../../Assets/ButtonIcons/Tick.png')}
                  //     style={{width: 25, height: 25}}
                  //     resizeMode="contain"
                  //   />
                  // }
                  dontShowBorder={true}
                  Name={t('Add Reason')}
                  // onPress={() => navigation.goBack()}
                  onPress={() =>
                    reason
                      ? reportReason()
                      : Alert.alert(t('Error'), t('Add reason'))
                  }
                />
              </View> */}
              <View style={{ height: 30 }} />
            </View>
            {/* <TouchableOpacity
              onPress={() => {
                // reportPost({
                //   Auth: userData.token,
                //   post_id: item.id,
                //   posted_by: item.user_id,
                //   reason,
                // }).then(res => {
                //   console.log('res', res);
                // });
              }}
              style={{
                width: '100%',
                height: 50,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',

                backgroundColor: '#FF4029',
              }}>
              <Text style={{color: 'white'}}>Submit</Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity
              onPress={() => setReasonShow(false)}
              style={{
                width: '45%',
                height: 50,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 0.5,
                borderColor: '#FF4029',
              }}>
              <Text style={{color: 'black'}}>Cancel</Text>
            </TouchableOpacity> */}
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
  const verifyModal = () => (
    <Modal
      animationType="slide"
      onRequestClose={() => setVerifyShow(false)}
      transparent={true}
      visible={verifyShow}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => Keyboard.dismiss()}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00000088',
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => Keyboard.dismiss()}
          style={{
            // height: '50%',
            backgroundColor: 'white',
            borderColor: '#EDF1F3',
            borderWidth: 1,
            width: '100%',
            borderRadius: 10,
          }}
        >
          <View
            style={{
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              paddingHorizontal: 10,
            }}
          >
            {/* <View style={{width: 20}} /> */}
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                alignSelf: 'center',
                fontFamily: fonts.medium,
              }}
            >
              We have sent code to your number
            </Text>
          </View>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <View style={styles.inputcontainers} key={index}>
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
          {/* <View style={{ margin: 15 }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                marginBottom: 10,
                fontFamily: fonts.medium,
                // fontWeight: Fonts.Medium.fontWeight,
              }}
            >
              Add your number
            </Text>
            <TextInput
              placeholder={'+92 1234567890'}
              placeholderTextColor="#ccc"
              value={reason}
              textAlignVertical="top"
              onChangeText={text => setReason(text)}
              // multiline
              // numberOfLines={5}
              style={{
                color: '#151515',
                fontFamily: 'SourceSansPro-Regular',
                // paddingHorizontal: 10,
                paddingHorizontal: 10,
                borderWidth: 0.5,
                borderColor: '#ccc',
                borderRadius: 10,
                height: keyboardStatus == 'Keyboard Shown' ? 50 : 50,
              }}
            />
          </View> */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              justifyContent: 'center',
              marginHorizontal: 15,
            }}
          >
            {/* <FillButton
              customColor="#2D2D35"
              customTextColor="white"
              Name={t('Submit')}
              onPress={() => (user?.email ? reportReason() : showGuest())}
            /> */}
            <View
              style={{
                marginTop: heightPercentageToDP(1),
                marginBottom: 20,
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setVerifyShow(false);
                  navigation.navigate('Checkout');
                }}
                style={{
                  height: 50,
                  width: '100%',
                  paddingRight: 15,
                  flexDirection: 'row',
                  backgroundColor: colors.red,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  alignSelf: 'center',
                  marginTop: 10,
                  borderRadius: 30,
                }}
              >
                <View
                  style={{
                    // backgroundColor: colors.primaryColor,
                    borderRadius: 20,
                    padding: 15,
                    // height: 40,
                    // width: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: fonts.regular,
                      color: 'white',
                    }}
                  >
                    Continue
                  </Text>
                </View>

                <Arrow name="arrowright" size={20} color={'white'} />
              </TouchableOpacity>
              {/* <View style={{ marginLeft: 0, width: widthPercentageToDP(85) }}>
                <FillButton
                  customColor={darkMode ? Colors.Blue : Colors.Blue}
                  customTextColor={'white'}
                  // icon={
                  //   <Image
                  //     source={require('../../../Assets/ButtonIcons/Tick.png')}
                  //     style={{width: 25, height: 25}}
                  //     resizeMode="contain"
                  //   />
                  // }
                  dontShowBorder={true}
                  Name={t('Add Reason')}
                  // onPress={() => navigation.goBack()}
                  onPress={() =>
                    reason
                      ? reportReason()
                      : Alert.alert(t('Error'), t('Add reason'))
                  }
                />
              </View> */}
              <View style={{ height: 30 }} />
            </View>
            {/* <TouchableOpacity
              onPress={() => {
                // reportPost({
                //   Auth: userData.token,
                //   post_id: item.id,
                //   posted_by: item.user_id,
                //   reason,
                // }).then(res => {
                //   console.log('res', res);
                // });
              }}
              style={{
                width: '100%',
                height: 50,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',

                backgroundColor: '#FF4029',
              }}>
              <Text style={{color: 'white'}}>Submit</Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity
              onPress={() => setReasonShow(false)}
              style={{
                width: '45%',
                height: 50,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 0.5,
                borderColor: '#FF4029',
              }}>
              <Text style={{color: 'black'}}>Cancel</Text>
            </TouchableOpacity> */}
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
  return (
    <View style={[styles.container, { marginTop: top }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryColor}
      />
      <View
        style={{
          backgroundColor: colors.primaryColor,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow name="arrowleft" size={20} color={'black'} />
          </TouchableOpacity>
          <Text
            style={{ marginLeft: 10, fontSize: 16, fontFamily: fonts.medium }}
          >
            Checkout
          </Text>
        </View>
      </View>

      <ScrollView
        style={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Image Slider */}

        {/* End Image Slider */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            marginHorizontal: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontFamily: fonts.bold }}>
            Personal Information
          </Text>
          {/* <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <FontAwesome name="angle-right" size={24} color={colors.grey} />
          </TouchableOpacity> */}
        </View>
        <View style={{ marginTop: 10, marginLeft: 15 }}>
          <Text
            style={{ fontSize: 16, fontFamily: fonts.medium, color: 'black' }}
          >
            Name
          </Text>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={text => setName(text)}
            placeholderTextColor={'#00000088'}
            style={{
              backgroundColor: '#ccc',
              borderRadius: 40,
              height: 50,
              color: 'black',
              paddingHorizontal: 20,
              marginTop: 10,
              width: '94%',
            }}
          />
        </View>
        <View style={{ marginTop: 10, marginLeft: 15 }}>
          <Text
            style={{ fontSize: 16, fontFamily: fonts.medium, color: 'black' }}
          >
            Email
          </Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            placeholderTextColor={'#00000088'}
            style={{
              backgroundColor: '#ccc',
              borderRadius: 40,
              height: 50,
              color: 'black',
              paddingHorizontal: 20,
              marginTop: 10,
              width: '94%',
            }}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              marginHorizontal: 15,
            }}
          >
            <Text
              style={{ fontSize: 18, color: 'black', fontFamily: fonts.bold }}
            >
              Address
            </Text>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <FontAwesome name="angle-right" size={24} color={colors.grey} />
          </TouchableOpacity> */}
            <Text
              style={{
                fontSize: 14,
                fontFamily: fonts.medium,
                color: colors.primaryColor,
              }}
            >
              Change Address
            </Text>
          </View>
          <TextInput
            placeholder="Email"
            value={'Shamsabad Rawalpindi'}
            // onChangeText={text => setEmail(text)}
            placeholderTextColor={'#00000088'}
            style={{
              backgroundColor: 'white',
              borderRadius: 40,
              height: 50,
              marginLeft: 15,
              color: 'black',
              paddingHorizontal: 20,
              marginTop: 10,
              width: '90%',
            }}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              marginHorizontal: 15,
            }}
          >
            <Text
              style={{ fontSize: 18, color: 'black', fontFamily: fonts.bold }}
            >
              Payment Method
            </Text>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <FontAwesome name="angle-right" size={24} color={colors.grey} />
          </TouchableOpacity> */}
            <Text
              style={{
                fontSize: 14,
                fontFamily: fonts.medium,
                color: colors.primaryColor,
              }}
            >
              Payment options
            </Text>
          </View>
          <TextInput
            placeholder="Email"
            value={'Cash on delivery'}
            // onChangeText={text => setEmail(text)}
            placeholderTextColor={'#00000088'}
            style={{
              backgroundColor: 'white',
              borderRadius: 40,
              height: 50,
              marginLeft: 15,
              color: 'black',
              paddingHorizontal: 20,
              marginTop: 10,
              width: '90%',
            }}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              marginHorizontal: 15,
            }}
          >
            <Text
              style={{ fontSize: 18, color: 'black', fontFamily: fonts.bold }}
            >
              Voucher Code
            </Text>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <FontAwesome name="angle-right" size={24} color={colors.grey} />
          </TouchableOpacity> */}
            <Text
              style={{
                fontSize: 14,
                fontFamily: fonts.medium,
                color: colors.primaryColor,
              }}
            >
              Select Voucher
            </Text>
          </View>
          <TextInput
            placeholder="Enter code here"
            value={voucher}
            onChangeText={text => setVoucher(text)}
            placeholderTextColor={'#00000088'}
            style={{
              backgroundColor: '#ccc',
              borderRadius: 40,
              height: 50,
              marginLeft: 15,
              color: 'black',
              paddingHorizontal: 20,
              marginTop: 10,
              width: '90%',
            }}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 50,
              right: 40,
              borderRadius: 30,
              height: 35,
              alignItems: 'center',
              justifyContent: 'center',

              width: 70,
              backgroundColor: colors.red,
            }}
          >
            <Text style={{ color: 'white', fontFamily: fonts.regular }}>
              Apply
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories.slice(3)}
            ListFooterComponent={() => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Categories')}
                  style={{ padding: 10, alignItems: 'center' }}
                >
                  <Image
                    source={images.more}
                    style={{
                      width: 70,
                      height: 70,
                      // backgroundColor: 'red',
                      resizeMode: 'contain',
                      borderRadius: 100,
                    }}
                  />
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: 15,
                      fontFamily: fonts.medium,
                      color: colors.grey,
                    }}
                  >
                    More
                  </Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CategoryProducts', {
                    category: item.name,
                  })
                }
                style={{ padding: 10, alignItems: 'center' }}
              >
                <Image source={item.image} style={{ width: 70, height: 70 }} />
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 15,
                    fontFamily: fonts.medium,
                    color: colors.grey,
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View> */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            marginHorizontal: 15,
          }}
        >
          {/* <FontAwesome name="angle-right" size={24} color={colors.grey} /> */}
        </View>
        <View
          style={{
            // marginBottom: 80,
            borderRadius: 10,
            marginTop: 10,
            backgroundColor: 'white',
            marginHorizontal: 15,
          }}
        >
          <FlatList
            // showsHorizontalScrollIndicator={false}
            data={products}
            numColumns={3}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <CheckoutItem item={item} navigation={navigation} />
            )}
          />
        </View>
        <View
          style={{
            marginBottom: 80,
            borderRadius: 10,
            marginTop: 10,
            paddingHorizontal: 15,
            backgroundColor: 'white',
            marginHorizontal: 15,
          }}
        >
          <View
            style={{
              borderBottomColor: 'grey',
              // marginHorizontal: 10,
              borderBottomWidth: 1,
            }}
          >
            <Text
              style={{
                fontFamily: fonts.bold,
                fontSize: 16,
                marginBottom: 10,
                marginTop: 10,
                // marginLeft: 10,
              }}
            >
              Order Summary
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',

              justifyContent: 'space-between',
              marginTop: 30,
            }}
          >
            <Text style={{ fontFamily: fonts.medium }}>Item(s) total</Text>
            <Text style={{}}>Rs 585</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',

              justifyContent: 'space-between',
              marginTop: 15,
            }}
          >
            <Text>Delivery Fee</Text>
            <Text style={{}}>Rs 200</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',

              justifyContent: 'space-between',
              marginTop: 10,
            }}
          >
            <Text>Short Fee</Text>
            <Text style={{}}>Rs 0</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',

              justifyContent: 'space-between',
              marginTop: 10,
            }}
          >
            <Text>Total</Text>
            <Text style={{}}>Rs 785</Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: 'white',
          height: 70,
          width: '100%',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 2,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          position: 'absolute',
          zIndex: 100,
          bottom: 0,
          left: 0,
        }}
      >
        <TouchableOpacity
          onPress={() => Alert.alert('Order Placed')}
          style={{
            height: 50,
            width: '90%',
            paddingRight: 10,
            flexDirection: 'row',
            backgroundColor: colors.red,
            alignItems: 'center',
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginTop: 10,
            borderRadius: 30,
          }}
        >
          <View
            style={{
              // backgroundColor: colors.primaryColor,
              borderRadius: 20,
              padding: 10,
              // height: 40,
              // width: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: fonts.medium,
                color: 'white',
              }}
            >
              Place Order
            </Text>
          </View>

          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.bold,

              color: 'white',
            }}
          >
            Rs 785
          </Text>
        </TouchableOpacity>
      </View>
      {numberModal()}
      {verifyModal()}
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: { flex: 1 },
  input: {
    fontFamily: fonts.regular,
    color: 'black',
    flex: 1,
    marginLeft: 5,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
  },
  inputcontainers: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputcontainer: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    marginHorizontal: 15,
    borderRadius: 40,
    borderColor: '#ddd',
    alignSelf: 'center',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  sliderWrapper: {
    marginTop: 15,
    height: bannerHeight,
    position: 'relative',
    marginHorizontal: 15,
  },
  image: {
    width: width,
    // borderRadius: 10,
    height: bannerHeight,
    resizeMode: 'cover',
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});
