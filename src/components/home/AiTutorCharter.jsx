import React, { useState, useEffect, useRef } from "react";
import equest from "../../assets/equest.png";
import { aiTutorCharterData } from "../utility/AiTutorCharterData";

const AiTutorCharter = () => {
  const topics = [
    {
      label: "Broadly Distributed System",
      position: { left: "-20%", top: "5%" },
    },
    {
      label: "Data Privacy & Security",
      position: { left: "-40%", top: "40%" },
    },
    { label: "Continuous Evolution", position: { left: "-15%", top: "80%" } },
    {
      label: "Innovative Pedagogical Insights",
      position: { right: "-20%", top: "5%" },
    },
    { label: "Empowering Educators", position: { right: "-40%", top: "40%" } },
    { label: "Collaborative Growth", position: { right: "-15%", top: "80%" } },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(true);
  const [polylinePoints, setPolylinePoints] = useState("");
  const topicRefs = useRef([]);
  const detailsBoxRef = useRef(null);
  const arrowOffset = -40;
  const arrowHorizontalOffset = -100;

  const handleClick = (index) => {
    if (index === activeIndex) {
      setShowDetails(!showDetails);
      if (showDetails) setPolylinePoints("");
    } else {
      setActiveIndex(index);
      setShowDetails(true);
    }
  };

  useEffect(() => {
    if (
      activeIndex !== null &&
      topicRefs.current[activeIndex] &&
      detailsBoxRef.current
    ) {
      const topicElement =
        topicRefs.current[activeIndex].getBoundingClientRect();
      const detailsBoxElement = detailsBoxRef.current.getBoundingClientRect();

      const boxCenterY = detailsBoxElement.top + detailsBoxElement.height / 2;
      const topicCenterY = topicElement.top + topicElement.height / 2;

      const boxStartX =
        topicElement.x > detailsBoxElement.x + detailsBoxElement.width / 2
          ? detailsBoxElement.right
          : detailsBoxElement.left;

      const points = [
        `${boxStartX},${boxCenterY}`,
        `${
          boxStartX +
          (topicElement.x > detailsBoxElement.x + detailsBoxElement.width / 2
            ? 50
            : -50)
        },${boxCenterY}`,
        `${
          boxStartX +
          (topicElement.x > detailsBoxElement.x + detailsBoxElement.width / 2
            ? 50
            : -50)
        },${topicCenterY + arrowOffset}`,
        `${
          topicElement.left +
          topicElement.width / 2 +
          (topicElement.x > detailsBoxElement.x + detailsBoxElement.width / 2
            ? -arrowHorizontalOffset
            : arrowHorizontalOffset)
        },${topicCenterY + arrowOffset}`,
      ].join(" ");

      setPolylinePoints(points);
    } else {
      setPolylinePoints("");
    }
  }, [activeIndex, showDetails]);

  return (
    <div className="relative flex flex-col items-center justify-center my-10">
      <h3 className="text-2xl font-semibold mb-8 text-red-500">
        AiTutor Charter
      </h3>

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
              ref={(el) => (topicRefs.current[index] = el)}
              onClick={() => handleClick(index)}
              style={topic.position}
              className={`absolute h-12 flex flex-col items-center justify-center transition cursor-pointer text-center hover:text-red-500 ${
                activeIndex === index ? "text-red-500" : "text-gray-800"
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
          ref={detailsBoxRef}
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

      {polylinePoints && (
        <svg
          className="absolute w-full h-full pointer-events-none"
          style={{ top: 0, left: 0 }}
        >
          <polyline
            points={polylinePoints}
            fill="none"
            stroke="#FF5733"
            strokeWidth="1"
            markerEnd="url(#circleMarker)"
          />
          <defs>
            <marker
              id="circleMarker"
              markerWidth="10"
              markerHeight="10"
              refX="5"
              refY="5"
              orient="auto"
            >
              <circle cx="5" cy="5" r="3" fill="#FF5733" />
            </marker>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default AiTutorCharter;
