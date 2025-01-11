import React from "react";
import { connectWithUsData } from "../utility/ConnectWithUsData";

const ConnectWithUs = () => {
  return (
    <div className="container mx-auto mb-16  px-4 md:w-[75%]">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-semibold mb-2 text-red-500">
          Connect with Us Beyond the Screen
        </h3>
        <p className="text-md text-gray-600">
          Engage with the brilliant minds behind our innovations:
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {connectWithUsData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 text-center"
          >
            <h4 className="text-lg font-medium  mb-2 text-gray-700">
              {item.title}
            </h4>
            <p className="text-gray-700">{item.descritpion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectWithUs;
