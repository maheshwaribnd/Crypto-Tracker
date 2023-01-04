import "./App.css";
import { useEffect } from "react";
// import Header from "./Components/Common/Header/Header";
// import Landingpage from "./Components/LandingPage/Intro/Landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import DashboardPage from "./Pages/Dashboard";
import WatchlistPage from "./Pages/Watchlist";
import CoinPage from "./Pages/Coin";
import ComparePage from "./Pages/Compare";


function App() {

  var cursor;
  var cursorPointer;


  useEffect(() => {
    cursor = document.getElementById("cursor");
    cursorPointer = document.getElementById("cursor-pointer");
    document.body.addEventListener("mousemove", function (e) {
      return (
        (cursor.style.left = e.clientX + "px"),
        (cursor.style.top = e.clientY + "px"),
        (cursorPointer.style.left = e.clientX + "px"),
        (cursorPointer.style.top = e.clientY + "px")
      );
    });

    document.body.addEventListener("mousedown", function (e) {
      return (
        (cursor.style.height = "0.5rem"),
        (cursor.style.width = "0.5rem"),
        (cursorPointer.style.height = "3rem"),
        (cursorPointer.style.width = "3rem")
      );
    });

    document.body.addEventListener("mouseup", function (e) {
      return (
        (cursor.style.height = "0.3rem"),
        (cursor.style.width = "0.3rem"),
        (cursorPointer.style.height = "2rem"),
        (cursorPointer.style.width = "2rem")
      );
    });
  }, []);


  return (
    <>
      {/* <div className="cursor" id="cursor" />
      <div className="cursor-pointer" id="cursor-pointer" /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
          <Route path="/compare" element={<ComparePage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
