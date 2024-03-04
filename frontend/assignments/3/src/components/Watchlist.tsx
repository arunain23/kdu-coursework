import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { createUseStyles } from 'react-jss';
import { Stock, setFilteredStocks } from '../redux/stockSlice';
import { Pagination } from '@mui/material';
import { Link } from 'react-router-dom';
const useStyles = createUseStyles({
  MainBox: {
    margin: '1rem 5rem 1rem 5rem',
    border: '2px solid black',
    borderRadius: '20px',
  },
  Title: {
    display: 'flex',
  
    padding:'1rem',
    justifyContent: 'space-between',
    borderBottom :'3px solid black',
  },
  showstocks: {
    padding:'1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom :'1px solid black',

  },
  h3: {
    padding: '0.7rem',
    float: 'left',
  },
  nameDetail :{
    width:'60%'
  },
  priceDetail: {
    width:'20%',
    textAlign:'right',
  },
  listDetail: {
    width:'20%',
    textAlign:'center',
  },
  clicked: {
    borderRadius:'100%',
    border: 'none',
    padding : '1rem',
    cursor: 'pointer',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: 'url("src/components/clicked.png")',
   
     '&:hover': {
      content:'""',
      backgroundColor: 'red',
      backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'18\' height=\'auto\' fill=\'white\' viewBox=\'0 0 24 24\'><path d=\'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    
    },
    
  },
  unclicked: {
    backgroundColor: 'transparent',
    borderRadius:'100%',
    padding : '1rem',
    border: 'none',
    cursor: 'pointer',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: 'url("src/components/AddButton.png")',
  },
  button: {
    padding: '1rem',
    border: '0px',
    background: 'white',
    '&:hover': {
      borderBottom: '2px solid #2596be',
    },
  },
});

export function Watchlist() {
  const dispatch: AppDispatch = useDispatch();
  const filteredStocks = useSelector((state: RootState) => state.stocksLoad.filteredStocks);
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);

  const toggleFavorite = (stock: Stock) => {
    const isFavorite = filteredStocks.find((filtstock) => filtstock.stock_name === stock.stock_name);
    if (isFavorite) {
      const updatedFavorites = filteredStocks.filter((filtstock) => filtstock.stock_name !== stock.stock_name);
      dispatch(setFilteredStocks(updatedFavorites));
    } else {
      const updatedFavorites = [...filteredStocks, stock];
      dispatch(setFilteredStocks(updatedFavorites));
    }
  };

  const stocksPerPage = 5;
  const indexOfLastStock = currentPage * stocksPerPage;
  const indexOfFirstStock = indexOfLastStock - stocksPerPage;
  const currentStocks = filteredStocks.slice(indexOfFirstStock, indexOfLastStock);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => setCurrentPage(value);

  const totalNumberOfPages = Math.ceil(filteredStocks.length / stocksPerPage);

  return (
    <div>
         <div className='upper-body'>
          <Link to="/explore">
            {/* Apply the button style using the classes.button */}
            <button className={classes.button}>Explore</button>
          </Link>
          <Link to="/watchlist">
            {/* Apply the button style using the classes.button */}
            <button className={classes.button}>My Watchlist</button>
          </Link>
        </div>

    <div className={classes.MainBox}>
      
      <div className={classes.Title}>
        <h3 className={classes.nameDetail}>Company</h3>
        <h3 className={classes.priceDetail}>Base Price</h3>
        <h3 className={classes.listDetail}>Watchlist</h3>
      </div>
      {currentStocks.map((stock) => (
        <div className={classes.showstocks} key={stock.stock_name}>
          <Link to={`/stock-details/${stock.stock_name}`} style={{ width: '60%', textDecoration:'none', color:'black' }}>
          <div className='nameDetail'>
            {stock.stock_name}
          </div>
          </Link>
          <div className='priceDetail' style={{ width: '20%', textAlign: 'right' }}>
            {stock.base_price}
          </div>
          <div className='listDetail' style={{ width: '20%', textAlign: 'center' }}>
            <button
              className={
                filteredStocks.some((filteredStock) => filteredStock.stock_name === stock.stock_name)
                  ? classes.clicked
                  : classes.unclicked
              }
              onClick={() => toggleFavorite(stock)}
            />
          </div>
        </div>
        
      ))}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <Pagination count={totalNumberOfPages} page={currentPage} onChange={handleChange} />
      </div>
    </div>
    </div>
  );
}
