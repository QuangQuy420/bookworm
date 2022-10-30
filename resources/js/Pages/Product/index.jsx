import React, { useEffect } from "react";
import DetailBook from "../../components/ProductComponents/DetailBook";
import Order from "../../components/ProductComponents/Order";
import ListReview from "../../components/ProductComponents/ListReview";
import FormReview from "../../components/ProductComponents/FormReview";
import * as reviewServices from "../../apiServices/reviewServices";

import { useDispatch, useSelector } from "react-redux";
import {
    filterByRating,
    getDetailBook,
    handlePaginate,
    setFilterShow,
} from "../../Actions/bookActions";

import "./style.scss";

function Product(props) {
    const dispatch = useDispatch();
    const filterReview = useSelector((state) => state.book.filter);
    const bookId = JSON.parse(localStorage.getItem("book_id"))

    useEffect(() => {
        dispatch(setFilterShow(4));
        dispatch(filterByRating(""));
        dispatch(handlePaginate(1));
    }, []);

    useEffect(() => {
        const getReviewBook = async () => {
            const arrStar = [];
            const filter = {
                params: {
                    limit: filterReview.limit,
                    sort: filterReview.sort_review,
                    star: filterReview.star,
                    page: filterReview.page,
                },
            };
            const result = await reviewServices.getListReviews(
                `/get-detail-reviews/${bookId}`,
                filter
            );
            for (let i = 1; i <= 5; i++) {
                let value = result.total[i][0]
                    ? Object.values(result.total[i][0])[0]
                    : 0;
                arrStar.push(value);
            }

            const data = {
                book: result.book,
                rating: result.rating[0],
                reviews: result.reviews.data,
                meta: result.reviews.meta,
                total: arrStar,
            };
            dispatch(getDetailBook(data));
        };

        getReviewBook();
    }, [filterReview]);

    return (
        <>
            <h5 className="product__title">Category Name</h5>
            <div className="product__book row">
                <DetailBook />
                <Order />
            </div>
            <div className="product__review row">
                <ListReview />
                <FormReview />
            </div>
        </>
    );
}

export default Product;
