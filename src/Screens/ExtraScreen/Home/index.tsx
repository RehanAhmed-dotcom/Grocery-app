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
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Menu from 'react-native-vector-icons/Entypo';
import { colors, fonts, images, products } from '../../../component/Constant';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../../navigation/types';
import Product from '../../../component/Product';
import CategoriesHome from '../../../component/CategoriesHome';
import ProductHome from '../../../component/ProductHome';
import MenuModal from '../../../component/MenuModal';
// import Categories from '../Categories';
const { width, height } = Dimensions.get('window');
const bannerHeight = 163;

const Home = () => {
  const scrollRef = useRef(null);
  const [showModal, setShoModal] = useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [activeIndex, setActiveIndex] = useState(0);
  const images1 = [
    require('../../../assets/slide1.png'),
    require('../../../assets/slide2.png'),
    require('../../../assets/slide3.png'),
  ];
  const hideModal = () => {
    setShoModal(false);
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
    const interval = setInterval(() => {
      let nextIndex = (activeIndex + 1) % images1.length;
      scrollRef.current.scrollTo({ x: width * nextIndex, animated: true });
      setActiveIndex(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const onScroll = event => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slide);
  };
  console.log('show', showModal);
  return (
    <View style={[styles.container, { marginTop: top }]}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.primaryColor}
      />
      <View
        style={{
          backgroundColor: colors.primaryColor,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
      >
        <TouchableOpacity onPress={() => setShoModal(true)}>
          <Menu name="menu" size={20} color={'white'} />
        </TouchableOpacity>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: 'white', fontSize: 12 }}>Your location</Text>
          <Text style={{ color: 'white', fontSize: 14, marginTop: 5 }}>
            g8/4 hanna road islamabad
          </Text>
        </View>
      </View>

      <ScrollView
        style={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inputcontainer}>
          {/* <Feather name="search" size={22} color={colors.grey} /> */}
          <TextInput
            style={styles.input}
            placeholderTextColor={'#ccc'}
            placeholder="Search for fruits, vegitables & more"
          />
          {/* <TouchableOpacity onPress={() => Alert.alert('In Progress')}>
          <SimpleLineIcons name="equalizer" size={20} color={colors.grey} />
        </TouchableOpacity> */}
        </View>
        <Text
          style={{
            marginVertical: 10,
            marginLeft: 15,
            fontSize: 22,
            fontFamily: fonts.bold,
            color: 'black',
          }}
        >
          Hello Tayyab
        </Text>
        {/* Image Slider */}
        <View style={styles.sliderWrapper}>
          <ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            scrollEventThrottle={16}
          >
            {images1.map((image, index) => (
              <Image key={index} source={image} style={styles.image} />
            ))}
          </ScrollView>

          {/* Dots inside the image bottom-center */}
          <View style={styles.pagination}>
            {images1.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.dot,
                  {
                    backgroundColor: i === activeIndex ? '#6CC51D' : '#ccc',
                    width: i === activeIndex ? 25 : 8,
                  },
                ]}
              />
            ))}
          </View>
        </View>
        {/* End Image Slider */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 50,
            marginHorizontal: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontFamily: fonts.bold }}>
            Special Promotions
          </Text>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => navigation.navigate('Categories')}
          >
            <Text
              style={{
                color: colors.primaryColor,
                marginRight: 5,
                fontFamily: fonts.regular,
              }}
            >
              See more
            </Text>
            <FontAwesome
              name="angle-right"
              size={24}
              color={colors.primaryColor}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={products}
            // numColumns={3}
            horizontal
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <ProductHome item={item} navigation={navigation} />
            )}
          />
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
          <Text style={{ fontSize: 18, fontFamily: fonts.bold }}>
            Super Sasta
          </Text>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => navigation.navigate('Categories')}
          >
            <Text
              style={{
                color: colors.primaryColor,
                marginRight: 5,
                fontFamily: fonts.regular,
              }}
            >
              See more
            </Text>
            <FontAwesome
              name="angle-right"
              size={24}
              color={colors.primaryColor}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 20 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={categories}
            // numColumns={3}
            horizontal
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <CategoriesHome
                name={item.name}
                navigation={navigation}
                image={item.image}
              />
            )}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 0,
            marginHorizontal: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontFamily: fonts.bold }}>
            Most Popular
          </Text>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => navigation.navigate('Categories')}
          >
            <Text
              style={{
                color: colors.primaryColor,
                marginRight: 5,
                fontFamily: fonts.regular,
              }}
            >
              See more
            </Text>
            <FontAwesome
              name="angle-right"
              size={24}
              color={colors.primaryColor}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={products}
            // numColumns={3}
            horizontal
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <ProductHome item={item} navigation={navigation} />
            )}
          />
        </View>
      </ScrollView>
      <MenuModal show={showModal} hideModal={hideModal} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1 },
  input: {
    fontFamily: fonts.regular,
    color: 'black',
    flex: 1,
    marginLeft: 5,
  },
  inputcontainer: {
    width: '90%',
    height: 50,
    // borderWidth: 1,
    marginHorizontal: 15,
    borderRadius: 40,
    borderColor: '#ddd',
    alignSelf: 'center',
    backgroundColor: '#E8ECEF',
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
    // marginHorizontal: 15,
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
