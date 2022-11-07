import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

function TitleShop(props) {
    const initState = useSelector((state) => state.book);
    const { listAuthorName, listCategoryName, filter } = initState;
    const { author, category, star } = filter;
    
    return (
        <div className="shop__title">
            <h4>Books</h4>
            <span>
                {" "}
                (Filtered by{" "}
                {author && listAuthorName[author]
                    ? `Author: ${listAuthorName[author].author_name}`
                    : ""}{" "}
                {category && listCategoryName[category]
                    ? `Category: ${listCategoryName[category].category_name}`
                    : ""}{" "}
                {star ? `Over ${star} Star`
                    : ""}
                )
            </span>
        </div>
    );
}

export default TitleShop;
