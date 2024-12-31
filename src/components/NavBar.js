"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Info, Clipboard, Book, GraduationCap } from 'lucide-react';
import NotificationSlider from "./NotificationSlider";
import Link from "next/link";

const NavItems = [
  {
    name: "ABOUT US",
    dropdown: ["About ACCMAN", "MBA Program", "Vision & Mission", "Board of Governors", "What Sets ACCMAN Apart"],
  },
  {
    name: "PROGRAMMES",
    dropdown: ["PGDM Finance, Mktg, HR...", "PGDM Business Analytics", "Program Architecture", "Learning @ ACCMAN", "Program Structure", "Mentorship Program", "Student Support Service", "AICTE Notification"],
  },
  {
    name: "FACULTY",
    dropdown: ["Faculty", "Distinguished Faculty", "Faculty Pool", "Teaching Methodology"],
  },
  {
    name: "ADMISSION",
    dropdown: ["PGDM - Eligibility", "Fee Structure", "GD/PI", "Apply Online", "Enquiry Form", "Brochure Download"],
  },
  {
    name: "PLACEMENTS",
    dropdown: ["CRIC", "Top Placements", "List Of Recruiters", "Interaction With People", "Career Support Services", "Alumni"],
  },
  {
    name: "FACILITIES",
    dropdown: ["Infrastructure", "Hostel", "Cafeteria & Mess", "Medicare", "Safety Measures"],
  },
  {
    name: "STUDENT LIFE",
    dropdown: ["Student Development Programs", "Beyond Academics", "Life @ ACCMAN", "Events", "LMS", "Convocation @ ACCMAN", "Photo Gallery", "Video Gallery", "Publication @ ACCMAN"],
  },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownDirection, setDropdownDirection] = useState(null);

  const handleDropdownPosition = (e) => {
    const rect = e.target.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    if (rect.right + 450 > windowWidth) {
      setDropdownDirection('right');
    } else {
      setDropdownDirection('left');
    }
  };

  return (
    <>
      <div className="sticky top-0 z-[100] shadow-lg w-full flex justify-between pl-4 backdrop-blur-md bg-white/40">
        <div className="w-[12%] max-[1400px]:w-[20%] flex justify-center items-center">
          <Link href="/">
            <img src="/image/accman-logo.jpg" alt="logo" className="h-12 w-auto" />
          </Link>
        </div>
        <div className="w-[10%] max-[1400px]:hidden flex justify-center items-center">
          <NotificationSlider />
        </div>
        <div className="w-[70%] max-[1400px]:w-[80%] flex flex-col mx-3">
          <div className="bg-[#1E293B] text-white text-sm flex justify-end items-center">
            <div className="flex">
              <a href="tel:+18002000777" className="bg-transparent text-white px-6 py-2 font-bold shadow-lg">
                <span className="text-sm uppercase hover:underline hover:text-gray-500">
                  CALL US
                </span>
              </a>
              <a className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 text-sm font-bold shadow-lg">
                <span className="cursor-pointer uppercase">
                  Contact US
                </span>
              </a>
            </div>
          </div>
          <div className="flex justify-end items-center gap-0 xl:gap-4 relative">
            <nav className="hidden md:flex gap-0 xl:gap-4">
              {NavItems.map((item, index) => (
                <div
                  className="relative group"
                  key={index}
                  onMouseEnter={(e) => {
                    setOpenDropdown(index);
                    handleDropdownPosition(e);
                  }}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <ul className="list-none">
                    <li className="">
                      <button className="text-sm p-2 font-semibold text-gray-700 hover:text-blue-600 flex items-center transition duration-300 ease-in-out">
                        {item.name} <ChevronDown size={16} className="ml-1" />
                      </button>
                    </li>
                  </ul>
                  {openDropdown === index && (
                    <div
                      className={`absolute top-full ${dropdownDirection === 'right' ? 'right-0' : 'left-0'} bg-white border shadow-xl z-20 transition-all duration-300 ease-in-out rounded-lg flex`}
                      style={{ minWidth: "550px" }}
                    >
                      <div className="w-1/2 pl-2">
                        <ul className="py-4">
                          {item.dropdown.map((subItem, subIndex) => (
                            <li key={subIndex} className="transition duration-200">
                              <a
                                href="#"
                                className="block text-sm hover:scale-[0.96] transition-all duration-200 ease-linear font-semibold px-2 py-1.5 text-gray-700 hover:text-blue-600"
                              >
                                {subItem}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="w-1/2 flex flex-col items-center h-full">
                        <div className="w-full h-1/4">
                          <img src="/image/article2.jpg" alt="Image" className="object-cover rounded-tr-lg h-full w-full" />
                        </div>
                        <div className="w-full flex flex-col h-3/4 bg-indigo-950 rounded-br-lg p-4">
                          <div className="flex flex-wrap justify-between items-center h-full">
                            <div className="flex flex-col items-center space-y-2 w-1/2 border-b border-r border-white justify-center p-4">
                              <Info size={28} className="text-white" />
                              <span className="text-xs text-white">Overview</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2 w-1/2 border-b justify-center p-4">
                              <Clipboard size={28} className="text-white" />
                              <span className="text-xs text-white">Curriculum</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2 w-1/2 border-r border-white justify-center p-4">
                              <Book size={28} className="text-white" />
                              <span className="text-xs text-white">Resources</span>
                            </div>
                            <div className="flex flex-col items-center space-y-2 w-1/2 justify-center p-4">
                              <GraduationCap size={28} className="text-white" />
                              <span className="text-xs text-white">Graduation</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg">
              {NavItems.map((item, index) => (
                <div key={index}>
                  <button
                    className="w-full text-left px-6 py-3 text-gray-700 font-semibold flex justify-between items-center border-b"
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                  >
                    {item.name} <ChevronDown size={16} />
                  </button>
                  {openDropdown === index && (
                    <ul className="bg-gray-50">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href="#"
                            className="block px-8 py-3 text-sm text-gray-700 hover:bg-gray-200"
                          >
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
