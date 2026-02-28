import Food1 from "./DogFoodImg/Food1.jpg";
import Food11 from "./DogFoodImg/Food11.jpg";
import Food2 from "./DogFoodImg/Food2.jpg";
import Food22 from "./DogFoodImg/Food22.jpg";
import Food3 from "./DogFoodImg/Food3.jpg";
import Food33 from "./DogFoodImg/Food33.jpg";
import Food4 from "./DogFoodImg/Food4.jpg";
import Food44 from "./DogFoodImg/Food44.jpg";
import Food5 from "./DogFoodImg/Food5.jpg";
import Food55 from "./DogFoodImg/Food55.jpg";
import Food6 from "./DogFoodImg/Food6.jpg";
import Food66 from "./DogFoodImg/Food66.jpg";

export const dogFoodProducts = [
  {
    id: 1,
    title: "Premium Dry Dog Food - Chicken & Rice",
    image: Food1,
    hoverImage: Food11,
    price: 49.99,
    rating: 4.8,
    discount: 15,
    countdown: true,
    buttonText: "Add To Cart",
  },
  {
    id: 2,
    title: "Natural Grain-Free Dog Food",
    image: Food2,
    hoverImage: Food22,
    priceRange: { min: 35.99, max: 89.99 },
    rating: 4.6,
    discount: 0,
    countdown: false,
    buttonText: "Select Options",
  },
  {
    id: 3,
    title: "Organic Puppy Food - All Breeds",
    image: Food3,
    hoverImage: Food33,
    price: 59.99,
    rating: 4.9,
    discount: 20,
    countdown: true,
    buttonText: "Add To Cart",
  },
  {
    id: 4,
    title: "Senior Dog Food - Joint Support",
    image: Food4,
    hoverImage: Food44,
    price: 45.99,
    rating: 4.5,
    discount: 10,
    countdown: false,
    buttonText: "Add To Cart",
  },
  {
    id: 5,
    title: "High Protein Dog Food Bundle",
    image: Food5,
    hoverImage: Food55,
    priceRange: { min: 29.99, max: 119.99 },
    rating: 4.7,
    discount: 25,
    countdown: true,
    buttonText: "View Products",
  },
  {
    id: 6,
    title: "Sensitive Stomach Dog Food",
    image: Food6,
    hoverImage: Food66,
    price: 52.99,
    rating: 4.4,
    discount: 0,
    countdown: false,
    buttonText: "Add To Cart",
  },
];
