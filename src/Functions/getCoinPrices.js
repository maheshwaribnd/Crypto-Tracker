import axios from "axios";
import { API_URL } from "../constants";


export const GetCoinPrices = (id, days, priceType) => {

  console.log(priceType)
  const prices = axios
    .get(
      `${API_URL}/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((response) => {
      if (priceType == "market_caps") {
        console.log(response.data.prices)
        return response.data.market_caps;
      } else if (priceType == "total_volumes") {
        console.log(response.data.prices)
        return response.data.total_volumes;
      } else {
        console.log(response.data.prices)
        return response.data.prices;
      }
    })
    .catch((error) => {
      console.log(error);
    });

  if (prices) {
    return prices;
  }
  return;
};
