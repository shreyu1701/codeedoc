import React from "react";
import logo1 from "../../img/Main-Image-1-1-1024x1024.png";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Section1() {
  const navigate = useNavigate();
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            <div className="flex items-center justify-center lg:justify-start">
              <h1 className="text-2xl font-semibold text-gray-800">
                On-Demand Development
              </h1>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Mobile &<br />
              Web Development
            </h2>
            <p className="text-lg text-gray-600">
              We leverage software development to grow your venture, <br />
              scale your impact, and propel your mission forward.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button
                className="bg-black text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#008000] transition"
                onClick={() => navigate("/services")}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <img
              src={logo1}
              className="w-full max-w-xs sm:max-w-md lg:max-w-lg object-contain"
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
