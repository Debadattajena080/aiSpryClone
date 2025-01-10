// src/constants/carouselData.js

import agriTech from "../../assets/agri-tech.png";
import healthTech from "../../assets/healthcare.png";
import finance from "../../assets/finance.png";
import education from "../../assets/education.png";
import logistic from "../../assets/logistics.png";
import manufacturing from "../../assets/manufacturing.png";
export const carouselData = [
  {
    id: 1,
    image: agriTech, // Replace with your actual image path
    heading: "Agri-tech",
    description:
      "Our AI systems provide detailed analysis like egg detection, egg color differentiation, crack detection, and stain identification, revolutionizing poultry farming.",
  },
  {
    id: 2,
    image: healthTech, // Replace with your actual image path
    heading: "Healthcare",
    description:
      "Harnessing AI's power, we've developed advanced image processing systems to predict conditions like cancer based on tumor analysis, making early diagnosis a reality.",
  },
  {
    id: 3,
    image: finance, // Replace with your actual image path
    heading: "Finance",
    description:
      "With AI algorithms, we've helped identify fraudulent and illegal transactions due to insider trading, ensuring a safer financial ecosystem.",
  },
  {
    id: 4,
    image: education, // Replace with your actual image path
    heading: "Education",
    description:
      "Our flagship product, AiTutor, is a testament to our commitment in the educational sector, offering data-driven insights for both students and tutors.",
  },
  {
    id: 5,
    image: logistic, // Replace with your actual image path
    heading: "Logistics",
    description:
      "Innovation alert! We've redefined BBS Data Extraction and introduced state-of-the-art solutions to an age-old logistics issue - Pallet Damage Classification.",
  },
  {
    id: 6,
    image: manufacturing, // Replace with your actual image path
    heading: "Manufacturing",
    description:
      "Our Machine Failure prediction system, specifically for machines like Prima13, ensures smoother operations by predicting and preventing potential breakdowns.",
  },
  // Add more cards here
];
