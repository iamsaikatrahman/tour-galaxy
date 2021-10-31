import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/brand-logo.png";
import useAuth from "../../hooks/useAuth";
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed z-10 top-0 w-full bg-white text-black shadow-sm">
      <nav className="container mx-auto  flex justify-between items-center h-20 ">
        <Link to="/">
          <div className="flex items-center">
            <img
              src={logo}
              className="h-20"
              style={{ width: "90px", padding: "5px" }}
              alt=""
            />
            <h2 className="ml-2 font-bold  text-2xl md:text-3xl">
              Tour <span className="text-red-500 underline">Galaxy</span>
            </h2>
          </div>
        </Link>
        <div className="px-4 cursor-pointer lg:hidden" onClick={handleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="pr-4 lg:block hidden">
          <Link className="p-2 text-lg font-medium" to="/home">
            Home
          </Link>
          {!user?.email && (
            <Link className="p-2 text-lg font-medium" to="/aboutus">
              About Us
            </Link>
          )}
          {!user?.email && (
            <Link className="p-2 text-lg font-medium" to="/home">
              Contact Us
            </Link>
          )}
          {!user?.email && (
            <Link className="p-2 text-lg font-medium" to="/blogs">
              Blog
            </Link>
          )}
          {user?.email && (
            <Link className="p-2 text-lg font-medium" to="/mybooking">
              My Booking
            </Link>
          )}
          {user?.email && (
            <Link className="p-2 text-lg font-medium" to="/managebooking">
              Manage Booking
            </Link>
          )}
          {user?.email && (
            <Link className="p-2 text-lg font-medium" to="/addtour">
              Add Tours
            </Link>
          )}
          {user?.email ? (
            <span className="font-medium text-lg">
              <img
                src={user.photoURL}
                alt=""
                className="h-8 w-8 rounded-full inline"
              />{" "}
              {user.displayName}
            </span>
          ) : (
            <Link to="/login">
              <button className="m-2 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300">
                Login
              </button>
            </Link>
          )}
          {user?.email && (
            <button
              onClick={logOut}
              className="m-2 p-2 bg-blue-500 text-gray-100 text-xl font-bold rounded-lg focus:border-4 border-blue-300"
            >
              <IoLogOutOutline />
            </button>
          )}
        </div>
      </nav>
      {isOpen && (
        <div
          className="grid justify-items-center lg:hidden transition duration-500 ease-in-out"
          onClick={handleMenu}
        >
          <Link className="p-2 text-lg font-medium" to="/home">
            Home
          </Link>
          {!user.email && (
            <Link className="p-2 text-lg font-medium" to="/aboutus">
              About Us
            </Link>
          )}
          {!user?.email && (
            <Link className="p-2 text-lg font-medium" to="/home">
              Contact Us
            </Link>
          )}
          {!user?.email && (
            <Link className="p-2 text-lg font-medium" to="/blogs">
              Blog
            </Link>
          )}
          {user?.email && (
            <Link className="p-2 text-lg font-medium" to="/mybooking">
              My Booking
            </Link>
          )}
          {user?.email && (
            <Link className="p-2 text-lg font-medium" to="/managebooking">
              Manage Booking
            </Link>
          )}
          {user?.email && (
            <Link className="p-2 text-lg font-medium" to="/addtour">
              Add Tours
            </Link>
          )}
          {user?.email ? (
            <span className="font-medium text-lg">
              <img
                src={user.photoURL}
                alt=""
                className="h-8 w-8 rounded-full inline"
              />{" "}
              {user.displayName}
            </span>
          ) : (
            <Link to="/login">
              <button className="m-2 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300">
                Login
              </button>
            </Link>
          )}
          {user?.email && (
            <button
              onClick={logOut}
              className="m-2 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300"
            >
              LogOut
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
