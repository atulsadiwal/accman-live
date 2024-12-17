import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

// Navigation Items Data
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

// Main Navbar Component
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  return (
    <>
      {/* Top Section */}
      <div className="bg-[#1E293B] text-white text-sm py-2 px-4 md:px-10 flex justify-between items-center">
        <div className="font-semibold">
          📞 1800-200-0777
        </div>
        <div>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-base font-bold shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
            LOGIN
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white shadow-lg py-3 px-4 md:px-10 flex justify-between items-center relative">
        {/* Logo */}
        <div>
          <img src="/image/accman-logo.jpg" alt="logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {NavItems.map((item, index) => (
            <div
              className="relative group"
              key={index}
              onMouseEnter={() => setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {/* Top-level Item */}
              <button className="font-semibold text-gray-700 hover:text-blue-600 flex items-center transition duration-300 ease-in-out">
                {item.name} <ChevronDown size={16} className="ml-1" />
              </button>

              {/* Dropdown */}
              {openDropdown === index && (
                <div className="absolute -left-20 bg-white border shadow-xl z-20 animate-slide-down opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ul className="w-64">
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex} className="hover:bg-blue-50 transition duration-200">
                        <a
                          href="#"
                          className="block text-sm font-semibold px-2 py-3 text-gray-700 hover:text-blue-600"
                        >
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {NavItems.map((item, index) => (
            <div key={index}>
              {/* Mobile Top-level Item */}
              <button
                className="w-full text-left px-6 py-3 text-gray-700 font-semibold flex justify-between items-center border-b"
                onClick={() =>
                  setOpenDropdown(openDropdown === index ? null : index)
                }
              >
                {item.name} <ChevronDown size={16} />
              </button>

              {/* Dropdown */}
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
    </>
  );
};

export default NavBar;
