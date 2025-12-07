import React from 'react';
import { Link, NavLink } from 'react-router';
import NavLogo from '../../assets/img/logoNav.png';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, singOutUser } = useAuth();

  const handleSignOut = () => {
    singOutUser()
      .then(result => {
        console.log(result);
        toast.success('User Signed Out Successfully');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/Services"
          className={({ isActive }) =>
            `font-semibold ${
              isActive ? 'text-[#33929d]' : 'text-black font-extrabold'
            }`
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/SendParcel"
          className={({ isActive }) =>
            `font-semibold ${
              isActive ? 'text-[#33929d]' : 'text-black font-extrabold'
            }`
          }
        >
          Send Parcel
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/coverage"
          className={({ isActive }) =>
            `font-semibold ${
              isActive ? 'text-[#33929d]' : 'text-black font-extrabold'
            }`
          }
        >
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            `font-semibold ${
              isActive ? 'text-[#33929d]' : 'text-black font-extrabold'
            }`
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            `font-semibold ${
              isActive ? 'text-[#33929d]' : 'text-black font-extrabold'
            }`
          }
        >
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `font-semibold ${
              isActive ? 'text-[#33929d]' : 'text-black font-extrabold'
            }`
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `font-semibold ${
              isActive ? 'text-[#33929d]' : 'text-black font-extrabold'
            }`
          }
        >
          Contact
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/dashboard/my-parcels"
            className={({ isActive }) =>
              `font-semibold ${
                isActive ? 'text-[#33929d]' : 'text-black font-extrabold'
              }`
            }
          >
            My Parcels
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm mb-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm font-extrabold dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link>
          <img className="h-12" src={NavLogo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-extrabold px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-4">
          {/* Sign In button */}
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn rounded-lg border border-gray-300 bg-white px-6"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/login"
              className="btn rounded-lg border border-gray-300 bg-white px-6"
            >
              Sign In
            </Link>
          )}

          {/* Be a rider button */}
          <Link
            to="/be-a-rider"
            className="btn rounded-lg bg-lime-300 text-black font-semibold px-6 flex items-center gap-2"
          >
            Be a rider
            <span className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="white"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7m0 0H8m9 0v9"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
