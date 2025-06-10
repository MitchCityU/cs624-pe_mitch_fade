import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { CountryContext } from '../contexts/CountryContext';

const AddCountryScreen = ({ navigation }) => {
  const [countryName, setCountryName] = useState('');
  const [currencyName, setCurrencyName] = useState('');
  const { addCountry } = useContext(CountryContext);

  const handleAddCountry = () => {
    if (countryName && currencyName) {
      addCountry(countryName, currencyName);
      setCountryName('');
      setCurrencyName('');
      navigation.navigate('CountriesNav');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Countries</Text>
      <TextInput
        placeholder="Country Name"
        style={styles.input}
        value={countryName}
        onChangeText={setCountryName}
      />
      <TextInput
        placeholder="Currency Name"
        style={styles.input}
        value={currencyName}
        onChangeText={setCurrencyName}
      />
      <Button title="Add Country" onPress={handleAddCountry} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  input: { width: '90%', borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 8 }
});

export default AddCountryScreen;

