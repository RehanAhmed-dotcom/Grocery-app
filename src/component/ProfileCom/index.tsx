import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import UserIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//   import { colors, fonts } from '../constant';
import { useNavigation } from '@react-navigation/native';
import { colors, fonts } from '../Constant';

export default function ProfileCom() {
  const navigation = useNavigation();
  const logout = () => {
    Alert.alert('Are You Sure!', 'You want to logout', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => navigation.navigate('Welcome'),
      },
    ]);
  };
  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('About')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',

            alignItems: 'center',
            marginBottom: 15,

            backgroundColor: 'white',
            height: 60,
            borderRadius: 12,
            marginTop: 10,
            paddingHorizontal: 15,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Image
              source={require('../../assets/icons/userIcon.png')}
              style={styles.icon}
            />
            <Text
              style={{
                fontFamily: fonts.semibold,
                fontSize: 18,
                marginLeft: 10,
              }}
            >
              About me
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('About')}
            style={{ width: 50, alignItems: 'flex-end', paddingRight: 10 }}
          >
            <FontAwesome name="angle-right" size={24} color={colors.grey} />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('MyOrders')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
            backgroundColor: 'white',
            height: 60,
            borderRadius: 12,
            marginTop: 10,
            paddingHorizontal: 15,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Image
              source={require('../../assets/icons/orders.png')}
              style={styles.icon}
            />
            <Text
              style={{
                fontFamily: fonts.semibold,
                fontSize: 18,
                marginLeft: 10,
              }}
            >
              My Orders
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('MyOrders')}
            style={{ width: 50, alignItems: 'flex-end', paddingRight: 10 }}
          >
            <FontAwesome name="angle-right" size={24} color={colors.grey} />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Favourite')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
            backgroundColor: 'white',
            height: 60,
            borderRadius: 12,
            marginTop: 10,
            paddingHorizontal: 15,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Image
              source={require('../../assets/icons/heart.png')}
              style={styles.icon}
            />
            <Text
              style={{
                fontFamily: fonts.semibold,
                fontSize: 18,
                marginLeft: 10,
              }}
            >
              My Favorites
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Favourite')}
            style={{ width: 50, alignItems: 'flex-end', paddingRight: 10 }}
          >
            <FontAwesome name="angle-right" size={24} color={colors.grey} />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Address')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
            backgroundColor: 'white',
            height: 60,
            borderRadius: 12,
            marginTop: 10,
            paddingHorizontal: 15,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Image
              source={require('../../assets/icons/location.png')}
              style={styles.icon}
            />
            <Text
              style={{
                fontFamily: fonts.semibold,
                fontSize: 18,
                marginLeft: 10,
              }}
            >
              My Address
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Address')}
            style={{ width: 50, alignItems: 'flex-end', paddingRight: 10 }}
          >
            <FontAwesome name="angle-right" size={24} color={colors.grey} />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('CreditCards')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
            backgroundColor: 'white',
            height: 60,
            borderRadius: 12,
            marginTop: 10,
            paddingHorizontal: 15,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Image
              source={require('../../assets/icons/card.png')}
              style={styles.icon}
            />
            <Text
              style={{
                fontFamily: fonts.semibold,
                fontSize: 18,
                marginLeft: 10,
              }}
            >
              Credit Cards
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreditCards')}
            style={{ width: 50, alignItems: 'flex-end', paddingRight: 10 }}
          >
            <FontAwesome name="angle-right" size={24} color={colors.grey} />
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Transactions')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
            backgroundColor: 'white',
            height: 60,
            borderRadius: 12,
            marginTop: 10,
            paddingHorizontal: 15,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Image
              source={require('../../assets/icons/transaction.png')}
              style={styles.icon}
            />
            <Text
              style={{
                fontFamily: fonts.semibold,
                fontSize: 18,
                marginLeft: 10,
              }}
            >
              Transactions
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Transactions')}
            style={{ width: 50, alignItems: 'flex-end', paddingRight: 10 }}
          >
            <FontAwesome name="angle-right" size={24} color={colors.grey} />
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Notifications')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
            backgroundColor: 'white',
            height: 60,
            borderRadius: 12,
            marginTop: 10,
            paddingHorizontal: 15,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Image
              source={require('../../assets/icons/notify.png')}
              style={styles.icon}
            />
            <Text
              style={{
                fontFamily: fonts.semibold,
                fontSize: 18,
                marginLeft: 10,
              }}
            >
              Notifications
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}
            style={{ width: 50, alignItems: 'flex-end', paddingRight: 10 }}
          >
            <FontAwesome name="angle-right" size={24} color={colors.grey} />
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => logout()}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
            backgroundColor: 'white',
            height: 60,
            borderRadius: 12,
            marginTop: 10,
            paddingHorizontal: 15,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Image
              source={require('../../assets/icons/logout.png')}
              style={styles.icon}
            />
            <Text
              style={{
                fontFamily: fonts.semibold,
                fontSize: 18,
                marginLeft: 10,
              }}
            >
              Sign out
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => logout()}
            style={{ width: 50, alignItems: 'flex-end', paddingRight: 10 }}
          >
            <FontAwesome name="angle-right" size={24} color={colors.grey} />
          </TouchableOpacity>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
    // borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
});
