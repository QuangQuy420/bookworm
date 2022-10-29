import React from 'react';
import './style.scss'

function Order(props) {

    

    return (
        <div className='order col-4'>
            <div className="order__add">
                <div className="order__price">
                    <span>$33</span>
                    <h5>$20</h5>
                </div>
                <div className="order__handle">
                    <span>Quantity</span>
                    <div className="order__quantity">
                        <button className='order__decrease'>-</button>
                        <span>5</span>
                        <button className='order__increase'>+</button>
                    </div>
                    <button className='order__buy'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Order;