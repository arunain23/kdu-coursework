import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getRooms } from "../thunks/getRooms";
// export interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: Rating;
// }
  
// interface Rating {
//   rate: number;
//   count: number;
// }



// export interface RoomTypes {
//   roomTypes: RoomType[];
// }

export interface RoomType {
  id:           number;
  name:         string;
  costPerNight: string;
  currency:     Currency;
  addOns:       AddOn[];
}

export interface AddOn {
  name:     string;
  cost:     string;
  currency: Currency;
}

export enum Currency {
  Inr = "INR",
}


// interface ProductsLoadState {
//   allProductsList: Product[];
//   state: "pending" | "fulfilled" | "rejected";
//   error?: string;
//   productsList: Product[];
// }

// const initialState: ProductsLoadState = {
//   allProductsList: [],
//   state: "pending",
//   productsList: []
// }



interface RoomsLoadState {
  allRoomsList: RoomType[];
  state: "pending" | "fulfilled" | "rejected";
  error?: string;
  roomsList: RoomType[];
}

const initialState: RoomsLoadState = {
  allRoomsList: [],
  state: "pending",
  roomsList: []
}

// const productsLoadSlice = createSlice({
//   name: "productsLoadSlice",
//   initialState,
//   reducers: {
//     setProductList: (state, action:PayloadAction<Product[]>) => {
//       state.productsList = action.payload;
//     }
//   },
//   extraReducers(builder) {
//     builder.addCase(getProducts.pending, (state) => {
//       state.state = "pending";
//     })
//     builder.addCase(getProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {    
//       state.state = "fulfilled";
//       state.allProductsList = action.payload;
//       state.productsList = action.payload;
//     })
//     builder.addCase(getProducts.rejected, (state) => {
//       state.state = "rejected";
//       state.error = "Error while fetching data";
//     })
//   }
// });


const roomsLoadSlice = createSlice({
  name: "roomsLoadSlice",
  initialState,
  reducers: {
    setRoomList: (state, action:PayloadAction<RoomType[]>) => {
      state.roomsList= action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(getRooms.pending, (state) => {
      state.state = "pending";
    })
    builder.addCase(getRooms.fulfilled, (state, action: PayloadAction<RoomType[]>) => {    
      state.state = "fulfilled";
      state.allRoomsList = action.payload;
      console.log("all rooms list is "+state.allRoomsList);
      state.roomsList = action.payload;
    })
    builder.addCase(getRooms.rejected, (state) => {
      state.state = "rejected";
      state.error = "Error while fetching data";
    })
  }
});

export const { setRoomList } = roomsLoadSlice.actions;
export default roomsLoadSlice.reducer;