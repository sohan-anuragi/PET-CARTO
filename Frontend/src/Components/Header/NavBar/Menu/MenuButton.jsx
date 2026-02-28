import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuBar from "./MenuBar";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative block lg:hidden ">
        <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu className="w-7 h-7 text-white hover:text-orange-500 transition-colors lg:hidden" />
        </div>
        <MenuBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}
