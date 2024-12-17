import { FaUniversity, FaLaptop, FaMapMarkedAlt } from 'react-icons/fa';
import img1 from '../../public/image/smiling-young-woman.jpg';
import img2 from '../../public/image/successful-graduate-school-kids.jpg';

const data = [
  {
    id: 1,
    icon: <FaUniversity />,
    title: 'Institute Life',
    description:
      'Transformative academics, personal growth, lifelong friendships in a dynamic, diverse community.',
  },
  {
    id: 2,
    icon: <FaLaptop />,
    title: 'Online Education',
    description:
      'Explore online courses, engage with instructors, and advance your education flexibly from anywhere.',
  },
  {
    id: 3,
    icon: <FaMapMarkedAlt />,
    title: 'Campus Tours',
    description:
      "Explore your future home! Join our engaging campus tours for an insider's view of facilities, culture, and academic excellence.",
  },
];

const KnowledgeComponent = () => {
  return (
    <div className="container mx-auto px-6 py-10 sm:py-32">
      {/* Main Wrapper */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Column 1 */}
        <div className='py-6'>
          <h6 className="text-blue-900 text-sm tracking-widest uppercase mb-2">To The Journey Ahead</h6>
          <h2 className="text-4xl font-semibold mb-6 tracking-wide leading-10 font-playfair text-gray-800">
            Gain Valuable Knowledge & Experience
          </h2>
          <div className="space-y-6">
            {data.map((item) => (
              <div key={item.id} className="flex items-start space-x-4 items-center">
                {/* Icon */}
                <div className="bg-blue-900 text-white flex items-center justify-center h-10 w-10 px-3 shadow-md rounded-full text-sm hover:bg-yellow-500 hover:text-black">
                  {item.icon }
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-md font-semibold font-playfair text-gray-800">{item.title}</h3>
                  <p className="text-[0.8rem] leading-relaxed text-gray-800 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 relative">
          {/* First Card */}
          <div className="bg-indigo-900 text-white py-10 px-10 mt-0 sm:mt-4">
            <h3 className="font-semibold text-xl tracking-wider font-playfair">You Apply</h3>
            <p className="text-xs mt-2">
              Empower your future. You apply, unlocking doors to knowledge, growth, and opportunities that shape a
              brighter tomorrow.
            </p>
          </div>
          {/* Second Card */}
          <div className="relative">
            <img src={img1} alt="Students" className="object-cover w-full h-full" />
          </div>
          {/* Third Card */}
          <div className="relative sm:pb-4 pb-0">
            <img src={img2} alt="Group" className="object-cover w-full h-full" />
          </div>
          {/* Fourth Card */}
          <div className="bg-yellow-400 text-gray-900 py-8 px-10">
            <h3 className="font-semibold text-xl tracking-wider font-playfair">We Connect</h3>
            <p className="text-xs mt-2">
            Bridging minds, fostering collaboration. Uniting diverse perspectives for transformative learning in an inclusive academic community. Join our vibrant journey
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeComponent;
