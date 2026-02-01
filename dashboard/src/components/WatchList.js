import React, { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  BarChartOutlined,
  MoreHoriz,
  LabelSharp,
  BorderColor,
} from "@mui/icons-material";
import { watchlist } from "../data/data";
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnoutChart";
import { data } from "react-router-dom";

const labels = watchlist.map((subArray) => subArray["name"]);
const WatchList = () => {

  const Data = {
    labels,
    datasets:[
      {label:"Price",
        data:watchlist.map((stock)=>stock.price),
        backgroundColor:[
          "rgba(255,99,132,0.5)",
          "rgba(54,162,235,0.5)",
          "rgba(255,206,86,0.5)",
          "rgba(75,192,192,0.5)",
          "rgba(153,102,255,0.5)",
          "rgba(255,159,64,0.5)",
        ],
        BorderColor:[
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(75,192,192,1)",
          "rgba(153,102,255,1)",
          "rgba(255,159,64,1)",
        ]
      }

    ]
  }
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          className="search"
          placeholder="Search eg: infy, bse, nifty"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>   
      <DoughnutChart data={Data}/>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li onMouseEnter={() => setShowActions(true)}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showActions && (
        <WatchListActions
          uid={stock.name}
          onMouseLeave={() => setShowActions(false)}
        />
      )}
    </li>
  );
};

const WatchListActions = ({ uid, onMouseLeave }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  return (
    <span className="actions" onMouseLeave={onMouseLeave}>
      <span>
        <Tooltip title="Buy (B)" arrow TransitionComponent={Grow}>
          <button
            className="buy"
            onClick={() => {
              console.log("BUY CLICKED:", uid);
              openBuyWindow(uid);
            }}
          >
            Buy
          </button>
        </Tooltip>

        <Tooltip title="Sell (S)" arrow TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>

        <Tooltip title="Analytics" arrow TransitionComponent={Grow}>
          <button className="action">
            <BarChartOutlined />
          </button>
        </Tooltip>

        <Tooltip title="More" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
