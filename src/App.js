import React from "react";
import SearchStock from "./components/SearchStock";
import DisplayStocks from "./components/DisplayStocks";
import "./App.css";

const App = () => (
  <div class="App">
    <SearchStock />
    <DisplayStocks />
  </div>
);

export default App;