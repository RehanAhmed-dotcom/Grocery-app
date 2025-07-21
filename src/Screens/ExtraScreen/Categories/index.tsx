import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../component/Header';
import { colors, fonts } from '../../../component/Constant';
//   import Header from './components/Header';
//   import { colors, fonts } from './constant';

export default function Categories() {
  const navigation = useNavigation();
  const categories = [
    { id: 1, name: 'Vegetables', image: require('../../../assets/C1.png') },
    { id: 2, name: 'Fruits', image: require('../../../assets/C2.png') },
    { id: 3, name: 'Beverages', image: require('../../../assets/C3.png') },
    { id: 4, name: 'Grocery', image: require('../../../assets/C4.png') },
    { id: 5, name: 'Edible oil', image: require('../../../assets/C5.png') },
    { id: 6, name: 'Household', image: require('../../../assets/C6.png') },
    { id: 7, name: 'Babycare', image: require('../../../assets/C7.png') },
  ];
  return (
    <View style={{ flex: 1, marginHorizontal: 15 }}>
      <StatusBar barStyle="dark-content" />
      <Header
        firstIcon={true}
        navigation={navigation}
        name="Categories"
        // lastIcon={false}
        textColor="black"
      />
      <View>
        <FlatList
          data={categories}
          numColumns={3}
          //   keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CategoryProducts', { category: item.name })
              }
              style={{
                padding: 10,
                alignItems: 'center',
                // backgroundColor: 'red',
                width: '33.3%',
              }}
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
    </View>
  );
}

const styles = StyleSheet.create({});
