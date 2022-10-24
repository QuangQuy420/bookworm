import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlePaginate } from "../../Actions/bookActions";

import "./style.scss";

function Pagination(props) {
    const pagination = useSelector((state) => state.book.pagination);
    const dispatch = useDispatch()
    const { current_page, last_page } = pagination;

    const handlePrevPage = () => {
        dispatch(handlePaginate(current_page - 1))
    };

    const handleNextPage = () => {
        dispatch(handlePaginate(current_page + 1))
    };

    return (
        <div className="pagination">
            <button
                disabled={current_page == 1 ? true : false}
                onClick={handlePrevPage}
            >
                Prev
            </button>
            <button>{current_page}</button>
            <button
                disabled={current_page == last_page ? true : false}
                onClick={handleNextPage}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
