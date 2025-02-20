import { useState } from "react";
import logo from "../assets/logos/catalyst.png";
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from "react-icons/md";
import PropTypes from "prop-types";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-slate-700 dark:bg-gray-800 text-white dark:text-white flex items-center justify-between clip-path-hex p-5 sticky top-4 z-50 border-2 border-gray-700 rounded-sm transition mx-4 md:mx-28 duration-300 ease-in-out hover:shadow-[0_0_15px_5px_rgba(75,0,130,0.7)] hover:bg-slate-800 dark:hover:bg-gray-700">
        {/* Logo and Name */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src={logo}
            alt="Catalyst Logo"
            className="max-w-8 md:max-w-12 h-auto"
          />
          <span className="font-bold text-lg">Catalyst</span>
        </div>

        {/* Navigation Links - Hidden on small screens */}
        <ul className="hidden md:flex space-x-10 justify-center flex-grow">
          <li>
            <a
              href="#"
              className="hover:underline hover:text-teal-300 dark:hover:text-gray-300 transition duration-300"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:text-teal-300 dark:hover:text-gray-300 transition duration-300"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:text-teal-300 dark:hover:text-gray-300 transition duration-300"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:text-teal-300 dark:hover:text-gray-300 transition duration-300"
            >
              Contacts
            </a>
          </li>
        </ul>

        {/* Dark Mode Toggle and Menu Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 dark:bg-gray-600 rounded-full hover:bg-teal-600 dark:hover:bg-gray-500 transition duration-300"
          >
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <button
            className="md:hidden hover:text-teal-300 dark:hover:text-gray-300 transition duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Shown when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
          <div className="absolute top-20 right-4 left-4 bg-white dark:bg-gray-800 p-6 rounded-3xl  z-50 ">
            <ul className="space-y-4 text-center">
              <li>
                <a
                  href="#"
                  className="block py-2 hover:underline hover:text-teal-300 dark:hover:text-gray-300 transition duration-300"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:underline hover:text-teal-300 dark:hover:text-gray-300 transition duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:underline hover:text-teal-300 dark:hover:text-gray-300 transition duration-300"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:underline hover:text-teal-300 dark:hover:text-gray-300 transition duration-300"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
};

export default Navbar;
