import React, { useState } from "react";
import { accordianData } from "../utility/AccordianData";

const AccordionWithImage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  return (
    <div className="mt-4 flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/2">
        {accordianData.map(({ header, content, image }, i) => (
          <div key={i} className="mb-4">
            <div
              className={`cursor-pointer p-4 rounded-md shadow-md transition ${
                activeIndex === i
                  ? "bg-gray-200"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => handleAccordionClick(i)}
            >
              <h3
                className={`font-semibold text-md text-left text-gray-800 ${
                  activeIndex === i && "text-red-500"
                }`}
              >
                {header}
              </h3>
            </div>

            {activeIndex === i && (
              <>
                <div className="bg-white p-2  text-left rounded-md shadow-md">
                  <p className="text-gray-700">{content}</p>
                </div>
                <div className="my-4 lg:hidden">
                  <img
                    src={image}
                    alt={header}
                    loading="lazy"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Image Section for Large Screens */}
      <div className="hidden lg:block w-full lg:w-1/2 bg-white p-2 my-auto ">
        {activeIndex !== null && (
          <img
            src={accordianData[activeIndex].image}
            alt={accordianData[activeIndex].header}
            loading="lazy"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        )}
      </div>
    </div>
  );
};

export default AccordionWithImage;
