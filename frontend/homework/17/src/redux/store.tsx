import { configureStore } from "@reduxjs/toolkit";
import productsLoadSlice from "./productsLoadSlice";
import snackbarSlice from "./snackbarSlice";

export const store = configureStore({
  reducer: {
    productsLoad: productsLoadSlice,
    snackbar: snackbarSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;