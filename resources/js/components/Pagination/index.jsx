import React from "react";;

import "./style.scss";

function Pagination(props) {
    const { pagination, onPaginate } = props
    const { current_page, last_page } = pagination;

    const handleSetPaginate = (page) => {
        if (onPaginate) {
            onPaginate(page)
        }
    };

    return (
        <div className="pagination">
            <button
                disabled={current_page == 1 ? true : false}
                onClick={() => handleSetPaginate(current_page - 1)}
            >
                Prev
            </button>
            <button>{current_page}</button>
            <button
                disabled={current_page == last_page ? true : false}
                onClick={() => handleSetPaginate(current_page + 1)}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
