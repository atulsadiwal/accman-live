import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import img1 from "../../public/image/rear-view-of-audience-showing-hand.jpg"
import img2 from "../../public/image/group-of-people-at-business.jpg"
import img3 from "../../public/image/business-woman-giving.jpg"

const UniversityEvents = () => {
  return (
    <div className="container mx-auto mt-28 sm:mt-36 px-8 sm:px-24 py-8 sm:py-2">
      {/* Top Section */}
      <div className=" mb-4">
        <h6 className="text-indigo-900 font-semibold uppercase text-xs tracking-widest mb-4">
            University Events
          </h6>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 className="text-3xl font-medium  text-gray-900 leading-snug font-playfair">
            Bring The Best Speakers At<br className="hidden sm:block"/> Every Events
          </h2>
        
        <button className="mt-4 md:mt-0 bg-indigo-900 text-white px-6 py-1 sm:-mb-8   hover:bg-indigo-500 transition duration-300">
          All Events
        </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {/* First Column */}
        <div className="md:col-span-2 relative">
          <div
            className="h-60 md:h-72 w-full bg-cover bg-center relative"
            style={{
              backgroundImage: `url("/image/rear-view-of-audience-showing-hand.jpg")`,
              filter: "brightness(60%)",
            }}
          >
            <div className="absolute inset-0 bg-purple-950 opacity-50"></div>
          </div>
          <div className="absolute top-0 left-0 p-6 text-white sm:pt-28 ">
            <h3 className="text-md font-medium font-playfair mb-4">
              Educational Technology & Mobile Learning
            </h3>
            <p className="text-[0.7rem] font-medium mb-4">
              Explore the intersection of education and technology with a focus
              on mobile learning. Enhance teaching methods through innovative
              tools and digital resources for dynamic educational experiences.
            </p>
            <div className="flex space-x-4 items-center mb-4">
              <span className="flex items-center text-[0.7rem]">
                <i className="mr-1"><FaLocationDot/></i> ACCMAN Auditorium
              </span>
              <span className="flex items-center text-[0.7rem]">
                <i className="mr-1"><FaCalendarAlt /></i> 9 June 2023
              </span>
            </div>
            <a
              href="#"
              className="text-white text-xs uppercase tracking-wider font-medium hover:text-gray-300 transition"
            >
              Read More &rarr;
            </a>
          </div>
        </div>

        {/* Second Column */}
        <div className="col-span-1 shadow-lg  overflow-hidden">
          <div className="relative h-32 overflow-hidden group">
            <img
              src="/image/group-of-people-at-business.jpg"
              alt="Fintech Seminar"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="py-4 px-5">
            <h3 className="text-[0.75rem] tracking-wider text-indigo-900 font-playfair font-medium mb-4">
              Fintech & Key Investment Seminar
            </h3>
            <p className="text-gray-900 text-[0.65rem]">
              Date: 19 December 2023
            </p>
            <p className="text-gray-900 text-[0.65rem] mb-4">
              Location: ACCMAN Auditorium
            </p>
            <a
              href="#"
              className="text-indigo-900 uppercase tracking-widest text-[0.65rem] font-medium "
            >
              Read More &rarr;
            </a>
          </div>
        </div>

        {/* Third Column */}
        <div className="col-span-1 shadow-lg  overflow-hidden">
          <div className="relative h-32 overflow-hidden group">
            <img
              src = "/image/business-woman-giving.jpg"
              alt="Sport Webinar"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-4">
            <h3 className="text-[0.75rem] tracking-wider text-indigo-900 font-playfair font-medium mb-4">
              Sport Management Information Webinar
            </h3>
            <p className="text-gray-900 text-[0.65rem]">
              Date: 19 December 2023
            </p>
            <p className="text-gray-900 text-[0.65rem] mb-4">
              Location: ACCMAN Grand Hall
            </p>
            <a
              href="#"
              className="text-indigo-900 uppercase tracking-widest text-[0.65rem] font-medium "
            >
              Read More &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityEvents;
