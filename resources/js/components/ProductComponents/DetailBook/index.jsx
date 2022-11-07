import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss'

function DetailBook(props) {
    const detailBook = useSelector(state => state.book.detailBook.book)
    const { book_cover_photo, author_name, book_title, book_summary } = detailBook

    const urlBook = book_cover_photo ? `images/${book_cover_photo}.jpg` : 'images/default-image.jpg'

    return (
        <div className='detail col-8'>
            <div className="row detail__container">
                <div className="img col-4">
                    <img className='detail__img' src={urlBook} alt="" />
                    <span className="detail__author">By {author_name}</span>
                </div>
                <div className="col-8 detail__content">
                    <h5 className="detail__title">{book_title}</h5>
                    <p className="detail__description">{book_summary}</p>
                </div>
            </div>
        </div>
    );
}

export default DetailBook;