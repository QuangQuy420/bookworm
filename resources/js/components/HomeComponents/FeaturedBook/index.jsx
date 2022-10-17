import React, { useRef, useState } from "react";

import { Button, Col, Container, Row } from "react-bootstrap";
import CardBook from "../../CardBook";

import "./style.scss";

function FeaturedBook(props) {
    const { featuredBooks, onFilterBook } = props;
    const [ active, setActive ] = useState('/get-recommend-books')

    const handleFilterBook = (apiUrl, tag) => {
        if(onFilterBook) {
            onFilterBook(apiUrl)
        }
        setActive(apiUrl)
    }

    const slides = featuredBooks.map((book, index) => {
        return (
            <Col key={index}>
                <CardBook detailBook={book}/>
            </Col>
        );
    });

    return (
        <div className="container__feature">
            <h4>Featured Books</h4>
            <div className="container__feature-btn">
                <Button 
                    className={active == '/get-recommend-books' ? 'active' : ''}
                    onClick={() => handleFilterBook('/get-recommend-books')}
                >
                    Recommended
                </Button>
                <Button 
                    className={active == '/get-popular-books' ? 'active' : ''}
                    onClick={() => handleFilterBook('/get-popular-books')}
                >
                    Popular
                </Button>
            </div>
            <Container>
                <Row xs="4">{slides}</Row>
            </Container>
        </div>
    );
}

export default FeaturedBook;
