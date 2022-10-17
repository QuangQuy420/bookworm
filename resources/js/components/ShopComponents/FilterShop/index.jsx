import React from "react";
import ItemFilter from "../ItemFilter";

import "./style.scss";

function FilterShop(props) {
    return (
        <>
            <span>Filter By</span>
            <div className="filter__category">
                <ItemFilter />
            </div>
            <div className="filter__author">
                <ItemFilter />
            </div>
            <div className="filter__rating">
                <ItemFilter />
            </div>
        </>
    );
}

export default FilterShop;
