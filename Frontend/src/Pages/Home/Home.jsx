import FavoriteBrands from "./FavoriteBrands/FavoriteBrands";
import FProducts from "./FeaturedProducts/FProducts";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import HomeSwipper from "./HomeSwipper/Swipper";
import Products from "./Products/Products";
import QuickProducts from "./QuickProducts/QuickProducts";
import WeekDealProducts from "./WeekDeal/WeekDealProducts";
import CustomerComments from "./Comment/Comment";
import TipsSwiper from "./Tips/Tips";
import OurBrand from "./OurBrand/OurBrand";

export default function Home() {
  return (
    <>
      <div>
        <HomeCarousel />
        <HomeSwipper />
        <Products />
        <QuickProducts />
        <WeekDealProducts />
        <FavoriteBrands />
        <FProducts />
        <CustomerComments />
        <TipsSwiper />
        <OurBrand />
      </div>
    </>
  );
}
