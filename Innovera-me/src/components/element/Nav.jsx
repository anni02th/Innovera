import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";

// Navigation items with corresponding sections
const navItems = [
  { name: "Theme", to: "themes" },
  { name: "Rules", to: "rules" },
  { name: "About", to: "about" },
  { name: "Timeline", to: "timeline" },
];

// Reusable NavLink component
const NavLink = ({ to, className, onClick, children }) => (
  <ScrollLink
    className={`px-6 py-2 rounded-full transition-all cursor-pointer  ${className}`}
    to={to}
    smooth={true}
    duration={500}
    onClick={onClick}
    
  >
    {children}
  </ScrollLink>
);

// Desktop Menu Component
const DesktopMenu = ({ scrolled, navigateToHome }) => (
  <div className="hidden md:flex justify-center gap-6 w-full">
    {navItems.map((item) => (
      <button
        key={item.to}
        className={`hover:bg-gray-200 px-6 py-2 rounded-full hover:text-black ${
            scrolled ? "text-white" : "text-white"
          }`}
        onClick={() => navigateToHome(item.to)}
      >
        {item.name}
      </button>
    ))}
    <Link to="/organiser" className="hover:bg-gray-200 hover:text-black text-white px-6 py-2 rounded-full transition-all">Organiser</Link>
  </div>
);

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose, navigateToHome }) => (
  <div
    className={`fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-black/95 text-white shadow-lg z-[60] md:hidden transform transition-transform duration-300 ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    <div className="flex flex-col h-full">
      <div className="flex justify-end p-4">
        <button 
          className="text-white text-2xl hover:text-gray-300 transition-colors"
          onClick={onClose}
        >
          <FaTimes />
        </button>
      </div>
      <div className="flex-1 flex flex-col items-center gap-6 px-4">
        {navItems.map((item) => (
          <button
            key={item.to}
            className="text-2xl hover:text-gray-300 transition-colors"
            onClick={() => {
              onClose();
              navigateToHome(item.to);
            }}
          >
            {item.name}
          </button>
        ))}
    <Link to="/organiser" className="text-2xl hover:bg-gray-200 hover:text-black text-white px-6 py-2 rounded-full transition-all">Organiser</Link>

        <Link
          to="/organiser"
          className="text-2xl px-8 py-3 w-40 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          onClick={onClose}
        >
          Organiser
        </Link>
      </div>
    </div>
  </div>
);

// Navbar Component
const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const location = useLocation();

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar classes based on scroll state
  const navClasses = `fixed top-0 w-full z-50 transition-all duration-300 border-white/20 border-b ${
    scrolled
      ? "h-16 bg-black text-white shadow-lg"
      : "h-16 bg-white/20 backdrop-blur-sm border-b text-white"
  }`;

  // Function to navigate to home and scroll to a specific section
  const navigateToHome = (section) => {
    if (location.pathname !== "/") {
      navigate("/"); // Redirect to home
      setTimeout(() => {
        document.getElementById(section).scrollIntoView({ behavior: "smooth" });
      }, 0); // Scroll to section after redirect
    } else {
      // If already on home, just scroll to the section
      document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={navClasses}>
      <section className="flex items-center justify-between px-4 md:px-10 h-full">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold cursor-pointer">
          <pre>Innov-era</pre>  
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FaBars />
        </button>

        {/* Desktop Menu */}
        <DesktopMenu scrolled={scrolled} navigateToHome={navigateToHome} />

        {/* Register Button (Desktop) */}
        <Link to="https://unstop.com/p/innov-era-national-level-hackathon-kkwagh-college-of-engineering-and-researchnashik-1374664" className="hidden md:block">
          <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition-all">
            Register
          </button>
        </Link>
      </section>

      {/* Mobile Menu */}
      <MobileMenu isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} navigateToHome={navigateToHome} />
    </nav>
  );
};

export default Nav;