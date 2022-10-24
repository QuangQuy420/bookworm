import React from 'react';
import './style.scss'

function DetailBook(props) {
    return (
        <div className='detail col-8'>
            <div className="row detail__container">
                <div className="col-4">
                    <img className='detail__img' src="https://bom.so/NfbCDQ" alt="" />
                    <span className="detail__author">By Rose</span>
                </div>
                <div className="col-8 detail__content">
                    <h5 className="detail__title">Book Title</h5>
                    <p className="detail__description">Rose Rose Rose Rose Rose Rose Rose Rose Rose</p>
                </div>
            </div>
        </div>
    );
}

export default DetailBook;