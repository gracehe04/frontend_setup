import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleNavLinkClick = () => {
    setToggle(false);
    window.scrollTo(0, 0);
  };

  const menuItems = [
    { name: 'Home', path: '/', hoverText: 'Home' },
    { name: 'About', path: '/about', hoverText: 'About' },
    { name: 'Projects', path: '/projects', hoverText: 'Projects' },
    { name: 'Contact', path: '/contact', hoverText: 'Contact' }
  ];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {menuItems.map((item) => (
          <li className="app__flex p-text" key={item.path}>
            <Link to={item.path} onClick={handleNavLinkClick} data-hover={item.hoverText}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="app__navbar-menu-content"
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} onClick={handleNavLinkClick}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
