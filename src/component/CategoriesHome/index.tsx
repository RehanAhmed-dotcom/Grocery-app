import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { fonts } from '../Constant';
interface CategoriesProps {
  name: string;
  image: string;
  navigation: any;
}
const CategoriesHome: React.FC<CategoriesProps> = ({
  name,
  image,
  navigation,
}) => {
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
        width: '28%',

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
      <View
        style={{
          height: 85,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100,
          // backgroundColor: 'red',
          width: 85,
        }}
      >
        <Image
          source={image}
          resizeMode="contain"
          style={{ height: 80, borderRadius: 100, width: 80 }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CategoriesHome;
