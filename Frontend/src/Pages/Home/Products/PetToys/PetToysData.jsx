import Toy1 from "./PetToysImg/Toy1.jpg";
import Toy11 from "./PetToysImg/Toy11.jpg";
import Toy2 from "./PetToysImg/Toy2.jpg";
import Toy22 from "./PetToysImg/Toy22.jpg";
import Toy3 from "./PetToysImg/Toy3.jpg";
import Toy33 from "./PetToysImg/Toy33.jpg";
import Toy4 from "./PetToysImg/Toy4.jpg";
import Toy44 from "./PetToysImg/Toy44.jpg";
import Toy5 from "./PetToysImg/Toy5.jpg";
import Toy55 from "./PetToysImg/Toy55.jpg";
import Toy6 from "./PetToysImg/Toy6.jpg";
import Toy66 from "./PetToysImg/Toy66.jpg";

export const petToysProducts = [
  {
    id: 1,
    title: "Interactive Feather Wand Cat Toy",
    image: Toy1,
    hoverImage: Toy11,
    price: 12.99,
    rating: 4.7,
    discount: 10,
    countdown: true,
    buttonText: "Add To Cart",
  },
  {
    id: 2,
    title: "Durable Rope Chew Toy Bundle",
    image: Toy2,
    hoverImage: Toy22,
    priceRange: { min: 8.99, max: 24.99 },
    rating: 4.5,
    discount: 0,
    countdown: false,
    buttonText: "Select Options",
  },
  {
    id: 3,
    title: "Squeaky Tennis Ball Fetch Toys Set",
    image: Toy3,
    hoverImage: Toy33,
    price: 18.99,
    rating: 4.8,
    discount: 15,
    countdown: true,
    buttonText: "Add To Cart",
  },
  {
    id: 4,
    title: "Plush Stuffed Pet Toy Collection",
    image: Toy4,
    hoverImage: Toy44,
    price: 22.99,
    rating: 4.4,
    discount: 8,
    countdown: false,
    buttonText: "Add To Cart",
  },
  {
    id: 5,
    title: "Catnip Mouse Toy Multi-Pack",
    image: Toy5,
    hoverImage: Toy55,
    priceRange: { min: 9.99, max: 34.99 },
    rating: 4.6,
    discount: 20,
    countdown: true,
    buttonText: "View Products",
  },
  {
    id: 6,
    title: "Rubber Ball Toy Set for All Pets",
    image: Toy6,
    hoverImage: Toy66,
    price: 16.99,
    rating: 4.9,
    discount: 0,
    countdown: false,
    buttonText: "Add To Cart",
  },
];
