import React from 'react';

import './style.scss'

function DisplayBook(props) {

    const list = [0,1,2,3,4,5,6]

    const slides = list.map((value, index) => {
        return (
            <div className='col-3'>
                Card {index}
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