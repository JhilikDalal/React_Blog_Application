import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// react icons
import { FaFacebook, FaDribbble, FaTwitter, FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/home", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/blog", link: "Blog" },
    { path: "/contact", link: "Contact" },
    { path: "/service", link: "Service" },
  ];

  return (
    <header className='bg-slate-950 text-white fixed top-0 left-0 right-0'>
      <nav className="px-4 py-2 max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href='/' className='text-xl font-bold text-red-400'>Logo</a>

        {/* Navigation Links */}
        <ul className="md:flex gap-12 text-lg hidden">
          {
            navItems.map(({ path, link }) => 
              <li key={path}>
                <NavLink  className={({ isActive, isPending }) => 
                    isActive 
                      ? "active" 
                      : isPending 
                      ? "pending" 
                      : ""
                  } to={path}>{link}</NavLink>           
              </li>
            )
          }
        </ul>

        {/* Social icons & login button */}
        <div className='text-white lg:flex gap-4 items-center hidden'>
          <a href='/' className='hover:text-red-400'><FaFacebook /></a>
          <a href='/' className='hover:text-red-400'><FaDribbble /></a>
          <a href='/' className='hover:text-red-400'><FaTwitter /></a>
          <button className='bg-red-400 px-6 py-2 font-medium rounded hover:bg-white
           hover:text-red-400 transition-all duration-200 ease-in'>Log In</button>
        </div>

        {/* Mobile menu button */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {
              isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
            }
          </button>
        </div>
      </nav>

      {/* Mobile menu items */}
      <div>
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? 
          "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
          {
            navItems.map(({ path, link }) => 
              <li className='text-black' key={path}>
                <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
              </li>     
            )
          }
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
