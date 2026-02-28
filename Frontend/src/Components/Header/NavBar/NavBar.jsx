import MenuButton from "./Menu/MenuButton";
import NavLinks from "./NavLinks/NavLinks";
import NavLogo from "./NavLogo/NavLogo";
import SearchDesktop from "./SearchBar/SearchDesktop/SearchDesktop";

export default function NavBar() {
  return (
    <>
      <nav className=" flex items-center px-[1rem] ">
        <div>
          <MenuButton />
        </div>
        <div className="flex px-[0.8rem] flex-1 justify-between gap-2 sm:gap-12 items-center">
          <NavLogo />
          <div className="hidden lg:flex">
            <SearchDesktop />
          </div>
          <NavLinks />
        </div>
      </nav>
    </>
  );
}
