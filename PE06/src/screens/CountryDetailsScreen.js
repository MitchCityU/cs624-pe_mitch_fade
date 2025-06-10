import React from 'react';
import { View, StyleSheet } from 'react-native';
import CurrencyList from '../components/CurrencyList';

const CountryDetailsScreen = () => {
  const currencies = [
    { name: 'Dollar', info: 'USA Dollar' },
    { name: 'Won', info: 'Korean Won. Not used.' },
  ];

  return (
    <View style={styles.container}>
      <CurrencyList currencies={currencies} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});

export default CountryDetailsScreen;

