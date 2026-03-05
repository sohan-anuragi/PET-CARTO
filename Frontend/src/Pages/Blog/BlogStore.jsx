import { createContext, useReducer } from "react";
import { blogData } from "./BlogData";
import { useContext } from "react";

export const BlogContext = createContext();

const initialState = {
  allBlogs: blogData,
  filteredBlogs: blogData,
  selectedCategory: null,
  selectedTag: null,
};

function blogReducer(state, action) {
  switch (action.type) {
    case "FILTER_BY_CATEGORY": {
      const filtered = state.allBlogs.filter(
        (blog) => blog.category === action.payload,
      );
      return {
        ...state,
        filteredBlogs: filtered,
        selectedCategory: action.payload,
        selectedTag: null,
      };
    }

    case "FILTER_BY_TAG": {
      const filtered = state.allBlogs.filter((blog) =>
        blog.tags.includes(action.payload),
      );
      return {
        ...state,
        filteredBlogs: filtered,
        selectedTag: action.payload,
        selectedCategory: null,
      };
    }

    case "RESET_FILTER": {
      return {
        ...state,
        filteredBlogs: state.allBlogs,
        selectedCategory: null,
        selectedTag: null,
      };
    }

    default:
      return state;
  }
}

export function BlogProvider({ children }) {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
}
