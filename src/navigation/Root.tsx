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
import CreateAccountRider from '../Screens/Rider/CreateAccountRider';
import LoginRider from '../Screens/Rider/LoginRider';
import VerifyNumberRider from '../Screens/Rider/VerifyNumberRider';
import ConfirmCodeRider from '../Screens/Rider/ConfirmCodeRider';
import HomeRider from '../Screens/Rider/HomeRider';
import MapRider from '../Screens/Rider/MapRider';
import ProfileRider from '../Screens/Rider/ProfileRider';
import ConfirmCodeForgot from '../Screens/Auth/ConfirmCodeForgot';
import ForgotRider from '../Screens/Rider/ForgotRider';
import ConfirmCodeForgotRider from '../Screens/Rider/ConfirmCodeForgotRider';
import ChangePassword from '../Screens/Auth/ChangePassword';
import ChangePasswordRider from '../Screens/Rider/ChangePasswordRider';
import { RootStackParamList } from './types';
import Home from '../Screens/ExtraScreen/Home';
import Cart from '../Screens/BottomScreens/Cart';
import Checkout from '../Screens/ExtraScreen/Checkout';
import Starting from '../Screens/Auth/Starting';
import WelcomeScreen from '../Screens/Auth/WelcomeScreen';
import EnterPassword from '../Screens/Auth/EnterPassword';
import CNICDetails from '../Screens/Auth/CNICDetails';
import CNICPics from '../Screens/Auth/CNICPics';
import UtilityBills from '../Screens/Auth/UtilityBills';
import Licence from '../Screens/Auth/Licence';
const Stack = createStackNavigator<RootStackParamList>();
export default function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Starting" component={Starting} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="EnterPassword" component={EnterPassword} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Licence" component={Licence} />
        <Stack.Screen name="UtilityBills" component={UtilityBills} />
        <Stack.Screen name="CNICDetails" component={CNICDetails} />
        <Stack.Screen name="CNICPics" component={CNICPics} />
        <Stack.Screen name="ConfirmCodeForgot" component={ConfirmCodeForgot} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="VerifyNumber" component={VerifyNumber} />
        <Stack.Screen name="ConfirmCode" component={ConfirmCode} />
        <Stack.Screen name="BottomNav" component={BottomNav} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="CategoryProducts" component={CategoryProducts} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyOrders" component={MyOrders} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="AddAddress" component={AddAddress} />
        <Stack.Screen name="CreditCards" component={CreditCards} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="Transactions" component={Transactions} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen
          name="CreateAccountRider"
          component={CreateAccountRider}
        />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="LoginRider" component={LoginRider} />
        <Stack.Screen name="VerifyNumberRider" component={VerifyNumberRider} />
        <Stack.Screen name="ConfirmCodeRider" component={ConfirmCodeRider} />
        <Stack.Screen name="HomeRider" component={HomeRider} />
        <Stack.Screen name="MapRider" component={MapRider} />
        <Stack.Screen name="ProfileRider" component={ProfileRider} />
        <Stack.Screen name="ForgotRider" component={ForgotRider} />
        <Stack.Screen
          name="ConfirmCodeForgotRider"
          component={ConfirmCodeForgotRider}
        />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen
          name="ChangePasswordRider"
          component={ChangePasswordRider}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
