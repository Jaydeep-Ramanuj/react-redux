import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import todoReducer from './counter/todoSlice';
const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});
export default store;
