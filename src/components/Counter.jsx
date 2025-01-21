import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  decrementByNumber,
  increment,
  incrementByNumber,
} from '../state/counter/counterSlice';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button
        className="btn"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        className="btn"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        className="btn"
        onClick={() => {
          dispatch(incrementByNumber(10));
        }}
      >
        Increment By 10
      </button>
      <button
        className="btn"
        onClick={() => {
          dispatch(decrementByNumber(10));
        }}
      >
        Decrement By 10
      </button>
    </>
  );
}

export default Counter;
