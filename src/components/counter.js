import React, {useState} from 'react';
import '../App.css';

const Counter = ({setTotal, price, addTotal, setAddTotal, id}) => {
    const [count, setCount] = useState(1);

    const increase = () => {
        const total = ((count + 1) * price).toFixed(2);
        setCount(count + 1);
        let items = [...addTotal];
        items[id].total = total;
        console.log('add Total', addTotal);
        setAddTotal(items);
    };

    const decrease = () => {
        const total = ((count - 1) * price).toFixed(2);

        if (count > 0) {
            setCount(count - 1);
            let items = [...addTotal];
            items[id].total = total;
            setAddTotal(items);
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
