import React from 'react';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { PiTwitterLogo } from "react-icons/pi";
import { RiYoutubeLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumns}>
        {/* First Column: Foodi Logo & Paragraph */}
        <div className={`${styles.footerColumn} ${styles.logoColumn}`}>
          {/* <div className={styles.logoContainer}>
            <Image src="/images/foodi-logo.png" alt="Foodi Logo" width={100} height={100} />
          </div> */}
          {/* Logo Section */}
      <div className={styles.logo}>
        <div className={styles.logobox}>
          <span className={styles.logof}>F</span>
        </div>
        <span className={styles.logotext}>OODI</span>
      </div>
          <p className={styles.description}>
            Foodi is your go-to destination <br /> for the finest dishes, amazing <br /> events, and great food experiences. <br /> Join us today!
          </p>

          <ul>
              <li className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}><FiFacebook size={20}/></a>
              <a href="#" className={styles.socialIcon}><FaInstagram size={20}/></a>
              <a href="#" className={styles.socialIcon}><PiTwitterLogo size={20}/></a>
              <a href="#" className={styles.socialIcon}><RiYoutubeLine size={20}/></a>
            </li>
          </ul>
        </div>

        {/* Second Column: Useful Links */}
        <div className={styles.footerColumn}>
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Third Column: Main Menu */}
        <div className={styles.footerColumn}>
          <h4>Main Menu</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservation</a></li>
          </ul>
        </div>

        {/* Fourth Column: Contact Info & Social Media */}
        <div className={styles.footerColumn}>
          <h4>Contact Us</h4>
          <ul>
            <li>contact@foodi.com</li>
            <li>+123-456-7890</li>
            <li>Social Media</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>Copyright       2023 Dscode | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
