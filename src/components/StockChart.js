import React, { useEffect } from "react";
var Chart = require('chart.js');

const StockChart = (props) => {
    const FONT_COLOR = "white";
    const CHART_COLORS = ['blue', 'red', 'green', 'yellow', 'purple', 'orange', 'black'];
    const stocks = props.stocks;

    useEffect(() => {
      if(stocks.length > 0) {
        const datasets = stocks.map((stockData, idx) => (
          {
            label: stockData.symbol,
            backgroundColor: CHART_COLORS[idx],
            borderColor: CHART_COLORS[idx],
            data: stockData.data,
            fill: false
          }
        )
    );

    var chart = document.getElementById('stocks-chart').getContext('2d');
    var stocksChart = new Chart(chart, {
        type: 'line',
        data: {
          labels: stocks[0].labels,
          datasets: datasets
        },
        options: {
          title: {
            display: true,
            text: "Stocks over Time: " + stocks[0].date,
            fontSize: 40,
            fontColor: FONT_COLOR
          },
          tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 20,
            bodyFontSize: 20,
            fontColor: FONT_COLOR
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Timestamp (EST)',
                fontSize: 30,
                fontColor: FONT_COLOR
              },
              gridLines: {
                display: true,
                color: FONT_COLOR
              },
              ticks: {
                fontSize: 25,
                fontColor: FONT_COLOR
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Closing Value',
                fontSize: 30,
                fontColor: FONT_COLOR
              },
              gridLines: {
                display: true,
                color: FONT_COLOR
              },
              ticks: {
                fontSize: 25,
                fontColor: FONT_COLOR
              }
            }]
          },
          legend: {
            labels: {
                fontSize: 22,
                fontColor: FONT_COLOR
            }
          }
        }
      });
    }
  }, [stocks])

  return (
    <canvas id="stocks-chart"></canvas>
  );
}

export default StockChart;