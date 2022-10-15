import "./style.scss";
import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";
import CardBook from "../../CardBook";
import { Button } from "react-bootstrap";

const items = [
    {
        id: 1,
        altText: "Slide 1",
        caption: "Slide 1",
    },
];

function OnSale(props) {
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => {
        const nextIndex =
            activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        const nextIndex =
            activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const slides = items.map((item, index) => {
        console.log(item);
        return (
            <CarouselItem key={index}>
                <CardBook />
                <CardBook />
                <CardBook />
                <CardBook />
            </CarouselItem>
        );
    });

    return (
        <div className="container__onsale">
            <div className="container__onsale-title">
                <h4>On Sale</h4>
                <Button color="primary">View All &gt;</Button>
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
