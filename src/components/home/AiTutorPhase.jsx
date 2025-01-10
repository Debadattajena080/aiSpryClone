import React from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { FaAngleDown } from "react-icons/fa";
import { accordianData } from "../utility/AccordianData";
import realtime from "../../assets/realtime.gif";

const AiTutorPhase = () => {
  const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={({ state: { isEnter } }) => (
        <div
          className={`flex items-center w-full text-md font-semibold transition-colors duration-200 ease-out bg-white p-4  ${
            isEnter ? "text-red-500" : "text-gray-800"
          }`}
        >
          {header}
          <FaAngleDown
            className={`ml-auto transition-transform duration-200 ease-out ${
              isEnter && "rotate-180"
            }`}
          />
        </div>
      )}
      className="mb-4 shadow-md"
      buttonProps={{
        className: ({ isEnter }) =>
          `flex w-full text-left hover:bg-slate-100 ${
            isEnter && "bg-slate-200"
          }`,
      }}
      contentProps={{
        className: "text-gray-600 ease-out text-start bg-white p-4",
      }}
    />
  );
  return (
    <div className=" mx-auto p-6 bg-gray-50 mt-4 ">
      <div className="container mx-auto w-3/4">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-semibold text-red-500">
            <span>AiTutor: Phase 3</span>
          </h3>
          <h4 className="text-3xl text-red-500 mt-2">
            The Future of Personalized Learning & Real-Time Insights
          </h4>
          <p className="text-gray-600 mt-2">
            Pioneering New Heights in AI-Powered Education with Real-time
            Behavior Insights and Autism Detection
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-3xl font-semibold text-red-500 mb-2">
            Intuitive Learning with AiTutor
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Manually gauging a student's grasp or a tutor's effectiveness can be
            overwhelmingly complex. Enter AiTutor: our advanced solution
            designed to make the educational process more insightful,
            personalized, and effective.
          </p>
        </div>
        <div className="mt-12">
          <h4 className="text-lg text-red-500">
            <span className="font-semibold">For the student: </span>
            <span>A Tailored Learning Experience</span>
          </h4>
        </div>

        <div className="mt-10 flex items-start gap-6">
          <div className="w-full lg:w-1/2">
            <Accordion>
              {accordianData.map(({ header, content }, i) => (
                <AccordionItem header={header} key={i}>
                  {content}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="w-full lg:w-1/2 bg-white p-2 md:mt-10">
            <img
              src={realtime}
              alt="Descriptive text"
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiTutorPhase;
