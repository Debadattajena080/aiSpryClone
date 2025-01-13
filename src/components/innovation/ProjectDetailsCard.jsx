import React, { useState } from "react";

const ProjectDetailsCard = ({ project }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="md:w-[65%] bg-white p-4 my-8 ml-4 rounded shadow">
    <div className="bg-white p-4">
      <h3 className="text-xl font-semibold text-red-500 text-center pb-5 border-b-2">
        {project?.projectName}
      </h3>
    

      {/* Business Problem Section */}
      <div className="mt-8">
        <h4 className="text-xl font-semibold text-red-500">Business Problem</h4>
        {project?.businessProblem?.map((problem, index) => (
          <p key={index} className="my-4 text-start">
            {problem}
          </p>
        ))}
      </div>

      {/* Objectives Section */}
      <div>
        <h4 className="text-xl font-semibold text-red-500">Objectives</h4>
        {project?.objectives?.map((objective, index) => (
          <div key={index} className="my-4">
            {Object.entries(objective).map(([key, value], i) => (
              <div key={i}>
                <p className="font-semibold">{key}:</p>
                <p className="text-gray-600">{value}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Conditionally Render the Rest of the Sections */}
      {showMore && (
        <>
          {/* Constraints Section */}
          <div>
            <h4 className="text-xl font-semibold text-red-500">Constraints</h4>
            {project?.constraints?.map((constraint, index) => (
              <div key={index} className="my-4">
                {Object.entries(constraint).map(([key, value], i) => (
                  <div key={i}>
                    <p className="font-semibold">{key}:</p>
                    <p className="text-gray-600">{value}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Success Criteria Section */}
          <div>
            <h4 className="text-xl font-semibold text-red-500">
              Success Criteria
            </h4>
            {project?.successCriteria?.map((objective, index) => (
              <div key={index} className="my-4">
                {Object.entries(objective).map(([key, value], i) => (
                  <div key={i}>
                    <p className="font-semibold">{key}:</p>
                    <p className="text-gray-600">{value}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Business Benefits Section */}
          <div>
            <h4 className="text-xl font-semibold text-red-500">
              Business Benefits
            </h4>
            {project?.businessBenefits?.map((benefits, index) => (
              <div key={index} className="my-4">
                {Object.entries(benefits).map(([key, value], i) => (
                  <div key={i}>
                    <p className="font-semibold">{key}:</p>
                    <p className="text-gray-600">{value}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Show More / Show Less Button */}
      <button
        onClick={toggleShowMore}
        className=" text-md font-semibold  text-gray-700 rounded-md hover:text-red-600"
      >
        {showMore ? "Show Less <" : "Show More >"}
      </button>
    </div>
    </div>
  );
};

export default ProjectDetailsCard;
