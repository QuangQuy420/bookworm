import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterShow, setFilterSortReview, handlePaginate, filterByRating } from "../../../Actions/bookActions";
import Pagination from "../../Pagination";
import SortShow from "../../SortShow";

import "./style.scss";

function ListReview(props) {
    const dispatch = useDispatch()
    const detailsBook = useSelector((state) => state.book.detailBook);
    const { rating, total, reviews, meta,  } = detailsBook;
    const [ titleSort, setTitleSort ] = useState('newest to oldest')
    const [ starFilter, setStarFilter ] = useState("")

    const itemSort = [
        "Sort by date: newest to oldest",
        "Sort by date: oldest to newest",
    ];
    const itemShow = [5, 10, 15, 20];

    const slideTotal = total.map((star, index) => {
        return (
            <span
                key={index} 
                className="review__total-item"
                onClick={() => handleFilterStar(total.length - index)}
            >
                {total.length - index} star ({total[total.length - index - 1]})
            </span>
        );
    });

    const slideReviews = reviews.map((review, index) => {
        return (
            <div key={index} className="review__detail">
                    <div className="review__detail-title">
                        <h3>{review.review_title}</h3>
                        <span>{review.rating_start} stars</span>
                    </div>
                    <span className="review__detail-content">
                        {review.review_details}
                    </span>
                    <span className="review__detail-date">{review.review_date}</span>
            </div>
        )
    })

    const handleFilterStar = (star) => {
        dispatch(filterByRating(star))
        setStarFilter(star)
        dispatch(handlePaginate(1))
    }

    const handleFilterShow = (value, index) => {
        dispatch(setFilterShow(value))
    };

    const handleFilterSort = (value, index) => {
        setTitleSort(value.slice(14));
        if(index == 0) {
            dispatch(setFilterSortReview('DESC'))
        } else {
            dispatch(setFilterSortReview('ASC'))
        }
    };

    const handlePagination = (page) => {
        dispatch(handlePaginate(page))
    }

    return (
        <div className="review col-8">
            <div className="review__title">
                <h5>Customer Review</h5>
                <span>(Filtered by {titleSort} {starFilter ? 'and ' + starFilter + ' Star' : ''})</span>
            </div>
            <h4>
                {rating
                    ? parseFloat(rating.avg_rating).toFixed(1)
                    : 0}{" "}
                Star
            </h4>
            <div className="review__total">
                <div 
                    className="review__total-star"
                    onClick={() => handleFilterStar("")}
                >
                    ({rating ? rating.total_rating : 0})
                </div>
                {slideTotal}
            </div>
            <div className="review__filter">
                <SortShow
                    itemShow={itemShow}
                    itemSort={itemSort}
                    defaultShow={"Show 5"}
                    defaultSort={"Sort by date: newest to oldest"}
                    titleName={"reviews"}
                    onFilterShow={handleFilterShow}
                    onFilterSort={handleFilterSort}
                    pagination={meta}
                />
            </div>
            {slideReviews}
            <div className="review__paginate">
                <Pagination 
                    pagination={meta}
                    onPaginate={handlePagination}
                />
            </div>
        </div>
    );
}

export default ListReview;
