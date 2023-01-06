import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Components/Common/Header/Header";
import TabsComponent from "../Components/Dashboard/Tabs/tabs";
import SearchComponent from "../Components/Dashboard/Search/search";
import Loader from "../Components/Common/Loader/loader";
import BackToTop from "../Components/Common/BackToTop/backToTop";
import PaginationComponent from "../Components/Dashboard/Pagination/pagination";
import Footer from "../Components/Common/Footer/Footer";
import { get100Coins } from "../Functions/get100Coins";

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);

  const handlePageChange = (event, value) => {
    setPageNumber(value);
  
    var startingIndex = (value - 1) * 9;
    setPaginatedCoins(coins.slice(startingIndex, startingIndex + 9));
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  }

  var filteredCoins = coins.filter((coin) => {
    if(coin.name.toLowerCase().includes(search.toLowerCase()) || 
      (coin.symbol.toLowerCase().includes(search.toLowerCase()))){
        return coin;
    }
  })

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    // axios.get("https://api.coingecko.com/api/v3/coins/markets? vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    //     .then((response) => {
    //     console.log(response)
    //     if(response.status == 200){
    //         setCoins(response.data)
    //     }
    // })
    // .catch((error) => {
    //     console.log(error);
    // })
    setLoader(true)
    const data = await get100Coins();
    if(data){
      setCoins(data);
      setPaginatedCoins(data.slice(0, 9));
      setLoader(false);
    }
    // var config = {
    //   method: "get",
    //   url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=99&page=1&sparkline=false",
    //   headers: {}
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //     setCoins(response.data)
    //     setPaginatedCoins(response.data.slice(0, 9))
    //     setLoader(false)
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     setLoader(false)
    //   });
  };

  return (
    <div style={{backgroundColor:"var(--black)"}}>
    <BackToTop/>
    {loader ? (
      <Loader/>
    ) : (
      <div>
      <Header />
      <SearchComponent search={search} onChange={onChange}/>
      <TabsComponent coins={ search ? filteredCoins : paginatedCoins} />
      { !search && <PaginationComponent pageNumber={pageNumber} handleChange={handlePageChange} />}
    </div>
    )}
    <Footer />
    </div>
  );
};

export default DashboardPage;
