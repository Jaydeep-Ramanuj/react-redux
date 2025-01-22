import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter/counterSlice';
import todoSlice from './todo/todoSlice';
import productSlice from './product/productSlice';
import wishlistSlice from './wishlist/wishlistSlice';
import orderSlice from './order/ordersSlice';
import cartSlice from './cart/cartSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoSlice,
    product: productSlice,
    order: orderSlice,
    cart: cartSlice,
    wishlistSlice: wishlistSlice,
  },
});
export default store;
