import React from 'react';
import Image from 'next/image';
import style from '@/app/styles/Favorites.module.css';

export default function Home() {
  const categories = [
    { id: 1, name: 'Main Dish', dishes: 86, items: 'dishes', image: '/d3.webp' },
    { id: 2, name: 'Break Fast', dishes: 12, items: 'break fast', image: '/dish2.png' },
    { id: 3, name: 'Dessert', dishes: 48, items: 'dessert', image: '/dish3.png' },
    { id: 4, name: 'Browse All', dishes: 255, items: 'items', image: '/dish4.png' },
  ];

  return (
    <div className={style.centerSection}>
      <h3 className={style.smallHeading}>Customer Favorites</h3>
      <h1 className={style.largeHeading}>Popular Categories</h1>
      <div className={style.cardGrid}>
        {categories.map((category) => (
          <div className={style.card} key={category.id}>
            <div className={style.imageWrapper}>
              <Image
                src={category.image}
                alt={category.name}
                width={90}
                height={90}
                className={style.roundedImage}
              />
            </div>
            <h3 className={style.cardTitle}>{category.name}</h3>
            <p className={style.cardSubtitle}>({category.dishes} {category.items})</p>
          </div>
        ))}
      </div>
    </div>
  );
}


// const categories = [
//   { name: 'Pasta', dishes: 89, imgSrc: '/images/pasta.jpg' },
//   { name: 'Pizza', dishes: 89, imgSrc: '/images/pizza.jpg' },
//   { name: 'Burger', dishes: 89, imgSrc: '/images/burger.jpg' },
//   { name: 'Sushi', dishes: 89, imgSrc: '/images/sushi.jpg' },
// ];

// const CustomerFavorites = () => {
//   return (
//     <div className={style.favorites_section}>
//       <h4 className={style.small_heading}>Customer Favorites</h4>
//       <div className={style.horizontal_line}></div>

//       <h1 className={style.main_heading}>Popular Categories</h1>
//       <div className={style.cards_container}>
//         {categories.map((category, index) => (
//           <div className={style.card} key={index}>
//             <div className={style.image_container}>
//               <Image
//                 src={category.imgSrc}
//                 alt={category.name}
//                 width={153}
//                 height={153}
//                 className={style.roundedfull}
//               />
//             </div>
//             <h3 className={style.category_name}>{category.name}</h3>
//             <p className={style.dish_count}>({category.dishes} dishes)</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CustomerFavorites;
