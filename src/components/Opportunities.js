import React from "react";

const Opportunities = () => {
    return (
        <>
            <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 mt-12 sm:mt-0">
                <div
                    className="relative bg-cover bg-center bg-BG4"
                >
                    <div className="absolute bottom-0 left-0 bg-yellow-500 py-6 md:py-8 px-4 sm:px-10 max-w-xs md:max-w-md">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wider">Open Doors, Endless Opportunities</h3>
                        <p className="text-gray-800 mb-3">
                            Step into a world of possibilities with our open doors and a commitment to endless opportunities. We're poised for growth, ready to embrace challenges, and excited to see where each opportunity leads us. Join us
                            on this journey of innovation and success!
                        </p>
                        <button className="text-gray-900 font-semibold text-xs tracking-widest hover:text-cyan-800 transition">VIEW ALL FACULTIES →</button>
                    </div>
                </div>

                <div className="bg-indigo-900  text-white py-3 px-8 sm:py-4 sm:px-20  flex flex-col justify-center">
                    <p className="text-[0.8rem] font-medium mb-4 tracking-[0.2rem]">ACCMAN Institute</p>

                    <h1 className="text-2xl md:text-5xl font-semibold font-playfair mb-2 leading-relaxed tracking-wider">We Are Open For Opportunities</h1>

                    <p className="text-lg mb-6">Embracing endless possibilities, our university is a gateway to diverse opportunities. Join us in a journey of discovery, learning, and growth. We are open for opportunities.</p>

                    <div className="space-y-4 pe-8">
                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-playfair tracking-wider ">Graduate On Time</span>
                                <span className="font-playfair tracking-wider ">92%</span>
                            </div>
                            <div className="h-[0.17rem] w-full bg-gray-700">
                                <div className="h-full bg-yellow-400 w-[92%]"></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-playfair tracking-wider ">Students Skill</span>
                                <span className="font-playfair tracking-wider ">96%</span>
                            </div>
                            <div className="h-[0.17rem] w-full bg-gray-700">
                                <div className="h-full bg-yellow-400 w-[96%]"></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-playfair tracking-wider ">Campus Extracurricular</span>
                                <span className="font-playfair tracking-wider ">87%</span>
                            </div>
                            <div className="h-[0.17rem] w-full bg-gray-700">
                                <div className="h-full bg-yellow-400 w-[87%]"></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-playfair tracking-wider ">Quality Of Lecturers</span>
                                <span className="font-playfair tracking-wider ">92%</span>
                            </div>
                            <div className="h-[0.17rem] w-full bg-gray-700">
                                <div className="h-full bg-yellow-400 w-[92%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Opportunities;
