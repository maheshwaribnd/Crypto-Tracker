import React, { useState } from "react";
import "./style.css";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import AddToWatchlist from "../../../Functions/addToWatchlist";
import HasBeenAdded from '../../../Functions/hasBeenAdded';
import RemoveFromWatchlist from '../../../Functions/removeFromWatchlist';

const GridComponent = ({ coin, delay, isWatchlistPage }) => {

  const [added ,setAdded] = useState(HasBeenAdded(coin.id));
  //   console.log(coin);
  return (
    <a href={`/coin/${coin.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: delay }}
        className={`grid-container ${coin.price_change_percentage_24h < 0 && "grid-container-red"
          }`}
          style={{ display:isWatchlistPage && !added && "none"}}
      >
        <div className="info-flex">
          <div className="grid-first-row">
            <img src={coin.image} className="coin-img" alt="" />
            <div className="middle-col">
              <h4 className="coin-symbol">{coin.symbol}</h4>
              <p className="coin-name">{coin.name}</p>
            </div>
          </div>
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                RemoveFromWatchlist(coin.id)
              }
              else {
                AddToWatchlist(coin.id)
              }
              setAdded(!added);
            }}>
            {added ? (
              <StarRoundedIcon
                className={`watch-icon ${coin.price_change_percentage_24h < 0 && "watch-icon-red"
                }`}
              />
            ) : (
            <StarBorderRoundedIcon
              className={`watch-icon ${coin.price_change_percentage_24h < 0 && "watch-icon-red"
                }`}
            />
            )}
          </IconButton>
        </div>

        {coin.price_change_percentage_24h > 0 ? (
          <div className="grid-first-row">
            <div className="percent">
              {coin.price_change_percentage_24h.toFixed(2)} %
            </div>
            <TrendingUpRoundedIcon className="trending-icon" />
          </div>
        ) : (
          <div className="grid-first-row">
            <div className="percent red">
              {coin.price_change_percentage_24h.toFixed(2)} %
            </div>
            <TrendingDownRoundedIcon className="trending-icon red" />
          </div>
        )}
        <p
          className={`coin-price ${coin.price_change_percentage_24h < 0 && "coin-price-red"
            }`}
        >
          ${coin.current_price.toLocaleString()}
        </p>
        <div className="coin-name">
          <p>Total Voume : {coin.total_volume.toLocaleString()}</p>
          <p>Market Cap : {coin.market_cap.toLocaleString()}</p>
        </div>
      </motion.div>
    </a>
  );
};

export default GridComponent;
