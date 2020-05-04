import React, {useState} from 'react';
import '../App.css';

const Counter = ({setTotal, price}) => {
    const [count, setCount] = useState(1);

    const increase = () => {
        const total = (count + 1) * price;
        setCount(count + 1);
        setTotal(total.toFixed(2));
    };

    const decrease = () => {
        const total = (count - 1) * price;

        if (count > 0) {
            setCount(count - 1);
            setTotal(total.toFixed(2));
        }
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
