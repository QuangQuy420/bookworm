import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";
import CardBook from "../../CardBook";

import "./style.scss";

function FeaturedBook(props) {
    const featuredBook = [1, 2, 3, 4, 5, 6, 7, 8];

    const slides = featuredBook.map((item, index) => {
        return (
            <Col key={index}>
                <CardBook />
            </Col>
        );
    });

    return (
        <div className="container__feature">
            <h4>Featured Books</h4>
            <div className="container__feature-btn">
                <Button >Recommended</Button>
                <Button >Popular</Button>
            </div>
            <Container>
                <Row xs="4">{slides}</Row>
            </Container>
        </div>
    );
}

export default FeaturedBook;
