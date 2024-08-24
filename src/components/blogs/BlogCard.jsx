import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{blog.title}</h3>
        <p className="text-gray-600 mb-4">{blog.content}</p>
        <div className="flex justify-between">
          <Link
            to={`/posts/${blog._id}`}
            className="text-lg font-semibold text-blue-600 hover:text-blue-800"
          >
            Read More →
          </Link>

          <div className="space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
