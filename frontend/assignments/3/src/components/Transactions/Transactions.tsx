// import React, { useEffect, useState } from "react";
// import { AppDispatch, RootState } from "../../redux/store";
// import { useDispatch, useSelector } from "react-redux";
// import { getTransactions } from "../../thunks/getTransactions";
// import { CircularProgress, TextField, Checkbox } from "@mui/material";
// import { createUseStyles } from "react-jss";
// import { Transaction } from "../../redux/transactionSlice";
// import { Link } from "react-router-dom";

// const useStyles = createUseStyles({
//   showtransactions: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     borderBottom :'1px solid black',
//     padding : '0.5rem 0 0.5rem 0',
//   },
//   mainFrame: {
//     display: 'flex',
//     flexDirection: 'row',
//     margin:'2rem 5rem 2rem 5rem'
//   },
//   leftSide: {
//     width: '30%' // Adjust width as needed
//   },
//   rightSide: {
//     flex: 1
//   },
//   dateHeader: {
//     marginTop: '2rem', // Add spacing between date headers
//     color: 'grey',
//     borderBottom : '1px dotted grey'
//   },
//   stock_name:{
//     width:'50%'
//   },

//   stock_symbol:{
//     width:'10%'
//   },
//   transaction_price:{
//     width:  '15%',
//   },
//   date:{
//     width:  '15%',
//   },
//   status : {
//     width:'2%'
//   },
//   searchInput: {
//     marginBottom: '1rem' // Add some space below the search bar
//   },
//   transactionmain :{
//     display:'flex',
//     flexDirection:"row",
//     justifyContent:"space-around"

//   },
//   leftfilter: {
//     border: '2px solid red',
//     width: '20%',
//     height: 'auto',
//     padding: '1rem'
//   },

//   rightTransaction:{
//     border:'2px solid red',
//     width:'50%'
//   },

//   checkboxContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginRight: '1rem'
//   },

//   stockNameCheckbox: {
//     marginBottom: '0.5rem'
//   },


//   Header: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#2596be',
//     padding: '0.5rem',
//     color: 'whitesmoke',
//   },
// myPort:{
//   color: 'white',
// },
// });

// interface GroupedTransactions {
//   [date: string]: Transaction[]; // Index signature
// }


// export function Transactions() {
//   const dispatch: AppDispatch = useDispatch();
//   const classes = useStyles();
//   const transactionStates = useSelector(
//     (state: RootState) => state.tranactionsLoad.state
//   );
//   const transactions = useSelector((state: RootState) => state.tranactionsLoad.transactions);
//   const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
//   const [filterState, setFilterState] = useState<string[]>([]); // State to store the selected transaction states
//   const [filterStocks, setFilterStocks] = useState<string[]>([]); // State to store the selected stock names

//   const isTransactionOfSelectedStock = (transaction: Transaction) => {
//     return filterStocks.length === 0 || filterStocks.includes(transaction.stock_name);
//   };


//   useEffect(() => {
//     dispatch(getTransactions());
//   }, [dispatch]);



//   // Get all unique stock names from transactions
//   const stockNames = Array.from(new Set(transactions.map(transaction => transaction.stock_name)));

//   // Sort transactions by timestamp in descending order
//   const sortedTransactions = [...transactions].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

//   // Group transactions by date
//   const groupedTransactions: GroupedTransactions = sortedTransactions.reduce((acc, transaction) => {
//     const date: string = new Date(transaction.timestamp).toLocaleDateString();
//     if (!(date in acc)) {
//       acc[date] = [];
//     }
//     acc[date].push(transaction);
//     return acc;
//   }, {} as GroupedTransactions); 

//   // Filter transactions based on the search term
//   const filteredTransactions: GroupedTransactions = Object.keys(groupedTransactions).reduce((acc, date) => {
//     const filtered = groupedTransactions[date].filter(transaction =>
//       transaction.stock_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       transaction.stock_symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||  filterState.length === 0 || filterState.includes(transaction.status)
//     );
//     if (filtered.length > 0) {
//       acc[date] = filtered;
//     }
//     return acc;
//   }, {} as GroupedTransactions);




