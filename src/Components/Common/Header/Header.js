import { Switch } from "@mui/material";
import React, { useState } from "react";
import Button from "../Button/button";
import MobileDrawer from "./Drawer";
import "./style.css";

function Header() {

  return (
    <div className="header">
      <a href="/">
        <h1>CryptoTracker</h1>
      </a>
      <div className="links-flex">
        {/* <Switch checked={darkMode} onClick={() => {
          // console.log(!darkMode)
          setDarkMode(!darkMode);
        }} /> */}
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/compare">
          <p className="link">Compare</p>
        </a>
        <a href="/watchlist">
          <p className="link">Watchlist</p>
        </a>
        <a href="/Dashboard">
          <Button
            text="Dashboard"
            outlined={false}
            fun={() => {
              console.log("hi");
            }}
          />
        </a>
      </div>
      <MobileDrawer />
    </div>
  );
}

export default Header;
