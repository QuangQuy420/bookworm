import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./style.scss";

function Order(props) {
    const detailBook = useSelector((state) => state.book.detailBook.book);
    const { id, discount_price, final_price, book_price } = detailBook;
    const [quantity, setQuantity] = useState(1);
    const [quantityAvailable, setQuantityAvailable] = useState(0)
    const [tempCart, setTempCart] = useState(
        JSON.parse(localStorage.getItem("cart"))
            ? JSON.parse(localStorage.getItem("cart"))
            : []
    );
    const bookId = JSON.parse(localStorage.getItem("book_id"))

    useEffect(() => {
        for (let i = 0; i < tempCart.length; i++) {
            if(tempCart[i].book_id == bookId && tempCart[i].quantity >= 8) {
                console.log(1)
                setQuantityAvailable(tempCart[i].quantity)
                setQuantity(0)
                break;
            } else if (tempCart[i].book_id == bookId) {
                console.log(2)
                setQuantityAvailable(tempCart[i].quantity)
                setQuantity(1)
                break;
            } else {
                console.log(3)
                setQuantityAvailable(0)
                setQuantity(1)
            }
        }
    }, [tempCart])

    const handleAddCart = () => {
        const obj = {
            book_id: id,
            quantity: quantity,
        };

        if (tempCart.length == 0) {
            setTempCart([obj]);
        }
        const cartItem = tempCart.forEach((item) => {
            if (item.book_id == id) {
                item.quantity = item.quantity + quantity;
                setTempCart([...tempCart]);
            } else {
                setTempCart([...tempCart, obj]);
            }
        });
    };
    localStorage.setItem("cart", JSON.stringify(tempCart));

    return (
        <div className="order col-4">
            <div className="order__add">
                <div className="order__price">
                    <span>{discount_price ? "$ " + book_price : ""}</span>
                    <h5>{"$ " + final_price}</h5>
                </div>
                <div className="order__handle">
                    <span>Quantity</span>
                    <div className="order__quantity">
                        <button
                            className="order__decrease"
                            disabled={quantity <= 1 ? true : false}
                            onClick={() => setQuantity(quantity - 1)}
                        >
                            -
                        </button>
                        <span>{quantity}</span>
                        <button
                            className="order__increase"
                            disabled={(quantity >= (8 - quantityAvailable) || quantityAvailable >= 8) ? true : false}
                            onClick={() => setQuantity(quantity + 1)}
                        >
                            +
                        </button>
                    </div>
                    <button className="order__buy" onClick={handleAddCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Order;