//   // Filter transactions based on the selected transaction states
//   const filteredByStateTransactions: GroupedTransactions = Object.keys(filteredTransactions).reduce((acc, date) => {
//     const filtered = filteredTransactions[date].filter(transaction =>
//       filterState.length === 0 || filterState.includes(transaction.status)
//     );
//     if (filtered.length > 0) {
//       acc[date] = filtered;
//     }
//     return acc;
//   }, {} as GroupedTransactions);

//   // Filter transactions based on the selected stock names
//   const filteredByStocksTransactions: GroupedTransactions = Object.keys(filteredByStateTransactions).reduce((acc, date) => {
//     const filtered = filteredByStateTransactions[date].filter(transaction =>
//       filterStocks.length === 0 || filterStocks.includes(transaction.stock_name)
//     );
//     if (filtered.length > 0) {
//       acc[date] = filtered;
//     }
//     return acc;
//   }, {} as GroupedTransactions);

//   // Function to handle changes in the checkbox filter for transaction states
//   const handleStateFilterChange = (value: string) => {
    
//     if (filterState.includes(value)) {
//       setFilterState(filterState.filter(item => item !== value));
//     } else {
//       setFilterState([...filterState, value]);
//     }
//   };

//   // Function to handle changes in the checkbox filter for stock names
//   const handleStockFilterChange = (value: string) => {
    
//     if (filterStocks.includes(value)) {
//       setFilterStocks(filterStocks.filter(item => item !== value));
//     } else {
//       setFilterStocks([...filterStocks, value]);
//     }
//   };

//   // Function to check if a stock name is selected in the stock name filter
//   const isStockSelected = (stockName: string) => {
//     return filterStocks.includes(stockName);
//   };

//   return (
//     <div>


// <div>
//                 <div className={classes.Header}>
//                   <h1>KDU Stock Market</h1>


//                   <Link to="/transactions" style={{textDecoration:'none'}}>
//                     <h2 className={classes.myPort }>My Portfolio</h2>
//                   </Link>
//                 </div>
//               </div>

              
//       {transactionStates === "pending" ? (
//         <div className="loading-container">
//           <CircularProgress />
//         </div>
//       ) : (
//         <>


        
//           <div className={classes.transactionmain}>
//             <div className={classes.leftfilter}>
//               <TextField
//                 className={classes.searchInput}
//                 label="Search by Stock Name or Symbol"
//                 variant="outlined"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <div>
//                 <div>Filter by Transaction State:</div>
//                 <div>
//                   <input type="checkbox" checked={filterState.includes('Passed')} onChange={() => handleStateFilterChange('Passed')} />
//                   <label>Passed</label>
//                 </div>
//                 <div>
//                   <input type="checkbox" checked={filterState.includes('Failed')} onChange={() => handleStateFilterChange('Failed')} />
//                   <label>Failed</label>
//                 </div>
//               </div>
//               <div>
//                 <div>Filter by Stock Name:</div>
//                 {stockNames.map(stockName => (
//                   <div key={stockName}>
//                     <input type="checkbox" checked={isStockSelected(stockName)} onChange={() => handleStockFilterChange(stockName)} />
//                     <label style={{ fontWeight: isStockSelected(stockName) ? 'bold' : 'normal', opacity: isStockSelected(stockName) ? 1 : 0.7 }}>{stockName}</label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className={classes.rightTransaction}>
//               {Object.entries(filteredByStateTransactions).map(([date, transactions]) => (
//                 <div className={classes.mainFrame} key={date}>
//                   <div className={classes.rightSide}> 
//                     <div className={classes.dateHeader}>{date}</div>
//                     {transactions.map((transaction) => (
//                       <div className={classes.showtransactions} key={transaction.timestamp} style={{ fontWeight: isTransactionOfSelectedStock(transaction) ? 'bold' : 'normal' }}>
//                         <div className={classes.stock_name}>{transaction.stock_name}</div>
//                         <div className={classes.stock_symbol}>{transaction.stock_symbol}</div>
//                         <div className={classes.transaction_price}>${transaction.transaction_price}</div>
//                         <div className={classes.date}>{new Date(transaction.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
//                         <div className={classes.status} style={{ backgroundColor: transaction.status === 'Passed' ? 'green' : 'red', borderRadius:'100%' }}></div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//           </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }


















