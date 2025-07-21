import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
//   import Header from './components/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
//   import { colors, fonts } from './constant';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../../component/Header';
import { colors, fonts } from '../../../component/Constant';

export default function ProductDetail() {
  const navigation = useNavigation();
  const route = useRoute();
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);
  console.log('quantity', quantity);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const totalStars = 5;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Ionicons key={`full-${i}`} name="star" size={15} color="#FFD700" />,
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <Ionicons key="half" name="star-half" size={15} color="#FFD700" />,
      );
    }

    // Empty stars
    const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Ionicons
          key={`empty-${i}`}
          name="star-outline"
          size={15}
          color="#FFD700"
        />,
      );
    }

    return stars;
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Header
        firstIcon={true}
        navigation={navigation}
        name=""
        // lastIcon={false}
        textColor="black"
      />
      <Image
        source={product.image}
        style={{ width: '100%', height: 400, resizeMode: 'contain' }}
      />
      <View
        style={{
          backgroundColor: '#F4F5F9',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 15,
            marginTop: 10,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: fonts.semibold,
                color: '#28B446',
              }}
            >
              ${product.price.toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity onPress={() => Alert.alert('dasd')} style={{}}>
            {product.islike == 1 ? (
              <FontAwesome name="heart" size={20} color="red" />
            ) : (
              <FontAwesome name="heart-o" size={20} color={colors.grey} />
            )}
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
          <Text
            style={{
              color: '#000',
              fontSize: 25,
              fontFamily: fonts.semibold,
              marginBottom: 1,
            }}
          >
            {product.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.semibold,
              color: '#868889',
              marginBottom: 8,
            }}
          >
            {product.quantity}
          </Text>
          <View style={{ flexDirection: 'row', marginBottom: 8 }}>
            <Text style={{ fontFamily: fonts.bold }}>{product.rating}</Text>
            <View style={{ flexDirection: 'row', marginHorizontal: 5 }}>
              {renderStars(product.rating)}
            </View>
            <Text style={{ fontFamily: fonts.regular, color: colors.grey }}>
              (89 reviews)
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.regular,
              color: colors.grey,
              marginBottom: 8,
            }}
          >
            {product.description}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              alignItems: 'center',
              paddingHorizontal: 10,
              borderRadius: 10,
              marginVertical: 10,
            }}
          >
            <Text style={{ fontFamily: fonts.bold, color: colors.grey }}>
              Quantity
            </Text>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            >
              <TouchableOpacity
                onPress={() => decreaseQuantity()}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Feather name="minus" size={20} color="#6CC51D" />
              </TouchableOpacity>
              <View
                style={{ width: 1, height: 50, backgroundColor: '#EBEBEB' }}
              ></View>
              <Text
                style={{
                  fontFamily: fonts.bold,
                  marginHorizontal: 10,
                }}
              >
                {quantity}
              </Text>
              <View
                style={{ width: 1, height: 50, backgroundColor: '#EBEBEB' }}
              ></View>
              <TouchableOpacity
                onPress={() => increaseQuantity()}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Feather name="plus" size={20} color="#6CC51D" />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => Alert.alert('Kamm kar rhy hain sbr kro')}
            style={{
              borderRadius: 10,
              overflow: 'hidden',
              backgroundColor: colors.primaryColor,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',

              elevation: 4, // Android shadow
              shadowColor: '#000', // iOS shadow
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
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
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                //   backgroundColor: 'red',
                width: '100%',
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: fonts.medium,
                  color: 'white',
                }}
              >
                Add to cart
              </Text>
              <Image
                source={require('../../../assets/cartBagw.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginLeft: 20,
                  resizeMode: 'contain',
                  //   position: 'absolute',
                  //   right: 0,
                }}
              />
            </View>
            {/* </LinearGradient> */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
