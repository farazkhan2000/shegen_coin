import React from 'react';

const Navbar = () => {
  return (
    <div className="">
      <ul className="vt323-regular flex items-center justify-center gap-10 py-16 text-3xl">
        <li>
          <a href="#" className="hover:text-[#97269f] transition-colors duration-200">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#97269f] transition-colors duration-200">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#97269f] transition-colors duration-200">
            Tokonomics
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#97269f] transition-colors duration-200">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
