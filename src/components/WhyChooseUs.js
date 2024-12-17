import React from "react";
import { CheckCircle, Play } from 'lucide-react';

const WhyChooseUs = () => {
    return (
        <section className="border-b border-gray-300">
            <div className="max-w-[1400px] mx-auto px-2">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full px-1.5 py-4 sm:py-20 bg-white">
                    <div className="flex lg:w-4/7 w-full space-x-6 items-center mb-8 lg:mb-0">
                        <div className="relative w-2/6 flex flex-col items-center">
                            <img src="image/college-girl.jpg" alt="Student 1" className="w-full h-auto object-cover transform hover:scale-95 transition-transform duration-300" />
                            <button className="text-blue-900 mt-4 block text-xs tracking-widest">VIEW ALL FACULTIES →</button>
                        </div>

                        <div className="relative w-3/6">
                            <img src="image/college-boy.jpg" alt="Student 2" className="w-full h-auto object-cover transform hover:scale-95 transition-transform duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="bg-blue-600 text-white rounded-full p-3">
                                    <Play className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-3/7 w-full">
                        <h6 className="text-blue-800 uppercase text-xs font-semibold mb-2 tracking-widest">Why Choose Us</h6>
                        <h2 className="text-3xl lg:text-4xl font-semibold mb-4 font-playfair tracking-wider">Why ACCMAN University</h2>
                        <p className="text-gray-800 mb-6 text-sm leading-5">
                            ACCMAN University offers cutting-edge programs, renowned faculty, and a dynamic learning environment, fostering innovation and excellence. With state-of-the-art facilities and a commitment to student success, ACCMAN
                            University is the ideal choice for those seeking a transformative educational experience.
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                            <ul className="space-y-3 text-gray-600 text-sm">
                                <li><CheckCircle className="inline-block text-green-500" /> Graduate Programs</li>
                                <li><CheckCircle className="inline-block text-green-500" /> Research and Innovation</li>
                                <li><CheckCircle className="inline-block text-green-500" /> Academic Excellence</li>
                            </ul>
                            <ul className="space-y-3 text-gray-600 text-sm">
                                <li><CheckCircle className="inline-block text-green-500" /> International Hubs</li>
                                <li><CheckCircle className="inline-block text-green-500" /> Alumni & Giving</li>
                                <li><CheckCircle className="inline-block text-green-500" /> Industry Connections</li>
                            </ul>
                        </div>
                        <div className="flex justify-start space-x-8 sm:space-x-40 mb-6">
                            <div>
                                <p className="text-5xl font-semibold text-gray-900">
                                    25<span>+</span>
                                </p>
                                <p className="text-gray-500 text-sm">Years of Experience</p>
                            </div>
                            <div>
                                <p className="text-5xl font-semibold text-gray-900">
                                    19k<span>+</span>
                                </p>
                                <p className="text-gray-500 text-sm">Students Graduated</p>
                            </div>
                        </div>
                        <button className="bg-blue-900 text-white font-semibold rounded-lg hover:bg-gray-200 hover:border hover:text-black px-6 py-2">READ MORE</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
