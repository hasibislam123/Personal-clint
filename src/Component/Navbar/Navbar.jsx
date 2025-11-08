import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { GoHomeFill } from "react-icons/go";
import { FaPlusCircle, FaListAlt, FaPenFancy, FaUser, FaUserCircle } from "react-icons/fa";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { AuthContext } from "../../Contexts/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // Links for everyone
  const publicLinks = (
    <li>
      <NavLink to="/" className="flex items-center gap-2">
        <GoHomeFill /> Home
      </NavLink>
    </li>
  );

  // Links only for logged-in users
  const privateLinks = user && (
    <>
      <li>
        <NavLink to="/addtransaction" className="flex items-center gap-2">
          <FaPlusCircle /> Add Transaction
        </NavLink>
      </li>
      <li>
        <NavLink to="/mytransactions" className="flex items-center gap-2">
          <FaListAlt /> My Transactions
        </NavLink>
      </li>
      <li>
        <NavLink to="/updatetransaction" className="flex items-center gap-2">
          <FaPenFancy /> Update Transaction
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 shadow-lg sticky top-0 z-50">
      <div className="navbar text-white px-4 md:px-8 max-w-7xl mx-auto">
        {/* Left - Logo */}
        <div className="navbar-start">
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide flex items-center gap-2"
          >
            Expense Tracker
          </Link>
        </div>

        {/* Center - Menu Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 text-white font-medium">
            {publicLinks}
            {privateLinks}
          </ul>
        </div>

        {/* Right - User / Login */}
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full border-2 border-white flex items-center justify-center bg-white/10">
                  {user.photoURL ? (
                    <img
                      alt="User Avatar"
                      src={user.photoURL}
                      referrerPolicy="no-referrer"
                      className="rounded-full"
                    />
                  ) : (
                    <FaUserCircle className="text-white text-3xl" />
                  )}
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 text-gray-700"
              >
                <li className="border-b pb-2 mb-2">
                  <p className="font-semibold">{user.displayName || "User"}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </li>
                <li>
                  <Link to="/profile">
                    <FaUser /> Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logOut}
                    className="flex items-center gap-2 text-red-500 font-semibold hover:bg-red-50"
                  >
                    <IoLogOut /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-sm rounded-full bg-white text-purple-600 font-semibold hover:bg-gray-100 transition flex items-center gap-2"
            >
              <IoLogIn /> Sign In
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden bg-white/10 backdrop-blur-md text-white py-2 flex justify-center">
        <ul className="menu menu-horizontal gap-4 text-sm">
          {publicLinks}
          {privateLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
