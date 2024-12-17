import React from 'react';

const TopCard = () => {
    return (
        <>
            <div className="px-4 sm:px-16 bg-indigo-900">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    <div className="text-white p-6 flex flex-col justify-between min-h-60">
                        <div>
                            <h3 className="text-2xl font-semibold font-playfair">Core Academic & Knowledge</h3>
                            <p className="mt-4">
                                Hub for holistic education, cultivating academic excellence and personal growth through comprehensive learning.
                            </p>
                        </div>
                        <a
                            href="#" 
                            className="mt-4 flex items-center text-sm font-semibold text-white transform transition-transform duration-300 hover:scale-105"
                        >
                            READ MORE <span className="ml-2">&rarr;</span>
                        </a>
                    </div>

                    <div className="bg-indigo-900 text-white p-6 flex flex-col justify-between min-h-60">
                        <div>
                            <h3 className="text-2xl font-semibold font-playfair">College Advisory</h3>
                            <p className="mt-4">
                                Guide students through higher education choices for informed academic success and future careers.
                            </p>
                        </div>
                        <a
                            href="#"
                            className="mt-4 flex items-center text-sm font-semibold text-white transform transition-transform duration-300 hover:scale-105"
                        >
                            READ MORE <span className="ml-2">&rarr;</span>
                        </a>
                    </div>

                    <div className="min-h-60 md:h-full bg-BG3 bg-cover bg-top">
                    </div>

                    <div className="bg-indigo-900 text-white p-6 flex flex-col justify-between min-h-60">
                        <div>
                            <h3 className="text-2xl font-semibold font-playfair">Curriculum & Pedagogy</h3>
                            <p className="mt-4 ">
                                Creating optimal learning through content design and teaching methods for effective educational outcomes.
                            </p>
                        </div>
                        <a
                            href="#"
                            className="mt-4 flex items-center text-sm font-semibold text-white transform transition-transform duration-300 hover:scale-105"
                        >
                            READ MORE <span className="ml-2">&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopCard;
