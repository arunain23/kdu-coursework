import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getRooms = createAsyncThunk("getRooms", async () => {
  try {
    const response = await fetch("https://kdu-automation.s3.ap-south-1.amazonaws.com/mini-project-apis/assessment-3.json");
    // console.log("response is" + response);
    const data = await response.json();
    console.log("data is "+ data[data.roomTypes]);
    return data.roomTypes;
  }

  catch (e) {
    console.log("Error");
    throw e;
  }
});