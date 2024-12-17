import React from "react";
import img1 from "../../public/image/college-girl.jpg";
import img2 from "../../public/image/college-boy.jpg";

const WhyChoose = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full px-4 lg:px-24 py-8 sm:py-20 bg-white">
      {/* Left Column - Images */}
      <div className="flex lg:w-4/7 w-full space-x-6 items-center mb-8 lg:mb-0">
        {/* First Image - 2/6 */}
        <div className="relative w-2/6 flex flex-col items-center">
          <img
            src={img1}
            alt="Student 1"
            className=" w-full h-auto object-cover transform hover:scale-95 transition-transform duration-300"
          />
          {/* View Faculties Button - BELOW the image */}
          <button className="text-blue-900 mt-4 block text-xs tracking-widest">
            VIEW ALL FACULTIES →
          </button>
        </div>

        {/* Second Image - 3/6 */}
        <div className="relative w-3/6">
          <img
            src={img2}
            alt="Student 2"
            className=" w-full h-auto object-cover transform hover:scale-95 transition-transform duration-300"
          />
          {/* Play Button - Centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-blue-600 text-white rounded-full p-3">
              ▶
            </button>
          </div>
        </div>
      </div>

      {/* Right Column - Text Content */}
      <div className="lg:w-3/7 w-full">
        {/* Small Blue Heading */}
        <h6 className="text-blue-800 uppercase text-xs font-semibold mb-2 tracking-widest">
          Why Choose Us
        </h6>
        {/* Big Heading */}
        <h2 className="text-3xl lg:text-4xl font-semibold mb-4 font-playfair tracking-wider">
          Why ACCMAN University
        </h2>
        {/* Paragraph */}
        <p className="text-gray-800 mb-6 text-xs leading-5">
          ACCMAN University offers cutting-edge programs, renowned faculty, and a
          dynamic learning environment, fostering innovation and excellence.
          With state-of-the-art facilities and a commitment to student success,
          ACCMAN University is the ideal choice for those seeking a transformative
          educational experience.
        </p>
        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {/* Left List */}
          <ul className="space-y-2 text-gray-600 text-xs">
            <li>✔ Graduate Programs</li>
            <li>✔ Research and Innovation</li>
            <li>✔ Academic Excellence</li>
          </ul>
          {/* Right List */}
          <ul className="space-y-2 text-gray-600 text-xs">
            <li>✔ International Hubs</li>
            <li>✔ Alumni & Giving</li>
            <li>✔ Industry Connections</li>
          </ul>
        </div>
        {/* Stats */}
        <div className="flex justify-start space-x-8 sm:space-x-40 mb-6">
          <div>
            <p className="text-4xl font-semibold text-gray-900">
              25<span className="text-blue-900">+</span>
            </p>
            <p className="text-gray-500 text-xs">Years of Experience</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-gray-900">
              19k<span className="text-blue-900">+</span>
            </p>
            <p className="text-gray-500 text-xs">Students Graduated</p>
          </div>
        </div>
        {/* Read More Button */}
        <button className="bg-blue-900 text-white px-6 py-2">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default WhyChoose;
