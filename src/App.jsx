import { useDispatch, useSelector } from "react-redux";
import BlogList from "./components/blogs/BlogList";
import PostFormModal from "./components/blogs/PostFormModal";
import { handleOpenModal } from "./features/posts/postsSlice";

function App() {
  const dispatch = useDispatch();
  const selectedPost = useSelector((state) => state.posts.selectedPost);

  return (
    <div className="App">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => dispatch(handleOpenModal())}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Create New Post
        </button>
        <PostFormModal post={selectedPost} />
      </div>
      <BlogList />
    </div>
  );
}

export default App;
