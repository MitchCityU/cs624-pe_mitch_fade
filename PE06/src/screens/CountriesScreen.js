import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CountryContext } from '../contexts/CountryContext';

const CountriesScreen = ({ navigation }) => {
  const { countries } = useContext(CountryContext);

  return (
    <View style={styles.container}>
      {countries.map((country, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.item} 
          onPress={() => navigation.navigate('CountryDetails', { country: country.name, currency: country.currency })}
        >
          <Text style={styles.title}>{country.name}</Text>
          <Text style={styles.subtitle}>{country.currency}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { padding: 16, borderBottomWidth: 1, borderColor: '#ccc' },
  title: { fontSize: 18, fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: '#777' }
});

export default CountriesScreen;

