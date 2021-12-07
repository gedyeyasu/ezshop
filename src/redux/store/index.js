import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices";
const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
export default store;