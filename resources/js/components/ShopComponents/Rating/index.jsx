import React from 'react';
import './style.scss'

function Rating(props) {
    const { listStar } = props;

    const slides = listStar.map((star, index) => {
        return(
            <li className='item-filter' key={index}>{star} Star</li>
        )
    })

    return (
        <>
            <h5>Rating Review</h5>
            <ul className='list-filter'>
                {slides}
            </ul>
        </>
    );
}

export default Rating;