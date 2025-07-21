import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
//   import { colors, fonts, images, products } from './constant';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors, fonts, images, products } from '../../../component/Constant';
const { width, height } = Dimensions.get('window');
const bannerHeight = height * 0.3; // 30% of screen height

export default function HomeScreen() {
  const navigation = useNavigation();
  const { top, bottom } = useSafeAreaInsets();

  const images1 = [
    require('../../../assets/slide1.png'),
    require('../../../assets/slide2.png'),
    require('../../../assets/slide3.png'),
  ];

  const categories = [
    { id: 1, name: 'Vegetables', image: require('../../../assets/C1.png') },
    { id: 2, name: 'Fruits', image: require('../../../assets/C2.png') },
    { id: 3, name: 'Beverages', image: require('../../../assets/C3.png') },
    { id: 4, name: 'Grocery', image: require('../../../assets/C4.png') },
    { id: 5, name: 'Edible oil', image: require('../../../assets/C5.png') },
    { id: 6, name: 'Household', image: require('../../../assets/C6.png') },
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <View style={[styles.container, { marginTop: top }]}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.inputcontainer}>
        <Feather name="search" size={22} color={colors.grey} />
        <TextInput style={styles.input} placeholder="Search keywords" />
        <TouchableOpacity onPress={() => Alert.alert('In Progress')}>
          <SimpleLineIcons name="equalizer" size={20} color={colors.grey} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontFamily: fonts.bold }}>
            Categories
          </Text>
          {/* <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <FontAwesome name="angle-right" size={24} color={colors.grey} />
            </TouchableOpacity> */}
        </View>
        <View>
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
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontFamily: fonts.bold }}>
            Featured Products
          </Text>
          <FontAwesome name="angle-right" size={24} color={colors.grey} />
        </View>
        <View>
          <FlatList
            // showsHorizontalScrollIndicator={false}
            data={products.filter(item => item.feature === '1')}
            numColumns={2}
            keyExtractor={item => item.id}
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
                  {item.new == 1 ? (
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
                  ) : (
                    <View></View>
                  )}
                  {item.isDiscount == 1 ? (
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
                  ) : (
                    <View></View>
                  )}
                </View>
                <TouchableOpacity
                  onPress={() => Alert}
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
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: 90,
                      height: 90,
                      resizeMode: 'contain',
                      // backgroundColor: 'red',
                      marginTop: 18,
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
                ></View>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 15 },
  input: {
    fontFamily: fonts.regular,
    color: 'black',
    flex: 1,
    marginLeft: 5,
  },
  inputcontainer: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 12,
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
  },
  image: {
    width: width,
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
