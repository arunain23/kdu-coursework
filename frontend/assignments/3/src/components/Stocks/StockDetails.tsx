import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { StockPrice } from './StockPrice';
import { StockGraph } from './StockGraph';


const useStyles = createUseStyles({
  parentContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  bottomContainer: {
    margin: '10px',
    height:'500px',
    display: 'flex',
    flexDirection: 'row',
  },
  leftContainer: {
    width: '73%',
    height: '100%',
    marginRight: '5px',
  },
  leftTop: {
    height: '100px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '20px',
  },
  zomato: {
    border: '2px solid black',
    height: '50px',
    width: '305px',
    marginRight: '10px',
    marginLeft: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '30px',
  },
  price: {
    border: '1px solid black',
    // margin:'0.5rem',
    height: '50px',
    width: '363px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    margin:'0.5rem',
    padding : '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sellButton: {
    width: '105px',
    height: '50px',
    margin:'0.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& button': {
      width: '100%',
      height: '100%',
      fontSize: '25px',
      backgroundColor:'#ffc9c9'
    },
  },
  buyButton: {
    width: '105px',
    height: '50px',
    margin:'0.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& button': {
      width: '100%',
      height: '100%',
      fontSize: '25px',
      backgroundColor:'#b2f2bb'
    },
  },
  rightContainer: {
    width: '100%',
    height: '70%',
    display: 'flex',
    border: '2px solid black' 
  },
  
  rightHeading: {
    fontSize: '30px',
    marginLeft: '20px',
    marginTop: '10px',
  },
  rightContent: {
    marginTop: '10px',
    height: '70%',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  messageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25px',
    width: '80%',
    border: '2px solid black',
    borderRadius: '5px',
    margin: '10px',
  },

  leftbottom:{
    height:'500px',
    border:'2px solid black'
  },
  chosen:{
    padding:'1rem'
  },
  Header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2596be',
    padding: '0.5rem',
    color: 'whitesmoke',
  },
myPort:{
  color: 'white',
},
button: {
  padding: '1rem',
  border: '0px',
  background: 'white',
  '&:hover': {
    borderBottom: '2px solid #2596be',
  },
},

handleBuy: {
  marginTop: '10px',
  padding:'0.5rem',
  border : '1px solid black',
  borderRadius:'20px'
},
});



export function StockDetails() {
  const [generate, setGenerate] = useState<number>(0);
  const [selectedStock, setSelectedStock] = useState<string>(''); // New state to store selected stock
  const [currentStockData, setCurrentStockData] = useState<any>(null); // State to store current stock data
  const stocks = useSelector((state: RootState) => state.stocksLoad.stocks);
  const classes = useStyles();
  const { stockName } = useParams<{ stockName: string }>();
  const [buyMessages, setBuyMessages]= useState<string[]>([]);
  const quantityRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPrice = Math.floor(Math.random() * 500) + 1;
      setGenerate(newPrice);
    }, 2000); // Change price every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle stock selection change
  const handleStockChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStock(e.target.value);
    window.location.reload();
  };


  const handleBuy = () => {
    if (quantityRef.current && quantityRef.current.value !== '') {
      const currentTime = new Date().toLocaleTimeString(); // Get current time
      const currentDate = new Date().toLocaleDateString(); // Get current date
      const dateTime = `${currentDate} ${currentTime}`; // Combine date and time
  
      // Styling for the dateTime portion
      const dateTimeStyle = {
        fontSize: '20px', // Smaller font size
        marginLeft: '5px', // Add margin for separation
      };
  
      // JSX for the message with dateTime styled separately
      const newMessage = (
        <div>
          {quantityRef.current.value} stocks <span style={{color:'green', paddingLeft:'130px'}}>Buy</span> <br /><span style={dateTimeStyle}>{dateTime}</span>
        </div>
      );
  
      const newMessages = [...buyMessages, newMessage]; // Append message to buyMessages array
      setBuyMessages(newMessages); // Update buyMessages state
    }
  };


  const handleSell = () => {
    if (quantityRef.current && quantityRef.current.value !== '') {
      const currentTime = new Date().toLocaleTimeString(); // Get current time
      const currentDate = new Date().toLocaleDateString(); // Get current date
      const dateTime = `${currentDate} ${currentTime}`; // Combine date and time
  
      // Styling for the dateTime portion
      const dateTimeStyle = {
        fontSize: '20px', // Smaller font size
        marginLeft: '5px', // Add margin for separation
      };
  
      // JSX for the message with dateTime styled separately
      const newMessage = (
        <div>
          {quantityRef.current.value} stocks <span style={{color:'Red', paddingLeft:'130px'}}>Sell</span> <br /><span style={dateTimeStyle}>{dateTime}</span>
        </div>
      );
  
      const newMessages = [...buyMessages, newMessage]; // Append message to buyMessages array
      setBuyMessages(newMessages); // Update buyMessages state
    }
  };

  useEffect(() => {
    // Find the data for the selected stock
    const selectedStockData = stocks.find((stock) => stock.stock_name === selectedStock);
    setCurrentStockData(selectedStockData);
  }, [selectedStock, stocks]);

  // Set the default selected stock from the URL param
useEffect(() => {
  if (stockName) {
    setSelectedStock(stockName);
  }
}, [stockName]);


  return (

<div>


    <div className={classes.parentContainer}>
      <div className={classes.bottomContainer}>
        <div className={classes.leftContainer}>
          <div className={classes.leftTop}>
            <select className={classes.chosen}value={selectedStock} onChange={handleStockChange}>
              <option value="">Select a stock</option>
              {stocks.map((stock) => (
                <option key={stock.stock_name} value={stock.stock_name}>
                  {stock.stock_name}
                </option>
              ))}
            </select>
            {currentStockData && (
              <>
                <div className={classes.price}>
                  {/* <div className="price-text">Price</div> */}
                  <StockPrice oldPrice={currentStockData.base_price} newPrice={generate} />
                </div>
                <div>
                  <input className={classes.quantity} ref={quantityRef} type="text" placeholder="Enter QTY"  />
                </div>
                <div className={classes.buyButton}>
                  <button onClick={handleBuy}>BUY</button>
                </div>
                <div className={classes.sellButton}>
                  <button onClick={handleSell}>SELL</button>
                </div>
              </>
            )}
          </div>
          <div className={classes.leftbottom}>
            {currentStockData && <StockGraph oldPrice={500} newPrice={generate} />}
          </div>
        </div>

      <div className={classes.rightContainer}>
        <div className={classes.rightHeading}>History
          <div className={classes.rightContent}>
          {buyMessages.map((message, index) => (
            <div key={index} className={classes.handleBuy}>
              {message}
            </div>
          ))}

          </div>
       
      </div>
  
      
       </div>
       
       </div>
    </div>
  


    </div>
  );
}