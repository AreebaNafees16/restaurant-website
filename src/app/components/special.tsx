// "use client"
// import { useState } from "react";
// import Image from "next/image";
// import styles from "../styles/Special.module.css";

// type Dish = {
//   id: number;
//   name: string;
//   description: string;
//   price: string;
//   rating: number;
//   image: string;
// };

// export default function Home() {
//   const [dishes, setDishes] = useState<Dish[]>([
//     {
//       id: 1,
//       name: "Spaghetti Bolognese",
//       description: "A classic Italian pasta dish.",
//       price: "$15.99",
//       rating: 4.5,
//       image: "/dish1.jpg",
//     },
//     {
//       id: 2,
//       name: "Sushi Platter",
//       description: "Fresh and delicious sushi rolls.",
//       price: "$22.49",
//       rating: 4.8,
//       image: "/dish2.jpg",
//     },
//     {
//       id: 3,
//       name: "Cheeseburger",
//       description: "Juicy beef patty with melted cheese.",
//       price: "$12.99",
//       rating: 4.3,
//       image: "/dish3.jpg",
//     },
//     {
//       id: 4,
//       name: "Tacos",
//       description: "Authentic Mexican tacos.",
//       price: "$9.99",
//       rating: 4.6,
//       image: "/dish4.jpg",
//     },
//     {
//       id: 5,
//       name: "Chicken Alfredo",
//       description: "Creamy pasta with grilled chicken.",
//       price: "$14.49",
//       rating: 4.4,
//       image: "/dish5.jpg",
//     },
//     {
//       id: 6,
//       name: "Salad Bowl",
//       description: "Fresh and healthy salad.",
//       price: "$8.99",
//       rating: 4.2,
//       image: "/dish6.jpg",
//     },
//   ]);

//   const swapDishes = () => {
//     setDishes((prevDishes) => {
//       const [first, ...rest] = prevDishes;
//       return [...rest, first];
//     });
//   };

//   return (
//     <div className={styles.container}>
//       {/* <div className={styles.header}> */}
//         <h3 className={styles.miniHeading}>Our Specials</h3>
//         <div className={styles.header}>
//         <h1 className={styles.mainHeading}>
//           Standout Dishes <br></br> From Our Menu
//     </h1>
//         <div className={styles.arrowWrapper} onClick={swapDishes}>
//           <div className={styles.circle}>
//             <Image src="/arrow-icon.png" alt="Arrow Icon" width={40} height={40} />
//           </div>
//           <div className={styles.circle}>
//             <Image src="/arrow-icon.png" alt="Arrow Icon" width={40} height={40} />
//           </div>
//         </div>
//       </div>

//       <div className={styles.cards}>
//         {dishes.map((dish) => (
//           <div key={dish.id} className={styles.card}>
//             <div className={styles.cardHeart}>
//               <Image src="/heart-icon.png" alt="Heart Icon" width={40} height={40} />
//             </div>
//             <Image
//               src={dish.image}
//               alt={dish.name}
//               width={276}
//               height={276}
//               className={styles.cardImage}
//             />
//             <h3 className={styles.cardTitle}>{dish.name}</h3>
//             <p className={styles.cardDescription}>{dish.description}</p>
//             <div className={styles.cardFooter}>
//               <span className={styles.price}>{dish.price}</span>
//               <span className={styles.rating}>
//                 ⭐ {dish.rating}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Special.module.css";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { GoHeart } from "react-icons/go";


type Dish = {
  id: number;
  name: string;
  description: string;
  price: string;
  sign: string;
  rating: number;
  image: string;
};

export default function Home() {
  const [dishes, setDishes] = useState<Dish[]>([
    {
      id: 1,
      name: "Spaghetti Bolognese",
      description: "A classic Italian pasta dish.",
      price: "15.99",
      sign: "$",
      rating: 4.5,
      image: "/dish01.png",
    },
    {
      id: 2,
      name: "Sushi Platter",
      description: "Fresh and delicious sushi rolls.",
      price: "22.49",
      sign: "$",
      rating: 4.8,
      image: "/dish02.webp",
    },
    {
      id: 3,
      name: "Cheeseburger",
      description: "Juicy beef patty with melted cheese.",
      price: "12.99",
      sign: "$",
      rating: 4.3,
      image: "/dish03.png",
    },
    {
      id: 4,
      name: "Tacos",
      description: "Authentic Mexican tacos.",
      price: "9.99",
      sign: "$",
      rating: 4.6,
      image: "/dish04.jpg",
    },
    {
      id: 5,
      name: "Chicken Alfredo",
      description: "Creamy pasta with grilled chicken.",
      price: "14.49",
      sign: "$",
      rating: 4.4,
      image: "/dish05.webp",
    },
    {
      id: 6,
      name: "Salad Bowl",
      description: "Fresh and healthy salad.",
      price: "8.99",
      sign: "$",
      rating: 4.2,
      image: "/dish06.jpg",
    },
    {
        id: 7,
        name: "Egg vegi salad",
        description: "A healthy salad with boiled eggs, fresh veggies",
        price: "8.99",
        sign: "$",
        rating: 4.2,
        image: "/dish07.jpg",
      },
  ]);

  const [startIndex, setStartIndex] = useState(0);

  const swapDishes = () => {
    setStartIndex((prevIndex) => (prevIndex + 4) % dishes.length);
  };

  // Slice 3 dishes to display
  const displayedDishes = dishes.slice(startIndex, startIndex + 4).concat(
    dishes.slice(0, Math.max(0, startIndex + 4 - dishes.length))
  );

  const [activeArrow, setActiveArrow] = useState<"back" | "forward" | null>(null);

  const handleArrowClick = (arrow: "back" | "forward") => {
    setActiveArrow(arrow);
    // Add your swap logic here, for example:
    console.log(`${arrow} arrow clicked`);
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.miniHeading}>Our Specials</h3>
      <div className={styles.header}>
        <h1 className={styles.mainHeading}>
          Standout Dishes <br /> From Our Menu
        </h1>
        <div className={styles.arrowWrapper} onClick={swapDishes}>
      <div
        className={`${styles.circle} ${
          activeArrow === "back" ? styles.active : ""
        }`}
        onClick={() => handleArrowClick("back")}
      >
        <MdArrowBackIos size={20} />
      </div>
      <div
        className={`${styles.circle} ${
          activeArrow === "forward" ? styles.active : ""
        }`}
        onClick={() => handleArrowClick("forward")}
      >
        <MdArrowForwardIos size={20} />
      </div>
    </div>
        {/* <div className={styles.arrowWrapper} onClick={swapDishes}>
          <div className={styles.circle}>
          <MdArrowBackIos size={20}/>
          </div>
          <div className={styles.circle}>
          <MdArrowForwardIos size={20}/>
          </div>
        </div> */}
      </div>

      <div className={styles.cards}>
        {displayedDishes.map((dish) => (
          <div key={dish.id} className={styles.card}>
            <div className={styles.cardHeart}>
            <GoHeart size={25}/>
            </div>
            <Image
              src={dish.image}
              alt={dish.name}
              width={276}
              height={276}
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>{dish.name}</h3>
            <p className={styles.cardDescription}>{dish.description}</p>
            <div className={styles.cardFooter}>

              <span className={styles.price}><span className={styles.sign}>{dish.sign}</span>{dish.price}</span>
              <span className={styles.rating}>
                ⭐ {dish.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
