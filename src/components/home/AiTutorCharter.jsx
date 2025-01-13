import React, { useState } from "react";
import equest from "../../assets/equest.png";
import { aiTutorCharterData } from "../utility/AiTutorCharterData";

const AiTutorCharter = () => {
  const topics = [
    { label: "Broadly Distributed System", position: { left: "-20%", top: "5%" } },
    { label: "Data Privacy & Security", position: { left: "-40%", top: "40%" } },
    { label: "Continuous Evolution", position: { left: "-15%", top: "80%" } },
    { label: "Innovative Pedagogical Insights", position: { right: "-20%", top: "5%" } },
    { label: "Empowering Educators", position: { right: "-40%", top: "40%" } },
    { label: "Collaborative Growth", position: { right: "-15%", top: "80%" } },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(true);

  const handleClick = (index) => {
    if (index === activeIndex) {
      setShowDetails(!showDetails); // Toggle details visibility
    } else {
      setActiveIndex(index);
      setShowDetails(true); // Show details for the new selection
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center my-10">
      <h3 className="text-2xl font-semibold mb-8 text-red-500">AiTutor Charter</h3>

      <div className="relative w-[400px] h-[400px]">
        <img
          src={equest}
          alt="Equest"
          className="absolute top-1/2 left-1/2 w-52 h-52 transform -translate-x-1/2 -translate-y-1/2"
        />

        {topics.map((topic, index) => {
          const [firstWord, ...restWords] = topic.label.split(" ");
          const restText = restWords.join(" ");

          return (
            <span
              key={index}
              onClick={() => handleClick(index)}
              style={topic.position}
              className={`absolute h-12 flex flex-col items-center justify-center transition cursor-pointer text-center hover:text-red-500 ${
                activeIndex === index ? "text-red-500" : "text-black"
              }`}
            >
              <span>{firstWord}</span>
              <span>{restText}</span>
            </span>
          );
        })}
      </div>

      {showDetails && (
        <div
          className="mt-8 w-[50%] p-4 border rounded-md shadow-lg bg-white text-center"
        >
          {aiTutorCharterData[activeIndex] ? (
            <>
              <div className="flex text-start text-gray-600">
                <p className="ml-2">
                  <span className="text-lg font-semibold">Objective: </span>
                  {aiTutorCharterData[activeIndex].objective ||
                    "Objective not provided."}
                </p>
              </div>
              <div className="flex text-start text-gray-600 mt-4">
                <p className="ml-2">
                  <span className="text-lg font-semibold">Approach: </span>
                  {aiTutorCharterData[activeIndex].approach ||
                    "Approach not provided."}
                </p>
              </div>
            </>
          ) : (
            <p>Click on a topic to see details</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AiTutorCharter;
