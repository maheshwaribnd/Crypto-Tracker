import React, { useEffect, useState } from 'react';
import Header from '../Components/Common/Header/Header';
import Loader from '../Components/Common/Loader/loader'
import SelectCoins from '../Components/Compare/SelectCoins/selectCoins';
import { get100Coins } from '../Functions/get100Coins';
import GetCoinData from '../Functions/getCoinData';
import CoinObject from '../Functions/coinObject';
import List from '../Components/Dashboard/List/list';
import PriceToggle from '../Components/Coin/PriceToggle/priceToggle';
import LineChart from '../Components/Coin/LineChart/lineChart';
import CoinInfo from '../Components/Coin/CoinInfo/info';
import SettingChartData from '../Functions/settingChartData';

function ComparePage() {
  const [allCoins, setAllCoins] = useState([]);
  const [coin1, setCoin1] = useState(allCoins[0]?.id ?? "bitcoin");
  const [coin2, setCoin2] = useState(allCoins[1]?.id ?? "usd");
  const [days, setDays] = useState(30);
  const [coin1Data, setCoin1Data] = useState();
  const [coin2Data, setCoin2Data] = useState();
  const [loader, setLoader] = useState(false);

  const handleCoinChange = async (e, isCoin1) => {
    setLoader(true);
    if (isCoin1) {
      setCoin1(e.target.value);
      const data1 = await GetCoinData(e.target.value);
      CoinObject(setCoin1Data, data1);
    }
    else {
      setCoin2(e.target.value);
      const data2 = await GetCoinData(e.target.value);
      CoinObject(setCoin2Data, data2)
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
    const prices1 = GetCoinData(coin1, days, "prices")
    // SettingChartData(setChartData, coin1Data, prices1);
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
            {/* <PriceToggle
              // handlePriceTypeChange={handlePriceTypeChange}
              // priceType={priceType}
            />
            <LineChart
              // chartData={chartData}
              multiAxis={true}
              // priceType={priceType}
            /> */}
          </div>
          <CoinInfo name={coin1Data.name} desc={coin1Data.desc} />
          <CoinInfo name={coin2Data.name} desc={coin2Data.desc} />
        </div>
      )}
    </div>
  )
}

export default ComparePage
