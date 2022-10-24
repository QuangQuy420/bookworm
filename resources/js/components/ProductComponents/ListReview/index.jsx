import React from 'react';
import Pagination from '../../Pagination';
import SortShow from '../../SortShow';

import './style.scss'

function ListReview(props) {

    const stars = [5, 4, 3, 2, 1]
    const itemSort = ['Sort by date: newest to oldest', 'Sort by date: oldest to newest']
    const itemShow = [5, 10, 15, 20]
    const pagination = {}

    const slideTotal = stars.map(star => {
        return <span key={star} className="review__total-item">{star} star (...)</span>
    })


    const handleFilterShow = () => {

    }

    const handleFilterSort = () => {

    }

    return (
        <div className='review col-8'>
            <div className="review__title">
                <h5>Customer Review</h5>
                <span>(Filtered by ...)</span>
            </div>
            <h4>4.6 Star</h4>
            <div className="review__total">
                <div className="review__total-star">(...)</div>
                {slideTotal}
            </div>
            <div className="review__filter">
                <SortShow 
                        itemShow={itemShow}
                        itemSort={itemSort}
                        defaultShow={'Show 12'}
                        defaultSort={'Sort by date: newest to oldest'}
                        titleName={'reviews'}
                        onFilterShow={handleFilterShow}
                        onFilterSort={handleFilterSort}
                        pagination={pagination}
                />
            </div>
            <div className='review__detail'>
                <div className="review__detail-title">
                    <h3>Amazing Gud Chóp</h3>
                    <span>5 stars</span>
                </div>
                <span className='review__detail-content'>You can provide app throws errors by providing your own</span>
                <span className='review__detail-date'>April 12, 2022</span>
            </div>
            
            <div className='review__detail'>
                <div className="review__detail-title">
                    <h3>Amazing Gud Chóp</h3>
                    <span>5 stars</span>
                </div>
                <span className='review__detail-content'>You can provide app throws errors by providing your own</span>
                <span className='review__detail-date'>April 12, 2022</span>
            </div>
            <div className='review__paginate'>
                <Pagination />
            </div>
        </div>
    );
}

export default ListReview;