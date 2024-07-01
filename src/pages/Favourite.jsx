import { useContext } from "react";
import { CountryContext } from "../context/CountryContext";
import CountryCard from "./CountryCard";

const Favourite = () => {
  const { favourites } = useContext(CountryContext);
  return (
    <div>
      <h2>Favorites</h2>
      {favourites.length === 0 ? (
        <p>No Favorite yet</p>
      ) : (
        favourites.map((ele) => (
          <CountryCard key={ele.name.common} country={ele} />
        ))
      )}
    </div>
  );
};

export default Favourite;
