import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardText, CardFooter } from "reactstrap";

import "./style.scss";

function CardBook(props) {
    const { detailBook } = props;
    const {
        book_title,
        author_name,
        book_cover_photo,
        book_price,
        discount_price,
        discount_start_date,
        discount_end_date,
    } = detailBook;
    const [ lastPrice, setLastPrice ] = useState();

    const urlImg = `images/${
        book_cover_photo ? book_cover_photo : "book5"
    }.jpg`;

    const getLastPrice = () => {
        const d = new Date()
        const dayNow = d.getFullYear()+ '-' + (d.getMonth()+1)+ '-' + d.getDate()

        if((discount_start_date < dayNow &&  discount_end_date > dayNow) || (discount_start_date < dayNow &&  discount_end_date == null)) {
            console.log(true);
            return discount_price
        } else {
            console.log(false);
            return book_price
        }
    };

    return (
        <Card className="m-2 mt-4 mb-4">
            <img className="card__image" alt="Sample" src={urlImg} />
            <CardBody>
                <CardTitle tag="h5">{book_title}</CardTitle>
                <CardText>{author_name}</CardText>
            </CardBody>
            <CardFooter>
                <span className="book-price">
                    {book_price == getLastPrice() ? '' : book_price}
                </span>
                <span className="last-price">
                    {"$" + getLastPrice()}
                </span>
            </CardFooter>
        </Card>
    );
}

export default CardBook;
