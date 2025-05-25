import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import Countries from './src/Countries/Countries';
import AddCountry from './src/AddCountry/AddCountry';
import { colors } from './src/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default class App extends Component {
  state = {
    countries: [],
  };

  addCountry = (country) => {
    this.setState((prevState) => ({
      countries: [...prevState.countries, country],
    }));
  };

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="CountriesNav"
            children={(props) => (
              <Stack.Navigator
                screenOptions={{
                  headerStyle: {
                    backgroundColor: colors.primary,
                  },
                  headerTintColor: '#fff',
                }}
              >
                <Stack.Screen
                  name="Countries"
                  children={(stackProps) => (
                    <Countries {...stackProps} countries={this.state.countries} />
                  )}
                />
              </Stack.Navigator>
            )}
          />
          <Tab.Screen
            name="AddCountry"
            children={(props) => (
              <AddCountry {...props} addCountry={this.addCountry} />
            )}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}


