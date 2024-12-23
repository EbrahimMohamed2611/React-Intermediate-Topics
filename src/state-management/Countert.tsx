import React, {useReducer} from 'react';
import counterReducer, {Type} from "./CounterReducer";

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, 0);
    return (
        <div>
            Counter: ({state})
            <button onClick={() => dispatch({type: Type.INCREMENT})} className="btn btn-primary mx-2">Increment</button>
            <button onClick={() => dispatch({type: Type.RESET})} className="btn btn-warning">Reset</button>
        </div>
    );
};

export default Counter;
