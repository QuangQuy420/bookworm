import React, { useEffect } from 'react';
import ContentShop from '../../components/ShopComponents/ContentShop';
import TitleShop from '../../components/ShopComponents/TitleShop';

import * as bookServices from '../../apiServices/bookServices';
import { useDispatch } from 'react-redux';
import { getAuthorName, getCategoryName, getDisplayBook } from "../../Actions/bookActions";
import './style.scss'

function Shop(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        const getDisplayBooks = async () => {
            const endpoint = '/get-sale-books'
            const response = await bookServices.getListBooks(endpoint);
            dispatch(getDisplayBook(response.data));
        }
        getDisplayBooks()
    }, []);

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