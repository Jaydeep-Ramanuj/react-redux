import { createSlice } from '@reduxjs/toolkit';
import wishlistSlice from '../wishlist/wishlistSlice';

const initialState = {
  userId: null,
  name: '',
  email: '',
  orderId: null,
  wishlistId: null,
  cartId: null,
  loading: false,
};

const userSlice = createSlice({ name: 'user', initialState, reducers: {} });

export default userSlice;
