import React, {useState} from 'react';
import '../App.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };

    const decrease = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <button onClick={decrease}>-</button>
            <span className="count">{count}</span>
            <button onClick={increase}>+</button>
        </div>
  );
};

export default Counter;
