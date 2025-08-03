import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { fonts } from '../Constant';
interface ProductProps {
  name: string;
  image: string;
  navigation: any;
}
const Product: React.FC<ProductProps> = ({ name, image, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('CategoryProducts', {
          category: name,
        })
      }
      style={{
        backgroundColor: 'white',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 10,
        width: 100,
        paddingHorizontal: 10,
        borderRadius: 5,
        justifyContent: 'center',
      }}
    >
      <Text
        numberOfLines={1}
        style={{ color: 'black', fontFamily: fonts.medium, marginVertical: 10 }}
      >
        {name}
      </Text>
      <Image
        source={image}
        resizeMode="contain"
        style={{ height: 100, width: 80 }}
      />
    </TouchableOpacity>
  );
};

export default Product;
