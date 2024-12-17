"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const IMAGE_DATA = [
    { src: "/image/image1.jpg", heading: "Study Room", link: "#1" },
    { src: "/image/image2.jpg", heading: "Community Room", link: "#2" },
    { src: "/image/image3.jpg", heading: "Workout Room", link: "#3" },
    { src: "/image/image4.jpg", heading: "Badminton court", link: "#4" },
    { src: "/image/image5.jpg", heading: "Tennis court", link: "#5" },
    { src: "/image/image6.jpg", heading: "Playground", link: "#6" },
    { src: "/image/image7.jpg", heading: "Food court", link: "#7" },
    { src: "/image/image8.jpg", heading: "Gym", link: "#8" },
    { src: "/image/image9.jpg", heading: "Laundry system", link: "#9" },
];

const OurCampus = () => {
    const sectionRef = useRef(null);
    const [xTransformRange, setXTransformRange] = useState(["60%", "-40%"]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setXTransformRange(["20%", "-40%"]);
            } else {
                setXTransformRange(["60%", "-40%"]);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const xTransform = useTransform(scrollYProgress, [0, 1], xTransformRange);

    return (
        <section
            ref={sectionRef}
            className="relative bg-white pb-32 overflow-hidden"
        >
            {/* First Div - Animated Box */}
            <motion.div
                className="bg-blue-900 text-white px-8 py-12 rounded-lg shadow-lg w-[90%] sm:w-[90%] md:w-[60%] mx-auto mb-16 relative z-10"
                style={{ x: xTransform }}
            >
                <h2 className="text-4xl font-bold mb-4 text-right">Our Campus</h2>
                <p className="text-lg leading-relaxed text-right">
                    Discover a place where life is enjoyable and vibrant. From working out
                    in the gym to relaxing in the garden, we have it all! Our amenities
                    are designed to make your time here the best period of your life.
                </p>
            </motion.div>

            {/* Flex Container for Layered Sections */}
            <div className="relative w-[90%] mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-center">
                {/* Second Div - Overlapping First Div */}
                <div className="bg-[#dee0e3] text-blue-900 px-10 py-8 shadow-lg rounded-lg w-[90%] md:w-[60%] lg:w-[30%] mt-[-100px] relative z-20 text-center lg:text-left">
                    <h3 className="text-3xl font-semibold mb-6">Our Amenities</h3>
                    <ul className="space-y-4">
                        {IMAGE_DATA.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.link}
                                    className="text-black hover:text-blue-900 transition duration-300"
                                >
                                    {item.heading}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Third Div - Image Grid */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-[90%] md:w-[80%] lg:w-[60%] mt-4 lg:mt-[-50px] relative z-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {IMAGE_DATA.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="relative group block w-full h-40 sm:h-48 md:h-56 overflow-hidden rounded-lg"
                        >
                            {/* Image */}
                            <Image
                                src={item.src}
                                alt={item.heading}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {item.heading}
                            </span>
                        </Link>
                    ))}
                </motion.div>
            </div>

            {/* Extra Padding at the End */}
            {/* <div className="h-48 lg:h-64"></div> */}
        </section>
    );
}

export default OurCampus;
