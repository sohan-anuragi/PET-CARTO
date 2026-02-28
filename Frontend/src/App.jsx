import Footer from "./Components/Footer/Footer";
import DropLinks from "./Components/Header/DropLinks/DropLinks";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Header></Header>
      <div className="hidden lg:flex sticky w-full top-0 z-50">
        <DropLinks />
      </div>
      <Home />
      <Footer />
    </>
  );
}

export default App;
