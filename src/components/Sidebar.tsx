// src/components/Sidebar.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarProps } from "../utils/interfaces";

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 md:top-80 z-30 md:w-[20%] bg-white overflow-y-auto transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="flex items-center justify-between p-4 ">
        <button
          onClick={toggleSidebar}
          className="md:hidden focus:outline-none"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block px-4 py-2 rounded ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/workouts"
              className={({ isActive }) =>
                `block px-4 py-2 rounded ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              Exercises
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/plans"
              className={({ isActive }) =>
                `block px-4 py-2 rounded ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              AI Workout Plans
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `block px-4 py-2 rounded ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              Personalized Health Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `block px-4 py-2 rounded ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                `block px-4 py-2 rounded ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
