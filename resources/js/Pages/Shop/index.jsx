import React, { useEffect } from "react";
import ContentShop from "../../components/ShopComponents/ContentShop";
import TitleShop from "../../components/ShopComponents/TitleShop";
import * as bookServices from "../../apiServices/bookServices";
import { useDispatch, useSelector } from "react-redux";
import {
    getAuthorName,
    getCategoryName,
    getDisplayBook,
    getPagination,
    setDisplayDefault,
} from "../../Actions/bookActions";
import "./style.scss";

function Shop(props) {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.book.filter);

    useEffect(() => {
        dispatch(setDisplayDefault({
            limit: 15,
            page: 1,
            author: "",
            category: "",
            star: "",
            link: '/books/on-sale'
        }))
    }, []);

    useEffect(() => {
        const getDisplayBooks = async () => {
            const endpoint = filters.link;
            const filter = {
                params: {
                    limit: filters.limit,
                    sort: filters.sort,
                    author: filters.author,
                    category: filters.category,
                    star: filters.star,
                    page: filters.page,
                },
            };
            const response = await bookServices.getListBooks(endpoint, filter);
            dispatch(getPagination(response.ListBook.meta));
            dispatch(getDisplayBook(response.ListBook.data));
        };
        getDisplayBooks();
    }, [filters]);

    useEffect(() => {
        const getNameCategory = async () => {
            const result = await bookServices.getAllName("/names/category");
            dispatch(getCategoryName(result.category));
        };
        getNameCategory();
    }, []);

    useEffect(() => {
        const getNameAuthor = async () => {
            const result = await bookServices.getAllName("/names/author");
            dispatch(getAuthorName(result.author));
        };
        getNameAuthor();
    }, []);

    return (
        <div className="shop">
            <TitleShop />
            <ContentShop />
        </div>
    );
}

export default Shop;
