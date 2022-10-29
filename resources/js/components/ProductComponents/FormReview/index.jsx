import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as reviewServices from "../../../apiServices/reviewServices";
import "./style.scss";

function FormReview(props) {
    const bookId = useSelector((state) => state.book.filter.bookId);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [successMes, setSuccessMes] = useState(false);
    const [dataSubmit, setDataSubmit] = useState({});

    const getDateTime = () => {
        let today = new Date();
        let date =
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate();
        let time =
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds();
        let dateTime = date + " " + time;
        return dateTime;
    };

    const handleSubmitReview = async (data) => {
        const dataSubmit = {
            book_id: bookId,
            review_title: data.reviewTitle,
            review_details: data.reviewDetail,
            rating_start: data.reviewStar,
            review_date: getDateTime(),
        };

        await reviewServices.postReview("/post-review", dataSubmit);

        setSuccessMes(true);
        console.log(dataSubmit);
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    };

    return (
        <div className="review__form col-4">
            <div className="review__add">
                <span className="review__add-title">Write a Review</span>
                <form onSubmit={handleSubmit(handleSubmitReview)}>
                    <div className="review__form-group">
                        <label htmlFor="reviewTitle">Add a title</label>
                        <input
                            id="reviewTitle"
                            {...register("reviewTitle", { required: true })}
                            type="text"
                        />
                        {errors.reviewTitle && (
                            <span className="required-message">
                                This field is required
                            </span>
                        )}
                    </div>
                    <div className="review__form-group">
                        <label htmlFor="reviewDetails">
                            Details please! Your review helps other shoppers
                        </label>
                        <input
                            id="reviewDetails"
                            {...register("reviewDetail")}
                            type="textarea"
                        />
                    </div>
                    <div className="review__form-group">
                        <label htmlFor="reviewStar">Select a rating star</label>
                        <select {...register("reviewStar")}>
                            <option value="5">5 Star</option>
                            <option value="4">4 Star</option>
                            <option value="3">3 Star</option>
                            <option value="2">2 Star</option>
                            <option value="1">1 Star</option>
                        </select>
                    </div>
                    <div className="review__submit-form">
                        <input type="submit" />
                        {successMes ? (
                            <span className="review__success-message">
                                Submit Review Success
                            </span>
                        ) : (
                            ""
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormReview;
