import React, { CSSProperties, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, store } from './redux/store';
import { RootState } from '../src/redux/store';
import { CircularProgress } from '@mui/material';
import { getStocks } from './thunks//getStocks';
import { HomePage } from './components/HomePage/HomePage';
import { Stocks } from './components/Stocks/Stocks';
import { Explore } from './components/Explore';
import { Watchlist } from './components/Watchlist';
import { StockDetails } from './components/Stocks/StockDetails';
import { Transactions } from './components/Transactions/Transactions';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({

  button: {
    padding: '1rem',
    border: '0px',
    background: 'white',
    '&:hover': {
      borderBottom: '2px solid #2596be',
    },
  },
});

export function App() {

  const style: CSSProperties = {
    width: "100%"
  }

  const classes = useStyles();
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  return (
    <BrowserRouter>
    <div style={style}>
    <HomePage />


      <Routes>
       
        {/* <Route path='/stock/:stocktId' element={<Stocks /> } /> */}
        <Route path="/" element={<Explore />}/>
        <Route path="/explore" element={<Explore />}/>
        <Route path="/watchlist" element={<Watchlist/>}/>
        {/* <Route path="/stocks/:stockId" element={<Stocks/>}/> */}
          {/* This route is for displaying stock details without Explore and Watchlist buttons */}
          <Route path="stock-details/:stockName" element={<StockDetails/>}/>
          <Route path="/transactions" element={<Transactions/>}/>
        {/* <Route path="/watchlist/:StockId" element={<Stocks/>}/> */}


      </Routes>
    </div>
  </BrowserRouter>
  );
    }
  //     <Router>
  //       <Routes>
  //         <Route path="/" element={<ProductList />} />
  //         {/* <Route path="/product/:productId" element={<ProductDetail />} /> */}
  //       </Routes>
  //     </Router>
  //     {/* <CustomSnackbar /> */}
  //     {/* <Loader /> */}
 
  // );
// };

export default App;
