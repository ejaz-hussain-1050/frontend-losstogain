// src/pages/Plans.tsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import BlogCard from "../components/BlogCard";
import BlogDetails from "../components/BlogDetails";
import { RootState } from "../store/store";
import { Blog } from "../utils/interfaces";

const BlogsPage: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | undefined>(undefined);
  const blogs = useSelector((state: RootState) => state.blogs.blogs);
  return (
    <div className="flex flex-wrap w-[80%] h-auto gap-5">
      {selectedBlog === undefined && (
        <div className="bg-gray-800 w-full text-white p-20 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-2 text-center">Health Blogs</h1>
          <p className=" text-center">
            AI Based Personalized Blogs for health Cares{" "}
          </p>
        </div>
      )}
      {selectedBlog === undefined ? (
        blogs?.map((blog) => (
          <div
            className="cursor-pointer bg-white  h-[45%] shadow-md rounded-lg p-4 w-[30%]"
            onClick={() => {
              setSelectedBlog(blog);
            }}
          >
            <BlogCard key={blog.id} blog={blog} />
          </div>
        ))
      ) : (
        <BlogDetails blog={selectedBlog} />
      )}
    </div>
  );
};

export default BlogsPage;
