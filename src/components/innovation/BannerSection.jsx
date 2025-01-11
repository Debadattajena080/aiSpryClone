import React from "react";
import innovationBanner from "../../assets/innovationAssets/innovationsBanner.webp";

const BannerSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-orange-400 to-orange-400 text-white p-8">
      <div className="flex items-center justify-between md:w-[75%] mx-auto">
        <div className="flex-1 max-w-lg space-y-8">
          <h1 className="text-4xl font-bold">
            Innovations that Shape the Digital Tomorrow
          </h1>
          <p className="text-lg">
            Dive deep into our groundbreaking projects that redefine industry
            standards.
          </p>
          <button className="bg-white text-gray-950 font-semibold py-2 px-8 ">
            Explore Projects
          </button>
        </div>

        <div className="flex-1 flex justify-end space-y-8 my-4">
          <img
            src={innovationBanner}
            alt="Innovation Banner"
            className="w-2/3  h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
