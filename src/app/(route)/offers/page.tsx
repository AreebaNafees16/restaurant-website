import React from "react";
import styles from "@/app/styles/Offers.module.css";

const Offers = () => {
  const offersData = [
    {
      title: "Happy Hour Specials",
      description: "Enjoy 20% off on all drinks from 5 PM to 7 PM every day. Come and unwind with friends!",
      image: "/happy-hour.jpg",
      
    },
    {
      title: "Family Meal Deal",
      description: "Feed the whole family with our special 4-course meal for just $49.99. Perfect for gatherings!",
      image: "/family.jpg",
      
    },
    {
      title: "Weekend Brunch",
      description: "Get a free dessert with any brunch order on weekends. Limited time offer, don’t miss it!",
      image: "/weekend-brunch.jpg",
  
    },
    {
      title: "Birthday Special",
      description: "Celebrate your birthday with us and enjoy a free birthday cake with your meal!",
      image: "/birthday-dinner.jpg",
      // link: "/contact",
    },
  ];

  return (
    <div className={styles.offersContainer}>
      {/* Top Section */}
      <section className={styles.topSection}>
        <h1 className={styles.pageTitle}>Exclusive Offers Just for You</h1>
        <p className={styles.pageSubtitle}>Unbeatable deals and specials, only at our restaurant. Check them out below!</p>
      </section>

      {/* Offer Listings */}
      <section className={styles.offersSection}>
        {offersData.map((offer, index) => (
          <div key={index} className={styles.offerItem}>
            <img src={offer.image} alt={offer.title} className={styles.offerImage} />
            <div className={styles.offerText}>
              <h3 className={styles.offerTitle}>{offer.title}</h3>
              <p className={styles.offerDescription}>{offer.description}</p>
              <a className={styles.learnMore}>Learn More</a>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>Take Advantage of Our Offers Today!</h2>
        <p className={styles.ctaText}>Don’t miss out on these amazing deals. Order now, or book your table today!</p>
        <a href="/contact" className={styles.ctaButton}>Order Now</a>
      </section>
    </div>
  );
};

export default Offers;
