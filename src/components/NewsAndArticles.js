"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const articles = [
    {
        id: 1,
        title: 'Innovation Hub Ignites Student Entrepreneurship',
        date: 'April 5, 2023',
        image: '/image/article2.jpg',
    },
    {
        id: 2,
        title: 'Green Campus Initiative Gains Momentum',
        date: 'April 5, 2021',
        image: '/image/article2.jpg',
    },
    {
        id: 3,
        title: 'Tech Expo Showcases Student Ingenuity and Technological Advancements',
        date: 'April 5, 2021',
        image: '/image/article3.jpg',
    },
    {
        id: 4,
        title: 'Athletes Triumph in Regional Championships',
        date: 'April 5, 2023',
        image: '/image/article4.jpg',
    },
    {
        id: 5,
        title: 'Arts Festival Spotlights Student Talent and Creativity',
        date: 'April 5, 2023',
        image: '/image/article5.jpg',
    },
];

const NewsAndArticles = () => {
    return (
        <>
            <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h5 className="text-xl font-sans text-center text-gray-800 sm:text-xl tracking-widest mb-10">LATEST NEWS</h5>
                    <h1 className="text-4xl font-bold text-center text-gray-800 sm:text-4xl mb-10">News & Article</h1>

                    <div className="flex flex-col lg:flex-row gap-8 h-full">

                        <motion.div
                            className="lg:w-[30%] h-[480px] relative group rounded-lg overflow-hidden flex-shrink-0"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Image
                                src={articles[0].image}
                                alt={articles[0].title}
                                fill
                                className="object-cover group-hover:brightness-90 transition"
                            />
                            <div className="absolute inset-0 bg-blue-950 bg-opacity-50 flex flex-col justify-end p-6">
                                <h3 className="text-xl font-bold text-white">{articles[0].title}</h3>
                                <p className="text-sm text-white mt-1">{articles[0].date}</p>
                            </div>
                        </motion.div>

                        <div className="lg:w-[70%] grid grid-cols-2 gap-5 h-full">
                            {articles.slice(1).map((article) => (
                                <motion.div
                                    key={article.id}
                                    className="flex bg-white rounded-lg overflow-hidden  group"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="relative w-[45%] h-48 sm:h-56">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:brightness-90 transition"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-center p-4 w-[55%]">
                                        <h3 className="text-md font-semibold text-gray-800 group-hover:text-indigo-600 transition">
                                            {article.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">{article.date}</p>
                                        <a
                                            href="#"
                                            className="text-indigo-600 font-medium group-hover:underline transition mt-3 inline-block"
                                        >
                                            Read More &rarr;
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NewsAndArticles;
