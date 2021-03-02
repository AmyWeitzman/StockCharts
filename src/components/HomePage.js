import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div id="homepage-container">
      <h2 id="welcome-msg">Welcome to <span id="title-text-red">Stock</span> <span id="title-text-blue">Charts</span></h2>
      <p id="welcome-text">
        Start by searching for a stock <br /> 
        to see a graph of its value throughout the day</p>
    </div>
  );
}

export default HomePage;