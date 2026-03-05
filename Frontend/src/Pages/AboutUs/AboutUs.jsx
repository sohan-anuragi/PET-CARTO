import About3 from "./About3";
import About4 from "./About4";
import About5 from "./About5";
import AboutInfoDesk from "./AboutInfoDesk";
import AboutInfoMob from "./AboutInfoMob";
import ImageSection from "./ImageSection";
import TopHeading from "./TopHeading";

export default function AboutUs() {
  return (
    <>
      <TopHeading />
      <div className="lg:hidden">
        <AboutInfoMob />
      </div>
      <div className="hidden lg:block p-[1rem] ">
        <AboutInfoDesk />
      </div>
      <ImageSection />
      <About3 />
      <About4 />
      <About5 />
    </>
  );
}
