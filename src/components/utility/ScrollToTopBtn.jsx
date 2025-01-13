import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 bg-pink-500 text-white py-4 px-2 rounded-full shadow-lg transition-all flex flex-col items-center justify-center group ${
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-10"
      }`}
    >
      <div
        className="absolute bottom-full mb-3 font-bold text-black text-xs px-2 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        BACK TO TOP
      </div>
      <FaArrowUp className="text-lg transform transition-transform duration-300 group-hover:scale-125" />
    </button>
  );
};

export default ScrollToTopButton;
