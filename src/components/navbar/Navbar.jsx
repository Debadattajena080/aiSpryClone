import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    // Check if the user has scrolled more than 50px
    if (window.scrollY > 100) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    // Add the scroll event listener on component mount
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-[#e28743] to-blue-500 px-6 py-8">
      <div className="md:w-3/4 container md:mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="h-14 w-auto" />
        </Link>
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <ul className="hidden md:flex space-x-8 text-white text-lg">
          <li className="hover:text-gray-200 transition duration-300">
            <Link to="/explore">Explore AiTutor</Link>
          </li>
          <li className="hover:text-gray-200 transition duration-300">
            <Link to="/innovations">See our Innovations</Link>
          </li>
          <li className="hover:text-gray-200 transition duration-300">
            <Link to="/training">Embark our Training</Link>
          </li>
        </ul>
      </div>

      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden mt-2 space-y-4 px-6 py-4 text-white text-lg font-semibold`}
      >
        <li className="hover:text-blue-500 transition duration-300">
          <Link to="/explore">Explore AiTutor</Link>
        </li>
        <li className="hover:text-blue-500 transition duration-300">
          <Link to="/innovations">See our Innovations</Link>
        </li>
        <li className="hover:text-blue-500 transition duration-300">
          <Link to="/training">Embark our Training</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
