import { ADD_STOCK } from "../constants/action-types";
require('dotenv').config()

const formatStockInfo = (stockSymbol, data, timeInterval) => {
  const stockRates = data["Time Series ("+timeInterval+")"];
  const chartInfo = {"symbol": stockSymbol};
  let chartData = [];    // closing values
  let chartLabels = [];  // timestamps
  let gotDate = false;
  for (const [key, value] of Object.entries(stockRates)) {
    const datetime =  key.split(" ");
    if(!gotDate) {
      const [year, month, day] = datetime[0].split("-");
      const date = [month, day, year].join("/");
      chartInfo["date"] = date;
      gotDate = true;
    }
    const time = datetime[1];
    chartLabels.push(time);
    chartData.push(value["4. close"]);
  }
  chartInfo["labels"] = chartLabels.reverse();  // data listed with most recent first but want earliest to latest
  chartInfo["data"] = chartData.reverse();
  return chartInfo;
}

export function addStock(stockSymbol, timeInterval) {
  return function(dispatch) {
    return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=${timeInterval}&apikey=${process.env.STOCK_API_KEY}`)
      .then(res => 
        res.json()
      ) 
      .then(data => {
        const stockInfo = formatStockInfo(stockSymbol, data, timeInterval) 
        dispatch({ 
          type: ADD_STOCK, 
          payload: stockInfo 
        });
      })
      .catch(err => {
        alert("Invalid Stock Symbol")
      });
  };
};