import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../thunks/getTransactions";
import { CircularProgress, TextField, Checkbox } from "@mui/material";
import { createUseStyles } from "react-jss";
import { Transaction } from "../../redux/transactionSlice";
import { Link } from "react-router-dom";
import { DatePicker } from "@mui/lab";

const useStyles = createUseStyles({
  showtransactions: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottom :'1px solid black',
    padding : '0.5rem 0 0.5rem 0',
  },
  mainFrame: {
    display: 'flex',
    flexDirection: 'row',
    margin:'2rem 5rem 2rem 5rem'
  },
  leftSide: {
    width: '30%' // Adjust width as needed
  },
  rightSide: {
    flex: 1
  },
  dateHeader: {
    marginTop: '2rem', // Add spacing between date headers
    color: 'grey',
    borderBottom : '1px dotted grey'
  },
  stock_name:{
    width:'50%'
  },

  stock_symbol:{
    width:'10%'
  },
  transaction_price:{
    width:  '15%',
  },
  date:{
    width:  '15%',
  },
  status : {
    width:'2%'
  },
  searchInput: {
    marginBottom: '1rem', // Add some space below the search bar
  },
  transactionmain :{
    display:'flex',
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:'1rem',
  },
  leftfilter: {
    border: '2px solid black',
    borderRadius:'20px',
    width: '20%',
    height: '600px',
    padding: '1rem'
  },

  rightTransaction:{
    width:'70%'
  },

  checkboxContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '1rem'
  },

  stockNameCheckbox: {
    marginBottom: '0.5rem'
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
});



interface GroupedTransactions {
  [date: string]: Transaction[]; // Index signature
}


export function Transactions() {
  const dispatch: AppDispatch = useDispatch();
  const classes = useStyles();
  const transactionStates = useSelector(
    (state: RootState) => state.tranactionsLoad.state
  );
  const transactions = useSelector((state: RootState) => state.tranactionsLoad.transactions);
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [filterState, setFilterState] = useState<string[]>([]); // State to store the selected transaction states
  const [filterStocks, setFilterStocks] = useState<string[]>([]); // State to store the selected stock names
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);


  // Define the types for date and params explicitly
interface RenderInputParams {
  inputRef: React.Ref<HTMLInputElement>;
  inputProps: Record<string, any>;
}

// Add the type for date
const handleStartDateChange = (date: Date | null) => {
  setStartDate(date);
};

