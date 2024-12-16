"use client";
import React, { useState, useEffect } from "react";

const Courses = () => {

    const [placementRate, setPlacementRate] = useState(0);
    const [over5LPA, setOver5LPA] = useState(0);
    const [over10LPA, setOver10LPA] = useState(0);

    useEffect(() => {
        const animatePercentage = (setValue, maxValue) => {
            let value = 0;
            const interval = setInterval(() => {
                value += 1;
                setValue(value);
                if (value >= maxValue) {
                    clearInterval(interval);
                }
            }, 20); // Adjust speed as needed
        };

        animatePercentage(setPlacementRate, 95);
        animatePercentage(setOver5LPA, 90);
        animatePercentage(setOver10LPA, 75);
    }, []);

    return (
        <>
            <section className="bg-white flex flex-wrap items-center justify-between px-4 lg:px-10 py-8">
                {/* Left Section */}
                <div className="w-full lg:w-1/4 h-auto lg:h-full">
                    <img
                        src="/image/courses.png" // Replace with actual path
                        alt="Courses"
                        className="h-64 sm:h-96 sm:object-contain md:h-124 md:object-contain lg:h-full w-full lg:object-cover"
                    />
                </div>

                {/* Middle Section */}
                <div className="w-full lg:w-1/3 px-4 py-4 lg:py-0">
                    <h1 className="text-xl font-sans tracking-widest text-center lg:text-left text-blue-900">
                        Our Courses
                    </h1>
                    <h2 className="mt-2 text-4xl text-center lg:text-left text-gray-800">
                        Department
                    </h2>

                    <div className="mt-6 flex flex-wrap justify-between space-y-4 lg:space-y-0">
                        {/* Left Description */}
                        <div className="w-full lg:w-1/2 pr-2">
                            <p className="text-gray-700">
                                A department is an organizational unit within a larger entity,
                                such as a company or government, focused on specific functions or
                                tasks. It operates under a common goal, coordinating efforts to
                                achieve objectives efficiently.
                            </p>
                        </div>

                        {/* Right Description */}
                        <div className="w-full lg:w-1/2 pl-2">
                            <p className="text-gray-700">
                                Departments facilitate structured workflow and promote specialized
                                expertise in diverse areas to contribute to overall
                                organizational success.
                            </p>
                        </div>
                    </div>

                    {/* Slider Section */}
                    <div className="mt-8 space-y-6">
                        <div>
                            <h3 className="text-gray-800 font-medium">Placement Rate</h3>
                            <div className="relative w-full">
                                <span
                                    className="absolute text-sm text-blue-800 font-bold"
                                    style={{ left: `${placementRate}%`, transform: "translateX(-50%)", top: "-1.5rem" }}
                                >
                                    {placementRate}%
                                </span>
                                <div className="relative w-full h-1 bg-gray-300 rounded">
                                    <div
                                        className="absolute h-full bg-blue-800 rounded"
                                        style={{ width: `${placementRate}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-gray-800 font-medium">
                                Placed Students over 5 LPA
                            </h3>
                            <div className="relative w-full">
                                <span
                                    className="absolute text-sm text-blue-800 font-bold"
                                    style={{ left: `${over5LPA}%`, transform: "translateX(-50%)", top: "-1.5rem" }}
                                >
                                    {over5LPA}%
                                </span>
                                <div className="relative w-full h-1 bg-gray-300 rounded">
                                    <div
                                        className="absolute h-full bg-blue-800 rounded"
                                        style={{ width: `${over5LPA}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-gray-800 font-medium">
                                Placed Students over 10 LPA
                            </h3>
                            <div className="relative w-full">
                                <span
                                    className="absolute text-sm text-blue-800 font-bold"
                                    style={{ left: `${over10LPA}%`, transform: "translateX(-50%)", top: "-1.5rem" }}
                                >
                                    {over10LPA}%
                                </span>
                                <div className="relative w-full h-1 bg-gray-300 rounded">
                                    <div
                                        className="absolute h-full bg-blue-800 rounded"
                                        style={{ width: `${over10LPA}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-1/4 px-4 py-4 lg:py-0">
                    <h1 className="text-2xl font-bold text-center lg:text-left text-black">
                        Courses
                    </h1>
                    <div className="mt-6 space-y-4">
                        {["Course 1", "Course 2", "Course 3", "Course 4", "Course 5"].map(
                            (course, index) => (
                                <button
                                    key={index}
                                    className="w-full bg-[#36348e] text-white py-2 px-4 rounded-md hover:bg-yellow-500 hover:text-black transition duration-300"
                                >
                                    {course}
                                </button>
                            )
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Courses;
