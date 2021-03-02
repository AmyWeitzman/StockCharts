import React from "react";
import { connect } from "react-redux";
import HomePage from "./HomePage";
import StockChart from "./StockChart";
import "./DisplayStocks.css";

const mapStateToProps = state => {
  return { 
    stocks: state.stocks,
    timeInterval: state.timeInterval
  };
};

const DisplayStocks = (props) => {
  const { stocks, timeInterval } = props;

  return (
    <div id="chart-container">
      {
        (stocks.length > 0)
        ? <StockChart stocks={stocks}/>
        : <HomePage />
      }
    </div>
  );
}

const DisplayStocksConnector = connect(mapStateToProps)(DisplayStocks);
export default DisplayStocksConnector;