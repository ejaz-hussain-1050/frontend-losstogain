// src/components/BlogDetails.tsx
import React from "react";
import { Blog } from "../utils/interfaces";

interface BlogDetailsProps {
  blog: Blog;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ blog }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Blog Image */}
      <div className="mb-6">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Blog Content Card */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="mr-4">By {blog.author}</span>
          <span>{blog.writeTime}</span>
        </div>
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {blog.content}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
