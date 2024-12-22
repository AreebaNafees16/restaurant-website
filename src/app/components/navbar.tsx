"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FiSearch, FiPhoneCall } from 'react-icons/fi';
import { BsHandbag } from "react-icons/bs";
import { FaBars, FaTimes } from 'react-icons/fa';
import style from '@/app/styles/Navbar.module.css'; // Adjust the path if the CSS file is in a different folder

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (href:any) => {
    // Close the menu only if it's the Home page
    if (href === '/') {
      setMenuOpen(false);
    } else {
      setMenuOpen(true); // Keep the menu open for other pages
    }
  };

  return (
    <nav className={style.navbar}>
      {/* Logo Section */}
      <div className={style.logo}>
        <div className={style.logobox}>
          <span className={style.logof}>F</span>
        </div>
        <span className={style.logotext}>OODI</span>
      </div>

      {/* Hamburger Icon */}
      <div className={style.hamburger} onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {/* Navigation Links */}
      <div className={`${style.navlinks} ${menuOpen ? style.show : ''}`}>
        <Link href="/" onClick={() => handleLinkClick('/')}>Home</Link>
        <Link href="/menu" onClick={() => handleLinkClick('/menu')}>Menu</Link>
        <Link href="/services" onClick={() => handleLinkClick('/services')}>Services</Link>
        <Link href="/offers" onClick={() => handleLinkClick('/offers')}>Offers</Link>
      </div>

      {/* Right Side Icons */}
      <div className={style.navactions}>
        <button className={style.iconbutton}>
          <FiSearch size={20} />
        </button>
        <div className={style.iconbuttonWithBadge}>
          <BsHandbag size={20} />
          <span className={style.badge}>8</span>
        </div>

        <Link href="/contact" className={style.contactbutton}>
          <FiPhoneCall size={20} style={{ marginRight: '8px' }} />
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
