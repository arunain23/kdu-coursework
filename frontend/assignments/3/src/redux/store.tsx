import { configureStore } from "@reduxjs/toolkit";
import stockSlice from "./stockSlice";
import transactionSlice from "./transactionSlice";

export const store = configureStore({
  reducer: {
    stocksLoad: stockSlice,
    tranactionsLoad: transactionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
