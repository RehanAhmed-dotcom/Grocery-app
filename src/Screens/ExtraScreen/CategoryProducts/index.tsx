/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
// import Header from './components/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { colors, font, fonts, products } from './constant';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../../../component/Header';
import { colors, fonts, products } from '../../../component/Constant';

export default function CategoryProducts() {
  const navigation = useNavigation();
  const route = useRoute();
  const { category } = route.params;
  const { top, bottom } = useSafeAreaInsets();
  const getProducts = name => {
    return products.filter(product => product.category === category);
  };
  // console.log(getProducts());
  return (
    <View style={{ flex: 1, marginHorizontal: 15 }}>
      <StatusBar barStyle="dark-content" />
      <Header
        firstIcon={true}
        navigation={navigation}
        name={category}
        // lastIcon={false}
        textColor="black"
      />
      <View style={{ flex: 1, marginBottom: bottom }}>
        <FlatList
          data={products.filter(item => item.category === category)}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: 'white',
                width: '45%',
                marginLeft: 10,
                alignItems: 'center',
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
                }}
              >
                {item.new == 1 && (
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
                )}
              </View>

              <TouchableOpacity
                onPress={() => Alert.alert('dasd')}
                style={{ position: 'absolute', right: 6, top: 5 }}
              >
                {item.islike == 1 ? (
                  <FontAwesome name="heart" size={20} color="red" />
                ) : (
                  <FontAwesome name="heart-o" size={20} color={colors.grey} />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ProductDetail', { product: item })
                }
                style={{ alignItems: 'center' }}
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

                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: fonts.regular,
                    color: '#6CC51D',
                  }}
                >
                  ${item.price.toFixed(2)}
                </Text>

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
              </TouchableOpacity>
              <View
                style={{
                  height: 2,
                  width: '100%',
                  backgroundColor: '#EBEBEB',
                  marginTop: 10,
                }}
              />

              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={require('../../../assets/cartBag.png')}
                  style={{ width: 18, height: 18, resizeMode: 'contain' }}
                />
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 14,
                    fontFamily: fonts.regular,
                  }}
                >
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
