import React from 'react';
import './style.scss'

function ItemFilter(props) {

    const list = [0,'1',2,3]

    const slides = list.map((value, index) => {
        return(
            <li>value {value}</li>
        )
    })
    return (
        <ul>
            {slides}
        </ul>
    );
}

export default ItemFilter;