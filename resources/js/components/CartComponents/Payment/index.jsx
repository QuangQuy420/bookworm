import React, { useState } from "react";
import LogIn from "../../LogIn";
import * as cartServices from "../../../apiServices/cartServices";
import { setCartQuantity } from "../../../Actions/bookActions";
import { useDispatch } from "react-redux";

import "./style.scss";

function Payment(props) {
    const { carts, onOrder } = props;
    const dispatch = useDispatch()
    const [showLogin, setShowLogin] = useState(false);
    const [render, setRender] = useState(false);

    const token = JSON.parse(localStorage.getItem("token"))
    let totalPrice = 0;
    const dataSubmit = {
        "listOrder": []
    }

    carts.forEach(book => {
        totalPrice += (book.quantity * book.final_price)
        const data = {
            "book_id": book.book_id,
            "quantity": book.quantity,
            "price": book.final_price
        }
        dataSubmit.listOrder.push(data)
    });

    const handleOrder = async () => {
        if(!token) {
            setShowLogin(true)
        }
        if(token) {
            const headers = { headers: { Authorization: `Bearer ${token}` } };
            await cartServices.postPlaceOrder("/order", dataSubmit, headers);
            localStorage.removeItem("cart");
            onOrder();
            dispatch(setCartQuantity(0));
            console.log('order success');
        }
    };

    return (
        <div className="cart__payment col-4">
            <div className="cart__payment-container">
                <div className="cart__payment-title">Cart Totals</div>
                <div className="cart__payment-content">
                    <h5>{"$" + totalPrice.toFixed(2)}</h5>
                    <button onClick={handleOrder}>Place Order</button>
                </div>
                {showLogin ? <LogIn showLogin={showLogin} signIn={''} /> : ''}
            </div>
        </div>
    );
}

export default Payment;
