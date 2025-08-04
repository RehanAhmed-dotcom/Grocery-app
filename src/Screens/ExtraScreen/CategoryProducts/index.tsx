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
import Search from 'react-native-vector-icons/Feather';
import Arrow from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { colors, font, fonts, products } from './constant';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../../../component/Header';
import { colors, fonts, products } from '../../../component/Constant';
import ProductView from '../../../component/ProductView';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../../navigation/types';
export default function CategoryProducts() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute();
  const { category } = route.params;
  const { top, bottom } = useSafeAreaInsets();
  const getProducts = name => {
    return products.filter(product => product.category === category);
  };
  // console.log(getProducts());
  return (
    <View style={{ flex: 1, marginHorizontal: 0 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryColor}
      />
      <View
        style={{
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          backgroundColor: colors.primaryColor,
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow name="arrowleft" size={20} color={'black'} />
          </TouchableOpacity>
          <Text
            style={{ marginLeft: 10, fontSize: 16, fontFamily: fonts.medium }}
          >
            Categories
          </Text>
        </View>
        <Search name="search" size={20} color={'black'} />
      </View>
      <View style={{ flex: 1, marginBottom: bottom }}>
        <FlatList
          data={products.filter(item => item.category === category)}
          numColumns={1}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <ProductView item={item} navigation={navigation} />
          )}
        />
      </View>
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
          onPress={() => navigation.navigate('Cart')}
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
                fontFamily: fonts.regular,
                color: 'white',
              }}
            >
              2
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.medium,
              color: 'white',
            }}
          >
            View Cart
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fonts.bold,

              color: 'white',
            }}
          >
            Rs 550
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
