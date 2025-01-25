import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  
  const navLinks = [
    { name: "Rules", path: "/rules", color: "text-blue-400 hover:text-blue-300" },
    { name: "Schedule", path: "/schedule", color: "text-green-400 hover:text-green-300" },
    { name: "FAQs", path: "/faqs", color: "text-blue-400 hover:text-blue-300" },
    { name: "About Us", path: "/about", color: "text-yellow-300 hover:text-yellow-200" },
  ];

  return (
    <nav className="w-full bg-black text-white px-6 py-4 md:flex md:items-center md:justify-between">

      <div className="flex items-center justify-between w-full md:w-auto">
        <button
          className="text-white md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars size={28} />
        </button>
        <Link
          to="/register"
          className="bg-black text-white px-5 py-2 rounded-full border border-gray-500 font-medium md:hidden"
        >
          Register
        </Link>
      </div>

      {/* Large screen: Full Navbar */}
      <div className="hidden md:flex md:items-center md:justify-between w-full">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <span className="text-lg font-medium">Registration Open</span>
        </div>
        <div className="flex space-x-8 bg-gradient-to-r from-gray-800 to-black rounded-full px-6 py-2 border border-orange-600">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.path} className={`${link.color} text-lg font-medium`}>
              {link.name}
            </Link>
          ))}
        </div>
        <Link
          to="/register"
          className="bg-black text-white px-6 py-2 rounded-full border border-orange-500 font-medium"
        >
          Register
        </Link>
      </div>

      {/* Sidebar for small screens */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50">
          <div className="fixed top-0 left-0 h-full w-72 bg-gray-900 shadow-lg p-8">
            <button
              className="absolute top-5 right-5 text-white"
              onClick={() => setSidebarOpen(false)}
            >
              <FaTimes size={28} />
            </button>
            <ul className="mt-12 space-y-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className={`block text-xl font-medium ${link.color}`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
