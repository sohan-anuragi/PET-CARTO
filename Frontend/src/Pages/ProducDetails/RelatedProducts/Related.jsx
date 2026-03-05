import RelatedProducts from "./RelatedProducts";

export default function Related() {
  return (
    <>
      <div>
        <h2 className="px-[2rem] text-[1.8rem] font-semibold mt-[3rem] ">
          {" "}
          Related Products...
        </h2>
        <div>
          <RelatedProducts />
        </div>
      </div>
    </>
  );
}
