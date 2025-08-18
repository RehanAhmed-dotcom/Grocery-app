import React from 'react';
import {
  ActivityIndicator,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Shield from 'react-native-vector-icons/Octicons';
import Support from 'react-native-vector-icons/MaterialIcons';
import Money from 'react-native-vector-icons/Fontisto';
import Gift from 'react-native-vector-icons/Feather';
import Wallet from 'react-native-vector-icons/Ionicons';
import Location from 'react-native-vector-icons/EvilIcons';
import Menu from 'react-native-vector-icons/Entypo';
import User from 'react-native-vector-icons/Feather';
import { colors, fonts } from '../Constant';
interface loaderProp {
  show: boolean;
  navigationFunc?: () => void;
  hideModal?: () => void;
}
// import MenuModal from 'react-native-vector-icons/Entypo';
const MenuModal: React.FC<loaderProp> = ({ show, hideModal }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={show}>
      <TouchableOpacity
        onPress={() => hideModal()}
        style={{
          flex: 1,
          // height: hp(100),
          backgroundColor: '#00000040',
          //   alignItems: 'center',
          justifyContent: 'center',

          zIndex: 200,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          // position: 'absolute',
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={{
            height: heightPercentageToDP(100),
            width: widthPercentageToDP(80),

            // alignItems: 'center',
            // justifyContent: 'center',
            backgroundColor: 'white',
            // borderRadius: 100,
            overflow: 'hidden',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              // backgroundColor: 'red',
              marginTop: 20,
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 40,
                fontFamily: fonts.bold,
                color: colors.primaryColor,
              }}
            >
              Save Shop
            </Text>
            <TouchableOpacity onPress={() => hideModal()}>
              <Text style={{ fontSize: 30, color: '#828282' }}>x</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 30,
              marginLeft: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <User name="user" size={20} color={'black'} />
            <Text
              style={{
                fontSize: 20,
                fontFamily: fonts.regular,
                color: 'black',
                marginLeft: 10,
              }}
            >
              Profile
            </Text>
          </View>
          <View
            style={{
              marginTop: 15,
              marginLeft: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Menu name="menu" size={20} color={'black'} />
            <Text
              style={{
                fontSize: 20,
                fontFamily: fonts.regular,
                color: 'black',
                marginLeft: 10,
              }}
            >
              Orders & Reordering
            </Text>
          </View>
          <View
            style={{
              marginTop: 15,
              marginLeft: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Location name="location" size={20} color={'black'} />
            <Text
              style={{
                fontSize: 20,
                fontFamily: fonts.regular,
                color: 'black',
                marginLeft: 10,
              }}
            >
              Address
            </Text>
          </View>
          <View
            style={{
              marginTop: 15,
              marginLeft: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Wallet name="wallet-outline" size={20} color={'black'} />
            <Text
              style={{
                fontSize: 20,
                fontFamily: fonts.regular,
                color: 'black',
                marginLeft: 10,
              }}
            >
              Your Wallet
            </Text>
          </View>
          <View
            style={{
              marginTop: 15,
              marginLeft: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Wallet name="ticket-outline" size={20} color={'black'} />
            <Text
              style={{
                fontSize: 20,
                fontFamily: fonts.regular,
                color: 'black',
                marginLeft: 10,
              }}
            >
              Voucher
            </Text>
          </View>
          <View
            style={{
              marginTop: 15,
              marginLeft: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Gift name="gift" size={20} color={'black'} />
            <Text
              style={{
                fontSize: 20,
                fontFamily: fonts.regular,
                color: 'black',
                marginLeft: 10,
              }}
            >
              Invite Friends
            </Text>
          </View>
          <View
            style={{
              marginTop: 15,
              marginLeft: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Money name="wallet" size={20} color={'black'} />
            <Text
              style={{
                fontSize: 20,
                fontFamily: fonts.regular,
                color: 'black',
                marginLeft: 10,
              }}
            >
              Payments
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              marginTop: 20,
            }}
          />
          <View
            style={{
              marginTop: 15,
              marginLeft: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Wallet name="help-circle-outline" size={20} color={'black'} />
            <Text
              style={{
                fontSize: 20,
                fontFamily: fonts.regular,
                color: 'black',
                marginLeft: 10,
              }}
            >
              Help Center
            </Text>
          </View>
          <View
            style={{
              marginTop: 15,
              marginLeft: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Support name="support-agent" size={20} color={'black'} />
            <Text
              style={{
                fontSize: 20,
                fontFamily: fonts.regular,
                color: 'black',
                marginLeft: 10,
              }}
            >
              My Support
            </Text>
          </View>
          <View
            style={{
              marginTop: 15,
              marginLeft: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Wallet name="newspaper-outline" size={20} color={'black'} />
            <Text
              style={{
                fontSize: 20,
                fontFamily: fonts.regular,
                color: 'black',
                marginLeft: 10,
              }}
            >
              Terms & Conditions
            </Text>
          </View>
          <View
            style={{
              marginTop: 15,
              marginLeft: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Shield name="shield" size={20} color={'black'} />
            <Text
              style={{
                fontSize: 20,
                fontFamily: fonts.regular,
                color: 'black',
                marginLeft: 10,
              }}
            >
              Privacy Policy
            </Text>
          </View>
          <View
            style={{
              marginTop: 15,
              marginLeft: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Gift name="gift" size={20} color={'black'} />
            <Text
              style={{
                fontSize: 20,
                fontFamily: fonts.regular,
                color: 'black',
                marginLeft: 10,
              }}
            >
              Logout
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: colors.primaryColor,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              height: 60,
              marginTop: 30,
              marginLeft: 30,
              width: 200,
            }}
          >
            <Text
              style={{ color: 'white', fontSize: 22, fontFamily: fonts.medium }}
            >
              Driver Mode
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default MenuModal;
