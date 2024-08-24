import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{blog.title}</h3>
        <p className="text-gray-600 mb-4">{blog.excerpt}</p>
        <a
          href={blog.link}
          className="text-lg font-semibold text-blue-600 hover:text-blue-800"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
