import React from "react";
import { MdDashboard } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { CiStreamOn } from "react-icons/ci";
import { MdAutoGraph } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen bg-white p-6 flex flex-col shadow-lg           ">
      {/* Logo */}
      <div className="mb-12">
        <h1 className="text-2xl">
          <span className="text-pr-color font-bold">Hospital</span> logo
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }: { isActive: boolean }) =>
                `flex items-center gap-3 ${
                  isActive ? "text-pr-color" : "text-gray-500"
                } hover:text-pr-color`
              }
            >
              <div className="text-xl">
                <MdDashboard />
              </div>
              <Link to="/dashboard">Dashboard</Link>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/appointment"
              className={({ isActive }: { isActive: boolean }) =>
                `flex items-center gap-3 ${
                  isActive ? "text-pr-color" : "text-gray-500"
                } hover:text-pr-color`
              }
            >
              <div className="text-xl">
                <TbReport />
              </div>
              <Link to="/appointment">Appointment request</Link>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tables"
              className={({ isActive }: { isActive: boolean }) =>
                `flex items-center gap-3 ${
                  isActive ? "text-pr-color" : "text-gray-500"
                } hover:text-pr-color`
              }
            >
              <div className="text-xl">
                <CiStreamOn />
              </div>
              Tables
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articles"
              className={({ isActive }: { isActive: boolean }) =>
                `flex items-center gap-3 ${
                  isActive ? "text-pr-color" : "text-gray-500"
                } hover:text-pr-color`
              }
            >
              <div className="text-xl">
                <MdAutoGraph />
              </div>
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }: { isActive: boolean }) =>
                `flex items-center gap-3 ${
                  isActive ? "text-pr-color" : "text-gray-500"
                } hover:text-pr-color`
              }
            >
              <div className="text-xl">
                <CgProfile />
              </div>
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="pt-6 border-t">
        <NavLink
          to="/logout"
          className={({ isActive }: { isActive: boolean }) =>
            `flex items-center gap-3 ${
              isActive ? "text-pr-color" : "text-gray-500"
            } hover:text-pr-color`
          }
        >
          <div className="text-xl">
            <IoLogOutOutline />
          </div>
          Log out
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
