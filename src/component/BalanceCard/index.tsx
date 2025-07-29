import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import { fonts } from '../Constant';
// import { fonts } from '../constant';

const BalanceCard = ({ cardNumber, unmask, cardHolder, expiryDate }) => {
  const maskedCard = unmask
    ? cardNumber
    : ` XXXX  XXXX  XXXX  ${cardNumber.slice(-4)}`;

  return (
    <ImageBackground
      style={styles.card}
      resizeMode="contain"
      source={require('../../assets/balanceCard.png')}
    >
      <View>
        <Text style={styles.cardNumber}>{maskedCard}</Text>
        <Text style={[styles.cardHolder, {}]}>{cardHolder}</Text>
        <Text style={styles.cardExpire}>{expiryDate}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    // width: '100%',
    borderRadius: 20,
    padding: 15,
    height: 200,
    justifyContent: 'space-between',
  },
  logoContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  cardNumber: {
    fontSize: 22,
    letterSpacing: 2,
    color: '#fff',
    textAlign: 'left',
    position: 'absolute',
    top: 50,
    fontFamily: fonts.semibold,
  },
  cardHolder: {
    fontSize: 20,
    letterSpacing: 2,
    color: '#fff',
    textAlign: 'left',
    position: 'absolute',
    top: 140,
    left: 5,
    fontFamily: fonts.medium,
  },
  cardExpire: {
    fontSize: 15,
    letterSpacing: 2,
    color: '#fff',
    textAlign: 'left',
    position: 'absolute',
    top: 145,
    right: 20,
    fontFamily: fonts.medium,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BalanceCard;
