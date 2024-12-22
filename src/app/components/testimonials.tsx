// import Image from "next/image";
// import { FaStar } from "react-icons/fa";
// import styles from "@/app/style/Testimonials.module.css"; 

// export default function TestimonialSection() {
//   return (
//     <div className={styles.container}>
//       {/* Left Side */}
//       <div className={styles.left}>
//         <div className={styles.miniHeading}>Customer Feedback</div>
//         <h1 className={styles.mainHeading}>What Our Customers Say</h1>
//         <p className={styles.description}>
//           Our customers love our food and service! Hear it directly from them.
//         </p>
//         <div className={styles.testimonialImages}>
//           <Image
//             src="/customer1.jpg"
//             alt="Customer 1"
//             width={50}
//             height={50}
//             className={styles.smallImage}
//           />
//           <Image
//             src="/customer2.jpg"
//             alt="Customer 2"
//             width={50}
//             height={50}
//             className={styles.smallImage}
//           />
//           <Image
//             src="/customer3.jpg"
//             alt="Customer 3"
//             width={50}
//             height={50}
//             className={styles.smallImage}
//           />
//           <span className={styles.reviews}>
//             <FaStar color="#ffa500" /> 18.6k Reviews
//           </span>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className={styles.right}>
//         <div className={styles.imageWrapper}>
//           <Image
//             src="/testimonial.jpg"
//             alt="Happy Customer"
//             width={300}
//             height={300}
//             className={styles.roundedImage}
//           />
//         </div>
//         <div className={styles.messagePopup}>
//           <span className={styles.emoji}>😃</span> "Absolutely delicious food!"
//         </div>
//         <div className={styles.emojis}>
//           <span className={styles.leftEmoji}>😋</span>
//           <span className={styles.rightEmoji}>🍕</span>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import styles from "../styles/Testimonials.module.css";

export default function Testimonial() {
  return (
    <div className={styles.testimonialSection}>
      {/* Left Side */}
      <div className={styles.leftSide}>
        <div className={styles.imageWrapper}>
          <Image
            src="/customer.png"
            alt="Customer"
            width={300}
            height={300}
            className={styles.customerImage}
          />
        </div>
        <div className={styles.messagePopup}>
          <span className={styles.emoji}></span> 
          <span>Our Best Chef 😁</span>
        </div>
        <div className={styles.emojis}>
          <span className={styles.emoji}>😋</span>
          <span className={styles.emoji}>🍕</span>
        </div>
      </div>

      {/* Right Side */}
      <div className={styles.rightSide}>
        <h3 className={styles.miniHeading}>Customer Testimonials</h3>
        <h1 className={styles.mainHeading}>
          What Our Customers <br /> Say About Us
        </h1>
        <p className={styles.paragraph}>
          We pride ourselves on providing the best service and dishes that make
          our customers happy. Don’t just take our word for it—here’s what our
          customers are saying!
        </p>
        <div className={styles.feedback}>
          <div className={styles.testimonialImages}>
            <Image
              src="/john-doe.jpg"
              alt="Customer 1"
              width={50}
              height={50}
              className={styles.roundedImage}
            />
            <Image
              src="/team2.jpg"
              alt="Customer 2"
              width={50}
              height={50}
              className={styles.roundedImage}
            />
            <Image
              src="/michael-smith.jpg"
              alt="Customer 3"
              width={50}
              height={50}
              className={styles.roundedImage}
            />
          </div>
          <span className={styles.feedbackText}>Customer Feedback</span>
        </div>
        <div className={styles.reviews}>
          <span className={styles.rating}>⭐ 4.9 </span><span>(18.6k Reviews)</span>
        </div>
      </div>
    </div>
  );
}
