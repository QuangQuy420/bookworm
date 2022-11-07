import React, { useEffect, useState } from "react";
import DetailBook from "../../components/ProductComponents/DetailBook";
import Order from "../../components/ProductComponents/Order";
import ListReview from "../../components/ProductComponents/ListReview";
import FormReview from "../../components/ProductComponents/FormReview";
import * as reviewServices from "../../apiServices/reviewServices";
import { useDispatch, useSelector } from "react-redux";
import {
    getDetailBook,
    setDefaultReview,
} from "../../Actions/bookActions";
import "./style.scss";

function Product(props) {
    const dispatch = useDispatch();
    const filterReview = useSelector((state) => state.book.filter);
    const bookId = JSON.parse(localStorage.getItem("book_id"));
    const [categoryName, setCategoryName] = useState('Category Name')

    useEffect(() => {
        dispatch(setDefaultReview({
            limit: 5,
            star: "",
            page: 1
        }))
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
                `/review/${bookId}`,
                filter
            );
            setCategoryName(result.book.category_name);

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
            <h4 className="product__title">{categoryName[0].toUpperCase() + categoryName.slice(1)}</h4>
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
