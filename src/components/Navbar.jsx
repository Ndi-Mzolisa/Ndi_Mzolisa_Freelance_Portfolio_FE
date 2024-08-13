import React, { useState } from "react";
import logo from "../assets/ndiMzolisaLogo2.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 right-[6rem] pb-[12rem]">
      {/* Logo Navbar */}
      <nav
        id="landingpage-logo-navbar"
        className="mb-2 flex items-center justify-between pt-[0px] pb-[0px]"
      >
        <div className="flex flex-shrink-0 items-center">
          <a href="#primary-multipage-navbar">
            <img
              className="mx-2 w-[100px] rounded-[4px] fixed top-3 left-[2rem] transition-opacity duration-300 hover:opacity-100 opacity-[0.5]"
              src={logo}
              alt="logo"
            />
          </a>
        </div>

        {/* Burger Menu Icon - Hidden when menu is open */}
        {!isMenuOpen && (
          <button
            onClick={toggleMenu}
            className="block md:hidden text-[#216699] focus:outline-none fixed top-3 right-[2rem] z-50"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        )}
      </nav>

      {/* Primary Navigation Navbar */}
      <nav
        id="primary-multipage-navbar"
        className={`fixed top-0 right-0 h-full w-[60%] transition-transform duration-300 ease-in-out bg-white md:bg-transparent z-50 ${
          isMenuOpen ? "transform translate-x-0 z-50" : "transform translate-x-full z-50"
        } md:static md:w-auto md:h-auto md:transform-none md:flex md:items-center md:justify-center md:pt-0 z-50`}
      >
        {/* Close Button for Mobile */}
        {isMenuOpen && (
          <button
            onClick={toggleMenu}
            className="block md:hidden text-[#216699] focus:outline-none absolute top-4 right-4 z-50"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        )}

        <ul
          className={`flex flex-col items-start justify-start pt-[5rem] md:flex-row md:h-auto md:items-center md:justify-evenly md:pt-0`}
        >
          {["Home", "About", "Skills", "Projects"].map((item) => (
            <li key={item} className="w-full md:flex-grow">
              <a
                className="block w-full text-left md:inline-block md:w-auto cursor-pointer bg-slate-100 font-semibold border border-[#216699] py-3 px-5 my-2 md:mx-6 rounded-md text-[#996621] hover:bg-[#216699] hover:border-[#216699] hover:text-[#f9f9f9] transition duration-500"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
