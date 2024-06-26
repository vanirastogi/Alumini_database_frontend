import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar fixed top-0 left-0 right-0 bg-white shadow-md z-40">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 items-center py-3 md:py-5">
        <div className="flex items-center">
          <img
            className="h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RzOQ_E52YXYZQ4Vwrbnbs_HaBhq0ZEvXrQ&s"
            alt="Logo"
          />
        </div>
        <div className="md:hidden flex justify-end">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:col-span-2 md:justify-end space-x-1 text-sm md:text-base text-gray-700`}
        >
          <li>
            <Link
              to="/"
              className="nav-link px-3 flex text-sm shrink md:text-base"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Alumini_Directory"
              className="nav-link flex px-2 text-sm md:text-base"
            >
              Alumni Directory
            </Link>
          </li>
          <li>
            <Link
              to="/Alumini-Achivements"
              className="nav-link flex px-2 sm:text-sm md:text-base"
            >
              Achievements
            </Link>
          </li>
          <li>
            <Link
              to="/Netwoking_Opportunities"
              className="nav-link flex px-2 sm:text-sm md:text-base"
            >
              Networking
            </Link>
          </li>
          <li>
            <a
              href="#news"
              className="nav-link flex px-2 sm:text-sm md:text-base"
            >
              News
            </a>
          </li>
          <li>
            <a
              href="/Contact"
              className="nav-link flex px-2 sm:text-sm md:text-base"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="#login"
              className="bg-gray-200 hover:bg-gray-300 text-purple-600 px-4 py-2 rounded flex justify-center text-sm md:text-base"
            >
              LOGIN/SIGNUP
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
