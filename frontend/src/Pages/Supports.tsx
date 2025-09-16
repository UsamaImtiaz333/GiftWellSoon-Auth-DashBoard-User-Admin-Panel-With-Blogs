import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/dashboardApi/BlogApi";
import type { Blog } from "../types/blog";
import { Link } from "react-router-dom";

function Supports() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  // Fetch all blogs
  const {
    data: blogs = [],
    isLoading,
    isError,
  } = useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await api.get("/blogs");
      return res.data;
    },
  });

  if (isLoading)
    return <p className="p-4 text-center text-gray-500">Loading blogs...</p>;
  if (isError)
    return (
      <p className="p-4 text-center text-red-500">Failed to fetch blogs.</p>
    );

  // Extract unique categories
  const categories = Array.from(new Set(blogs.map((b) => b.category)));

  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory
    ? blogs.filter((b) =>
        b.category.toLowerCase().includes(selectedCategory.toLowerCase())
      )
    : blogs;

  return (
    <>
      <Link
        to="/"
        className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300 
                 px-3 py-1 rounded-md shadow-md hover:shadow-lg"
      >
        GiftWellSoon
      </Link>
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          Support Blogs
        </h1>

        {/* Search Input */}
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search category..."
            className="w-full md:w-1/2 px-4 py-2 border rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchText}
            onChange={(e) => {
              const val = e.target.value;
              setSearchText(val);
              // Automatically select category if it matches
              setSelectedCategory(val);
            }}
          />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <button
            className={`px-4 py-2 rounded-full border transition-colors duration-300 ${
              selectedCategory === ""
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-500 hover:text-white"
            }`}
            onClick={() => {
              setSelectedCategory("");
              setSearchText("");
            }}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full border transition-colors duration-300 ${
                selectedCategory.toLowerCase() === cat.toLowerCase()
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-500 hover:text-white"
              }`}
              onClick={() => {
                setSelectedCategory(cat);
                setSearchText(cat);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredBlogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              {blog.image && (
                <img
                  src={
                    blog.image.startsWith("http")
                      ? blog.image
                      : `http://localhost:3000/uploads/${blog.image}`
                  }
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />
              )}
              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-500 mb-3">
                  By {blog.author} | {blog.date} |{" "}
                  <span className="font-medium">{blog.category}</span>
                </p>
                <p className="text-gray-700">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No blogs found for this category.
          </p>
        )}
      </div>
    </>
  );
}

export default Supports;
