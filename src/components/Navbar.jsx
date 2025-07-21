import { useState } from "react";
import { NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-400" : "hover:text-blue-300"
        }
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-blue-400" : "hover:text-blue-300"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? "text-blue-400" : "hover:text-blue-300"
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-blue-400" : "hover:text-blue-300"
        }
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-[#0f172a] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-5 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-300">Jerin</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          {navLinks}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] px-4 pb-4 space-y-4 text-lg flex flex-col items-start">
          {navLinks}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
