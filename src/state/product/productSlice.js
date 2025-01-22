import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productCount: null,
  categoryList: [],
  products: [],
  loading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productAdded: () => {},
    productFetched: (state, action) => {
      state.products = action.payload;
      state.productCount = action.payload?.length;
    },
    productUpdated: () => {},
    productRemoved: () => {},
  },
});

export const { productAdded, productFetched, productUpdated, productRemoved } =
  productSlice.actions;

export default productSlice.reducer;
