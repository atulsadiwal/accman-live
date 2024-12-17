import React from "react";

const MainSection = () => {
    return (
        <>
            <div className="relative w-full h-screen z-10">
                <div className="absolute inset-0 bg-cover bg-center bg-BG2 filter brightness-50">
                    <div className="absolute inset-0 bg-purple-950 opacity-50"></div>
                </div>

                <div className="relative z-10 h-full flex flex-col text-white justify-center items-start px-4 max-w-[1400px] mx-auto">
                    <h6 className="tracking-widest mb-2 text-sm">BEST UNIVERSITY IN DELHI NCR</h6>
                    <h1 className="text-4xl md:text-7xl font-semibold mb-4 leading-tight font-playfair">
                        ACCMAN Institute of <br className="hidden md:block" /> Management
                    </h1>
                    <p className="max-w-2xl font-normal text-lg">
                        Since 2006, ACCMAN provides students with high-quality professional education. Together with us, you will have deeper knowledge of the subjects important
                        for your future profession.
                    </p>
                </div>
            </div>
        </>
    );
}

export default MainSection;
