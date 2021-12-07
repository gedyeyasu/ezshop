import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  items: [],
  status: null,
  error: null,
};
export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async (id = null) => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      return response?.data;
    } catch (error) {
      return isRejectedWithValue("error while fetching products");
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejecetd";
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
