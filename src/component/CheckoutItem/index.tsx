import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../Constant';
import Bike from 'react-native-vector-icons/MaterialIcons';
import Plus from 'react-native-vector-icons/AntDesign';
import Trash from 'react-native-vector-icons/EvilIcons';
const CheckoutItem = ({ item, navigation }) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
      style={{
        backgroundColor: 'white',
        width: '92%',
        marginLeft: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        marginVertical: 10,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: item?.new == 0 ? 0 : 2,
          position: 'absolute',
          left: 0,
          top: 0,
        }}
      >
        {/* {item.new == 1 && (
          <Text
            style={{
              backgroundColor: '#FDEFD5',
              paddingHorizontal: 10,
              paddingVertical: 5,
              fontSize: 10,
              fontFamily: fonts.medium,
              color: '#E8AD41',
            }}
          >
            New
          </Text>
        )}
        {item.isDiscount == 1 && (
          <Text
            style={{
              backgroundColor: '#FEE4E4',
              paddingHorizontal: 10,
              paddingVertical: 5,
              fontSize: 10,
              fontFamily: fonts.medium,
              color: '#F56262',
            }}
          >
            {item?.dicountp}%
          </Text>
        )} */}
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ProductDetail', { product: item })
          }
          style={{ alignItems: 'center', width: 150 }}
        >
          <Image
            source={item.image}
            style={{
              width: 90,
              height: 90,
              resizeMode: 'contain',
              marginTop: 18,
              marginBottom: 10,
            }}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: 15,
              fontFamily: fonts.semibold,
              color: '#000',
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: fonts.semibold,
              color: '#868889',
            }}
          >
            {item.quantity}
          </Text>

          <View
            style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}
          >
            <View
              style={{
                //   backgroundColor: colors.primaryColor,
                //   right: 10,
                marginTop: 5,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                //   padding: 5,
              }}
            >
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  fontFamily: fonts.regular,
                }}
              >
                Price
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontFamily: fonts.regular,
              color: '#6CC51D',
            }}
          >
            Rs {item.price.toFixed(2)}
          </Text>
          {/* <Text
            style={{ marginTop: 10, fontFamily: fonts.regular, color: 'black' }}
          >
            Total item price:{' '}
          </Text> */}
        </View>
      </View>
      <View
        style={
          {
            //   backgroundColor: 'red',
            //   height: '100%',
            //   justifyContent: 'flex-end',
          }
        }
      >
        <View>
          <Text
            style={{
              fontSize: 15,
              fontFamily: fonts.semibold,
              color: '#000',
            }}
          >
            Qty
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: fonts.semibold,
              color: '#868889',
            }}
          >
            3
          </Text>

          <View
            style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}
          >
            <View
              style={{
                //   backgroundColor: colors.primaryColor,
                //   right: 10,
                marginTop: 5,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                //   padding: 5,
              }}
            >
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  fontFamily: fonts.regular,
                }}
              >
                Total
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontFamily: fonts.regular,
              color: '#6CC51D',
            }}
          >
            Rs {50}
          </Text>
          {/* <Text
            style={{ marginTop: 10, fontFamily: fonts.regular, color: 'black' }}
          >
            Total item price:{' '}
          </Text> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CheckoutItem;
