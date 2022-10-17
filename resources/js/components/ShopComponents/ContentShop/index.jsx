import React from 'react';
import Pagination from '../../Pagination';
import DisplayBook from '../DisplayBook';
import FilterShop from '../FilterShop';
import SortShop from '../SortShop'

import './style.scss'

function ContentShop(props) {
    return (
        <div className='shop__content row'>
            <div className="col-2">
                <FilterShop />
            </div>
            <div className="col-10">
                <div className='display-title'>
                    <SortShop />
                </div>
                <div className='row'>
                    <DisplayBook />
                </div>
                <div>
                    <Pagination />
                </div>
            </div>
        </div>
    );
}

export default ContentShop;