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
            {current_page > 1 ? <button onClick={() => handleSetPaginate(1)}>{1}</button> : ''}
            {current_page > 2 ? <button onClick={() => handleSetPaginate(2)}>{2}</button> : ''}
            {current_page > 3 ? <button onClick={() => handleSetPaginate(3)}>{3}</button> : ''}
            {current_page > 4 ? <button>...</button> : ''}
            <button className="current-page">{current_page}</button>
            {last_page > current_page - 3 && last_page - 3 > current_page ? <button>...</button> : ''}
            {last_page > current_page - 2 && last_page - 2 > current_page ? <button onClick={() => handleSetPaginate(last_page - 2)}>{last_page - 2}</button> : ''}
            {last_page > current_page - 1 && last_page - 1 > current_page ? <button onClick={() => handleSetPaginate(last_page - 1)}>{last_page - 1}</button> : ''}
            {last_page > current_page ? <button onClick={() => handleSetPaginate(last_page)}>{last_page}</button> : ''}
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
