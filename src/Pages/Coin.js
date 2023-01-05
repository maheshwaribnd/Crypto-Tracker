import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Common/Loader/loader";
import Header from "../Components/Common/Header/Header";
import ListComponent from "../Components/Dashboard/List/list";
import CoinInfo from "../Components/Coin/CoinInfo/info";
import Footer from "../Components/Common/Footer/Footer";
import SelectDays from "../Components/Coin/SelectDays/selectDays";
import LineChart from "../Components/Coin/LineChart/lineChart";
import { CoinObject } from "../Functions/coinObject";
import GetCoinData from '../Functions/getCoinData';
import SettingChartData from '../Functions/settingChartData';
import { GetCoinPrices } from "../Functions/getCoinPrices";
import PriceToggle from "../Components/Coin/PriceToggle/priceToggle";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const [loader, setLoader] = useState(false);
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("market_caps")
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  const handleDaysChange = async (event) => {
    setLoader(true)
    setDays(event.target.value);
    const prices = await GetCoinPrices(id, event.target.value);
    if (prices) {
      SettingChartData(setChartData, coin, prices)
    };
    setLoader(false);
  }

  const handlePriceTypeChange = async (event) => {
    setLoader(true)
    setPriceType(event.target.value);
    const prices = await GetCoinPrices(id, days, priceType);
    console.log(prices)
    if (prices) {
      SettingChartData(setChartData, coin, prices)
    };
    setLoader(false);
  };

  useEffect(() => {
    getData();
  }, [id]);


  const getData = async () => {
    setLoader(true);
    const data = await GetCoinData(id);
    if (data) {
      CoinObject(setCoin, data)   // coinObject function is used for passed data into the List.
      const prices = await GetCoinPrices(id, days, "prices");
      SettingChartData(setChartData, data, prices)
      setLoader(false);
    }
  }
  return (
    <div>
      {loader || !coin?.id || !chartData ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div style={{ marginTop: "9.5rem" }}>
            <div className="list-wrapper">
              {console.log(coin)}
              <ListComponent coin={coin} delay={0.5} />
            </div>
            <div className="info-wrapper">
              <SelectDays days={days} handleDaysChange={handleDaysChange} />
              <PriceToggle handlePriceTypeChange={handlePriceTypeChange} priceType={priceType} />
              <LineChart chartData={chartData} />
            </div>
            <CoinInfo name={coin.name} desc={coin.desc} />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default CoinPage;
