import { useState } from "react";
import BlogList from "./components/blogs/BlogList";
import PostFormModal from "./components/blogs/PostFormModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (values) => {
    console.log("Form Data:", values);
    handleCloseModal();
  };
  return (
    <div className="App">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={handleOpenModal}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Create New Post
        </button>
        <PostFormModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
        />
      </div>
      <BlogList />
    </div>
  );
}

export default App;
