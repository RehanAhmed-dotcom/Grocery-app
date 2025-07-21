/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
// import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
// import { colors, fonts } from '../constant';
import Octicons from 'react-native-vector-icons/Octicons';
import Header from '../../../component/Header';
import { colors, fonts } from '../../../component/Constant';

// Sample data for FlatList
const orderData = [
  {
    id: '1',
    orderNumber: '#6CC51D',
    date: 'October 19 2021',
    items: 10,
    price: '$16.95',
    order_status: 'Pending',
  },
  {
    id: '2',
    orderNumber: '#7DD62E',
    date: 'October 20 2021',
    items: 5,
    price: '$25.50',
    order_status: 'Confirmed',
  },
  {
    id: '3',
    orderNumber: '#8EF73F',
    date: 'October 21 2021',
    items: 8,
    price: '$30.75',
    order_status: 'Delivery',
  },
  {
    id: '4',
    orderNumber: '#8E2323',
    date: 'October 21 2021',
    items: 4,
    price: '$20.75',
    order_status: 'Delivered',
  },
];

export default function MyOrders() {
  const navigation = useNavigation();
  const [expandedId, setExpandedId] = useState(orderData[0]?.id || null); // Initialize with first item's ID

  // Optional: Use useEffect to ensure the first item is expanded on mount
  useEffect(() => {
    if (orderData.length > 0) {
      setExpandedId(orderData[0].id);
    }
  }, []);
  const expandBlock = id => {
    setExpandedId(expandedId === id ? null : id); // Toggle the clicked item, close others
  };

  const renderOrderItem = ({ item }) => (
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
            source={require('../../../assets/icons/order.png')}
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
            Order {item.orderNumber}
          </Text>
          <Text
            style={{
              fontFamily: fonts.regular,
              fontSize: 15,
              color: 'black',
            }}
          >
            Placed on {item.date}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontFamily: fonts.regular }}>
              Items:{' '}
              <Text style={{ fontFamily: fonts.semibold }}>{item.items}</Text>
            </Text>
            <Text style={{ fontFamily: fonts.regular }}>
              Price:{' '}
              <Text style={{ fontFamily: fonts.semibold }}>{item.price}</Text>
            </Text>
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
          <View style={{ paddingHorizontal: 20 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  alignItems: 'center',
                }}
              >
                <Octicons
                  name="dot-fill"
                  size={24}
                  color={colors.primaryColor}
                />
                <Text style={{ fontFamily: fonts.bold, fontSize: 20 }}>
                  Order Placed
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: fonts.regular,
                    fontSize: 15,
                    color: colors.grey,
                  }}
                >
                  {item.date}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  alignItems: 'center',
                }}
              >
                <Octicons
                  name="dot-fill"
                  size={24}
                  color={
                    ['Confirmed', 'Shipped', 'Delivery', 'Delivered'].includes(
                      item.order_status,
                    )
                      ? colors.primaryColor
                      : colors.grey
                  }
                />
                <Text style={{ fontFamily: fonts.bold, fontSize: 20 }}>
                  Order confirmed
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: fonts.regular,
                    fontSize: 15,
                    color: colors.grey,
                  }}
                >
                  {item.date}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  alignItems: 'center',
                }}
              >
                <Octicons
                  name="dot-fill"
                  size={24}
                  color={
                    ['Shipped', 'Delivery', 'Delivered'].includes(
                      item.order_status,
                    )
                      ? colors.primaryColor
                      : colors.grey
                  }
                />
                <Text style={{ fontFamily: fonts.bold, fontSize: 20 }}>
                  Order shipped
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: fonts.regular,
                    fontSize: 15,
                    color: colors.grey,
                  }}
                >
                  {item.date}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  alignItems: 'center',
                }}
              >
                <Octicons
                  name="dot-fill"
                  size={24}
                  color={
                    ['Delivery', 'Delivered'].includes(item.order_status)
                      ? colors.primaryColor
                      : colors.grey
                  }
                />
                <Text style={{ fontFamily: fonts.bold, fontSize: 20 }}>
                  Out for delivery
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: fonts.regular,
                    fontSize: 15,
                    color: colors.grey,
                  }}
                >
                  {item.date}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  alignItems: 'center',
                }}
              >
                <Octicons
                  name="dot-fill"
                  size={24}
                  color={
                    ['Delivered'].includes(item.order_status)
                      ? colors.primaryColor
                      : colors.grey
                  }
                />
                <Text style={{ fontFamily: fonts.bold, fontSize: 20 }}>
                  Order delivered
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: fonts.regular,
                    fontSize: 15,
                    color: colors.grey,
                  }}
                >
                  {item.date}
                </Text>
              </View>
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
        name="My Orders"
        textColor="black"
      />
      <View style={{ flex: 1, backgroundColor: '#F4F5F9' }}>
        <FlatList
          data={orderData}
          renderItem={renderOrderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{ marginHorizontal: 15, marginVertical: 15 }}
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
});
