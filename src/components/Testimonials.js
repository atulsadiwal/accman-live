import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="bg-black">
            <div className="max-w-[1400px] mx-auto px-4 text-white flex flex-col lg:flex-row justify-between items-start gap-0 lg:gap-8 py-10 lg:py-16">
                {/* Left Section */}
                <div className="flex-1 w-full lg:w-6/12 lg:sticky lg:top-1/4 p-4 lg:p-10 text-center lg:text-left">
                    <h2 className="text-[#c69c6d] text-4xl lg:text-6xl font-light mb-6 lg:mb-8">
                        Hear from our successful graduates
                    </h2>
                    <div className="space-y-4 lg:space-y-6 text-lg lg:text-xl">
                        <p>
                            Our alumni have gone on to achieve incredible things in their careers and lives.
                            Here are just a few of their stories.
                        </p>
                        <p>
                            Discover how their time at our college prepared them for success and empowered
                            them to pursue their dreams.
                        </p>
                    </div>
                    <button className="mt-6 lg:mt-12 px-10 lg:px-12 py-2 lg:py-3 border border-white rounded-full text-white hover:bg-white/10 transition-colors">
                        READ TESTIMONIALS
                    </button>
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-6/12 lg:pl-32 pb-10 lg:pb-0 flex justify-start mb-72">
                    <ul className="relative grid gap-5 lg:gap-8 mb-5">
                        {[
                            {
                                name: "John Doe - PGDM",
                                text: "The education and support I received here laid the foundation for my successful career in tech. Forever grateful!",
                                img: "/image/placement/placement1.webp",
                                bgColor: "bg-[#ffd4c4]",
                            },
                            {
                                name: "Jane Smith - PGDM",
                                text: "The comprehensive curriculum and hands-on learning equipped me with the skills and confidence to excel in my career.",
                                img: "/image/placement/placement3.jpeg",
                                bgColor: "bg-[#ffb397]",
                            },
                            {
                                name: "Emily Carter - MBA",
                                text: "The guidance and support I received here gave me the confidence to pursue my dreams fearlessly.",
                                img: "/image/placement/placement2.webp",
                                bgColor: "bg-[#f9a77d]",
                            },
                            {
                                name: "Mark Lee - B.Tech",
                                text: "The well-rounded curriculum and real-world applications prepared me for every challenge in my career.",
                                img: "/image/placement/placement4.jpeg",
                                bgColor: "bg-[#f47c5e]",
                            },
                            {
                                name: "Mark Lee - B.Tech",
                                text: "The well-rounded curriculum and real-world applications prepared me for every challenge in my career.",
                                img: "/image/placement/placement4.jpeg",
                                bgColor: "bg-[#F05C3C]",
                            },
                        ].map((testimonial, index) => (
                            <li
                                key={index}
                                className={`card ${testimonial.bgColor} p-4 h-[300px] w-[300px] rounded-3xl shadow-lg flex flex-col items-center text-center sticky top-5`}
                                style={{
                                    transform: `translateY(${scrollY / 18 - index}px)`,
                                    zIndex: index + 1, // Higher zIndex for newer cards
                                    opacity: scrollY > index * 400 ? 1 : 0.6, // Fade effect as cards stack
                                }}
                            >
                                <img
                                    src={testimonial.img}
                                    alt={testimonial.name}
                                    className="w-36 h-32 object-cover object-center rounded-full"
                                />
                                <h3 className="text-black text-xl mt-4">
                                    {testimonial.name}
                                </h3>
                                <p className="mt-4 text-black">{testimonial.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
