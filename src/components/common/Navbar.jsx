import { useEffect } from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const navbarLinks = [
  {
    id: 1,
    name: "home",
    url: "/",
  },
  {
    id: 2,
    name: "services",
    url: "/services",
  },
  {
    id: 3,
    name: "my bookings",
    url: "/bookings",
  },
  {
    id: 4,
    name: "contact us",
    url: "/contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [slideNavbar, setSlideNavbar] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  window.addEventListener("scroll", () => {
    window.scrollY > 0 ? setSlideNavbar(true) : setSlideNavbar(false);
  });

  return (
    <nav
      className={`navbar fixed  w-full top-0 left-0 z-[99] py-1 bg-white/80 backdrop-blur-sm ${
        slideNavbar && "scrolled"
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto px-2">
        <Link to="/">
          <img src="/images/logo2.png" alt="Logo" className="w-20" />
        </Link>

        {/* Toggle Button */}
        <div>
          <button
            className="p-2 rounded-lg toggle cursor-default sm:cursor-pointer feather-menu hover:bg-hover-bg md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Primary Menu */}
        <ul className="hidden space-x-10 md:flex">
          {navbarLinks.map((link) => (
            <li className="capitalize nav-link" key={link.id}>
              <NavLink to={link.url}>{link.name}.</NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <ul
          className={`absolute left-0 flex bg-white shadow flex-col w-full p-0 overflow-hidden transition-all duration-300 mobile-menu md:hidden top-full max-h-0 ${
            isMenuOpen && "showMenu"
          }`}
        >
          {navbarLinks.map((link) => (
            <li className="capitalize nav-link" key={link.id}>
              <NavLink to={link.url}>{link.name}.</NavLink>
            </li>
          ))}
          <div className="mt-3">
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>

            <Link
              to="/register"
              className="btn border border-primary text-primary ml-2"
            >
              Register
            </Link>
          </div>
        </ul>

        {/* Right Menu */}
        <div className="hidden md:flex-align-center gap-x-2">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>

          <Link
            to="/register"
            className="btn border border-primary text-primary"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
