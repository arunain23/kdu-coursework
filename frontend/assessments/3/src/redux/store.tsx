import { configureStore } from "@reduxjs/toolkit";
import roomsLoadSlice from "./roomsLoadSlice";
// import snackbarSlice from "./snackbarSlice";

export const store = configureStore({
  reducer: {
    roomsLoad: roomsLoadSlice
    // snackbar: snackbarSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;