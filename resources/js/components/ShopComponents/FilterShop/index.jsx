import React from "react";
import { useSelector } from "react-redux";
import Author from "../Author";
import Category from "../Category";
import Rating from "../Rating";

import "./style.scss";

function FilterShop(props) {
    const nameAuthor = useSelector((state) => state.book.listAuthorName);
    const nameCategory = useSelector((state) => state.book.listCategoryName);
    const starRating = [1, 2, 3, 4, 5]

    return (
        <>
            <span className="filter-by">Filter By</span>
            <div className="filter__author">
                <Category listName={nameCategory}/>
            </div>
            <div className="filter__category">
                <Author listName={nameAuthor}/>
            </div>
            <div className="filter__rating">
                <Rating listStar={starRating}/>
            </div>
        </>
    );
}

export default FilterShop;
