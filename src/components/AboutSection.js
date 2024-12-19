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
    <section className="bg-gradient-to-r from-blue-400 to-purple-500 flex flex-col justify-center pb-5">
      <div className="relative">
        <img
          src="/image/pgdm/pgdm-about.jpeg"
          alt="PGDM Program"
          className="w-full h-60 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h2 className="text-5xl font-bold text-white text-center z-10 drop-shadow-lg">
            About PGDM
          </h2>
        </div>
      </div>

      <div className="max-w-[1450px] mx-auto px-4 py-8 flex-1">
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="text-lg text-gray-200 mt-6 leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            The Post Graduate Diploma in Management (PGDM) is a comprehensive program designed to equip students with the skills and knowledge needed for leadership roles in the business world.
          </p>
          <br />
          <p
            className="text-lg text-gray-200 mt-6 leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            PGDM programs are structured to provide practical learning experiences, case studies, industry interaction, and internships, giving students a holistic understanding of real-world business challenges.
          </p>
        </div>

        <div className="max-w-5xl mx-auto text-center mt-8" data-aos="fade-up" data-aos-duration="1500">
          <h2 className="text-3xl font-bold text-white mb-4">PGDM Major in Business Analytics</h2>
          <p className="text-lg text-gray-200 mt-4 leading-relaxed">
            Business Analytics is an in-demand field, leveraging data, AI, and advanced analytics to drive business decisions. This PGDM Major prepares students for top-paying roles across industries.
          </p>
          <br />
          <p className="text-lg text-gray-200 mt-4 leading-relaxed">
            Graduates find roles in sectors like FMCG, healthcare, finance, and retail, transforming data into insights that drive organizational strategies.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-100">
            <h3 className="text-xl font-semibold text-blue-600">High-Paying Careers</h3>
            <p className="text-gray-600 mt-3">Business Analysts are among the highest-paid professionals in management.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-100">
            <h3 className="text-xl font-semibold text-blue-600">Industry Demand</h3>
            <p className="text-gray-600 mt-3">Top industries seeking business analysts include FMCG, healthcare, and finance.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-100">
            <h3 className="text-xl font-semibold text-blue-600">In-Demand Skills</h3>
            <p className="text-gray-600 mt-3">Skills in data visualization, Python, R, and AI are crucial for success in business analytics.</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 text-center" data-aos="fade-up" data-aos-duration="1600">
        <h3 className="text-3xl font-semibold text-white mb-4">
          Ready to Accelerate Your Career?
        </h3>
        <p className="text-lg text-gray-200 mb-6">
          Apply for the PGDM program today and take the first step towards becoming a future business leader.
        </p>
        <a
          href="/apply"
          className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg mt-6 inline-block hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
