import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="text-white flex justify-between p-6 items-center">
      <h1 className="text-2xl font-bold text-green-500">Jashveer Sharma</h1>
      <ul className="flex space-x-6">
        <li>
          <NavLink 
            to="/"
            className={({ isActive }) => isActive ? 'text-green-400' : 'text-white'}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/skills"
            className={({ isActive }) => isActive ? 'text-green-400' : 'text-white'}
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects"
            className={({ isActive }) => isActive ? 'text-green-400' : 'text-white'}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact"
            className={({ isActive }) => isActive ? 'text-green-400' : 'text-white'}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
