import AlsoLike from "./AlsoLike/AlsoLike";
import ExtraInfo from "./ExtraInfo/ExtraInfo";
import ProductSwipper from "./ProductSwipper";
import ProductTitle from "./ProductTitle";
import Related from "./RelatedProducts/Related";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import TopRated from "./TopRated";

export default function ProductDetails() {
  return (
    <>
      <div className=" flex flex-col lg:flex-row gap-4 px-[1rem]">
        <div className="lg:w-[33%]  w-[97%] lg:sticky lg:top-20 self-start">
          <ProductSwipper />
        </div>
        <div className="lg:w-[40%]  w-[90%] ">
          <ProductTitle />
        </div>
        <div className="lg:w-[25%]">
          <TopRated />
        </div>
      </div>
      <div>
        <ExtraInfo />
      </div>
      <div>
        <AlsoLike />
      </div>
      <div>
        <Related />
      </div>
    </>
  );
}
