import { useState, useEffect } from "react";
import { NavLink } from "react-router"; 
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for top navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinkStyle =
    "relative px-3 py-1 transition duration-300 hover:text-cyan-400";

  const navLinks = (
    <>
      {["/", "/about", "/projects","skills", "/contact"].map((path, idx) => {
        const labels = ["Home", "About", "Projects","Skills", "Contact"];
        return (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            onClick={() => setIsOpen(false)} // Close menu on click
            className={({ isActive }) =>
              `${navLinkStyle} ${
                isActive ? "text-cyan-400 after:w-full" : "after:w-0"
              } after:block after:h-[2px] after:mt-1 after:rounded-full after:bg-cyan-400 after:transition-all after:duration-300 after:ease-in-out after:mx-auto`
            }
          >
            {labels[idx]}
          </NavLink>
        );
      })}
    </>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${
        scrolled
          ? "bg-[#0f172a]/60 shadow-md border-b border-cyan-500/10 backdrop-blur-lg"
          : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-16 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wide">
          Mst. Nasrin Howlader Jerin
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-white text-base font-medium items-center">
          {navLinks}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-white z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="transition-transform duration-300"
          >
            {isOpen ? <FaTimes size={26} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-[#0f172a]/60 backdrop-blur-xl text-white pt-24 px-6 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 text-lg font-medium overflow-y-auto">
          {navLinks}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
