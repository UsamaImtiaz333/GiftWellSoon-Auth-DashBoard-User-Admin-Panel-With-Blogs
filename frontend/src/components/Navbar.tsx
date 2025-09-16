"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="font-bold text-xl text-white">
          GiftWellSoon
        </a>

        {/* Desktop Nav (hidden on mobile) */}
        <nav className="hidden md:flex space-x-6 text-white">
          <a href="#">How It Works</a>
          <a href="#">Find a Registry</a>
          <a href="#">Create a Registry</a>
          <a href="#">Shop</a>
          <a  href="#">Guides</a>
          <Link to="/supports">Supports</Link>
        </nav>

        {/* Buttons (desktop only) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="text-white">
            Sign In
          </Link>
          <a
            href="#"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Start a Registry
          </a>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 px-6 py-6 text-gray-700">
            <a href="#">How It Works</a>
            <a href="#">Find a Registry</a>
            <a href="#">Create a Registry</a>
            <a href="#">Shop</a>
            <a href="#">Guides</a>
            <a href="#">Support & Resources</a>
            <hr className="border-gray-300" />
            <a href="#" className="text-gray-600">
              Sign In
            </a>
            <a
              href="#"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-center"
            >
              Start a Registry
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
