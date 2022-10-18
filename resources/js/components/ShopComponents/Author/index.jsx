import React from 'react';
import './style.scss'

function Author(props) {
    const { listName } = props

    const slides = listName.map((value, index) => {
        return(
            <li className='item-filter' key={index}>{value.author_name}</li>
        )
    })

    return (
        <>
        <h5>Author</h5>
            <ul className='list-filter'>
                {slides}
            </ul>
        </>
    );
}

export default Author;