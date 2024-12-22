import React from "react";
import styles from "@/app/styles/Menu.module.css";



const Menu = () => {
    const menuData = [
        {
            category: "Appetizers",
            items: [
                { name: "Bruschetta", description: "Grilled bread with tomatoes and basil.", price: "$6.99", image: "/bruschetta.jpg" },
                { name: "Stuffed Mushrooms", description: "Cheese-filled mushrooms.", price: "$8.99", image: "/mashroom.jpg" },
                { name: "Spring Rolls", description: "Crispy rolls with vegetables.", price: "$5.99", image: "/Vegetable-Spring-Rolls.jpg" },
                { name: "Garlic Bread", description: "Toasted bread with garlic butter.", price: "$4.99", image: "/Toast-Hero-Option-2-edit.jpg" },
            ],
        },
        {
            category: "Mains",
            items: [
                { name: "Grilled Salmon", description: "Served with lemon butter sauce.", price: "$15.99", image: "/grill-salmon.jpg" },
                { name: "Pasta Primavera", description: "Fresh veggies with creamy sauce.", price: "$12.99", image: "/Pasta-Primavera-bowl.webp" },
                { name: "Margherita Pizza", description: "Classic pizza with fresh mozzarella.", price: "$11.99", image: "/margherita-pizza.jpg" },
                { name: "Beef Steak", description: "Grilled to perfection.", price: "$18.99", image: "/Grilled-Beef-Steak.jpg" },
            ],
        },
        {
            category: "Seafood",
            items: [
                { name: "Crab Cakes", description: "Crispy golden crab cakes served with tartar sauce.", price: "$20.99", image: "/Crab Cakes.jpg" },
                { name: "Shrimp Scampi", description: "Garlic butter shrimp with linguine.", price: "$19.99", image: "/ShrimpScampi.jpg" },
                { name: "Lobster Tail", description: "Steamed lobster tail with butter.", price: "$25.99", image: "/broiled_lobster.jpg" },
                { name: "Fish and Chips", description: "Golden fried fish with fries.", price: "$16.99", image: "/Fish and Chips.jpg" },
            ],
        },
        {
            category: "Desserts",
            items: [
                { name: "Chocolate Cake", description: "Rich chocolate cake with icing.", price: "$6.99", image: "/chocolate-chocolate-cake-1.webp" },
                { name: "Cheesecake", description: "Creamy cheesecake with a graham crust.", price: "$7.99", image: "/cheesecake.webp" },
                { name: "Brownies", description: "Fudgy chocolate brownies.", price: "$5.99", image: "/Brownies.jpg" },
                { name: "Ice Cream Sundae", description: "Vanilla ice cream with toppings.", price: "$4.99", image: "/Ice-Cream-Sundae.webp" },
            ],
        },
        {
            category: "Drinks",
            items: [
                { name: "Lemonade", description: "Freshly squeezed lemonade.", price: "$3.99", image: "/Lemonade.jpg" },
                { name: "Iced Coffee", description: "Chilled coffee with milk.", price: "$4.99", image: "cold-coffee.jpg" },
                { name: "Mojito", description: "Minty and refreshing.", price: "$6.99", image: "/bluemojito.jpg" },
                { name: "Smoothies", description: "Blended fresh fruits.", price: "$5.99", image: "/smoothies.webp" },
            ],
        },
    ];

    return (
        <div className={styles.menuContainer}>
            <header className={styles.header}>
                {/* <h3 className={styles.smallHeading}>Best Menu</h3> */}
                <h1>Our Exquisite Menu</h1>
                <p>Savor the taste of our carefully crafted dishes.</p>
            </header>
            {menuData.map((category) => (
                <section key={category.category} className={styles.categorySection}>
                    <h2 className={styles.categoryTitle}>{category.category}</h2>
                    <div className={styles.cardGrid}>
                        {category.items.map((item, index) => (
                            <div key={index} className={styles.menuCard}>
                                <img src={item.image} alt={item.name} className={styles.cardImage} />
                                <div className={styles.cardContent}>
                                    <h3 className={styles.itemName}>{item.name}</h3>
                                    <p className={styles.itemDescription}>{item.description}</p>
                                    <span className={styles.itemPrice}>{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Menu;
