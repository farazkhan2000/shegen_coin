import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="">
      <ul className="vt323-regular flex items-center justify-center gap-4 md:gap-10 py-16 text-xl md:text-3xl">
        <li>
          <a to="#home" className="hover:text-[#97269f] transition-colors duration-200">
            HOME
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-[#97269f] transition-colors duration-200">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#tokenomics" className="hover:text-[#97269f] transition-colors duration-200">
            TOKENOMICS
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#97269f] transition-colors duration-200">
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
