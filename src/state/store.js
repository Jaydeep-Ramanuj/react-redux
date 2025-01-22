import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import todoReducer from "./todo/todoSlice";
import productReducer from "./product/productSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    product: productReducer,
  },
});
export default store;
