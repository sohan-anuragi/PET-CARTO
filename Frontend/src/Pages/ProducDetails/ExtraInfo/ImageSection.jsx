import img1 from "./ExtraInfoImg/extended-1.jpg";
import img2 from "./ExtraInfoImg/extended-2.jpg";

export default function ImageSection() {
  return (
    <>
      <div className=" flex gap-6">
        <div className="w-[50%]">
          <img
            src={img1}
            alt="product image 1"
            className="w-full h-auto object-cover "
          />
        </div>

        <div className="w-[50%]">
          <img
            src={img2}
            alt="product image 2"
            className="w-full h-auto object-cover "
          />
        </div>
      </div>
    </>
  );
}
