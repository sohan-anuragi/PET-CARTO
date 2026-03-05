import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import DropLinks from "../Components/Header/DropLinks/DropLinks";

export default function AppLayout() {
  return (
    <>
      <Header></Header>
      <div className="hidden lg:flex sticky w-full top-0 z-50">
        <DropLinks />
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
