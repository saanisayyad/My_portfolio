import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Menu and Close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 bg-blue-200 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Side: Logo */}
        <h1 className="text-xl font-bold ml-10">MR. SAYYAD</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center mr-10">
          <li>
            <a href="#Hero" className="hover:text-blue-900">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#Education" className="hover:text-blue-900">
              EDUCATION
            </a>
          </li>
          <li>
            <a href="#Skills" className="hover:text-blue-900">
              SKILLS
            </a>
          </li>
          <li>
            <a href="#Projects" className="hover:text-blue-900">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#Contact" className="hover:text-blue-900">
              CONTACT
            </a>
          </li>
          <li>
            <a href="/Mohammadsaani_DA_Resume.pdf" target="_blank">
              <button className="border border-b-blue-900 text-black px-4 py-2 rounded-3xl hover:border-blue-900 hover:text-blue-900 transition">
                RESUME
              </button>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="mr-5">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-row flex-wrap justify-center items-center space-x-4 bg-blue-100 py-4">
          <li>
            <a href="#Hero" onClick={() => setIsOpen(false)} className="hover:text-blue-900">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#Education" onClick={() => setIsOpen(false)} className="hover:text-blue-900">
              EDUCATION
            </a>
          </li>
          <li>
            <a href="#Skills" onClick={() => setIsOpen(false)} className="hover:text-blue-900">
              SKILLS
            </a>
          </li>
          <li>
            <a href="#Projects" onClick={() => setIsOpen(false)} className="hover:text-blue-900">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#Contact" onClick={() => setIsOpen(false)} className="hover:text-blue-900">
              CONTACT
            </a>
          </li>
          <li>
            <a href="/Mohammadsaani_DA_Resume.pdf" target="_blank">
              <button className="border border-b-blue-900 text-black px-4 py-2 rounded-3xl hover:border-blue-900 hover:text-blue-900 transition">
                RESUME
              </button>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
