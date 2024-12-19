import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <>
            <footer className="bg-[#010035] text-white relative mt-32">
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-yellow-400 w-[90%] lg:w-[70%] h-44 sm:h-36 flex flex-col lg:flex-row items-center justify-between px-12 lg:px-12 shadow-md">
                    <div className="flex flex-col">
                        <span className="text-indigo-900 font-semibold uppercase text-xs tracking-widest mb-1 mt-4 sm:mt-0">
                            Empower Your Education
                        </span>
                        <h2 className="text-md lg:text-xl font-playfair font-medium text-black">
                            Curriculum Explorer:<br /> Find Your Ideal Courses
                        </h2>
                    </div>
                    <div className="flex items-center mt-1 mb-4 sm:mb-0">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="px-2 py-2 text-xs border focus:outline-none text-gray-800 w-48 lg:w-72"
                        />
                        <button className="bg-indigo-900 uppercase tracking-wider text-white px-4 py-2 text-xs ms-2 hover:bg-blue-700 transition">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="container mx-auto mt-4 pt-32 pb-2 px-6 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h3 className='text-sm font-playfair font-semibold mb-4'>Get in Touch</h3>
                            <ul className="space-y-2 text-white text-xs">
                                <li className="hover:text-yellow-400 cursor-pointer">
                                    Admissions Enquiry: 1800-200-0777
                                </li>
                                <li className="hover:text-yellow-400 cursor-pointer">
                                    8744052891-93
                                </li>
                                <li className="hover:text-yellow-400 cursor-pointer">
                                    7290034978
                                </li>
                                <li className="hover:text-yellow-400 cursor-pointer">
                                    info@akgec.ac.in
                                </li>
                                <li className="hover:text-yellow-400 cursor-pointer mt-2">
                                    +(62) 800-567-8990
                                </li>
                                <li className="hover:text-yellow-400 cursor-pointer">
                                    27th Km Milestone, Delhi-Meerut Expressway, P.O. Adhyatmik Nagar,
                                    Ghaziabad - 201009
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-playfair font-semibold mb-4 ">Our Campus</h3>
                            <ul className="space-y-2 text-xs">
                                <li className="hover:text-yellow-400 cursor-pointer">Academic</li>
                                <li className="hover:text-yellow-400 cursor-pointer">
                                    Planning & Administration
                                </li>
                                <li className="hover:text-yellow-400 cursor-pointer">
                                    Campus Safety
                                </li>
                                <li className="hover:text-yellow-400 cursor-pointer">
                                    Facility Services
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-playfair font-semibold mb-4">Academics</h3>
                            <ul className="space-y-2 text-xs">
                                <li className="hover:text-yellow-400 cursor-pointer">Library</li>
                                <li className="hover:text-yellow-400 cursor-pointer">
                                    Time Schedule
                                </li>
                                <li className="hover:text-yellow-400 cursor-pointer">
                                    Apply For Admissions
                                </li>
                                <li className="hover:text-yellow-400 cursor-pointer">Pay Fee</li>
                                <li className="hover:text-yellow-400 cursor-pointer">
                                    Exam Schedule
                                </li>
                                <li className="hover:text-yellow-400 cursor-pointer">
                                    Academic Programs
                                </li>
                                <li className="hover:text-yellow-400 cursor-pointer">
                                    Academic Calendar
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-playfair font-semibold mb-4">Campus Life</h3>
                            <ul className="space-y-2 text-xs">
                                <li className="hover:text-yellow-400 cursor-pointer">
                                    Student Organizations
                                </li>
                                <li className="hover:text-yellow-400 cursor-pointer">
                                    Campus Resources
                                </li>
                                <li className="hover:text-yellow-400 cursor-pointer">
                                    Campus News and Updates
                                </li>
                                <li className="hover:text-yellow-400 cursor-pointer">
                                    Student Services and Support
                                </li>
                                <li className="hover:text-yellow-400 cursor-pointer">
                                    Transportation Information
                                </li>
                                <li className="hover:text-yellow-400 cursor-pointer">
                                    Student Life
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className="border-t border-gray-600 mb-2 mt-8" />
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <p className="text-white text-xs">
                            Copyright © 2023 By Brandshow. All rights reserved.
                        </p>
                        <div className="flex space-x-4 text-xs">
                            <a href="#" className="text-white hover:text-yellow-400">
                                <Facebook />
                            </a>
                            <a href="#" className="text-white hover:text-yellow-400">
                                <Twitter />
                            </a>
                            <a href="#" className="text-white hover:text-yellow-400">
                                <Linkedin />
                            </a>
                            <a href="#" className="text-white hover:text-yellow-400">
                                <Youtube />
                            </a>
                            <a href="#" className="text-white hover:text-yellow-400">
                                <Instagram />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
