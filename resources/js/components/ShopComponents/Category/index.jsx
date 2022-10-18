import React from 'react';
import './style.scss'

function Category(props) {
    const { listName } = props

    const slides = listName.map((name, index) => {
        return(
            <li className='item-filter' key={index}>{name.category_name}</li>
        )
    })

    return (
        <>
            <h5>Category</h5>
            <ul className='list-filter'>
                {slides}
            </ul>
        </>
    );
}

export default Category;