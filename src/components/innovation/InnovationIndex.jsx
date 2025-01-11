import React, { useEffect, useState } from "react";
import BannerSection from "./BannerSection";
import Achievements from "./Achievements";
import ConnectWithUs from "./ConnectWithUs";
import DemoForm from "../home/DemoForm";
import { scrollToTop } from "../utility/ScrolToTop";

const InnovationIndex = () => {
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
    <div className="">
      <BannerSection />
      <Achievements />
      <ConnectWithUs />
      <DemoForm />
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
    </div>
  );
};

export default InnovationIndex;
