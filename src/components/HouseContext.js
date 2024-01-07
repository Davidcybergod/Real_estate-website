import React, { useState, createContext, useEffect } from 'react';
import { housesData } from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('');
  const [property, setProperty] = useState('Property Type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState(['Country A', 'Country B', 'Country C']);


  useEffect(() => {
    const allCountries = housesData.map((house) => house.country);
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = housesData.map((house) => house.type);
    const uniqueProperties = ['Property Type (any)', ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);

  return (
    <HouseContext.Provider
      value={{
        houses,
        setHouses,
        country,
        setCountry,
        property,
        setProperty,
        properties,
        setProperties,
        price,
        setPrice,
        loading,
        setLoading,
        countries,
        setCountries,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
