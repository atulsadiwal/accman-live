import img from "../../public/image/austin-texas-usa-at-the-texas.jpg"

const Opportunities = () => {
  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 mt-12 sm:mt-0">
      {/* Left Column */}
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${img})`, 
        }}
      >
        {/* Yellow Card */}
        <div className="absolute bottom-0 left-0 bg-yellow-500 py-6 md:py-8 px-4  sm:px-10 max-w-xs md:max-w-xs">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 font-playfair tracking-wider">
            Open Doors, Endless Opportunities
          </h3>
          <p className="text-gray-800 mb-3 text-[0.75rem] ">
          Step into a world of possibilities with our open doors and a commitment to endless opportunities. We're poised for growth, ready to embrace challenges, and excited to see where each opportunity leads us. Join us on this journey of innovation and success!
          </p>
          <button className="text-gray-800 text-xs tracking-widest hover:text-yellow-600 transition">
            VIEW ALL FACULTIES →
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="bg-indigo-900  text-white py-3 px-8 sm:py-4 sm:px-20  flex flex-col justify-center">
        {/* Small Heading */}
        <p className="text-[0.8rem] font-medium mb-4 tracking-[0.2rem]">ACCMAN UNIVERSITY</p>

        {/* Large Heading */}
        <h1 className="text-xl md:text-4xl font-semibold font-playfair mb-2 leading-relaxed tracking-wider">
          We Are Open For Opportunities
        </h1>

        {/* Description */}
        <p className="text-[0.75rem] mb-4">
          Embracing endless possibilities, our university is a gateway to
          diverse opportunities. Join us in a journey of discovery, learning,
          and growth. We are open for opportunities.
        </p>

        {/* Progress Bars */}
        <div className="space-y-4 pe-8">
          {/* Graduate On Time */}
          <div >
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-playfair tracking-wider ">Graduate On Time</span>
              <span className="text-sm font-playfair tracking-wider ">92%</span>
            </div>
            <div className="h-[0.17rem] w-full bg-gray-700">
              <div className="h-full bg-yellow-400 w-[92%]"></div>
            </div>
          </div>

          {/* Student Skills */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-playfair tracking-wider ">Students Skill</span>
              <span className="text-sm font-playfair tracking-wider ">96%</span>
            </div>
            <div className="h-[0.17rem] w-full bg-gray-700">
              <div className="h-full bg-yellow-400 w-[96%]"></div>
            </div>
          </div>

          {/* Campus Extracurricular */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-playfair tracking-wider ">Campus Extracurricular</span>
              <span className="text-sm font-playfair tracking-wider ">87%</span>
            </div>
            <div className="h-[0.17rem] w-full bg-gray-700">
              <div className="h-full bg-yellow-400 w-[87%]"></div>
            </div>
          </div>

          {/* Quality Of Lecturers */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-playfair tracking-wider ">Quality Of Lecturers</span>
              <span className="text-sm font-playfair tracking-wider ">92%</span>
            </div>
            <div className="h-[0.17rem] w-full bg-gray-700">
              <div className="h-full bg-yellow-400 w-[92%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
