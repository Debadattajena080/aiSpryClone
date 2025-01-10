import React, { useEffect, useState } from "react";

import CarouselComponent from "./Carousel";

import homebanner from "../../assets/homebanner.webp";
import aiImage from "../../assets/aiImage.webp";
import mission from "../../assets/mission.png";
import vision from "../../assets/vision.png";
import digital from "../../assets/digital.webp";


import { scrollToTop } from "../utility/ScrolToTop";


import MultiCarousel from "./MulitCarousel";
import AiTutorPhase from "./AiTutorPhase";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <>
      <div className="relative container ">
        {/* banner section */}
        <img
          src={homebanner}
          alt="homebanner"
          className="h-auto w-full object-cover"
          lazy="true"
        />

        <div className="absolute mt-5 md:mt-0 top-1/2 w-3/4  left-6 md:left-10 transform -translate-y-1/2 text-white md:ml-40 flex flex-col text-left">
          <h1 className="text-2xl md:text-5xl font-semibold">
            Unleashing the Future with AI
          </h1>
          <p className="text-md md:text-lg md:py-4  py-2 mb-6">
            Transforming Industries with Advanced AI, ML, and Digital
            Innovations
          </p>
        </div>
      </div>
      <div className="container mx-auto py-10 px-6 ">
        <div className="w-3/4 mx-auto flex flex-col md:flex-row items-center  justify-between space-x-8 space-y-8 ">
          {/* Text Content */}
          <section className="flex-1 text-left">
            <h1 className="text-2xl md:text-2xl text-red-500 font-semibold mb-6">
              AiSPRY: Bridging Tradition and Tomorrow through AI
            </h1>
            <div className="space-y-6 text-gray-700">
              <p>
                Founded in 2018, AiSPRY stands at the nexus of tradition and AI
                innovation. Our mission is to integrate AI into business
                processes, driving efficiency, creativity, and transformation.
                We blend past wisdom with future potential to foster true
                innovation.
              </p>
              <p>
                Our AI solutions, tailored for healthcare, manufacturing, and
                finance, streamline operations, enhance security, and provide
                insightful data. Our dedication to digital transformation and
                pushing technological boundaries is evident in every solution we
                create.
              </p>
              <p>
                AiTutor, our revolutionary educational platform, epitomizes our
                commitment to transforming education through AI. It offers
                personalized learning experiences, improving outcomes and
                democratizing access to high-quality education. It embodies our
                vision of technology’s transformative power.
              </p>
              <p>
                Collaboration drives our success. Our alliance with 360DigiTMG
                fosters knowledge sharing and professional development.
                Together, we nurture emerging AI talent, ensuring the field’s
                continuous evolution and societal benefit.
              </p>
            </div>
          </section>

          {/* Image */}
          <div class="circle bg-blue-200 opacity-40 ">
            <div className="">
              <img
                src={aiImage}
                alt="ai-image"
                className="w-full h-auto  object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="container mx-auto py-8 px-6 w-3/4 rounded-lg shadow-2xl my-8 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between md:space-x-4 space-y-8 md:space-y-0">
          {/* Mission Section */}
          <div className="flex items-center space-x-4 md:w-[40%] w-full">
            <img
              src={mission}
              alt="Mission"
              className="w-12 h-12 object-contain"
            />
            <p className="text-gray-700 text-md flex-1">
              <span className="font-semibold text-lg">Our Mission:</span> To set
              global standards in AI applications, forging a future where
              technology and tradition coalesce.
            </p>
          </div>

          {/* Vision Section */}
          <div className="flex items-center space-x-4 md:w-[40%] w-full">
            <img
              src={vision}
              alt="Vision"
              className="w-12 h-12 object-contain"
            />
            <p className="text-gray-700 text-md">
              <span className="font-semibold text-lg">Our Vision:</span> To set
              global standards in AI applications, forging a future where
              technology and tradition coalesce.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div>
          <h1 className="text-2xl md:text-2xl text-red-500 font-semibold">
            Leading AI Transformation Across Verticals
          </h1>
          <p className="text-gray-600 py-4 text-start md:text-center mx-4">
            From the intricacies of healthcare to the nuances of finance, our AI
            solutions cater to diverse industries.
          </p>
        </div>
        <CarouselComponent />
      </section>

      <section className="mt-16 ">
        <div>
          <h1 className="text-2xl md:text-2xl text-red-500 font-semibold">
            Pushing Digital Boundaries
          </h1>
          <p className="text-gray-600 py-4 md:w-1/3 mx-auto">
            Beyond borders, beyond conventions; we redefine the digital horizon.
            Melding traditional wisdom with modern technology, we lead the AI
            evolution.
          </p>
        </div>
      </section>
      <div className="flex w-4/5 mx-auto  mt-8 flex-wrap">
        <img
          src={digital}
          alt="DigitalImage"
          className="w-auto object-contain h-96 m-auto shadow-md"
        />

        <div className="w-1/2">
          <MultiCarousel />
        </div>
      </div>

      <section className="bg-gray-50">
       
        <AiTutorPhase />
       
      </section>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 right-10 bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all ${
          isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-10"
        }`}
        style={{
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        ↑
      </button>
    </>
  );
};

export default Home;
