import Image from "next/image";
import styles from "../styles/Journey.module.css";
import { MdOutlineDeliveryDining } from "react-icons/md";

const ExploreSection = () => {
  const cards = [
    { id: 1, icon: "/icon1.png", name: "Catering", description: "Delight your guests with our flavors and  presentation" },
    { id: 2, icon: "/icon2.png", name: "Fast delivery", description: "We deliver your order promptly to your door" },
    { id: 3, icon: "/icon3.png", name: "Online Ordering", description: "Explore menu & order with ease using our Online Ordering" },
    { id: 4, icon: "/icon4.png", name: "Gift Cards", description: "Give the gift of exceptional dining with Foodi Gift Cards" },
  ];

  return (
    <div className={styles.container}>
      {/* Left Side */}
      <div className={styles.leftSide}>
        <h3 className={styles.miniHeading}>Our Story & Services</h3>
        <h1 className={styles.mainHeading}>Our Culinary Journey And Services</h1>
        <p className={styles.description}>
          Discover the amazing features and benefits we have in store for you. Dive into our offerings and find the best fit for your needs.
        </p>
        <button className={styles.exploreButton}>Explore</button>
      </div>

      {/* Right Side */}
      <div className={styles.rightSide}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.cardIcon}>
              <Image src={card.icon} alt={card.name} width={40} height={40} />
            </div>
            <h3 className={styles.cardName}>{card.name}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
