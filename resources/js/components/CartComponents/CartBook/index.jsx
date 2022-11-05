import React, { useEffect, useState } from 'react';
import './style.scss'

function CartBook(props) {
    const { carts, onCountTotal } = props
    const [render, setRender] = useState(true)

    const handleQuantity = (quantity, id) => {
        if(onCountTotal) {
            onCountTotal(quantity, id)
        }
    }

    const bookSlides = carts.map((book) => {
        return (
            <div key={book.book_id} className="row cart__details">
                <div className="cart__details-container col-6">
                    <img
                        src={`images/${book.book_cover_photo ? book.book_cover_photo : 'default-image'}.jpg`}
                        className="cart__details-img"
                    ></img>
                    <div className='cart__details-info'>
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
                        onClick={() => handleQuantity((book.quantity - 1), book.book_id)}
                    >
                        -
                    </button>
                    <span>{book.quantity}</span>
                    <button
                        className="cart__quantity-increase"
                        disabled={book.quantity >= 8}
                        onClick={() => handleQuantity((book.quantity + 1), book.book_id)}
                    >
                        +
                    </button>
                </div>
                <div className="cart__price-total col-2">
                    {'$' + (book.final_price * book.quantity).toFixed(2)}
                </div>
            </div>
        );
    });

    return (
        <>
            {bookSlides}
        </>
    );
}

export default CartBook;