import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTwitter } from "react-icons/fa";
// <FaFacebook />
// <FaTwitter />
// <FaLinkedin />
// <FaBehance />

const Navbar = () => {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            exact
            to="/"
            activeClassName="text-white"
            className="inflex-flex items-center py-8 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Raymondo
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-6 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-6 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            Project
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-6 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            About
          </NavLink>
        </nav>
        <div></div>
      </div>
    </header>
  );
};

export default Navbar;
