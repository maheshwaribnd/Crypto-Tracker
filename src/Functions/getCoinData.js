import axios from 'axios';

export default function GetCoinData(id) {

    const coinData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
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
