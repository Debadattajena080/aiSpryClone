import React, { useState } from "react";

import equest from "../../assets/equest.png";
import FormComponent from "./FormComponent";

const DemoForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div className="relative flex flex-col md:flex-row md:justify-center gap-4 md:ml-20">
      {/* Gradient Section */}
      <div className="relative bg-gradient-to-r from-[#e28743] to-blue-500 py-8 md:w-[70%] overflow-hidden rounded-lg ">
        <div
          className={`transition-all duration-400 ${showForm ? "pb-8" : ""}`}
        >
          <div className="px-8 pt-8 text-center">
            <p className="text-white text-lg">
              Looking for a platform to manage and amplify the benefits of
              AiTutor?
            </p>
            <p className="text-white mt-3 text-lg">
              Discover our state-of-the-art Learning Management System.
            </p>
            <button
              onClick={handleButtonClick}
              className="mt-10 mb-4 bg-white text-orange-500 py-3 px-10 rounded shadow-md"
            >
              Request a Demo!
            </button>
          </div>

          {showForm && <FormComponent closeForm={() => setShowForm(false)} />}
        </div>
      </div>

      <div className="   md:ml-[-100px] z-10 mr-14 mt-4">
        <img
          src={equest}
          alt="equest"
          className=" max-h-48 md:max-h-64"
        />
      </div>
    </div>
  );
};

export default DemoForm;
