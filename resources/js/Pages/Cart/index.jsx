import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCartQuantity } from "../../Actions/bookActions";
import CartBook from "../../components/CartComponents/CartBook";
import Payment from "../../components/CartComponents/Payment";
import "./style.scss";

function Cart(props) {
    const carts = JSON.parse(localStorage.getItem("cart")) || [];
    const [render, setRender] = useState(false)
    const dispatch = useDispatch()

    const handleCountTotal = (quantity, id) => {
        for (let i = 0; i < carts.length; i++) {
            if(carts[i].book_id == id) {
                if(quantity == 0) {
                    carts.splice(i, 1);
                    localStorage.setItem("cart", JSON.stringify(carts));
                    dispatch(setCartQuantity(carts.length))
                    setRender(!render)
                    break;
                }

                carts[i].quantity = quantity
                localStorage.setItem("cart", JSON.stringify(carts));
                setRender(!render)
                break;
            }
        }
    }

    const handleOrder = () => {
        setRender(!render)
    }

    return (
        <div className="cart">
            <h4 className="cart__title">{'Your cart: '+ carts.length + ' items'}</h4>
            <div className="container cart__container">
                <div className="row">
                    <div className="col-8 cart__book">
                        <div className="row cart__list">
                            <div className="col-6">Product</div>
                            <div className="col-2">Price</div>
                            <div className="col-2">Quantity</div>
                            <div className="col-2">Total</div>
                        </div>
                        <CartBook 
                            carts={carts}
                            onCountTotal={handleCountTotal}
                        />
                    </div>
                    <Payment carts={carts} onOrder={handleOrder}/>
                </div>
            </div>
        </div>
    );
}

export default Cart;
