import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../Screens/Auth/Welcome';
import CreateAccount from '../Screens/Auth/CreateAccount';
import Login from '../Screens/Auth/Login';
import Forgot from '../Screens/Auth/Forgot';
import VerifyNumber from '../Screens/Auth/VerifyNumber';
import ConfirmCode from '../Screens/Auth/ConfirmCode';
import BottomNav from './BottomNav';
import ProductDetail from '../Screens/ExtraScreen/ProductDetail';
import Categories from '../Screens/ExtraScreen/Categories';
import CategoryProducts from '../Screens/ExtraScreen/CategoryProducts';
import About from '../Screens/ExtraScreen/About';
import MyOrders from '../Screens/ExtraScreen/MyOrders';
import Address from '../Screens/ExtraScreen/Address';
import AddAddress from '../Screens/ExtraScreen/AddAddress';
import CreditCards from '../Screens/ExtraScreen/CreditCards';
import AddCard from '../Screens/ExtraScreen/AddCard';
import Transactions from '../Screens/ExtraScreen/Transactions';
import Notifications from '../Screens/ExtraScreen/Notification';
const Stack = createStackNavigator();
export default function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="VerifyNumber" component={VerifyNumber} />
        <Stack.Screen name="ConfirmCode" component={ConfirmCode} />
        <Stack.Screen name="BottomNav" component={BottomNav} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="CategoryProducts" component={CategoryProducts} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="MyOrders" component={MyOrders} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="AddAddress" component={AddAddress} />
        <Stack.Screen name="CreditCards" component={CreditCards} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="Transactions" component={Transactions} />
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
