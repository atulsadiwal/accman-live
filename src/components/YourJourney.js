import React from 'react';
import { GraduationCap, Laptop, MapPin } from 'lucide-react';

const data = [
    {
        id: 1,
        icon: <GraduationCap />,
        title: 'University Life',
        description:
            'Transformative academics, personal growth, lifelong friendships in a dynamic, diverse community.',
    },
    {
        id: 2,
        icon: <Laptop />,
        title: 'Online Education',
        description:
            'Explore online courses, engage with instructors, and advance your education flexibly from anywhere.',
    },
    {
        id: 3,
        icon: <MapPin />,
        title: 'Campus Tours',
        description:
            "Explore your future home! Join our engaging campus tours for an insider's view of facilities, culture, and academic excellence.",
    },
];

const YourJourney = () => {
    return (
        <>
            <div className="container mx-auto px-6 py-10 sm:py-32">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className='py-6'>
                        <h6 className="text-blue-900 text-sm tracking-widest uppercase mb-2">To The Journey Ahead</h6>
                        <h2 className="text-4xl font-semibold mb-6 tracking-wide leading-10 font-playfair text-gray-800">
                            Gain Valuable Knowledge & Experience
                        </h2>
                        <div className="space-y-6">
                            {data.map((item) => (
                                <div key={item.id} className="flex items-start space-x-4 items-center">
                                    <div className="bg-blue-900 text-white flex items-center justify-center h-10 w-10 px-3 shadow-md rounded-full text-sm hover:bg-yellow-500 hover:text-black">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-md font-semibold font-playfair text-gray-800">{item.title}</h3>
                                        <p className="text-[0.8rem] leading-relaxed text-gray-800 mt-1">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 relative">
                        <div className="bg-indigo-900 text-white py-10 px-10 mt-0 sm:mt-4">
                            <h3 className="font-semibold text-xl tracking-wider font-playfair">You Apply</h3>
                            <p className="text-xs mt-2">
                                Empower your future. You apply, unlocking doors to knowledge, growth, and opportunities that shape a
                                brighter tomorrow.
                            </p>
                        </div>
                        <div className="relative">
                            <img src='/image/smiling-young-woman.jpg' alt="Students" className="object-cover w-full h-full" />
                        </div>
                        <div className="relative sm:pb-4 pb-0">
                            <img src='/image/successful-graduate-school-kids.jpg' alt="Group" className="object-cover w-full h-full" />
                        </div>
                        <div className="bg-yellow-400 text-gray-900 py-8 px-10">
                            <h3 className="font-semibold text-xl tracking-wider font-playfair">We Connect</h3>
                            <p className="text-xs mt-2">
                                Bridging minds, fostering collaboration. Uniting diverse perspectives for transformative learning in an inclusive academic community. Join our vibrant journey
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default YourJourney;
