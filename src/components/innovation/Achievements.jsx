import React from "react";


import authorCertificate from "../../assets/innovationAssets/authorCertificate.webp";
import award2 from "../../assets/award2.webp";
import award3 from "../../assets/award3.webp";
import { achievementData } from "../utility/AcvievementsData";


const Achievements = () => {
  return (
    <>
      <div className="container py-12 px-4 md:w-[75%] mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-6 text-red-500">
          Insights & Achievements
        </h3>
        <p className="text-md text-center text-gray-600 mb-12 md:w-[70%] mx-auto">
          Our relentless pursuit of innovation has garnered recognition and
          profound insights across various domains. Here are some of the pivotal
          achievements and insights we've derived from our projects:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementData.map((item, index) => (
            <div key={index}>
              <img
                src={item.img}
                alt={`Achievement ${index + 1}`}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <p className="text-gray-700 text-md text-center">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between  md:w-[75%] mx-auto mb-24">
        <img src={authorCertificate} alt="author-certificate" className="h-auto" />
        <img src={authorCertificate} alt="author-certificate" className="mr-8" />
        <div className="flex flex-col items-center justify-between">
          <img src={award2} alt="award2-image" className="h-56" loading="lazy" />
          <img src={award3} alt="award3-image" className="h-56" loading="lazy" />
        </div>
      </div>
    </>
  );
};

export default Achievements;
