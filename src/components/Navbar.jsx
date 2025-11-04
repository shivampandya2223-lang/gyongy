import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md text-white flex items-center justify-between px-10 py-4 z-10">
      {/* --- Left: Logo --- */}
      <div className="flex items-center gap-2">
        <img
          src="/assets/logo.svg" // your logo path
          alt="Company Logo"
          className="h-10 w-10 object-contain"
        />
        <h1 className="text-2xl font-bold tracking-wide">GenAI</h1>
      </div>

      {/* --- Right: Menu --- */}
      <div className="flex items-center gap-10 text-lg">
        <Link to="#about" className="hover:text-pink-500 transition">
          About
        </Link>
        <Link to="#services" className="hover:text-pink-500 transition">
          Services
        </Link>
        <Link to="#portfolio" className="hover:text-pink-500 transition">
          Portfolio
        </Link>
        <Link to="#experience" className="hover:text-pink-500 transition">
          Experience
        </Link>

        {/* --- Contact Button --- */}
        <Link
          to="#footer"
          className="px-5 py-2 rounded-full bg-linear-to-r from-pink-600 to-blue-600 hover:opacity-90 transition font-semibold"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
