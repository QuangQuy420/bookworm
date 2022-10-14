import './style.scss'
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2',
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3',
  },
];

function OnSale(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item, index) => {
    return (
      <CarouselItem key={index}>
        Book
      </CarouselItem>
    );
  });

  return (
    <div className='container__content'>
      <Carousel next={next}
        previous={previous}
        dark
        interval={false}
      >
        {slides}
        <CarouselControl
          direction="prev"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}


export default OnSale;