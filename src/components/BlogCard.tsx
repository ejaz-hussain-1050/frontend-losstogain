// src/components/BlogCard.tsx
import React from "react";
import { Blog } from "../utils/interfaces";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div>
      <img
        src={blog.imageUrl}
        alt={blog.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-2">{blog.title}</h2>
      <p className="text-gray-600 mt-1">By {blog.author}</p>
      <p className="text-gray-800 mt-2">
        {blog.content.length > 100
          ? blog.content.substring(0, 100) + "..."
          : blog.content}
      </p>
    </div>
  );
};

export default BlogCard;
