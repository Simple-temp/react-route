import React from 'react';
import './Cart.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i=0 ; i<cart.length ; i++)
    {
        const data = cart[i];
        total = total + data.price;
    }
    let tax = total / 12
    let Total = (total + tax).toFixed(2);
    return (
        <div className='cart-container'>
            <div className="box">
                <FontAwesomeIcon icon={faShoppingCart} className='icon'></FontAwesomeIcon> 
                <span>{cart.length}</span>
            </div>
            <div className="box2">
                <p>Course Price : ${total.toFixed(2)}</p>
                <p>Tax + Vat : ${tax.toFixed(2)}</p>
                <p>Total Price : ${Total}</p>
                <button className='cartbtn'>Place Order</button>
            </div>
        </div>
    );
};

export default Cart;