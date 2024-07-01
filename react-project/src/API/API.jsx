import axios from "axios";
export const fetchCountriesByCurrencyCode = async (currencyCode) => {
  try {
    let response = await axios.get(
      `https://restcountries.com/v3.1/currency/${currencyCode}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
