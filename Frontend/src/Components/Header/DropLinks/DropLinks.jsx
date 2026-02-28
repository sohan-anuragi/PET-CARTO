import Links from "./Links/Links";
import ShopByCategory from "./ShopBy/ShopBy";

export default function DropLinks() {
  return (
    <>
      <div className="sticky w-full top-0 z-50 flex px-[2.5rem] gap-12 bg-[#0b2e5c] border-t border-white/20 items-center py-2">
        <div>
          <ShopByCategory />
        </div>
        <div>
          <Links />
        </div>
      </div>
    </>
  );
}
