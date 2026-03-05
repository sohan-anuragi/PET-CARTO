import { useContext } from "react";
import { BlogContext } from "./BlogStore";
import BlogCategory from "./BlogCategory";
import BlogTags from "./BlogTags";
import TopHeading from "./TopHeading";

export default function Blog() {
  const { state } = useContext(BlogContext);

  return (
    <>
      <TopHeading />
      <section className="w-full bg-gray-50 px-4 py-12 md:px-6 lg:px-8">
        <div className="w-full flex flex-col md:flex-row gap-8">
          <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {state.filteredBlogs.map((blog) => (
                  <article
                    key={blog.id}
                    className="overflow-hidden rounded-md bg-white shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="relative h-80 w-full overflow-hidden bg-gray-200 ">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="p-5 md:p-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                        {blog.category}
                      </p>

                      <h3 className="mt-2 text-lg font-bold text-gray-900 line-clamp-2 md:text-xl">
                        {blog.title}
                      </h3>

                      <div className="mt-3 flex items-center gap-3 text-sm text-gray-600">
                        <span>By {blog.author}</span>
                        <span>•</span>
                        <span>{blog.date}</span>
                      </div>

                      <p className="mt-3 line-clamp-2 text-sm text-gray-700 md:text-base">
                        {blog.description}
                      </p>

                      <button className="mt-4 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700">
                        READ MORE →
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {state.filteredBlogs.length === 0 && (
                <div className="rounded-lg bg-white p-12 text-center">
                  <p className="text-lg text-gray-600">
                    No blogs found matching your filter.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className=" min-w-[16rem] space-y-6">
            <BlogCategory />
            <BlogTags />
          </div>
        </div>
      </section>
    </>
  );
}
