import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Item{
  id: number;
  text: string;
  isCompleted: number;
}


interface ItemsListState {
  list: Item[];
  searchList: Item[];
  searchInput: string;
}

const initialState: ItemsListState = {
  list: [],
  searchList: [],
  searchInput: ""
}

const itemsListSlice = createSlice({
  name: "itemList",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<Item[]>) => {
      state.list = action.payload;
    },
    setSearchList: (state, action: PayloadAction<Item[]>) => {
      state.searchList = action.payload;
    },
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
  }
});


export const { setList, setSearchList, setSearchInput } = itemsListSlice.actions;
export const itemsListReducer = itemsListSlice.reducer;

// Create the Redux store
export const store = configureStore({
  reducer: {
    itemList: itemsListReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

