import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <>
      <div className="flex flex-1 bg-white items-center rounded-md">
        <input
          type="text"
          placeholder="Search Products..."
          className="w-full px-4 bg-white py-2 min-w-[20rem]  focus:outline-none "
        />
        <a href="/" className="px-2 ">
          <FiSearch size={20} />
        </a>
      </div>
    </>
  );
}
