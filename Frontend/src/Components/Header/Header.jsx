import DropLinks from "./DropLinks/DropLinks";
import NavBar from "./NavBar/NavBar";
import TopBar from "./TopBar/TopBar";

export default function Header() {
  return (
    <>
      <header className="bg-[#192d52]">
        <TopBar />
        <NavBar />
        <div className="hidden lg:block"></div>
      </header>
    </>
  );
}
