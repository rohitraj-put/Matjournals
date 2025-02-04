import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState, useCallback } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { IoMdCheckboxOutline } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize AOS once
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  // Toggle the mobile menu state
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <nav className="bg-white p-2 shadow-sm sticky top-0 z-50">
      <div className="mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <a href="/" className="text-gray-800 text-lg font-semibold">
          <img src="https://matjournals.com/img/mat.jpg" alt="logo" />
        </a>

        {/* Hamburger Menu for mobile */}
        <button
          onClick={toggleMenu}
          className="text-gray-800 max-md:text-white bg-blue-700 px-2 py-[2px] focus:outline-none md:hidden"
          aria-label="Toggle menu"
        >
          {/* Hamburger Icon and Close Icon */}
          {isOpen ? <IoMdClose size={32} /> : <FiMenu size={32} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`w-full md:flex md:items-center md:w-auto z-50 md:space-x-4 absolute md:relative top-[76px] left-0 md:top-0 md:left-0 p-4 md:p-0 bg-white max-md:bg-blue-700 transition-all duration-500 ease-in-out transform overflow-hidden ${
            isOpen ? "translate-x-0 block" : "translate-x-full hidden"
          } md:translate-x-0`}
        >
          <a
            href="#home"
            className="block  font-semibold py-2 px-2 text-gray-800 max-md:text-white max-md:hover:bg-white hover:text-blue-600 md:inline-block"
          >
            Home
          </a>
          <a
            href="#about"
            className="block font-semibold py-2 px-2 text-gray-800 max-md:text-white max-md:hover:bg-white hover:text-blue-600 md:inline-block"
          >
            Journals
          </a>
          <a
            href="#contact"
            className="block font-semibold py-2 px-2 text-gray-800 max-md:text-white max-md:hover:bg-white hover:text-blue-600 md:inline-block"
          >
            Subscribers
          </a>
          <a
            href="#indexing"
            className="block font-semibold py-2 px-2 text-gray-800 max-md:text-white max-md:hover:bg-white hover:text-blue-600 md:inline-block"
          >
            Indexing
          </a>
          <a
            href="#doi"
            className="block font-semibold py-2 px-2 text-gray-800 max-md:text-white max-md:hover:bg-white hover:text-blue-600 md:inline-block"
          >
            DOI
          </a>
          <a
            href="#ethics"
            className="block font-semibold py-2 px-2 text-gray-800 max-md:text-white max-md:hover:bg-white hover:text-blue-600 md:inline-block"
          >
            Publication Ethics
          </a>
          <a
            href="#careers"
            className="block font-semibold py-2 px-2 text-gray-800 max-md:text-white max-md:hover:bg-white hover:text-blue-600 md:inline-block"
          >
            Careers
          </a>
          <a
            href="#contact"
            className="block font-semibold py-2 px-2 text-gray-800 max-md:text-white max-md:hover:bg-white hover:text-blue-600 md:inline-block"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
