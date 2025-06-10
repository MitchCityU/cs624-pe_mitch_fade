import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CountriesScreen from './src/screens/CountriesScreen';
import AddCountryScreen from './src/screens/AddCountryScreen';
import CitiesScreen from './src/screens/CitiesScreen';
import AddCityScreen from './src/screens/AddCityScreen';
import CountryDetailsScreen from './src/screens/CountryDetailsScreen';
import { CountryProvider } from './src/contexts/CountryContext';  // NEW

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function CountriesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Countries" component={CountriesScreen} />
      <Stack.Screen name="CountryDetails" component={CountryDetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <CountryProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="CitiesNav" component={CitiesScreen} />
          <Tab.Screen name="AddCity" component={AddCityScreen} />
          <Tab.Screen name="CountriesNav" component={CountriesStack} />
          <Tab.Screen name="AddCountry" component={AddCountryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </CountryProvider>
  );
}
