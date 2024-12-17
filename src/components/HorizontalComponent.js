import img from "../../public/image/college-students-posing-outdoors.jpg";

const HorizontalComponent = () => {
  return (
    <div className="container max-w-[100vw]   px-4 sm:px-16   bg-indigo-900"> 
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {/* First Div */}
        <div className="text-white p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold font-playfair">Core Academic & Knowledge</h3>
            <p className="mt-4 text-xs">
              Hub for holistic education, cultivating academic excellence and personal growth through comprehensive learning.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 flex items-center text-xs font-semibold text-white transform transition-transform duration-300 hover:scale-105"
          >
            READ MORE <span className="ml-2">&rarr;</span>
          </a>
        </div>

        {/* Second Div */}
        <div className="bg-indigo-900 text-white p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold font-playfair">College Advisory</h3>
            <p className="mt-4 text-xs">
              Guide students through higher education choices for informed academic success and future careers.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 flex items-center text-xs font-semibold text-white transform transition-transform duration-300 hover:scale-105"
          >
            READ MORE <span className="ml-2">&rarr;</span>
          </a>
        </div>

        {/* Third Div with Image */}
        <div className="bg-cover bg-center h-64 md:h-full" style={{ backgroundImage: `url(${img})` }}>
          {/* Ensure the image is responsive and visible on smaller screens */}
        </div>

        {/* Fourth Div */}
        <div className="bg-indigo-900 text-white p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold font-playfair">Curriculum & Pedagogy</h3>
            <p className="mt-4 text-xs ">
              Creating optimal learning through content design and teaching methods for effective educational outcomes.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 flex items-center text-xs font-semibold text-white transform transition-transform duration-300 hover:scale-105"
          >
            READ MORE <span className="ml-2">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HorizontalComponent;
