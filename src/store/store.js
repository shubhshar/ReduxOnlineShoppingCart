import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";

//We can say that it acts as combineReducer
const store = configureStore({
  reducer: {
    cart: cartSliceReducer
  }
});

export default store;
