import React, { useState } from "react";
import { connect } from "react-redux";
import { addStock } from "../actions/index";
import "./SearchStock.css"

const mapStateToProps = state => {
  return { 
    stocks: state.stocks,
    timeInterval: state.timeInterval
  };
};

const mapDispatchToProps = {
  addStock
}

const SearchStock = (props) => {
  const { stocks, timeInterval, addStock } = props;
  const [stockSymbol, setStockSymbol] = useState('');

  const searchStock = (e) => {
    e.preventDefault();
    addStock(stockSymbol.toUpperCase(), timeInterval);
    setStockSymbol('');  // reset search box
  }

  return (
    <div>
      <form onSubmit={searchStock} id="search-form">
        <label for="stock-symbol">Stock Symbol: </label>
        <input 
          type="text" 
          id="stock-symbol" 
          value={stockSymbol}
          onChange={(e) => setStockSymbol(e.target.value)}
        />
        <button type="submit" id="submit-btn">Search</button>
      </form>
    </div>
  );
}

const SearchStockConnector = connect(mapStateToProps, mapDispatchToProps)(SearchStock);
export default SearchStockConnector;