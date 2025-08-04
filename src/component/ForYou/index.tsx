import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../Constant';
import Bike from 'react-native-vector-icons/MaterialIcons';
import Plus from 'react-native-vector-icons/AntDesign';
const ForYou = ({ item, navigation }) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
      style={{
        backgroundColor: 'white',
        // width: '92%',
        marginLeft: 15,
        alignItems: 'center',
        // flexDirection: 'row',
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
        {item?.new == 1 && (
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
        {item?.isDiscount == 1 && (
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
        )}
      </View>

      <TouchableOpacity
        onPress={() => Alert.alert('dasd')}
        style={{ position: 'absolute', right: 6, top: 5 }}
      >
        {/* {item.islike == 1 ? (
                  <FontAwesome name="heart" size={20} color="red" />
                ) : (
                  <FontAwesome name="heart-o" size={20} color={colors.grey} />
                )} */}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetail', { product: item })}
        style={{ alignItems: 'center', width: 150 }}
      >
        <Image
          source={item?.image}
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
          {item?.name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: fonts.semibold,
            color: '#868889',
          }}
        >
          {item?.quantity}
        </Text>

        <View
          style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}
        >
          <View
            style={{
              backgroundColor: colors.primaryColor,
              borderRadius: 30,
              padding: 10,
            }}
          >
            <Bike name={'directions-bike'} color={'white'} size={15} />
          </View>
          <View
            style={{
              backgroundColor: colors.primaryColor,
              right: 10,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              padding: 5,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontFamily: fonts.regular,
              }}
            >
              30 mints
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 12,
            marginTop: 5,
            fontFamily: fonts.regular,
            color: '#6CC51D',
          }}
        >
          Rs {item?.price.toFixed(2)}
        </Text>
        {quantity ? (
          <View
            style={{
              height: 30,
              width: 90,
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
              justifyContent: 'space-between',
              backgroundColor: colors.red,
              borderRadius: 15,
            }}
          >
            <TouchableOpacity
              onPress={() => setQuantity(quantity - 1)}
              style={{
                height: 30,
                width: 30,
                marginVertical: 10,
                borderRadius: 15,
                backgroundColor: colors.red,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Plus name="minus" size={15} color={'white'} />
            </TouchableOpacity>
            <Text style={{ color: 'white', fontFamily: fonts.regular }}>
              {quantity}
            </Text>
            <TouchableOpacity
              onPress={() => setQuantity(quantity + 1)}
              style={{
                height: 30,
                width: 30,
                marginVertical: 10,
                borderRadius: 15,
                backgroundColor: colors.red,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Plus name="plus" size={15} color={'white'} />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            // onPress={() => setQuantity(quantity + 1)}
            style={{
              height: 30,
              width: 30,
              marginVertical: 10,
              borderRadius: 15,
              backgroundColor: colors.red,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Plus name="plus" size={15} color={'white'} />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ForYou;
