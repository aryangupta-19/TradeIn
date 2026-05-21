import React, { useState, useContext } from "react";

import {Tooltip, Grow} from "@mui/material";
import {watchlist} from "../data/data";

import axios from "axios";
import GeneralContext from "./GeneralContext";

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { DoughnutGraph } from "./DoughnutGraph";

const labels = watchlist.map((subArray) => subArray["name"]);
const data = {
  labels,
  datasets: [
    {
      label: 'price',
      data: watchlist.map((stock) => stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.58)',
        'rgba(54, 162, 235, 0.58)',
        'rgba(255, 206, 86, 0.58)',
        'rgba(75, 192, 192, 0.58)',
        'rgba(153, 102, 255, 0.58)',
        'rgba(255, 159, 64, 0.58)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
  
}
// export const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  // datasets: [
  //   {
  //     label: '# of Votes',
  //     data: [12, 19, 3, 5, 2, 3],
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(54, 162, 235, 0.2)',
  //       'rgba(255, 206, 86, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(153, 102, 255, 0.2)',
  //       'rgba(255, 159, 64, 0.2)',
  //     ],
  //     borderColor: [
  //       'rgba(255, 99, 132, 1)',
  //       'rgba(54, 162, 235, 1)',
  //       'rgba(255, 206, 86, 1)',
  //       'rgba(75, 192, 192, 1)',
  //       'rgba(153, 102, 255, 1)',
  //       'rgba(255, 159, 64, 1)',
  //     ],
  //     borderWidth: 1,
  //   },
  // ],
// };


const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) =>(
          <WatchListItem stock ={stock} key={index}></WatchListItem>
        ))}
      </ul>
      <DoughnutGraph data={data}/>
    </div>
  );
};

export default WatchList;


// createing watchListItem Component 

const WatchListItem = ({stock, key}) => {

  let [showWatchListActions, setWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setWatchListActions(true);
  }

  const handleMouseLeave = (e) => {
    setWatchListActions(false);
  }


  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p  className = {stock.isDown? "down": "up"}>{stock.name}</p>
        <div className="itemInfo">
            <span className="percent">{stock.percent}</span>
            {stock.isDown? 
            ( <KeyboardArrowUpIcon className="down"/>):
              (<KeyboardArrowDownIcon className="up"/>)
            }

          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name}/>}
    </li>
  ); 
};

const WatchListActions = ({uid}) => {

  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };


  return (
    <span className="actions">
      <Tooltip
        title="Buy (B)"
        placement="top"
        arrow
        slots={{ transition: Grow }}
        onClick={handleBuyClick}
      >
        <button className="buy">Buy</button>
      </Tooltip>

      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        slots={{ transition: Grow }}
      >
        <button className="sell">Sell</button>
      </Tooltip>

      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        slots={{ transition: Grow }}
      >
        <button className="action" style={{marginRight: "10px"}}>
          <BarChartIcon className="icon"/>
        </button>
      </Tooltip>

      <Tooltip
        title="More (M)"
        placement="top"
        arrow
        slots={{ transition: Grow }}
      >
        <button className="action" style={{marginRight: "10px"}}>
        <MoreHorizIcon className="icon"/>
        </button>
      </Tooltip>

    </span>
  );
}


