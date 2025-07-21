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
import React, { useState } from 'react';
//   import Header from './components/Header';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
//   import { colors, fonts, products } from './constant';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, fonts, products } from '../../../component/Constant';
import Header from '../../../component/Header';

export default function Favourite() {
  const navigation = useNavigation();
  const { top, bottom } = useSafeAreaInsets();
  // Store quantities as an object with item IDs as keys
  const [quantities, setQuantities] = useState({});
  const [favProducts, setFavProducts] = useState(
    products.filter(item => item.islike === '1'),
  );
  // Initialize or increase quantity for a specific item
  const increaseQuantity = id => {
    setQuantities(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  // Decrease quantity for a specific item, ensuring it doesn't go below 1
  const decreaseQuantity = id => {
    setQuantities(prev => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };
  const handleDelete = id => {
    Alert.alert(
      'Delete Item',
      'Are you sure you want to remove this item from favorites?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setFavProducts(prev => prev.filter(item => item.id !== id));
            setQuantities(prev => {
              const newQuantities = { ...prev };
              delete newQuantities[id];
              return newQuantities;
            });
          },
        },
      ],
      { cancelable: true },
    );
  };
  const renderFavItem = ({ item }) => (
    <TouchableOpacity
      onLongPress={() => handleDelete(item.id)}
      style={{
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        position: 'relative',
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <Image
          source={item.image}
          style={{ width: 70, height: 70, resizeMode: 'contain' }}
        />
        <View>
          <Text
            style={{
              fontFamily: fonts.regular,
              fontSize: 15,
              color: colors.primaryColor,
            }}
          >
            ${item.price} x {quantities[item.id] || 1}
          </Text>
          <Text
            style={{ fontFamily: fonts.bold, fontSize: 17, color: 'black' }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontFamily: fonts.regular,
              fontSize: 15,
              color: colors.grey,
            }}
          >
            {item.quantity}
          </Text>
        </View>
      </View>
      <View>
        <View
          style={{ flexDirection: 'column', alignItems: 'center', gap: 10 }}
        >
          <TouchableOpacity
            onPress={() => increaseQuantity(item.id)}
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
          <Text
            style={{
              fontFamily: fonts.bold,
              marginHorizontal: 10,
            }}
          >
            {quantities[item.id] || 1}
          </Text>
          <TouchableOpacity
            onPress={() => decreaseQuantity(item.id)}
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
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header
        firstIcon={false}
        navigation={navigation}
        lastIcon={false}
        name="Favorites"
        textColor="black"
      />
      <View style={{ flex: 1, backgroundColor: '#F4F5F9', paddingBottom: 0 }}>
        <FlatList
          data={favProducts}
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
});
