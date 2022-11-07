import React from 'react';
import Pagination from '../../Pagination';
import SortShow from '../../SortShow';
import DisplayBook from '../DisplayBook';
import FilterShop from '../FilterShop';
import { handlePaginate, setFilterShow, setFilterSort } from "../../../Actions/bookActions";
import { useDispatch, useSelector } from 'react-redux';
import './style.scss'

function ContentShop(props) {
    const dispatch = useDispatch()
    const pagination = useSelector(state => state.book.pagination)
    const itemShow = [5, 15, 20, 25]
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
            data.link = "/books/on-sale"
        } 
        else if (index == 1) {
            data.sort = "",
            data.link = "/books/popular"
        }
        else if (index == 2) {
            data.sort = "ASC"
            data.link = "/books"
        }
        else if (index == 3) {
            data.sort = "DESC"
            data.link = "/books"
        }  
        dispatch(setFilterSort(data))
        dispatch(handlePaginate(1))
    }

    const handleSetPaginate = (page) => {
        dispatch(handlePaginate(page))
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
                        defaultShow={'Show 15'}
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
                    <Pagination 
                        pagination={pagination} 
                        onPaginate = {handleSetPaginate}
                    />
                </div>
            </div>
        </div>
    );
}

export default ContentShop;