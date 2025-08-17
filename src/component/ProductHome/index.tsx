import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../Constant';
import Bike from 'react-native-vector-icons/MaterialIcons';
import Plus from 'react-native-vector-icons/AntDesign';
import Trash from 'react-native-vector-icons/EvilIcons';
const ProductHome = ({ item, navigation }) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
      style={{
        backgroundColor: 'white',
        width: 133,
        borderRadius: 10,
        marginLeft: 15,
        overflow: 'hidden',
        height: 170,
        // alignItems: 'center',
        // flexDirection: 'row',
        // paddingTop: 10,
        marginVertical: 10,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: item?.new == 0 ? 0 : 2,
          position: 'absolute',
          // left: 0,
          zIndex: 1000,
          right: 0,
          top: 10,
        }}
      >
        {/* {item?.new == 1 && (
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
        )} */}
        {item?.isDiscount == 1 && (
          <Text
            style={{
              backgroundColor: '#FF0E0E',
              paddingHorizontal: 10,
              paddingVertical: 5,
              fontSize: 8,
              fontFamily: fonts.bold,
              color: '#F0FEEE',
            }}
          >
            {item?.dicountp}%
          </Text>
        )}
      </View>

      {/* <TouchableOpacity
        onPress={() => Alert.alert('dasd')}
        style={{ position: 'absolute', right: 6, top: 5 }}
      >
        <Trash name="trash" size={30} color="red" />
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetail', { product: item })}
        style={{ alignItems: 'center', backgroundColor: '#dbefe3' }}
      >
        <Image
          source={item?.image}
          style={{
            width: 133,
            height: 110,
            resizeMode: 'contain',
            // marginTop: 18,
            // marginBottom: 10,
          }}
        />
      </TouchableOpacity>
      <View style={{ padding: 5 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: fonts.bold,
              color: '#000',
            }}
          >
            {item?.name}
          </Text>
          <Text
            style={{
              fontSize: 10,
              textDecorationLine: 'line-through',
              fontFamily: fonts.regular,
              color: '#9B9B9B',
            }}
          >
            Rs {item?.price?.toFixed(2)}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: fonts.regular,
              color: 'grey',
            }}
          >
            Rs {item?.price?.toFixed(0)}Kg
          </Text>
          {quantity ? (
            <View
              style={{
                height: 18,
                width: 48,
                flexDirection: 'row',
                alignItems: 'center',
                // marginVertical: 10,
                justifyContent: 'space-between',
                backgroundColor: colors.primaryColor,
                borderRadius: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => setQuantity(quantity - 1)}
                style={{
                  height: 18,
                  width: 16,
                  // marginVertical: 10,
                  borderRadius: 15,
                  backgroundColor: colors.primaryColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Plus name="minus" size={10} color={'white'} />
              </TouchableOpacity>
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                  fontFamily: fonts.regular,
                }}
              >
                {quantity}
              </Text>
              <TouchableOpacity
                onPress={() => setQuantity(quantity + 1)}
                style={{
                  height: 18,
                  width: 16,
                  // marginVertical: 10,
                  borderRadius: 15,
                  backgroundColor: colors.primaryColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Plus name="plus" size={10} color={'white'} />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => setQuantity(quantity + 1)}
              style={{
                height: 18,
                width: 16,
                // marginVertical: 10,
                borderRadius: 5,
                backgroundColor: colors.primaryColor,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Plus name="plus" size={10} color={'white'} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductHome;
