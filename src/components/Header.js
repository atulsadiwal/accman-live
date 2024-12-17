"use client";

import { IoMdClose } from "react-icons/io";
import { FaFacebook, FaTwitter, FaInstagram, FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../public/image/accman-logo-3.jpg";

const navItems = [
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

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="relative z-20">
      {/* Layer 1: Thin Header */}
      <div className="absolute top-0 left-0 right-0 bg-[#181824] opacity-95 text-white text-sm flex justify-between px-4 md:px-10 py-2">
        <div>
          <a href="tel:18002000777" className="hover:underline text-[0.8rem]">
            Phone: 1800-200-0777
          </a>
        </div>
        <div className="flex space-x-6 pt-[0.4rem]">
          <a href="#" className="hover:underline text-[0.9rem]">
            <FaFacebook />
          </a>
          <a href="#" className="hover:underline text-[0.9rem]">
            <FaTwitter />
          </a>
          <a href="#" className="hover:underline text-[0.9rem]">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Layer 2: Transparent Header */}
      <div className="absolute top-8 left-0 right-0 py-2 px-4 md:px-10 text-white bg-transparent  hover:text-purple-900 mx-1 my-2 rounded-md">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-md font-bold">
            <img src={logo} alt="logo" className="h-8 w-24 rounded-sm" />
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <a href="#" className="text-white text-xs group-hover:text-purple-500  flex ">
                  {item.name}<IoIosArrowDown className="ps-1  text-lg" />
                </a>
                {/* Dropdown for Desktop */}
                <div className="absolute left-0 bg-purple-100 text-purple-900 shadow-lg opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100 origin-top z-10 min-w-[250px] w-auto">
                  <ul className="p-4 space-y-2">
                    {item.dropdown.map((dropdownItem, i) => (
                      <li key={i} className="hover:text-purple-700 text-xs">
                        {dropdownItem}
                        <hr className="pt-2" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </nav>

          {/* Login Button */}
          <div className="hidden md:block">
            <button className="bg-white text-purple-900 px-6 py-2 text-xs rounded shadow hover:bg-purple-700 hover:text-white">
              Login
            </button>
          </div>

          {/* Menu Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <IoMdClose className="h-6 w-6 text-white" />
              ) : (
                <FaBars className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-purple-900 shadow-lg z-50">
          <ul className="p-4 space-y-4">
            {navItems.map((item, index) => (
              <li key={index} className="space-y-2">
                <div className="relative group">
                  <a href="#" className="block text-purple-900 font-medium hover:text-purple-700">
                    {item.name}
                  </a>
                  {/* Dropdown for Mobile */}
                  <div className="absolute top-[calc(100%+8px)] left-0 top-10 bg-white text-purple-900 shadow-lg opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100 origin-top z-10">
                    <ul className="p-4 space-y-2">
                      {item.dropdown.map((dropdownItem, i) => (
                        <li key={i} className="hover:text-purple-700 text-xs">
                          {dropdownItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
            <li>
              <button className="w-full bg-purple-900 text-white px-4 py-2 rounded shadow hover:bg-purple-700">
                Login
              </button>
            </li>
          </ul>

          {/* Close Button */}
          <div className="absolute top-4 right-4 z-50">
            <button onClick={() => setIsMenuOpen(false)}>
              <IoMdClose className="h-6 w-6 text-purple-900" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
