import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";
import productReducer from "./productSlice";

//We can say that it acts as combineReducer
const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartSliceReducer
  }
});

export default store;
