import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlistId: null,
  userId: null,
  itemCount: null,
  items: [],
  loading: false,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    reducers: {
      addToWishlistReducer: (state, action) => {
        // Todo: Add option to check if item already exist, don't do anything, else push as new item
        state.wishlist.items.push({
          productId: action.payload.id,
          count: action.payload.count,
        });
      },
      removeFromWishlistReducer: (state, action) => {
        state.wishlist.items.filter((item) => item.id != action.payload);
      },
    },
  },
});

export default wishlistSlice;
