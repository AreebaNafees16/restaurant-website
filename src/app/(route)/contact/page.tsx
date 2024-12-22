import React from "react";
import styles from "@/app/styles/Contact.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      {/* Top Section */}
      <section className={styles.topSection}>
        <h1 className={styles.pageTitle}>Contact Us</h1>
        <p className={styles.pageSubtitle}>
          Got a question? Need a reservation? We’re here to help!
        </p>
      </section>

      {/* Contact Information */}
      <section className={styles.infoSection}>
  <div className={styles.infoItem}>
    <FaMapMarkerAlt className={styles.infoIcon} />
    {/* <h3 className={styles.infoTitle}>Visit Us</h3> */}
    <p className={styles.infoText}>123 Foodie Lane, Gourmet City, FL 56789</p>
  </div>
  <div className={styles.infoItem}>
    <FaPhoneAlt className={styles.infoIcon} />
    {/* <h3 className={styles.infoTitle}>Call Us</h3> */}
    <p className={styles.infoText}>(123) 456-7890</p>
  </div>
  <div className={styles.infoItem}>
    <FaEnvelope className={styles.infoIcon} />
    {/* <h3 className={styles.infoTitle}>Email Us</h3> */}
    <p className={styles.infoText}>hello@restaurant.com</p>
  </div>
  <div className={styles.infoItem}>
    <FaClock className={styles.infoIcon} />
    {/* <h3 className={styles.infoTitle}>Opening Hours</h3> */}
    <p className={styles.infoText}>Monday - Sunday: 10:00 AM - 10:00 PM</p>
  </div>
</section>
      {/* <section className={styles.infoSection}>
        <div className={styles.infoItem}>
          <h3 className={styles.infoTitle}>Visit Us</h3>
          <p className={styles.infoText}>123 Foodie Lane, Gourmet City, FL 56789</p>
        </div>
        <div className={styles.infoItem}>
          <h3 className={styles.infoTitle}>Call Us</h3>
          <p className={styles.infoText}>(123) 456-7890</p>
        </div>
        <div className={styles.infoItem}>
          <h3 className={styles.infoTitle}>Email Us</h3>
          <p className={styles.infoText}>hello@restaurant.com</p>
        </div>
        <div className={styles.infoItem}>
          <h3 className={styles.infoTitle}>Opening Hours</h3>
          <p className={styles.infoText}>Monday - Sunday: 10:00 AM - 10:00 PM</p>
        </div>
      </section> */}

      {/* Contact Form */}
      <section className={styles.formSection}>
        <h2 className={styles.formTitle}>Get in Touch</h2>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Your Message</label>
            <textarea id="message" placeholder="Write your message"></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
