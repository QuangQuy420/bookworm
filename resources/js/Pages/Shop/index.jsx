import React, { useEffect } from 'react';
import ContentShop from '../../components/ShopComponents/ContentShop';
import TitleShop from '../../components/ShopComponents/TitleShop';

import * as bookServices from '../../apiServices/bookServices';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthorName, getCategoryName, getDisplayBook } from "../../Actions/bookActions";
import './style.scss'

function Shop(props) {
    const dispatch = useDispatch()
    const filters = useSelector((state) => state.book.filter)

    useEffect(() => {
        const getDisplayBooks = async () => {
            const endpoint = filters.link
            const filter = {
                params: {
                    limit: filters.limit,
                    sort: filters.sort,
                    author: filters.author,
                    category: filters.category,
                    star: filters.star
                }
            }
            const response = await bookServices.getListBooks(endpoint, filter);
            dispatch(getDisplayBook(response.data));
        }
        getDisplayBooks()
    }, [filters]);

    useEffect(() => {
        const getNameCategory = async () => {
            const result = await bookServices.getAllName('/get-category-name');
            dispatch(getCategoryName(result))
        }
        getNameCategory()
    }, []);

    useEffect(() => {
        const getNameAuthor = async () => {
            const result = await bookServices.getAllName('/get-author-name');
            dispatch(getAuthorName(result))
        }
        getNameAuthor()
    }, []);

    return (
        <div className='shop'>
            <TitleShop />
            <ContentShop />
        </div>
    );
}

export default Shop;