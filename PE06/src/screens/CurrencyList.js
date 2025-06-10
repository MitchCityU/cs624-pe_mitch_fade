// src/components/CurrencyList.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CurrencyList = ({ currencies }) => {
  return (
    <View style={styles.container}>
      {currencies.map((currency, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.title}>{currency.name}</Text>
          <Text style={styles.subtitle}>{currency.info}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
  },
});

export default CurrencyList;
