import BlogCard from "./BlogCard";
import { useGetAllPostsQuery } from "../../services/posts";
import ShimmerCard from "../common/ShimmerCard";
import { useDispatch } from "react-redux";
import { setSelectedPost } from "../../features/posts/postsSlice";

const BlogList = () => {
  const {
    data: postsData,
    isLoading,
    isSuccess,
    error,
  } = useGetAllPostsQuery();



  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Featured Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <ShimmerCard key={index} />
            ))
          : isSuccess
          ? postsData.posts.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))
          : error && (
              <p className="text-center text-red-500">
                Error loading blogs. Please try again later.
              </p>
            )}
      </div>
    </div>
  );
};

export default BlogList;
