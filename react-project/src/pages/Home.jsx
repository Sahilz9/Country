import { useContext, useState, useRef, useEffect } from "react";
import { CountryContext } from "../context/CountryContext";
import CountryCard from "./CountryCard";
const Home = () => {
  const {
    countries,
    searchHistory,
    fetchCountriesCurrencyCode,
    addToSearchhistory,
    clearSearchHistory,
  } = useContext(CountryContext);

  const [currencyCode, setCurrencyCode] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = () => {
    fetchCountriesCurrencyCode(currencyCode.toLowerCase());
    addToSearchhistory(currencyCode.toLowerCase());
  };

  return (
    <div>
      <h2>Welcome to the Country Explorer</h2>
      <input
        type="text"
        className="search-input"
        value={currencyCode.toLowerCase()}
        placeholder="Enter your currency code..."
        onChange={(e) => setCurrencyCode(e.target.value)}
        ref={inputRef}
      />

      <button className="Btn" onClick={handleSearch}>Search</button>

      {searchHistory.length > 0 && (
        <div>
          <h2>Search History</h2>
          <ul>
            {searchHistory.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            <button className="Btn" onClick={clearSearchHistory}>Clear History</button>
          </ul>
        </div>
      )}

      <div>
        <h2>Results</h2>
        <div className="country-cards">
          {countries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </div>
      </div>

      {/* <div>
        <h2>Results</h2>
        {countries.map((ele) => {
          return (
            <div key={ele.name.common}>
              <p>{ele.name.common}</p>
              <p>Capital: {ele.capital[0]}</p>
              <p>Currency: {ele.currencies.SRD.name}</p>
              <p>Language: {Object.values(ele.languages).join(", ")}</p>
              <img src={`https://flagsapi.com/${ele.cca2}/shiny/64.png`} alt="country_flag" width="100" />
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Home;
