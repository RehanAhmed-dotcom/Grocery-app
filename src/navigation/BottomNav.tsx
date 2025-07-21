import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
// import HomeScreen from './HomeScreen';
// import Favourite from './Favourite';
// import Profile from './Profile';
// import Cart from './Cart';
import { Text } from 'react-native';
// import { fonts } from './constant';
import HomeScreen from '../Screens/BottomScreens/HomeScreen';
import Profile from '../Screens/BottomScreens/Profile';
import Favourite from '../Screens/BottomScreens/Favourite';
import Cart from '../Screens/BottomScreens/Cart';
import { fonts } from '../component/Constant';

export type RootTabParamList = {
  Home: undefined;
  Favourite: undefined;
  Cart: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <Ionicons name="home-outline" size={size} color={color} />;
          } else if (route.name === 'Favourite') {
            return <Ionicons name="heart-outline" size={size} color={color} />;
          } else if (route.name === 'Cart') {
            return <Feather name="shopping-bag" size={size} color={color} />;
          } else if (route.name === 'Profile') {
            return <Ionicons name="person-outline" size={size} color={color} />;
          }
          return <Ionicons name="ellipse-outline" size={size} color={color} />;
        },
        tabBarLabel: ({ focused }) => {
          let label = '';
          if (route.name === 'Home') label = 'Home';
          else if (route.name === 'Favourite') label = 'Favourite';
          else if (route.name === 'Cart') label = 'Cart';
          else if (route.name === 'Profile') label = 'Profile';

          return (
            <Text
              style={{
                fontSize: focused ? 12 : 10,
                fontFamily: focused ? fonts.medium : fonts.regular,
                color: focused ? '#28B446' : 'gray',
              }}
            >
              {label}
            </Text>
          );
        },
        tabBarActiveTintColor: '#28B446',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}
