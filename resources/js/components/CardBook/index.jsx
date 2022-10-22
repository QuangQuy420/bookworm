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
        final_price,
    } = detailBook;

    const urlImg = `images/${
        book_cover_photo ? book_cover_photo : "book5"
    }.jpg`;

    return (
        <Card className="m-2 mt-4 mb-4">
            <img className="card__image" alt="Sample" src={urlImg} />
            <CardBody>
                <CardTitle tag="h5">{book_title}</CardTitle>
                <CardText>{author_name}</CardText>
            </CardBody>
            <CardFooter>
                <span className="book-price">
                    {book_price == final_price ?  "" : book_price}
                </span>
                <span className="last-price">{"$" + final_price}</span>
            </CardFooter>
        </Card>
    );
}

export default CardBook;
