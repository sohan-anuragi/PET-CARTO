import { useContext } from "react";
import { BlogContext } from "./BlogStore";

function BlogCategory() {
  const { state, dispatch } = useContext(BlogContext);

  const categories = [
    "Business",
    "Information",
    "Marketing",
    "Promotions",
    "Search Engine",
    "Social Media",
    "Statistics",
    "Writing",
  ];

  const handleCategoryClick = (category) => {
    dispatch({ type: "FILTER_BY_CATEGORY", payload: category });
  };

  const handleReset = () => {
    dispatch({ type: "RESET_FILTER" });
  };

  return (
    <div className="rounded-lg border border-gray-300 bg-white overflow-hidden">
      <h3 className="mb-0 text-xl bg-gray-100 font-bold px-6 py-3 text-gray-900">
        Categories
      </h3>
      <div className="flex flex-col flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-3 text-start text-sm font-medium transition-colors ${
              state.selectedCategory === category
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {(state.selectedCategory || state.selectedTag) && (
        <div className="px-4 py-3">
          <button
            onClick={handleReset}
            className="w-full rounded bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-300"
          >
            Reset Filter
          </button>
        </div>
      )}
    </div>
  );
}

export default BlogCategory;
