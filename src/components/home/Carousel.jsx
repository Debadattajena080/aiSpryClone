import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselData } from "../utility/CarouselData";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselComponent = () => {
  return (
    <div className="carousel-container my-12 w-3/4 mx-auto">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        showDots={true}
        arrows={false}
        // centerMode={true} 
        itemClass="carousel-item-padding" 
      >
        {carouselData.map((card) => (
          <div
            key={card.id}
            className="carousel-card px-4 py-8 bg-white border-2 mx-4 mb-12  h-80  flex flex-col items-center "
          >
            <img
              src={card.image}
              alt={card.heading}
              className="card-image w-16 h-auto object-cover rounded-t-lg"
            />
            <div className="p-4 h-48 overflow-hidden flex flex-col justify-between">
              <h3 className="card-heading text-xl font-semibold text-gray-800 mb-2">
                {card.heading}
              </h3>
              <p className="card-description text-gray-600">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
