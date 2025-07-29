import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import MapView from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import { colors } from '../../../component/Constant';
const MapRider = ({ navigation }) => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      <MapView
        //    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{ flex: 1 }}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      ></MapView>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          backgroundColor: colors.primaryColor,
          height: 50,
          width: 50,
          borderRadius: 25,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          top: top,
          left: 20,
        }}
      >
        <Icon name={'left'} size={20} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default MapRider;
