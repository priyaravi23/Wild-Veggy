import React  from "react";
import EmptyCartImg from '../images/empty-cart.png';

const EmptyCart = props => {
    return (
        <div className="empty-cart">
            <img
                src={EmptyCartImg}
                alt="empty-cart"
            />
            <h2>You cart is empty!</h2>
        </div>
    );
};

export default EmptyCart;