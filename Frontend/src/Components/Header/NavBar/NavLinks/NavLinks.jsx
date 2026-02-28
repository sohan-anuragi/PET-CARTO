import { FaRegUser } from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { useState } from "react";
import SearchMobile from "../SearchBar/SearchMobile";

export default function NavLinks() {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0.0);

  return (
    <div className="flex items-center px-[1rem] gap-2 md:gap-4">
      {/* Search Mobile */}

      <div className="block lg:hidden">
        <SearchMobile />
      </div>
      {/* User Account Icon */}
      <a href="/account" className="relative group transition-all duration-300">
        <FaRegUser className="w-6 h-6 text-white hover:text-orange-500 transition-colors" />
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      </a>

      {/* Wishlist Icon with Badge */}
      <a
        href="/wishlist"
        className="relative group transition-all duration-300"
      >
        <IoHeartOutline className="w-6 h-6 text-white hover:text-red-500 transition-colors" />
        {wishlistCount >= 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full z-[1] w-5 h-5 flex items-center justify-center font-bold">
            {wishlistCount}
          </span>
        )}
      </a>

      {/* Cart Icon with Badge */}
      <a href="/cart" className="relative group transition-all duration-300">
        <RiShoppingCartLine className="w-6 h-6 text-white hover:text-orange-500 transition-colors" />
        {cartCount >= 0 && (
          <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full z-[1] w-5 h-5 flex items-center justify-center font-bold">
            {cartCount}
          </span>
        )}
      </a>

      {/* Price Display */}
      <div className="text-white hidden lg:block font-semibold text-sm">
        ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}
