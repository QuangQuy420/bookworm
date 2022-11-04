import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartQuantity } from "../../../Actions/bookActions";
import "./style.scss";

function Order(props) {
    const detailBook = useSelector((state) => state.book.detailBook.book);
    const { id, discount_price, final_price, book_price, book_cover_photo, book_title, author_name } = detailBook;
    const dispatch = useDispatch()
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
                setQuantityAvailable(tempCart[i].quantity)
                setQuantity(0)
                break;
            } else if (tempCart[i].book_id == bookId) {
                setQuantityAvailable(tempCart[i].quantity)
                setQuantity(1)
                break;
            } else {
                setQuantityAvailable(0)
                setQuantity(1)
            }
        }
    }, [tempCart])

    const handleAddCart = () => {
        const obj = {
            book_id: id,
            quantity: quantity,
            book_cover_photo: book_cover_photo,
            book_price: book_price,
            discount_price: discount_price,
            final_price: final_price,
            book_title: book_title,
            author_name: author_name
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
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(tempCart));
        dispatch(setCartQuantity(tempCart.length))
    }, [tempCart])

    return (
        <div className="order col-4">
            <div className="order__add">
                <div className="order__price">
                    <span>{discount_price == final_price ? "$ " + book_price : ""}</span>
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
