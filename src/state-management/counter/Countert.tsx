import React, { useReducer } from "react";
import counterReducer, { Type } from "./CounterReducer";
import useCounterStore from "./store";

const Counter = () => {
  // const [state, dispatch] = useReducer(counterReducer, 0);
  const { counter, increment, reset } = useCounterStore();
  return (
    <div className="my-3">
      Counter: ({counter})
      <button onClick={() => increment()} className="btn btn-primary mx-2">
        Increment
      </button>
      <button onClick={() => reset()} className="btn btn-warning">
        Reset
      </button>
    </div>
  );
};

export default Counter;
