import { CartProvider, useCart } from "./CartStore";
import { FaTruck } from "react-icons/fa";

function CartContent({ isOpen, setIsOpen }) {
  const { items, subtotal, removeItem, increaseQty, decreaseQty } = useCart();

  const FREE_THRESHOLD = 200;
  const progressPercent = Math.min((subtotal / FREE_THRESHOLD) * 100, 100);
  const remainingAmount = Math.max(FREE_THRESHOLD - subtotal, 0);
  const isFree = subtotal >= FREE_THRESHOLD;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
          onClick={(e) => e.stopPropagation()}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-[45%] w-[80%] md:w-[45%] lg:w-[30%] bg-white z-50 shadow-lg transition-transform duration-300 flex flex-col
           transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors text-2xl font-light"
          >
            ✕
          </button>
        </div>

        {/* Free Delivery Section */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className=" p-4 rounded-md space-y-3">
            <div className="relative pt-2">
              <div className="relative h-2 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className={`absolute left-0 top-0 h-full rounded-full transition-all duration-500 ease-in-out ${
                    isFree ? "bg-green-500" : "bg-orange-400"
                  }`}
                  style={{ width: `${progressPercent}%` }}
                >
                  <div className="h-full w-full bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.3),rgba(255,255,255,0.3)_10px,transparent_10px,transparent_20px)]" />
                </div>
              </div>

              <div
                className="absolute top-0 transition-all duration-500 ease-in-out"
                style={{ left: `calc(${progressPercent}% - 10px)` }}
              >
                <FaTruck
                  className={`text-[1.5rem] ${
                    isFree ? "text-green-600" : "text-orange-500"
                  }`}
                />
              </div>
            </div>

            <p
              className={`text-sm text-center font-medium ${
                isFree ? "text-gray-800" : "text-gray-700"
              }`}
            >
              {isFree
                ? "Congratulations! Your order is eligible for FREE Delivery."
                : `Add $${remainingAmount} more to get FREE Delivery!`}
            </p>
          </div>
        </div>

        {/* Items Container */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="text-center text-gray-500 py-8">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 py-4 border-b border-gray-200"
                >
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-sm font-semibold text-gray-900 line-clamp-2">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-xs text-gray-500 mb-3">
                      {item.quantity} × ${item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-6 h-6 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 transition-colors text-sm"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="w-6 h-6 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 transition-colors text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Item Total */}
                  <div className="flex-shrink-0 text-right">
                    <p className="font-bold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="flex flex-col text-red-500 hover:text-red-700 transition-colors font-bold text-lg"
                    title="Remove item"
                  >
                    <span>✕</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 bg-gray-50 px-6 py-4 space-y-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900">
                Subtotal:
              </span>
              <span className="text-xl font-bold text-gray-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="px-4 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                View Cart
              </button>
              <button className="px-4 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default function Cart({ isOpen, setIsOpen }) {
  return (
    <CartProvider>
      <CartContent isOpen={isOpen} setIsOpen={setIsOpen} />
    </CartProvider>
  );
}
