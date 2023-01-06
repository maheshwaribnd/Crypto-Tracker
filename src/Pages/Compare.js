import React, { useEffect, useState } from 'react';
import Header from '../Components/Common/Header/Header';
import Loader from '../Components/Common/Loader/loader'
import SelectCoins from '../Components/Compare/SelectCoins/selectCoins';
import { get100Coins } from '../Functions/get100Coins';
import GetCoinData from '../Functions/getCoinData';
import {GetCoinPrices} from '../Functions/getCoinPrices'
import CoinObject from '../Functions/coinObject';
import List from '../Components/Dashboard/List/list';
import PriceToggle from '../Components/Coin/PriceToggle/priceToggle';
import LineChart from '../Components/Coin/LineChart/lineChart';
import CoinInfo from '../Components/Coin/CoinInfo/info';
import SettingChartData from '../Functions/settingChartData';
import Footer from '../Components/Common/Footer/Footer';

function ComparePage() {
  const [allCoins, setAllCoins] = useState([]);
  const [coin1, setCoin1] = useState(allCoins[0]?.id ?? "bitcoin");
  const [coin2, setCoin2] = useState(allCoins[1]?.id ?? "ethereum");
  const [days, setDays] = useState(30);
  const [coin1Data, setCoin1Data] = useState();
  const [coin2Data, setCoin2Data] = useState();
  const [priceType, setPriceType] = useState("prices");
  const [loader, setLoader] = useState(false);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const handlePriceTypeChange = async (e) => {
    setLoader(true);
    setPriceType(e.target.value);
    const prices1 = await GetCoinPrices(coin1, days, e.target.value);
    const prices2 = await GetCoinPrices(coin2, days, e.target.value);
    SettingChartData(setChartData, prices1, coin1Data, coin2Data, prices2);
    setLoader(false);
  };

  const handleCoinChange = async (e, isCoin1) => {
    setLoader(true);
    if (isCoin1) {
      setCoin1(e.target.value);
      const data1 = await GetCoinData(e.target.value); CoinObject(setCoin1Data, data1);

      const prices1 = await GetCoinPrices(e.target.value, days, priceType);
      const prices2 = await GetCoinPrices(coin2, days, priceType);
      SettingChartData(setChartData, prices1, data1, coin2Data, prices2);
    }
    else {
      setCoin2(e.target.value);
      const data2 = await GetCoinData(e.target.value);
      CoinObject(setCoin2Data, data2);
      const prices1 = await GetCoinPrices(coin1, days, priceType);
      const prices2 = await GetCoinPrices(e.target.value, days, priceType);
      SettingChartData(setChartData, prices1, coin1Data, data2, prices2);
    }
    setLoader(false);
  }
  const handleDaysChange = (e) => {
    setDays(e.target.value);
    setLoader(false)
  }

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    setLoader(true);
    const data = await get100Coins();
    if (data) {
      setAllCoins(data);
    }
    const data1 = await GetCoinData(coin1);
    const data2 = await GetCoinData(coin2);
    CoinObject(setCoin1Data, data1);
    CoinObject(setCoin2Data, data2);
    const prices1 = await GetCoinPrices(coin1, days)
    const prices2 = await GetCoinPrices(coin2, days)
    SettingChartData(setChartData, prices1, coin1Data, coin2Data, prices2);
    setLoader(false);
  }

  return (
    <div>
      <Header />
      {loader || !coin1Data?.id || !coin2Data?.id ? (
        <Loader />
      ) : (
        <div style={{ marginTop: "7rem" }}>
          <SelectCoins
            allCoins={allCoins}
            coin1={coin1}
            coin2={coin2}
            days={days}
            handleCoinChange={handleCoinChange}
            handleDaysChange={handleDaysChange} />
          <div className="list-wrapper">
            <List coin={coin1Data} delay={0.2} />
          </div>
          <div className="list-wrapper">
            <List coin={coin2Data} delay={0.3} />
          </div>
          <div className="info-wrapper">
            <PriceToggle
              handlePriceTypeChange={handlePriceTypeChange}
              priceType={priceType}
            />
            <LineChart
              chartData={chartData}
              multiAxis={true}
              priceType={priceType}
                />
          </div>
          <CoinInfo name={coin1Data.name} desc={coin1Data.desc} />
          <CoinInfo name={coin2Data.name} desc={coin2Data.desc} />
        </div>
      )}
      <Footer />
    </div>
  )
}

export default ComparePage
