import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            AOS.init();
        }
    }, [isClient]);

    return (
        <>
            <section className='max-w-[1400px] mx-auto mt-20'>
                <div className='w-full text-center'>
                    <h2 className="text-5xl font-bold drop-shadow-lg">
                        About PGDM
                    </h2>
                </div>
                <div className="flex flex-col justify-center pb-5">
                    <div className="relative">
                        <div className="flex flex-col sm:flex-row gap-10 items-center justify-between mx-auto px-4 py-6">
                            <div className="w-5/12 mt-6 sm:mt-0">
                                <img
                                    src="/image/pgdm/pgdm-about.jpeg"
                                    alt="PGDM Program"
                                    className="w-full h-[550px] object-cover rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="w-7/12 bg-gray-50 px-4 py-4 text-left">
                                <p
                                    className="text-lg leading-relaxed"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >
                                    The Post Graduate Diploma in Management (PGDM) is a comprehensive program designed to equip students with the skills and knowledge needed for leadership roles in the business world.
                                </p>
                                <br />
                                <p
                                    className="text-lg leading-relaxed"
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                >
                                    PGDM programs are structured to provide practical learning experiences, case studies, industry interaction, and internships, giving students a holistic understanding of real-world business challenges.
                                </p>

                                <div
                                    className="text-left mt-4"
                                    data-aos="fade-left"
                                    data-aos-duration="2000"
                                >
                                    <h2 className="text-xl font-bold">PGDM Major in Business Analytics</h2>
                                    <p className="text-lg mt-4 leading-relaxed">
                                        Business Analytics is an in-demand field, leveraging data, AI, and advanced analytics to drive business decisions. This PGDM Major prepares students for top-paying roles across industries.
                                    </p>
                                    <br />
                                    <p className="text-lg leading-relaxed">
                                        Graduates find roles in sectors like FMCG, healthcare, finance, and retail, transforming data into insights that drive organizational strategies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 bg-white shadow-2xl rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-100">
                            <h3 className="text-xl font-semibold text-blue-600">High-Paying Careers</h3>
                            <p className="text-gray-600 mt-3">Business Analysts are among the highest-paid professionals in management.</p>
                        </div>
                        <div className="p-6 bg-white shadow-2xl rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-100">
                            <h3 className="text-xl font-semibold text-blue-600">Industry Demand</h3>
                            <p className="text-gray-600 mt-3">Top industries seeking business analysts include FMCG, healthcare, and finance.</p>
                        </div>
                        <div className="p-6 bg-white shadow-2xl rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-100">
                            <h3 className="text-xl font-semibold text-blue-600">In-Demand Skills</h3>
                            <p className="text-gray-600 mt-3">Skills in data visualization, Python, R, and AI are crucial for success in business analytics.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutSection;
