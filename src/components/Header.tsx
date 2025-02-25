// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";
import { HeaderProps } from "../utils/interfaces";

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between bg-white shadow-md p-4 md:p-8">
      <button onClick={toggleSidebar} className="md:hidden focus:outline-none">
        {/* Hamburger Icon */}
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <Link to="/" className="text-xl md:w-full text-center font-bold ">
        Loss To Gain
      </Link>
      <div>
        {/* Placeholder for user profile icon */}
        <Link to={"/profile"}>
          <svg
            className="w-8 h-8 text-gray-700"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Header;
