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
        <section className="bg-black h-[150vh]">
            <div className="max-w-[1400px] mx-auto px-2 text-white flex justify-between gap-4 py-10">
                <div className="flex-1 w-6/12 text-center lg:text-left mb-8 lg:mb-0">
                    <h2 className="text-[#c69c6d] text-5xl lg:text-6xl font-light mb-8">
                        What our clients say
                    </h2>
                    <div className="space-y-6 text-lg lg:text-xl">
                        <p>
                            We create and develop unique websites, as well as managing social networks
                            with dedication. We work on all your business marketing.
                        </p>
                        <p>
                            At Ontag we assess your needs and develop favourable options in line with
                            your planned and desired objectives.
                        </p>
                    </div>
                    <button className="mt-12 px-12 py-3 border border-white rounded-full text-white hover:bg-white/10 transition-colors">
                        VIEW TESTIMONIALS
                    </button>
                </div>

                <div className="w-6/12 relative overflow-visible">
                    <div className="relative w-full rounded-3xl overflow-hidden flex justify-center">
                        <div className="grid gap-6 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 relative">
                            <div className="bg-[#ffd4c4] p-4 h-[300px] w-[300px] rounded-3xl shadow-lg relative z-10">
                                <h3 className="text-black text-xl">Outstanding experiences</h3>
                            </div>

                            <div
                                className={`bg-[#ffb397] p-4 h-[300px] w-[300px] rounded-3xl shadow-lg transition-all duration-300`}
                                style={{
                                    position: 'relative',
                                    top: `${Math.max(0, 0 - (scrollY / 3))}px`,
                                    transition: 'top 0.3s ease-out',
                                    zIndex: 1,
                                }}
                            >
                                <h3 className="text-black text-xl">Professionalism and consistency</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
