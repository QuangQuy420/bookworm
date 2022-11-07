import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CardBook from "../../CardBook";
import "./style.scss";

function FeaturedBook(props) {
    const { featuredBooks, onFilterBook } = props;
    const [ active, setActive ] = useState('/books/recommend')

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
                    className={active == '/books/recommend' ? 'active' : ''}
                    onClick={() => handleFilterBook('/books/recommend')}
                >
                    Recommended
                </Button>
                <Button 
                    className={active == '/books/popular' ? 'active' : ''}
                    onClick={() => handleFilterBook('/books/popular')}
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
