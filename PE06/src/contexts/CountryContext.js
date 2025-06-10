// src/contexts/CountryContext.js
import React, { createContext, useState } from 'react';

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([
    { name: 'USA', currency: 'Dollar' }
  ]);

  const addCountry = (name, currency) => {
    setCountries(prev => [...prev, { name, currency }]);
  };

  return (
    <CountryContext.Provider value={{ countries, addCountry }}>
      {children}
    </CountryContext.Provider>
  );
};
