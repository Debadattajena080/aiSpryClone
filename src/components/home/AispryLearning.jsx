import React from "react";
import custom from "../../assets/custme1.webp";

const AispryLearning = () => {
  return (
    <div className="p-8 w-[90%] lg:w-[75%] mx-auto">
      {/* Heading */}
      <h3 className="text-2xl lg:text-3xl text-center mb-6 text-red-500">
        Elevate the Learning Experience. Dive into AiTutor's Phase 3 Innovations{" "}
        <span className="text-blue-500 underline hover:text-blue-700 transition cursor-pointer">
          Today!
        </span>
      </h3>

      {/* Description Section */}
      <div className="p-6 text-red-500">
        <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-center">
          AiSPRY Learning Management System: <br />
          Empower. Educate. Elevate.
        </h3>
        <p className="text-gray-700 text-center w-full lg:w-[60%] mx-auto">
          In an era of digital transformation, learning has evolved beyond
          traditional classrooms. Embracing this evolution, AiSPRY introduces
          its state-of-the-art Learning Management System tailored to bridge the
          gap between knowledge and its application.
        </p>
      </div>

      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-8">
          <div className="space-y-2 text-gray-500 text-left">
            <h3 className="text-lg font-semibold ">
              Customizable Solutions for Varied Needs
            </h3>
            <p>
              Every organization is unique, and so are its learning
              requirements. Our LMS is engineered to adapt, providing custom
              solutions that align with your organizational ethos and goals.
            </p>
          </div>

          <div className="space-y-2 text-gray-500 text-left">
            <h3 className="text-lg font-semibold">
              Measurable ROI for Tangible Growth
            </h3>
            <p>
              Elevate your workforce with data-driven insights. AiSPRY's LMS
              boasts advanced features to measure the return on investment in
              training, ensuring you're always one step ahead in employee
              development.
            </p>
          </div>

          <div className="space-y-2 text-gray-500 text-left">
            <h3 className="text-lg font-semibold">
              All-Inclusive Learning Experience
            </h3>
            <p>
              From course creation to evaluation, our LMS is equipped with an
              array of features that streamline and enhance the learning
              process, making education more accessible, interactive, and
              result-oriented.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src={custom}
            alt="Customizable Solutions"
            className="w-full rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AispryLearning;
