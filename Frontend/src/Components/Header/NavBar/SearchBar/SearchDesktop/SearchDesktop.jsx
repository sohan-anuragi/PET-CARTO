import SearchBar from "./SearchBar";
import SearchSelect from "./SearchSelect";

export default function SearchDesktop() {
  return (
    <>
      <div className="flex py-[0.1rem] flex-1 max-w-[45rem] rounded-md bg-white ">
        <SearchSelect />
        <SearchBar />
      </div>
    </>
  );
}
