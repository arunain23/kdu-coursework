import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getStocks } from "../thunks/getStocks";

export interface Stock {
  stock_name: string;
  stock_symbol: string;
  base_price: number;
}

interface StocksState {
  stocks: Stock[];
  filteredStocks: Stock[];
  status: "pending" | "fulfilled" | "rejected";
  error: string | null;
}

const initialState: StocksState = {
  stocks: [],
  filteredStocks: [],
  status: "pending",
  error: null,
};

const stockSlice = createSlice({
  name: "stockSlice",
  initialState,
  reducers: {
    setStocks: (state, action: PayloadAction<Stock[]>) => {
      state.stocks = action.payload;
    },

    setFilteredStocks: (state, action: PayloadAction<Stock[]>) => {
      state.filteredStocks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStocks.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getStocks.fulfilled, (state, action: PayloadAction<Stock[]>) => {
        state.status = "fulfilled";
        state.stocks = action.payload;
        state.filteredStocks = [];
      })
      .addCase(getStocks.rejected, (state) => {
        state.status = "rejected";
        state.error = "Failed to fetch products";
      });
  },
});

export const { setStocks, setFilteredStocks } = stockSlice.actions;

export default stockSlice.reducer;
