import img1 from "./AboutUsImg/about-page-01.jpg";
import img2 from "./AboutUsImg/about-page-02.jpg";
import img3 from "./AboutUsImg/about-page-03.jpg";
import img4 from "./AboutUsImg/about-page-04.jpg";

function ImageSection() {
  return (
    <div className="w-full px-4 py-8">
      <div
        className="
  flex flex-col flex-wrap
  md:grid md:grid-cols-2
  gap-3 md:gap-4 
  max-w-7xl mx-auto
"
      >
        <div className="w-full">
          <img src={img1} alt="Main" className="w-full h-full object-cover" />
        </div>
        <div className="w-full grid grid-rows-2 gap-3 md:gap-4">
          <div className="w-full">
            <img
              src={img2}
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full grid grid-cols-2 gap-3 md:gap-4">
            <div className="w-full">
              <img
                src={img3}
                alt="Image 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full">
              <img
                src={img4}
                alt="Image 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
