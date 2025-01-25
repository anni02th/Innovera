import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="w-full h-fit flex bg-black text-white m-auto md:flex md:items-center md:justify-between">
      <section className="bg-white/20 backdrop-blur-sm border-b border-white/20 py-3 gap-10 flex w-full h-full items-center justify-center">
        <Link className="px-6 py-2 bg-black rounded-full hover:bg-white hover:text-black transition-all" to='#themes'>Themes</Link>
        <Link className="px-6 py-2 bg-black rounded-full hover:bg-white hover:text-black transition-all" to="#organiser">Organiser</Link>
        <Link className="px-6 py-2 bg-black rounded-full hover:bg-white hover:text-black transition-all" to="#rules">Rules</Link> 
        <Link className="px-6 py-2 bg-black rounded-full hover:bg-white hover:text-black transition-all" to="#timeline">Timeline</Link> 
        <Link className="px-6 py-2 bg-black rounded-full hover:bg-white hover:text-black transition-all" to="#about">About Us</Link> 
      </section>
    </nav>
  );
};

export default Navbar;
