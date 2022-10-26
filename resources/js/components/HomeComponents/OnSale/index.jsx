import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";

import CardBook from "../../CardBook";
import "./style.scss";

function OnSale(props) {
    const { saleBooks } = props;
    const [index, setIndex] = useState(0);
    let navigate = useNavigate();

    const displayBook = [
        saleBooks.slice(0, 4),
        saleBooks.slice(4, 8),
        saleBooks.slice(8, 10)
    ]

    const next = () => {
        const nextIndex = (index === 3 - 1 ? index : index + 1);
        setIndex(nextIndex);
    };

    const previous = () => {
        const prevIndex = (index === 0 ? 0 : index - 1);
        setIndex(prevIndex);
    };


    const slides = displayBook[index].map((book, index) => {
        return (
            <CarouselItem key={index}>
                <CardBook detailBook={book}/>
            </CarouselItem>
        );
    });

    const handleToPage = () => {
        let path = `/shop`; 
        navigate(path);
    }

    return (
        <div className="container__onsale">
            <div className="container__onsale-title">
                <h4>On Sale</h4>
                <button 
                    className="container__onsale-btn"
                    onClick={handleToPage}
                >View All &gt;
                </button>
            </div>
            <Carousel next={next} previous={previous} dark interval={false}>
                {slides}
                <CarouselControl direction="prev" onClickHandler={previous} />
                <CarouselControl direction="next" onClickHandler={next} />
            </Carousel>
        </div>
    );
}

export default OnSale;
