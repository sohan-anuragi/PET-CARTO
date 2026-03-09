import AboutInfoDesk from "./AboutInfoDesk";
import AboutInfoMob from "./AboutInfoMob";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
import Component5 from "./Component5";
import Component6 from "./Component6";
import Component7 from "./Component7";
import Component8 from "./Component8";
import Component9 from "./Component9";
import Component10 from "./Component10";
import Component11 from "./Component11";
import Component13 from "./Component13";
import Component14 from "./Component14/Component14";

import TopHeading from "./TopHeading";
import Component12 from "./Component12";
import Component15 from "./Component15/Component15";

export default function AboutUs2() {
  return (
    <>
      <TopHeading />
      {/* <div className="lg:hidden">
        <AboutInfoMob />
      </div>
      <div className="hidden lg:block p-[1rem] ">
        <AboutInfoDesk />
      </div> */}
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <Component7 />
      <Component8 />
      <Component9 />
      <Component10 />
      <Component11 />
      {/* <Component12 /> */}
      <Component13 />
      {/* <Component14 /> */}
      <Component15 />
    </>
  );
}
