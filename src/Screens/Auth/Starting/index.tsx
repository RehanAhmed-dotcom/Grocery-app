import React, { useEffect } from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import { colors, images } from '../../../component/Constant';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../../navigation/types';
const Starting = () => {
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WelcomeScreen');
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        marginBottom: bottom,
      }}
    >
      <ImageBackground
        source={images.auth1}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      >
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.primaryColor}
        />
        {/* <Header
        firstIcon={true}
        navigation={navigation}
        name="Verify Number"
        lastIcon={false}
        textColor="black"
      /> */}
        <View
          style={{
            marginHorizontal: 17,
            marginTop: '20%',
            alignItems: 'center',
          }}
        ></View>
      </ImageBackground>
    </View>
  );
};

export default Starting;
