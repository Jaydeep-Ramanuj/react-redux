import {
  productAdded,
  productFetched,
  productRemoved,
  productUpdated,
} from "./productSlice";

import { getAllProducts } from "../../services/productServices";

// export const addProduct = (dispatch) => {
//   try {
//     dispatch(productAdded());
//     // dummyFunctionToAddProductFromFirebase();
//     // dummyFunctionNotifyingSuccess();
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const removeProduct = (dispatch) => {
//   try {
//     dispatch(productRemoved());
//     // dummyFunctionToRemoveProductFromFirebase();
//     // dummyFunctionNotifyingSuccess();
//   } catch (error) {
//     console.log(error);
//   }
// };

export const fetchProduct = () => async (dispatch) => {
  try {
    // dummyFunctionToRemoveProductFromFirebase();
    const products = await getAllProducts();
    dispatch(productFetched(products));
    // dummyFunctionNotifyingSuccess();
  } catch (error) {
    console.log(error);
  }
};

// export const updateProduct = (dispatch) => {
//   try {
//     // dummyFunctionToRemoveProductFromFirebase();
//     dispatch(productUpdated());
//     // dummyFunctionNotifyingSuccess();
//   } catch (error) {
//     console.log(error);
//   }
// };
