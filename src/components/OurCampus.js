"use client";

import React from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const IMAGE_DATA = [
    { src: "/image/image1.jpg", heading: "Heading 1", link: "#1" },
    { src: "/image/image2.jpg", heading: "Heading 2", link: "#2" },
    { src: "/image/image3.jpg", heading: "Heading 3", link: "#3" },
    { src: "/image/image4.jpg", heading: "Heading 4", link: "#4" },
    { src: "/image/image5.jpg", heading: "Heading 5", link: "#5" },
    { src: "/image/image6.jpg", heading: "Heading 6", link: "#6" },
    { src: "/image/image7.jpg", heading: "Heading 7", link: "#7" },
    { src: "/image/image8.jpg", heading: "Heading 8", link: "#8" },
    { src: "/image/image9.jpg", heading: "Heading 9", link: "#9" },
];

const OurCampus = () => {
    return (
        <>
            <section className="relative bg-[#F0F4F8] pb-8">
                <motion.div
                    className="bg-[#007589] text-white shadow-lg rounded-lg h-80 flex items-center px-6 lg:px-12 sticky top-10 z-0"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    style={{ marginLeft: "auto" }}
                >
                    <div className="w-[80%] lg:w-[60%] ml-auto text-right mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Campus</h2>
                        <p className="text-lg leading-relaxed">
                            Discover a place where life is enjoyable and vibrant. From working
                            out in the gym to relaxing in the garden, we have it all! Our
                            amenities are designed to make your time here the best period of
                            your life.
                        </p>
                    </div>
                </motion.div>

                <div className="relative z-10 mt-[-80px] flex flex-col lg:flex-row w-[90%] lg:w-[70%] mx-auto gap-6">
                    <div
                        className="bg-[#dee0e3] p-6 lg:p-8 shadow-lg w-[50%] lg:w-[50%] rounded-lg relative mx-auto lg:mx-0"
                        style={{ zIndex: 1 }}
                    >
                        <h3 className="text-4xl lg:text-3xl font-sans text-[#007589] mb-8 lg-text-center">
                            Our Amenities
                        </h3>
                        <ul className="space-y-4">
                            {IMAGE_DATA.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.link}
                                        className="text-gray-800 hover:text-blue-600 font-serif transition-colors duration-300"
                                    >
                                        {item.heading}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <motion.div
                        className="p-4 lg:p-6  rounded-lg w-full lg:w-[70%] grid grid-cols-3 gap-4 opacity-100 relative lg:-ml-40"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        style={{ zIndex: 2 }}
                    >
                        {IMAGE_DATA.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                className="relative group block w-full h-28 lg:h-40 overflow-hidden rounded-md"
                            >
                                <Image
                                    src={item.src}
                                    alt={item.heading}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {item.heading}
                                </span>
                            </Link>
                        ))}
                    </motion.div>
                </div>

            </section>
        </>
    );
}

export default OurCampus;
