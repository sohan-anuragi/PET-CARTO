import { useContext } from "react";
import { BlogContext } from "./BlogStore";
import { blogData } from "./BlogData";

function BlogTags() {
  const { state, dispatch } = useContext(BlogContext);

  const tags = [
    "Blogging",
    "Community",
    "Copywriting",
    "Educational",
    "Experiences",
    "Knowledge",
    "Learning",
    "Management",
    "Networking",
    "Photography",
    "Success Story",
  ];

  const getTagCount = (tag) => {
    return blogData.filter((blog) => blog.tags.includes(tag)).length;
  };

  const handleTagClick = (tag) => {
    dispatch({ type: "FILTER_BY_TAG", payload: tag });
  };

  const handleReset = () => {
    dispatch({ type: "RESET_FILTER" });
  };

  return (
    <div className="rounded-lg border border-gray-300 bg-white overflow-hidden">
      <h3 className="mb-0 text-xl bg-gray-100 font-bold px-6 py-3 text-gray-900">
        Tags
      </h3>
      <div className="flex flex-col flex-wrap">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-4 py-3 text-start   text-sm font-medium transition-colors ${
              state.selectedTag === tag
                ? "bg-blue-600 text-white"
                : " text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tag} ({getTagCount(tag)})
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

export default BlogTags;
