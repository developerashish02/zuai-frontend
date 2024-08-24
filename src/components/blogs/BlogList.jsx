import React from "react";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const dummyBlogs = [
    {
      id: 1,
      title: "Exploring the Future of AI",
      excerpt:
        "Dive into the advancements and implications of artificial intelligence in various sectors.",
      image: "https://via.placeholder.com/300/87CEEB/FFFFFF",
      link: "#",
    },
    {
      id: 2,
      title: "A Journey Through Space",
      excerpt:
        "Discover the latest findings and missions in space exploration.",
      image: "https://via.placeholder.com/300/6A5ACD/FFFFFF",
      link: "#",
    },
    {
      id: 3,
      title: "The Rise of Quantum Computing",
      excerpt:
        "Understanding quantum computing and its potential to revolutionize technology.",
      image: "https://via.placeholder.com/300/FFB6C1/FFFFFF",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Featured Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
