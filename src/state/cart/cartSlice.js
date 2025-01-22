import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartId: null,
  userId: null,
  itemCount: 0,
  itemTotalVal: 0,
  items: [],
  loading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartReducer: (state, action) => {
      // Todo: Add option to check if item already exist, if it does just increase the item's counter, else push as new item

      state.cart.items.push({
        productId: action.payload.id,
        count: action.payload.count,
      });
    },
    removeFromCartReducer: (state, action) => {
      state.cart.items.filter((item) => item.id != action.payload);
    },
  },
});

export default cartSlice;
