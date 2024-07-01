import { useContext } from "react";
import { CountryContext } from "../context/CountryContext";

const CountryCard = ({ country }) => {
  const { addToFavourite, removeFromFavourite, favourites } =
    useContext(CountryContext);

  const isFavourite = favourites.some(
    (fav) => fav.name.common === country.name.common
  );
  const toggleFavourite = () => {
    if (isFavourite) {
      removeFromFavourite(country);
    } else {
      addToFavourite(country);
    }
  };

  const currency = Object.values(country.currencies)[0];
  return (
    <div className="favourite-card">
      <h3>{country.name.common}</h3>
      <p>
        <strong>Capital:</strong> {country.capital[0]}
      </p>
      <p>
        <strong>Currency:</strong> {currency.name}
      </p>
      <p>
        <strong>Language:</strong> {Object.values(country.languages).join(", ")}
      </p>
      <img
        src={`https://flagsapi.com/${country.cca2}/shiny/64.png`}
        alt="country_flag"
        width="100"
      />
      <button className="Btn2" onClick={toggleFavourite}>
        {isFavourite ? "Remove from Favourites" : "Add to Favourite"}
      </button>
    </div>
  );
};

export default CountryCard;
