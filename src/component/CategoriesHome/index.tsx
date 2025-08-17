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
        // backgroundColor: '#dbefe3',
        alignItems: 'center',
        marginLeft: 5,
        marginTop: 10,
        // width: '28%',

        paddingHorizontal: 5,
        borderRadius: 5,
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          height: 53,
          alignItems: 'center',
          backgroundColor: '#dbefe3',
          justifyContent: 'center',
          borderRadius: 10,
          // backgroundColor: 'red',
          width: 53,
        }}
      >
        <Image
          source={image}
          resizeMode="contain"
          style={{ height: 35, width: 44 }}
        />
      </View>
      <Text
        numberOfLines={1}
        style={{
          color: '#333333',
          fontSize: 12,
          fontFamily: fonts.regular,
          marginTop: 5,
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoriesHome;
