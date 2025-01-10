import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { multiCarouselData } from "../utility/multiCarouselData";

// Function to group items into chunks
const chunkData = (data, chunkSize) => {
  const result = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    result.push(data.slice(i, i + chunkSize));
  }
  return result;
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MultiRowCarousel = () => {
  const groupedData = chunkData(multiCarouselData, 4);

  return (
    <div className="w-full px-4">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={false}
        showDots={true}
        dotListClass="custom-dot-list-style"
        className="my-carousel mb-12"
      >
        {groupedData.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 mb-12"
          >
            {group.map((card) => (
              <div
                key={card.id}
                className="carousel-card h-80 w-auto flex flex-col "
              >
                <img
                  src={card.image}
                  alt={card.heading}
                  className="w-32 h-32 object-cover rounded-full"
                />
                <h3 className="text-lg  text-gray-800 mt-4 text-start">
                  {card.heading}
                </h3>
                <p className="text-gray-600 mt-2 text-start">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MultiRowCarousel;
