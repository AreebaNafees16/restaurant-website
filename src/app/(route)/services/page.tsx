import React from "react";
import styles from "@/app/styles/Services.module.css";

const Services = () => {
  const servicesData = [
    {
      title: "Dine-In Experience",
      description: "Relax in our cozy atmosphere and enjoy an exquisite meal with top-notch service.",
      image: "/Dine-In Experience.jpg",
    },
    {
      title: "Takeaway Service",
      description: "Enjoy your favorite meals at home with our fast and efficient takeaway service.",
      image: "/pickup-and-delivery.jpg",
    },
    {
      title: "Event Catering",
      description: "Let us handle your next event with our customized catering service to fit your needs.",
      image: "/Event-Catering.jpeg",
    },
    {
      title: "Private Dining",
      description: "Book our exclusive private dining rooms for intimate gatherings and special occasions.",
      image: "/dining.jpg",
    },
  ];

  return (
    <div className={styles.servicesContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1>Our  Premium Services</h1>
        <p>Delighting you with exceptional experiences tailored to your needs.</p>
      </section>
      {/* <section className={styles.heroSection}>
        <h1 className={styles.pageTitle}>Our Premium Services</h1>
        <p className={styles.pageSubtitle}>Experience exceptional dining, tailored just for you.</p>
      </section> */}

      {/* Service Cards Section */}
      <section className={styles.servicesSection}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.cardImageContainer}>
              <img src={service.image} alt={service.title} className={styles.serviceImage} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <a className={styles.learnMore}>Learn More</a>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>Book Your Table or Event Today</h2>
        <p className={styles.ctaText}>Our team is ready to make your experience unforgettable. Get in touch with us to reserve a spot or book catering services.</p>
        <a href="/contact" className={styles.ctaButton}>Reserve Now</a>
      </section>
    </div>
  );
};

export default Services;
