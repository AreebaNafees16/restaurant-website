// import React from 'react';
// import Link from 'next/link';
// import { FiSearch, FiPhoneCall } from 'react-icons/fi'; 
// import { BsHandbag } from "react-icons/bs";
// import style from '@/app/styles/Navbar.module.css'; 


// const Navbar = () => {
//   return (
//     <nav className={style.navbar}>
//       {/* Logo Section */}
//       <div className={style.logo}>
//         <div className={style.logobox}>
//           <span className={style.logof}>F</span>
//         </div>
//         <span className={style.logotext}>OODI</span>
//       </div>

//       {/* Navigation Links */}
//       <div className={style.navlinks}>
//         <Link href="/home">Home</Link>
//         <Link href="/menu">Menu</Link>
//         <Link href="/services">Services</Link>
//         <Link href="/offers">Offer</Link>
//       </div>

//       {/* Right Side Icons */}
//       <div className={style.navactions}>
//         <button className={style.iconbutton}>
//           <FiSearch size={20} />
//         </button>
//         <div className={style.iconbuttonWithBadge}>
//           <BsHandbag size={20} />
//           <span className={style.badge}>8</span>
//         </div>
      
//         <button className={style.contactbutton}>
//           <FiPhoneCall size={20} style={{ marginRight: '8px' }} />
//           Contact
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FiSearch, FiPhoneCall } from 'react-icons/fi'; // Import React Icons
import { BsHandbag } from "react-icons/bs";
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and close icons
import style from '@/app/styles/Navbar.module.css'; // Adjust the path if the CSS file is in a different folder

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
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
        {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />} {/* Toggle between bars and close */}
      </div>

      {/* Navigation Links */}
      <div className={`${style.navlinks} ${menuOpen ? style.show : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/services">Services</Link>
        <Link href="/offers">Offers</Link>
        {/* <Link href="/contact">Contact</Link> */}
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