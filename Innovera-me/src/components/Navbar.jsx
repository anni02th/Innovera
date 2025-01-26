import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setSidebarOpen((prevState) => {
      console.log("Sidebar Open:", !prevState);
      return !prevState;
    });
  };

  return (
    <nav className="w-full h-fit bg-black text-white sticky top-0 z-50"> 
      {/* Top navigation bar */}
      <section className="bg-white/20 backdrop-blur-sm border-b border-white/20 py-3 flex items-center justify-between px-4 md:px-10">
        {/* Mobile menu button */}
        <button className="text-white text-2xl md:hidden" onClick={toggleSidebar}>
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop navigation links */}
        <div className="hidden md:flex justify-center gap-6 w-full">
          <ScrollLink
            className="px-6 py-2 bg-black rounded-full hover:bg-white hover:text-black transition-all cursor-pointer"
            to="themes"
            smooth={true}
            duration={500}
          >
            Themes
          </ScrollLink>
          <ScrollLink
            className="px-6 py-2 bg-black rounded-full hover:bg-white hover:text-black transition-all cursor-pointer"
            to="organiser"
            smooth={true}
            duration={500}
          >
            Organiser
          </ScrollLink>
          <ScrollLink
            className="px-6 py-2 bg-black rounded-full hover:bg-white hover:text-black transition-all cursor-pointer"
            to="rules"
            smooth={true}
            duration={500}
          >
            Rules
          </ScrollLink>
          <ScrollLink
            className="px-6 py-2 bg-black rounded-full hover:bg-white hover:text-black transition-all cursor-pointer"
            to="timeline"
            smooth={true}
            duration={500}
          >
            Timeline
          </ScrollLink>
          <ScrollLink
            className="px-6 py-2 bg-black rounded-full hover:bg-white hover:text-black transition-all cursor-pointer"
            to="about"
            smooth={true}
            duration={500}
          >
            About Us
          </ScrollLink>
        </div>
      </section>

      {/* Sidebar for mobile screens */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-black text-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-white/20">
          <div className="text-lg font-bold">Menu</div>
          <button className="text-white text-2xl" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-4 px-4">
          <ScrollLink
            className="px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all cursor-pointer"
            to="themes"
            smooth={true}
            duration={500}
            onClick={toggleSidebar}
          >
            Themes
          </ScrollLink>
          <ScrollLink
            className="px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all cursor-pointer"
            to="organiser"
            smooth={true}
            duration={500}
            onClick={toggleSidebar}
          >
            Organiser
          </ScrollLink>
          <ScrollLink
            className="px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all cursor-pointer"
            to="rules"
            smooth={true}
            duration={500}
            onClick={toggleSidebar}
          >
            Rules
          </ScrollLink>
          <ScrollLink
            className="px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all cursor-pointer"
            to="timeline"
            smooth={true}
            duration={500}
            onClick={toggleSidebar}
          >
            Timeline
          </ScrollLink>
          <ScrollLink
            className="px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all cursor-pointer"
            to="about"
            smooth={true}
            duration={500}
            onClick={toggleSidebar}
          >
            About Us
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;