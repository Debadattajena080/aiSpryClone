import React, { memo } from "react";
import firstAwardImage from "../../assets/summit.webp";
import secondAwardImage from "../../assets/award2.webp";
import thirdAwardImage from "../../assets/award3.webp";


const awardsData = [
  {
    imgSrc: firstAwardImage,
    title: "Global AI Summit ‘24 Award",
    description: "AiTutor Awarded in Global AI Summit ‘24: Best Use of AI in Education.",
  },
  {
    imgSrc: secondAwardImage,
    title: "The Best Practice in Digital Transformation",
    description:
      "Awarded by CII - Digital Transformation 2023, for our AI Powered Learning Management System-AiTutor.",
  },
  {
    imgSrc: thirdAwardImage,
    title: "Awarded in CAHOTECH 2023",
    description:
      "Category - Hospital Innovation & Early Adoption of Technology for the Technology Solution 'Optimizing Medical Inventory Management'.",
  },
];


const AwardCard = memo(({ imgSrc, title, description }) => (
  <div className="p-6 text-center">
    <img
      src={imgSrc}
      alt={title}
      className="w-full h-auto object-cover rounded-md mb-4"
      loading="lazy" 
    />
    <h4 className="text-lg font-semibold mb-2 text-gray-800">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
));

const Awards = () => {
  return (
    <div className="p-8 md:w-[75%] mx-auto">
      
      <h3 className="text-3xl font-semibold text-center mb-6 text-red-500">
        Awards & Accolades
      </h3>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {awardsData.map((award, index) => (
          <AwardCard
            key={index}
            imgSrc={award.imgSrc}
            title={award.title}
            description={award.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Awards;
