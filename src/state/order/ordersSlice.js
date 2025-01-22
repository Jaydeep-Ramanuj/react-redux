import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderId: null,
  userId: null,
  itemCount: null,
  orderValue: null,
  appliedTax: null,
  items: [],
  loading: false,
  itemTotalVal: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrderReducer: (state, action) => {
      // Todo: Add option to check if item already exist, if it does just increase the item's counter, else push as new item

      state.order.items.push({
        productId: action.payload.id,
        count: action.payload.count,
        price: action.payload.price,
      });
    },
    removeFromOrderReducer: (state, action) => {
      state.order.items.filter((item) => item.id != action.payload);
    },
  },
});

export default orderSlice;
