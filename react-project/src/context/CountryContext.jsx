import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const CountryContext = createContext();

export const CountryContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  const fetchCountriesCurrencyCode = async (currencyCode) => {
    try {
      let response = await axios.get(
        `https://restcountries.com/v3.1/currency/${currencyCode}`
      );
      // console.log(response.data);
      setCountries(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {fetchCountriesCurrencyCode()}, [])

  const addToFavourite = (country) => {
    if (!favourites.some((fav) => fav.name.common === country.name.common)) {
      setFavourites([...favourites, country]);
    }
  };

  const removeFromFavourite = (country) => {
    const updateFavourites = favourites.filter(
      (fav) => fav.name.common !== country.name.common
    );
    setFavourites(updateFavourites);
  };

  const addToSearchhistory = (searchTerm) => {
    if (!searchHistory.includes(searchTerm)) {
      const updatedHistory = [...searchHistory];
      if (updatedHistory.length >= 5) {
        updatedHistory.pop();
      }

      updatedHistory.unshift(searchTerm);
      setSearchHistory(updatedHistory);
    }
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
  };
  return (
    <CountryContext.Provider
      value={{
        countries,
        favourites,
        searchHistory,
        fetchCountriesCurrencyCode,
        addToFavourite,
        removeFromFavourite,
        addToSearchhistory,
        clearSearchHistory,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
