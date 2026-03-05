import { useState } from "react";
import img1 from "./WishListImg/product1.jpg";
import img2 from "./WishListImg/product2.jpg";
import img3 from "./WishListImg/product3.jpg";
import img4 from "./WishListImg/product4.jpg";
import TopHeading from "./TopHeading";

const wishlistData = [
  {
    id: 1,
    title: "Neuseeland Sensible Happy Dog Food",
    price: 200,
    oldPrice: 300,
    image: img1,
    date: "March 3, 2026",
  },
  {
    id: 2,
    title: "Petstages Fresh Breath Mint Stick Cat Toy",
    price: 21,
    oldPrice: null,
    image: img2,
    date: "March 3, 2026",
  },
  {
    id: 3,
    title: "Mr. Fresh Expert Dog Location Habituation Spray",
    price: 20,
    oldPrice: 24,
    image: img3,
    date: "March 3, 2026",
  },
  {
    id: 4,
    title: "A-Tape Cohesive Crepe Bandage Green Elastic",
    price: 20,
    oldPrice: 200,
    image: img4,
    date: "March 3, 2026",
  },
];

export default function Wishlist() {
  const [wishlist, setWishlist] = useState(wishlistData);
  const [isCopyModalOpen, setIsCopyModalOpen] = useState(false);
  const [showCopyToast, setShowCopyToast] = useState(false);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const handleViewProduct = (id) => {
    console.log("View product with id:", id);
  };

  const handleOpenCopyModal = () => {
    setIsCopyModalOpen(true);
  };

  const handleCloseCopyModal = () => {
    setIsCopyModalOpen(false);
  };

  const handleConfirmCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopyModalOpen(false);
      setShowCopyToast(true);
      setTimeout(() => {
        setShowCopyToast(false);
      }, 2000);
    } catch {
      setIsCopyModalOpen(false);
    }
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-700 mb-2">
            Your Wishlist is Empty
          </h2>
          <p className="text-gray-500 text-lg">
            Start adding your favorite products to your wishlist!
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <TopHeading />
      <div className=" bg-gray-50 py-12 px-4 ">
        <div className="border-[1px] border-gray-200 ">
          <div className="bg-white w-[full]">
            {wishlist.map((product, index) => (
              <div
                key={product.id}
                className={`flex items-center gap-6 p-6 hover:bg-gray-50 transition-colors duration-200 ${
                  index !== wishlist.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                {/* Remove Button - Top Right */}
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className=" text-gray-400 hover:text-red-500  text-2xl font-light transition-colors duration-200"
                  title="Remove from wishlist"
                >
                  ✕
                </button>
                {/* Product Image */}
                <div className="flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 h-20 object-cover rounded-lg bg-gray-100"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col md:flex-row justify-between items-center flex-1">
                  <div className="flex-grow">
                    <h5 className="text-lg font-[500] text-gray-900 mb-1">
                      {product.title}
                    </h5>
                    <p className="text-sm text-gray-500 mb-3">{product.date}</p>

                    {/* Price Section */}
                    <div className="flex items-center gap-3">
                      {product.oldPrice && (
                        <span className="text-gray-400 line-through text-sm">
                          ${product.oldPrice}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => handleViewProduct(product.id)}
                      className="px-6 py-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors duration-200 whitespace-nowrap"
                    >
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Wishlist Copy link button */}
      <div className="bg-gray-50 px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 sm:px-6 sm:py-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between shadow-sm transition-all duration-200">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                Share your Wishlist
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Copy and share your wishlist link with friends and family.
              </p>
            </div>

            <button
              onClick={handleOpenCopyModal}
              className="self-start sm:self-auto px-6 py-2.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-semibold text-sm sm:text-base transition-colors duration-200"
            >
              Copy Link
            </button>
          </div>
        </div>
      </div>

      {isCopyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-6 sm:p-7">
            <p className="text-base sm:text-lg font-medium text-gray-900 text-center">
              Do you want to copy your wishlist link?
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={handleCloseCopyModal}
                className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmCopyLink}
                className="px-5 py-2.5 rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition-colors duration-200"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {showCopyToast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[60] px-4 py-2.5 rounded-lg bg-green-600 text-white text-sm font-medium shadow-lg transition-all duration-300">
          Wishlist link copied!
        </div>
      )}
    </>
  );
}
