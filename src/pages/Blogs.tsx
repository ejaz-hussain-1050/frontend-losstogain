// src/pages/Plans.tsx
import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import BlogDetails from "../components/BlogDetails";
import { Blog } from "../utils/interfaces";

const BlogsPage: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | undefined>(undefined);
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
        sampleBlogs.map((blog) => (
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

export const sampleBlogs: Blog[] = [
  {
    id: "1",
    title: "Exploring the Benefits of Daily Exercise",
    author: "Jane Doe",
    writeTime: "March 25, 2025",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/MOUNTAIN1.jpg?alt=media&token=8e54cc31-748e-405c-b526-abdba39e6407",
    content:
      "Regular exercise is crucial for maintaining physical and mental health. In this blog, we discuss various benefits of incorporating a consistent workout routine into your daily schedule,",
  },
  {
    id: "2",
    title: "Healthy Eating Habits for a Stronger Body",
    author: "John Smith",
    writeTime: "April 2, 2025",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/losetogain-8d719.appspot.com/o/PLANK.jpg?alt=media&token=b99b381f-842b-440d-bfb3-85a6848d96d8",
    content:
      "Eating healthy is not just a trend but a lifestyle choice. Discover tips, recipes, and strategies to build a balanced diet that supports your fitness goals...",
  },
  // Add more sample blogs as needed
];
