import { createAsyncThunk} from "@reduxjs/toolkit";

export const getStocks = createAsyncThunk("getStocks", async () => {
  try {
    // Adding a delay of 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));
    // const response = await fetch("https://dev-1gyvfva3nqtb0v4.api.raw-labs.com/mock/stocks");
    const response = await fetch("https://dev-kc0f5uj4vuuvzhi.api.raw-labs.com/mock/arunain");

    
    const data = await response.json();
    return data;
  }
  catch (e) {
    console.log("Error");
    throw e;
  }
});




