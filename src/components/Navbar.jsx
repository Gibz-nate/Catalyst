import React from 'react';
import logo from '../assets/logos/catalyst.png';
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <nav className="bg-teal-700 dark:bg-gray-800 text-white dark:text-white flex items-center justify-between clip-path-hex p-4 shadow-lg mx-auto sticky top-4 z-50 border-2 border-indigo-500 rounded-sm ">
      <img src={logo} alt="Catalyst Logo" className='max-w-20' /> <span>Catalyst</span>
      <ul className='flex space-x-10 mx-auto'>
        <li><a href="#" className="hover:underline">Product</a></li>
        <li><a href="#" className="hover:underline">Blog</a></li>
        <li><a href="#" className="hover:underline">Docs</a></li>
        <li><a href="#" className="hover:underline">Contacts</a></li>
      </ul>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="p-1  dark:bg-gray-600 rounded-full mr-7"
      >
        {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </nav>
  );
};

export default Navbar;
