import { configureStore } from "@reduxjs/toolkit";
import productReducer, { productsFetch } from "../slices";
// import { productsApi } from "../services";
const store = configureStore({
  reducer: {
    products: productReducer,
    // [productsApi.reducerPath]: productsApi.reducer,
  },
  //   middleware: (getDefaultMiddleware) => {
  //     return getDefaultMiddleware().concat(productsApi.middleware);
  //   },
});

store.dispatch(productsFetch());
export default store;
