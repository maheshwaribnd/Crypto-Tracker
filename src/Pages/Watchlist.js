import React, { useEffect, useState } from 'react'
import Loader from "../Components/Common/Loader/loader";
import Header from '../Components/Common/Header/Header';
// import Footer from '../Components/Common/Footer/footer';
import Button from "../Components/Common/Button/button";
import TabsComponent from '../Components/Dashboard/Tabs/tabs';
import { get100Coins } from '../Functions/get100Coins';
import Footer from '../Components/Common/Footer/footer';

const WatchlistPage = () => {

  const coins = JSON.parse(localStorage.getItem("watchlist"))
  const [myWatchlist, setMyWatchlist] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoader(true);
    const allCoins = await get100Coins();
    setMyWatchlist(allCoins.filter((item) => coins.includes(item.id)));
    setLoader(false);
  }

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <>
          {myWatchlist.length == 0 ? (
            <>
              <Header />
              <div style={{ marginTop: "9rem" }}>
                <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                  No Items in the Watchlist
                </h1>
                <p style={{ textAlign: "center", marginBottom: "2rem" }}>
                  Add the Items Go to Dashboard.
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <a href="/dashboard">
                    <Button text={"Dashboard"} />
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <Header />
              <div style={{ marginTop: "7rem" }}>
                <TabsComponent coins={myWatchlist} isWatchlistPage={true} />
              </div>
              <Footer />
            </>
          )}

        </>
      )}
    </div>
  )
}

export default WatchlistPage;
