import React from "react";
import "./style.scss"

function Payment(props) {
    const { carts } = props
    const totalPrice = carts.reduce((total, cart) => {
        return total += (cart.final_price * cart.quantity)
    }, 0)

    return (
        <div className="cart__payment col-4">
            <div className="cart__payment-container">
                <div className="cart__payment-title">Cart Totals</div>
                <div className="cart__payment-content">
                    <h5>{"$" + totalPrice.toFixed(2)}</h5>
                    <button>Place Order</button>
                </div>
            </div>
        </div>
    );
}

export default Payment;
