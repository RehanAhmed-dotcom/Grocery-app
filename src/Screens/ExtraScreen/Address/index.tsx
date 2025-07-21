import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
// import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
// import { colors, fonts } from '../constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../../../component/Header';
import { fonts } from '../../../component/Constant';

export default function Address() {
  const navigation = useNavigation();
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'Saad Mughal',
      address: '2811 Crescent Day. LA Port',
      city: 'California',
      zipCode: '77571',
      country: 'United States',
      phoneNo: '+923035211889',
      default: 0,
    },
    {
      id: 2,
      name: 'Saad Mughal',
      address: '2811 Crescent Day. LA Port',
      city: 'California',
      zipCode: '77571',
      country: 'United States',
      phoneNo: '+923035211889',
      default: 1,
    },
    {
      id: 3,
      name: 'Saad Mughal',
      address: '2811 Crescent Day. LA Port',
      city: 'California',
      zipCode: '77571',
      country: 'United States',
      phoneNo: '+923035211889',
      default: 0,
    },
  ]);

  // const [isEnabled, setIsEnabled] = useState(false);
  // Optional: Use useEffect to ensure the first item is expanded on mount
  const [expandedId, setExpandedId] = useState(
    addresses.find(item => item.default === 1)?.id || null,
  );

  useEffect(() => {
    const defaultAddress = addresses.find(item => item.default === 1);
    setExpandedId(defaultAddress ? defaultAddress.id : null);
  }, [addresses]);

  const toggleSwitch = id => {
    setAddresses(prevAddresses =>
      prevAddresses.map(item =>
        item.id === id ? { ...item, default: 1 } : { ...item, default: 0 },
      ),
    );
  };
  const expandBlock = id => {
    setExpandedId(expandedId === id ? null : id); // Toggle the clicked item, close others
  };
  const updateAddressField = (id, field, value) => {
    setAddresses(prevAddresses =>
      prevAddresses.map(item =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  const renderFavItem = ({ item }) => (
    <View
      style={{ backgroundColor: 'white', borderRadius: 10, marginBottom: 15 }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <View>
          <Image
            source={require('../../../assets/icons/address.png')}
            style={{ width: 66, height: 66, resizeMode: 'contain' }}
          />
        </View>
        <View style={{ marginLeft: 10, width: '60%' }}>
          <Text
            style={{
              fontFamily: fonts.bold,
              fontSize: 18,
              color: 'black',
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontFamily: fonts.light,
              fontSize: 13,
              color: 'black',
            }}
          >
            {`${item.address}, ${item.city}, ${item.country}, ${item.zipCode}`}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontFamily: fonts.bold }}>{item.phoneNo}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => expandBlock(item.id)}
          style={{
            width: '15%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <Image
            source={
              expandedId === item.id
                ? require('../../../assets/icons/arrowup.png')
                : require('../../../assets/icons/arrowdown.png')
            }
            style={{ width: 25, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      </View>
      {expandedId === item.id ? (
        <>
          <View
            style={{
              backgroundColor: '#EBEBEB',
              height: 1,
              marginBottom: 20,
              marginTop: 10,
            }}
          ></View>
          <View style={{ paddingHorizontal: 20, paddingBottom: 10 }}>
            <View style={styles.inputcontainer}>
              <Image
                source={require('../../../assets/icons/userIcongrey.png')}
                style={{ width: 20, height: 20, resizeMode: 'contain' }}
              />
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={item.name}
                onChangeText={text => updateAddressField(item.id, 'name', text)}
              />
            </View>
            <View style={styles.inputcontainer}>
              <Image
                source={require('../../../assets/icons/addressGrey.png')}
                style={{ width: 20, height: 20, resizeMode: 'contain' }}
              />
              <TextInput
                style={styles.input}
                placeholder="Address"
                value={item.address}
                onChangeText={text =>
                  updateAddressField(item.id, 'address', text)
                }
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View style={[styles.inputcontainer, { width: '49%' }]}>
                <Image
                  source={require('../../../assets/icons/city.png')}
                  style={{ width: 20, height: 20, resizeMode: 'contain' }}
                />
                <TextInput
                  style={styles.input}
                  placeholder="City"
                  value={item.city}
                  onChangeText={text =>
                    updateAddressField(item.id, 'city', text)
                  }
                />
              </View>
              <View style={[styles.inputcontainer, { width: '49%' }]}>
                <Image
                  source={require('../../../assets/icons/zipcode.png')}
                  style={{ width: 20, height: 20, resizeMode: 'contain' }}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Zip Code"
                  value={item.zipCode}
                  onChangeText={text =>
                    updateAddressField(item.id, 'zipCode', text)
                  }
                />
              </View>
            </View>
            <View style={styles.inputcontainer}>
              <Image
                source={require('../../../assets/icons/country.png')}
                style={{ width: 20, height: 20, resizeMode: 'contain' }}
              />
              <TextInput
                style={styles.input}
                placeholder="Country"
                value={item.country}
                onChangeText={text =>
                  updateAddressField(item.id, 'country', text)
                }
              />
            </View>
            <View style={styles.inputcontainer}>
              <Image
                source={require('../../../assets/icons/phoneIcon.png')}
                style={{ width: 20, height: 20, resizeMode: 'contain' }}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone number"
                value={item.phoneNo}
                onChangeText={text =>
                  updateAddressField(item.id, 'phoneNo', text)
                }
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                onPress={() => toggleSwitch(item.id)}
                style={{}}
              >
                <Ionicons
                  name={item.default ? 'checkbox' : 'checkbox-outline'}
                  color={item.default ? '#6CC51D' : '#ccc'}
                  size={20}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: fonts.semibold,
                  marginLeft: 2,
                }}
              >
                Make default
              </Text>
            </View>
          </View>
        </>
      ) : null}
    </View>
  );
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header
        firstIcon={true}
        navigation={navigation}
        lastIcon={true}
        name="My Address"
        textColor="black"
      />
      <View style={{ flex: 1, backgroundColor: '#F4F5F9', paddingBottom: 0 }}>
        <FlatList
          data={addresses}
          renderItem={renderFavItem}
          keyExtractor={item => `${item.id}a`}
          contentContainerStyle={{ marginHorizontal: 15, marginVertical: 5 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    fontFamily: fonts.regular,
    color: 'black',
    flex: 1,
    marginLeft: 5,
  },
  inputcontainer: {
    width: '100%',
    height: 50,
    // borderWidth: 1,
    borderRadius: 5,
    // borderColor: '#ddd',
    alignSelf: 'center',
    backgroundColor: '#F4F5F9',
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});
