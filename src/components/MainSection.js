import React from "react";

const MainSection = () => {
    return (
        <>
            <div className="relative w-full h-screen z-10">
                <div className="absolute inset-0 bg-cover bg-center bg-BG2 filter brightness-50">
                    <div className="absolute inset-0 bg-purple-950 opacity-50"></div>
                </div>

                <div className="relative z-10 h-full flex flex-col text-white justify-center items-start px-4 md:px-24 pt-0 sm:pt-28">
                    <h6 className="tracking-widest mb-2 text-xl md:text-xl">BEST UNIVERSITY IN DELHI NCR</h6>
                    <h1 className="text-4xl md:text-7xl font-semibold mb-4 leading-tight font-playfair">
                        ACCMAN Institute of <br className="hidden md:block" /> Management
                    </h1>
                    <p className=" text-sm md:text-sm font-semibold leading-5 sm:leading-9">
                        Since 2006, ACCMAN provides students with high-quality professional education.
                        <br className="hidden md:block" /> Together with us, you will have deeper knowledge of the subjects important <br className="hidden md:block" />
                        for your future profession.
                    </p>
                </div>
            </div>
        </>
    );
}

export default MainSection;
