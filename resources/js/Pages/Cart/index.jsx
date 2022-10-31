import React from "react";
import "./style.scss";

function Cart(props) {
    const carts = JSON.parse(localStorage.getItem("cart")) || [];

    let totalPrice = 0;
    const bookSlides = carts.map((book) => {
        totalPrice += (book.final_price * book.quantity)
        return (
            <div key={book.book_id} className="row cart__details">
                <div className="cart__details-container col-6">
                    <img
                        src={`images/${book.book_cover_photo}.jpg`}
                        className="cart__details-img"
                    ></img>
                    <div>
                        <div className="cart__details-title">
                            {book.book_title}
                        </div>
                        <div className="cart__details-author">
                            {book.author_name}
                        </div>
                    </div>
                </div>
                <div className="cart__details-price col-2">
                    <p className="cart__price">{'$' + book.final_price}</p>
                    <span className="cart__last-price">{book.discount_price ? '$' + book.book_price : ''}</span>
                </div>
                <div className="cart__quantity col-2">
                    <button
                        className="cart__quantity-decrease"
                        disabled={false}
                        // onClick={() => setQuantity(quantity - 1)}
                    >
                        -
                    </button>
                    <span>{book.quantity}</span>
                    <button
                        className="cart__quantity-increase"
                        disabled={true}
                        // onClick={() => setQuantity(quantity + 1)}
                    >
                        +
                    </button>
                </div>
                <div className="cart__price-total col-2">
                    {'$' + book.final_price * book.quantity}
                </div>
            </div>
        );
    });

    return (
        <div className="cart">
            <h4 className="cart__title">Your cart: 3 items</h4>
            <div className="container cart__container">
                <div className="row">
                    <div className="col-8 cart__book">
                        <div className="row cart__list">
                            <div className="col-6">Product</div>
                            <div className="col-2">Price</div>
                            <div className="col-2">Quantity</div>
                            <div className="col-2">Total</div>
                        </div>
                        {bookSlides}
                    </div>
                    <div className="cart__payment col-4">
                        <div className="cart__payment-container">
                            <div className="cart__payment-title">
                                Cart Totals
                            </div>
                            <div className="cart__payment-content">
                                <h5>{'$' + totalPrice.toFixed(2)}</h5>
                                <button>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