const handleEndDateChange = (date: Date | null) => {
  setEndDate(date);
};

  const isTransactionOfSelectedStock = (transaction: Transaction) => {
    return filterStocks.length === 0 || filterStocks.includes(transaction.stock_name);
  };

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  const stockNames = Array.from(new Set(transactions.map(transaction => transaction.stock_name)));

  const sortedTransactions = [...transactions].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  const groupedTransactions: GroupedTransactions = sortedTransactions.reduce((acc, transaction) => {
    const date: string = new Date(transaction.timestamp).toLocaleDateString();
    if (!(date in acc)) {
      acc[date] = [];
    }
    acc[date].push(transaction);
    return acc;
  }, {} as GroupedTransactions); 

  const filteredTransactions: GroupedTransactions = Object.keys(groupedTransactions).reduce((acc, date) => {
    const filtered = groupedTransactions[date].filter(transaction =>
      transaction.stock_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.stock_symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||  filterState.length === 0 || filterState.includes(transaction.status)
    );
    if (filtered.length > 0) {
      acc[date] = filtered;
    }
    return acc;
  }, {} as GroupedTransactions);


  const filteredByStateTransactions: GroupedTransactions = Object.keys(filteredTransactions).reduce((acc, date) => {
    const filtered = filteredTransactions[date].filter(transaction =>
      filterState.length === 0 || filterState.includes(transaction.status)
    );
    if (filtered.length > 0) {
      acc[date] = filtered;
    }
    return acc;
  }, {} as GroupedTransactions);


  const filteredByStocksTransactions: GroupedTransactions = Object.keys(filteredByStateTransactions).reduce((acc, date) => {
    const filtered = filteredByStateTransactions[date].filter(transaction =>
      filterStocks.length === 0 || filterStocks.includes(transaction.stock_name)
    );
    if (filtered.length > 0) {
      acc[date] = filtered;
    }
    return acc;
  }, {} as GroupedTransactions);


  const isTransactionInDateRange = (transaction: Transaction) => {
    if (!startDate || !endDate) return true;
    const transactionDate = new Date(transaction.timestamp);
    return transactionDate >= startDate && transactionDate <= endDate;
  };

  const filteredByDateRangeTransactions: GroupedTransactions = Object.keys(filteredByStocksTransactions).reduce((acc, date) => {
    const filtered = filteredByStocksTransactions[date].filter(transaction =>
      isTransactionInDateRange(transaction)
    );
    if (filtered.length > 0) {
      acc[date] = filtered;
    }
    return acc;
  }, {} as GroupedTransactions);

  const handleStateFilterChange = (value: string) => {
    if (filterState.includes(value)) {
      setFilterState(filterState.filter(item => item !== value));
    } else {
      setFilterState([...filterState, value]);
    }
  };

  const handleStockFilterChange = (value: string) => {
    if (filterStocks.includes(value)) {
      setFilterStocks(filterStocks.filter(item => item !== value));
    } else {
      setFilterStocks([...filterStocks, value]);
    }
  };

  const isStockSelected = (stockName: string) => {
    return filterStocks.includes(stockName);
  };

  return (
    <div>
      {transactionStates === "pending" ? (
        <div className="loading-container">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className={classes.transactionmain}>
            <div className={classes.leftfilter}>
            <h2 style={{borderBottom:'2px solid black'}}>Filters</h2>
            <div style={{borderBottom:'1px solid black'}}>
              <TextField
                className={classes.searchInput}
                label="Search by Stock Name or Symbol"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                
              />
              </div>
              <div style={{borderBottom:'1px solid black'}}>
                <div>
                  <input type="checkbox" checked={filterState.includes('Passed')} onChange={() => handleStateFilterChange('Passed')} />
                  <label>Passed</label>
                </div>
                <div>
                  <input type="checkbox" checked={filterState.includes('Failed')} onChange={() => handleStateFilterChange('Failed')} />
                  <label>Failed</label>
                </div>
              </div>
              <div >
                {stockNames.map(stockName => (
                  <div key={stockName}>
                    <input type="checkbox" checked={isStockSelected(stockName)} onChange={() => handleStockFilterChange(stockName)} />
                    <label style={{ fontWeight: isStockSelected(stockName) ? 'bold' : 'normal', opacity: isStockSelected(stockName) ? 1 : 0.7 }}>{stockName}</label>
                  </div>
                ))}
              </div>
              <div>
                <div>
                <DatePicker
                  label="Start Date"
                  value={startDate}
                  onChange={handleStartDateChange}
                  renderInput={(params: RenderInputParams) => (
                    <TextField {...params.inputProps} variant="outlined" />
                  )}
                />
              </div>
              <div>
                <DatePicker
                  label="End Date"
                  value={endDate}
                  onChange={handleEndDateChange}
                  renderInput={(params: RenderInputParams) => (
                    <TextField {...params.inputProps} variant="outlined" />
                  )}
                />
              </div>
              </div>
            </div>
            <div className={classes.rightTransaction}>
              {Object.entries(filteredByDateRangeTransactions).map(([date, transactions]) => (
                <div className={classes.mainFrame} key={date}>
                  <div className={classes.rightSide}> 
                    <div className={classes.dateHeader}>{date}</div>
                    {transactions.map((transaction) => (
                      <div className={classes.showtransactions} key={transaction.timestamp} style={{ fontWeight: isTransactionOfSelectedStock(transaction) ? 'bold' : 'normal' }}>
                        <div className={classes.stock_name}>{transaction.stock_name}</div>
                        <div className={classes.stock_symbol}>{transaction.stock_symbol}</div>
                        <div className={classes.transaction_price}>${transaction.transaction_price}</div>
                        <div className={classes.date}>{new Date(transaction.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
                        <div className={classes.status} style={{ backgroundColor: transaction.status === 'Passed' ? 'green' : 'red', borderRadius:'100%' }}></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
