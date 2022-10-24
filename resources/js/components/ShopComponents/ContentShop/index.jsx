import React from 'react';
import Pagination from '../../Pagination';
import SortShow from '../../SortShow';
import DisplayBook from '../DisplayBook';
import FilterShop from '../FilterShop';
import { handlePaginate, setFilterShow, setFilterSort } from "../../../Actions/bookActions";

import './style.scss'
import { useDispatch, useSelector } from 'react-redux';

function ContentShop(props) {
    const dispatch = useDispatch()
    const pagination = useSelector(state => state.book.pagination)
    const itemShow = [5, 10, 15, 20]
    const itemSort = ['Sort by On Sale', 'Sort by Popular', 'Sort by price: low to high', 'Sort by price: high to low']

    const handleFilterShow = (value, index) => {
        dispatch(setFilterShow(value))
        dispatch(handlePaginate(1))
    }

    const handleFilterSort = (value, index) => {
        const data = {
            sort: "",
            link: ""
        }
        if (index == 0) {
            data.sort = "",
            data.link = "/get-sale-books"
        } 
        else if (index == 1) {
            data.sort = "",
            data.link = "/get-popular-books"
        }
        else if (index == 2) {
            data.sort = "ASC"
            data.link = "/get-all-books"
        }
        else if (index == 3) {
            data.sort = "DESC"
            data.link = "/get-all-books"
        }  
        dispatch(setFilterSort(data))
        dispatch(handlePaginate(1))
    }

    return (
        <div className='shop__content row'>
            <div className="col-2">
                <FilterShop />
            </div>
            <div className="col-10">
                <div className='display-title'>
                    <SortShow 
                        itemShow={itemShow}
                        itemSort={itemSort}
                        defaultShow={'Show 12'}
                        defaultSort={'Sort By On Sale'}
                        titleName={'books'}
                        onFilterShow={handleFilterShow}
                        onFilterSort={handleFilterSort}
                        pagination={pagination}
                    />
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