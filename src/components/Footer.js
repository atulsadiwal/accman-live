import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <>
            <footer className="relative bg-blue-900 text-white">
                {/* Empower Your Education Section */}
                <div className="relative bg-white">
                    {/* Top Half Background - White */}
                    <div className="h-32 bg-white"></div>

                    {/* Empower Box Overlapping Both Backgrounds */}
                    <div className="absolute inset-x-0 top-16 mx-auto w-2/3 px-6 py-6 rounded-lg shadow-lg z-10 flex flex-col md:flex-row items-center md:items-start justify-between">
                        {/* Background Image with Opacity */}
                        <div
                            className="absolute inset-0 bg-cover bg-no-repeat rounded-lg"
                            style={{
                                backgroundColor: "#ffc53a",
                                backgroundImage: `url('/images/yellow.jpg')`,
                            }}
                        ></div>

                        {/* Left Section: Heading & Description */}
                        <div className="md:w-1/2 text-left relative z-20">
                            <h2 className="text-3xl font-bold text-blue-800">Empower Your Education</h2>
                            <p className="text-gray-900 mt-2">
                                Curriculum Explorer: Find Your Ideal Courses.
                            </p>
                        </div>

                        {/* Right Section: Form */}
                        <div className="md:w-1/2 mt-4 md:mt-0 flex flex-col items-center justify-center relative z-20">
                            <form className="flex flex-col sm:flex-row items-center w-full sm:w-auto space-y-2 sm:space-y-0 sm:space-x-2">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Bottom Half Background - Footer Color */}
                    <div className="h-24 bg-blue-900"></div>
                </div>

                {/* Main Footer Section */}
                <div className="container mx-auto px-6 py-8 lg:flex lg:justify-between lg:items-start">
                    {/* Left Section */}
                    <div className="lg:w-1/3 space-y-4">
                        <p className="text-gray-400">
                            Admissions Enquiry: <span className="text-white">1800-200-0777</span>
                        </p>
                        <p className="text-gray-400">
                            Address: 27th Km Milestone, Delhi-Meerut Expressway, P.O. Adhyatmik Nagar, Ghaziabad – 201009
                        </p>
                    </div>

                    {/* Middle Sections */}
                    <div className="grid grid-cols-2 gap-6 lg:gap-12 lg:grid-cols-3 lg:w-2/3">
                        {/* Our Campus */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Our Campus</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/academic" className="hover:text-yellow-400 transition">
                                        Academic
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/planning" className="hover:text-yellow-400 transition">
                                        Planning & Administration
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/safety" className="hover:text-yellow-400 transition">
                                        Campus Safety
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/facility-services" className="hover:text-yellow-400 transition">
                                        Facility Services
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Academics */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Academics</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/library" className="hover:text-yellow-400 transition">
                                        Library
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/time-schedule" className="hover:text-yellow-400 transition">
                                        Time Schedule
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/admissions" className="hover:text-yellow-400 transition">
                                        Apply For Admissions
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/exam-schedule" className="hover:text-yellow-400 transition">
                                        Exam Schedule
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/academic-calendar" className="hover:text-yellow-400 transition">
                                        Academic Calendar
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Campus Life */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Campus Life</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/student-organizations" className="hover:text-yellow-400 transition">
                                        Student Organizations
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/campus-resources" className="hover:text-yellow-400 transition">
                                        Campus Resources
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/student-life" className="hover:text-yellow-400 transition">
                                        Student Life
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/support" className="hover:text-yellow-400 transition">
                                        Student Services and Support
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/transportation" className="hover:text-yellow-400 transition">
                                        Transportation Information
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="bg-blue-900 py-6">
                    <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <img
                                src="/logo.png" // Replace with your logo path
                                alt=""
                                className="h-8"
                            />
                            <p className="text-gray-400">Copyright &copy; 2024 AKG University. All rights reserved.</p>
                        </div>
                        <div className="flex space-x-4 mt-4 lg:mt-0">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition transform hover:scale-110"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition transform hover:scale-110"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition transform hover:scale-110"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition transform hover:scale-110"
                            >
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
