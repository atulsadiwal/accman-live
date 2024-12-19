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
            <div className="max-w-[1400px] mx-auto px-2 text-white flex justify-between items-center gap-4 py-10">
                <div className="flex-1 w-6/12 text-center lg:text-left mb-8 lg:mb-0">
                    <h2 className="text-[#c69c6d] text-5xl lg:text-6xl font-light mb-8">
                        Hear from our successful graduates
                    </h2>
                    <div className="space-y-6 text-lg lg:text-xl">
                        <p>
                            Our alumni have gone on to achieve incredible things in their careers and lives.
                            Here are just a few of their stories.
                        </p>
                        <p>
                            Discover how their time at our college prepared them for success and empowered
                            them to pursue their dreams.
                        </p>
                    </div>
                    <button className="mt-12 px-12 py-3 border border-white rounded-full text-white hover:bg-white/10 transition-colors">
                        READ TESTIMONIALS
                    </button>
                </div>

                <div className="w-6/12 relative flex justify-center items-center">
                    <div className="grid gap-6 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 relative">
                        <div className="bg-[#ffd4c4] p-4 h-[300px] w-[300px] rounded-3xl shadow-lg relative z-10 flex flex-col items-center text-center">
                            <img src="/image/placement/placement1.webp" alt="John Doe" className="w-36 h-32 object-contain rounded-full" />
                            <h3 className="text-black text-xl mt-4">John Doe - PGDM</h3>
                            <p className="mt-4 text-black">
                                "The education and support I received here laid the foundation for my successful career in tech. Forever grateful!"
                            </p>
                        </div>

                        <div
                            className={`bg-[#ffb397] p-4 h-[300px] w-[300px] rounded-3xl shadow-lg transition-all duration-300 flex flex-col items-center text-center`}
                            style={{
                                position: 'relative',
                                top: `${Math.max(0, 0 - (scrollY / 3))}px`,
                                transition: 'top 0.3s ease-out',
                                zIndex: 1,
                            }}
                        >
                            <img src="/image/placement/placement3.jpeg" alt="Jane Smith" className="w-36 h-32 object-cover object-center rounded-full" />
                            <h3 className="text-black text-xl mt-4">Jane Smith - PGDM</h3>
                            <p className="mt-4 text-black">
                                "The comprehensive curriculum and hands-on learning equipped me with the skills and confidence to excel in my career."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
