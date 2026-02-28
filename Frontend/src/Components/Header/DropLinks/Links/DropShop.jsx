import shopMenuData from "../../NavBar/Menu/Shop/ShopData";
import doggyImage from "../../../../assets/Doggy image/Shop-banner.jpg";

export default function DropShop() {
  return (
    <div className="flex gap-8 p-6 bg-white">
      {/* Left Side - Categories (3 Columns) */}
      <div className="w-2/3">
        <div className="grid grid-cols-3 gap-8">
          {shopMenuData.map((category) => (
            <div key={category.id}>
              {/* Category Title */}
              <h3 className="font-bold text-gray-900 mb-4">{category.title}</h3>

              {/* Children Items */}
              <div className="space-y-2">
                {category.children.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 text-sm"
                  >
                    <span>{item.title}</span>

                    {item.hot && (
                      <span className="text-[10px] bg-pink-500 text-white px-2 py-0.5 rounded font-bold">
                        HOT
                      </span>
                    )}

                    {item.trending && (
                      <span className="text-[10px] bg-blue-400 text-white px-2 py-0.5 rounded font-bold">
                        NEW
                      </span>
                    )}

                    {item.sale && (
                      <span className="text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded font-bold">
                        SALE
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="w-1/3 relative">
        <img src={doggyImage} alt="Dog offer" className="w-full rounded-lg" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="font-bold text-lg">OFFER!</p>
            <p className="font-bold text-3xl">Flat 80%</p>
            <p className="font-bold text-lg">OFF</p>
          </div>
        </div>
      </div>
    </div>
  );
}
