// import React from "react";
// import Image from "next/image";
// import { FiPlay } from "react-icons/fi"; 
// import styles from "@/app/styles/Hero.module.css"; 

// const Hero = () => {
//   return (
//     <section className={styles.hero}>
//       <div className={styles.heroContent}>
//         {/* Left Side Text */}
//         <h1 className={styles.heroTitle}>Dive into Delights of Delectable <span className={styles.food}>Food</span></h1>
//         <p className={styles.heroSubtitle}>Experience the taste of fresh and healthy food every day.</p>
//         <div className={styles.heroButtons}>
//           <button className={styles.orderButton}>Order Now</button>
//           <button className={styles.videoButton}>
//             <span className={styles.playIcon}>
//               <FiPlay />
//             </span>
//             Watch Video
//           </button>
//         </div>
//       </div>

//       {/* Right Side Image */}
//       <div className={styles.heroImage}>
//         <Image
//           src="/Intersect.png" 
//           alt="Delicious Meal"
//           width={722}
//           height={79}
//           priority={true}
//         />
//       </div>

//     </section>
//   );
// };

// export default Hero;

// import { Rating } from "./rating";

function getRandomValues(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

import React from "react";
import Image from "next/image";
import { IoPlayCircle } from "react-icons/io5";
 // Import the play icon
import { FaStar } from "react-icons/fa"; // Import star icon for rating
import styles from "@/app/styles/Hero.module.css"; // Adjust path to your styles folder

const Hero = () => {
  const dishes = [
    { name: "Penne Pasta", price: 15.99, image: "/pennepasta.jpg", rating: getRandomValues(1, 5)},
    { name: "Spicy Noodles", price: 10.49, image: "/noodles.jpg", rating: getRandomValues(1, 5)},
  ];
  // const hero = [
  //   {
  //     rating: getRandomValues(1, 5),
  //   },
  // ]
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        {/* Left Side Text */}
        <h1 className={styles.heroTitle}>
          Dive into Delights <br></br>of Delectable <span className={styles.food}>Food</span>
        </h1>
        <p className={styles.heroSubtitle}>
        Delight your senses with every bite at The Velvet Fork
        </p>
        <p className={styles.heroSubtitle1}>
          Experience the taste of fresh and healthy food every day.
        </p>
        <div className={styles.heroButtons}>
          <button className={styles.orderButton}>Order Now</button>
          <button className={styles.videoButton}>
            <span className={styles.playIcon}>
            <IoPlayCircle size={100}/>
            </span>
            Watch Video
          </button>
        </div>
      </div>

      {/* Right Side Image with Green Circle */}
      <div className={styles.heroImage}>
        <div className={styles.greenCircle}>
          <Image
            src="/Intersect.png" // Replace with your image path
            alt="Delicious Meal"
            width={500}
            height={500}
            priority={true}
          />
          {/* Message Popup */}
          <div className={styles.messagePopup}>
            <Image src="/chilli.jpg" alt="Red Chili" className={styles.chiliIcon} width={30} height={30} />
            <span>Hot Spicy Food</span>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className={styles.cards}>
  {dishes.map((dish, index) => (
    <div key={index} className={styles.card}>
      <Image className={styles.img}
        src={dish.image} // Use the image path directly
        alt={dish.name}
        width={60}
        height={60}
      />
      <div>
        <h4>{dish.name}</h4>
        <div className={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              color={i < dish.rating ? "#FFE605" : "#D3D3D3"} // Yellow for rated, gray for remaining
            />
          ))}
        </div>
        <p>
          $<span>{dish.price}</span>
        </p>
      </div>
    </div>
  ))}
</div>

      {/* <div className={styles.cards}>
        <div className={styles.card}>
          <Image src="/noodles.jpg" alt="Dish" width={60} height={60} />
          <div>
            <h4>Grilled Chicken</h4>
            <div className={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color="#FFD700" />
              ))}
            </div>
            <p>$<span>15.99</span></p>
          </div>
        </div>
        <div className={styles.card}>
          <Image src="/Vegetarian-salad.png" alt="Dish" width={60} height={60} />
          <div>
            <h4>Veggie Salad</h4>
            <div className={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color="#FFD700" />
              ))}
            </div>
            <p>$<span>10.49</span></p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
// {[...Array(5)].map((_, i) => (
//   <FaStar key={i} color="#FFD700" />
// ))}