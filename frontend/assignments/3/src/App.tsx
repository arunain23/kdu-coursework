import React, { CSSProperties, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  Link,
} from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { AppDispatch, store } from "./redux/store";
import { RootState } from "../src/redux/store";
import { CircularProgress } from "@mui/material";
import { getStocks } from "./thunks//getStocks";
import { HomePage } from "./components/HomePage/HomePage";
import { Explore } from "./components/Explore";
import { Watchlist } from "./components/Watchlist";
import { StockDetails } from "./components/Stocks/StockDetails";
import { Transactions } from "./components/Transactions/Transactions";

export function App() {
  const style: CSSProperties = {
    width: "100%",
  };

  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div style={style}>
        <HomePage />
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/watchlist" element={<Watchlist />} />

          <Route path="stock-details/:stockName" element={<StockDetails />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
