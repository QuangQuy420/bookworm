import React from 'react';
import { useSelector } from 'react-redux';
import CardBook from '../../CardBook';
import './style.scss'

function DisplayBook(props) {
    const displayBooks = useSelector((state) => state.book.displayBook)

    const slides = displayBooks.map((data, index) => {
        return (
            <div className='col-3' key={index}>
                <CardBook detailBook = {data} />
            </div>
        )
    })

    return (
        <>
            {slides}
        </>
    );
}

export default DisplayBook;