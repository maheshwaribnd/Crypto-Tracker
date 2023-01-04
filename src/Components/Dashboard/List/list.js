import React, { useState } from "react";
import "./style.css";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { IconButton } from "@mui/material";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { convertNumbers } from "../../../Functions/convertNumber";
import AddToWatchlist from "../../../Functions/addToWatchlist";
import HasBeenAdded from '../../../Functions/hasBeenAdded';
import RemoveFromWatchlist from '../../../Functions/removeFromWatchlist';


const ListComponent = ({ coin, delay, isWatchlistPage }) => {

  const [added, setAdded] = useState(HasBeenAdded(coin.id));

  return (
    <a href={`/coin/${coin.id}`}>
      <motion.tr
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: delay }}
        className={`list-container ${
          coin.price_change_percentage_24h < 0 && "list-container-red"
        }`}
        style={{ display:isWatchlistPage && !added && "none"}}
      >
        <Tooltip placement="bottom-start" title="Image">
          <td className="td-img">
            <img src={coin.image} className="coin-img list-img" alt="" />
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Coin Name">
          <td className="td-info-flex">
            <div className="middle-col">
              <h4 className="coin-symbol">{coin.symbol}</h4>
              <p className="coin-name">{coin.name}</p>
            </div>
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Price">
          <td>
            {coin.price_change_percentage_24h > 0 ? (
              <div className="info-flex-percent" style={{ marginBottom: 0 }}>
                <div className="percent">
                  {coin.price_change_percentage_24h.toFixed(2)} %
                </div>
                <TrendingUpRoundedIcon className="trending-icon trend" />
              </div>
            ) : (
              <div className="info-flex-percent" style={{ marginBottom: 0 }}>
                <div className="percent red">
                  {coin.price_change_percentage_24h.toFixed(2)} %
                </div>
                <TrendingDownRoundedIcon className="trending-icon red trend red" />
              </div>
            )}
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Curent Price">
          <td>
            <p
              className={`coin-price coin-price-list desktop-price ${
                coin.price_change_percentage_24h < 0 && "coin-price-red"
              }`}
            >
              ${coin.current_price.toLocaleString()}
            </p>
            <p
              className={`coin-price coin-price-list mobile-price ${
                coin.price_change_percentage_24h < 0 && "coin-price-red"
              }`}
            >
              $
              {convertNumbers(
                coin.current_price < 1
                  ? parseFloat(coin.current_price).toFixed(3)
                  : parseInt(coin.current_price)
              )}
            </p>
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Total Volume">
          <td className="td-market-cap">
            <p className="coin-total_volume">{coin.total_volume.toLocaleString()}</p>
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Market Cap">
          <td className="td-market-cap-2">
            <p className="coin-total_volume">{coin.market_cap.toLocaleString()}</p>
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Market Cap">
          <td className="mobile-cap">
            <p className="coin-total_volume coin-total_volume-list">
              ${convertNumbers(parseFloat(coin.market_cap))}
            </p>
          </td>
        </Tooltip>
        <Tooltip>
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
        </Tooltip>
      </motion.tr>
    </a>
  );
};

export default ListComponent;
