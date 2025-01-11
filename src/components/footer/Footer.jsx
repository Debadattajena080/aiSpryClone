import React from "react";
import footerLogo from "../../assets/footerlogo.webp";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="container mx-auto my-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:w-[75%]">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={footerLogo}
            alt="AiSPRY Logo"
            className="w-40 h-auto mb-4"
          />
          <p className="text-gray-600 text-md leading-relaxed">
            AiSPRY does not leave behind even the slowest of learners by
            providing instant responses to students’ queries. Acting as an
            AI-Tutor, it offers responses to both text and speech queries.
          </p>
        </div>

        <div className="flex flex-col items-center md:ml-52">
          <h4 className="text-lg font-semibold mb-4 ">Follow Us!</h4>
          <div className="flex space-x-4 mb-6 ">
            <a href="#" aria-label="Facebook" className="text-blue-500">
              <FaFacebookF size={22} />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-800">
              <FaXTwitter size={22} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-blue-800 transition"
            >
              <FaLinkedinIn size={22} />
            </a>
            <a href="#" aria-label="YouTube" className="text-red-500">
              <FaYoutube size={22} />
            </a>
          </div>
          <h4 className=" text-lg font-semibold">
            Reach Us:{" "}
            <a
              href="mailto:info@aispry.com"
              className="text-gray-600 hover:text-orange-400 text-md"
            >
              info@aispry.com
            </a>
          </h4>
        </div>
      </div>

      <div className="py-4 text-center text-gray-500 text-sm bg-slate-200">
        © {new Date().getFullYear()} AiSPRY. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
