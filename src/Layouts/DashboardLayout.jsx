import React from 'react';
import { Outlet, NavLink } from 'react-router';
import {
  FiHome,
  FiTruck,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiBell,
} from 'react-icons/fi';

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open bg-gray-100 min-h-screen">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* ============ MAIN CONTENT ============ */}
      <div className="drawer-content flex flex-col">
        {/* TOP NAVBAR */}
        <div className="navbar bg-white shadow-sm px-4 lg:px-6 fixed top-0 left-0 right-0 z-30">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-ghost btn-square"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                />
              </svg>
            </label>
          </div>

          <div className="flex-1 lg:hidden">
            <img src="/assets/logo.png" className="h-8" />
          </div>

          {/* Right side user area */}
          <div className="flex-none gap-4 hidden lg:flex ml-auto">
            <FiBell className="text-xl cursor-pointer" />

            <div className="flex items-center gap-3 px-2">
              <img
                src="/assets/user.png"
                className="w-10 h-10 rounded-full border"
              />
              <div>
                <p className="font-semibold">Zahid Hossain</p>
                <p className="text-gray-400 text-xs">Admin</p>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-4 lg:p-8 mt-16 lg:mt-0">
          <Outlet />
        </div>
      </div>

      {/* ============ SIDEBAR ============ */}
      <div className="drawer-side z-40">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <aside className="w-64 bg-white min-h-full shadow-md flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b">
            <img src="/assets/logo.png" className="h-10" />
          </div>

          {/* MENU */}
          <ul className="menu p-4 text-base-content flex-1 space-y-1">
            <li className="menu-title text-xs opacity-70">MENU</li>

            <MenuItem icon={<FiHome />} to="/dashboard" label="Dashboard" />
            <MenuItem
              icon={<FiTruck />}
              to="/dashboard/deliveries"
              label="All Deliveries"
            />
            <MenuItem icon={<FiHome />} to="/dashboard/stores" label="Stores" />
            <MenuItem
              icon={<FiHome />}
              to="/dashboard/pricing"
              label="Pricing Plan"
            />
            <MenuItem
              icon={<FiHome />}
              to="/dashboard/coverage"
              label="Coverage Area"
            />

            <li className="menu-title mt-4 text-xs opacity-70">GENERAL</li>

            <MenuItem
              icon={<FiSettings />}
              to="/dashboard/settings"
              label="Settings"
            />
            <MenuItem
              icon={<FiHelpCircle />}
              to="/dashboard/help"
              label="Help"
            />

            <li>
              <NavLink
                to="/logout"
                className="flex items-center gap-3 text-red-600 font-semibold"
              >
                <FiLogOut /> Logout
              </NavLink>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;

/* ----------------- MENU ITEM COMPONENT ---------------- */
const MenuItem = ({ icon, to, label }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 font-medium ${
          isActive ? 'bg-gray-200 text-[#03373d]' : ''
        }`
      }
    >
      {icon} {label}
    </NavLink>
  </li>
);
