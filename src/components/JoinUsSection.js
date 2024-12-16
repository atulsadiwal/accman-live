import React from 'react';

const JoinUsSection = () => {
    return (
        <>
            <section
                className="relative h-[600px] bg-BG1 bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center text-white text-left">
                <div className="absolute inset-0 bg-[#010035] bg-opacity-50"></div>

                <div className="relative max-w-4xl px-6">
                    <h1 className="text-4xl md:text-xl font-sans tracking-wider">Interested in Joining Us?</h1>
                    <h1 className="mt-4 text-lg md:text-4xl font-bold">
                        Join Us For Information About New Student Admissions
                    </h1>
                    <p className="mt-6 text-sm md:text-base leading-relaxed">
                        Embark on a journey of knowledge and opportunity! Join us for an
                        insightful session on New Student Admissions, where we unravel the
                        exciting possibilities that await prospective students. Discover our
                        unique programs, admission criteria, and the enriching experiences
                        that define our educational community. Don't miss this chance to
                        explore your academic future with us!
                    </p>
                    <button
                        className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md shadow-md transition duration-300"
                    >
                        Contact Us
                    </button>
                </div>
            </section>
        </>
    );
}

export default JoinUsSection;
