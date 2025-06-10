import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CitiesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cities</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.infoText}>No saved cities!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#2196F3', // Blue header
    padding: 16,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#000',
  },
});

export default CitiesScreen;

