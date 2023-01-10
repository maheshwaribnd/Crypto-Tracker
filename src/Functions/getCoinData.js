import axios from 'axios';
import { API_URL } from "../constants";

export default function GetCoinData(id) {

    const coinData = axios
    .get(`${API_URL}/${id}`)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

    if(coinData) {
        return coinData;
    }
    return;
}
