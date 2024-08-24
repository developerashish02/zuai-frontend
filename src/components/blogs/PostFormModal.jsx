import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object({
  title: Yup.string()
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title must not exceed 100 characters")
    .required("Title is required"),
  content: Yup.string()
    .min(10, "Content must be at least 10 characters")
    .required("Content is required"),
  author: Yup.string().required("Author is required"),
});

const PostFormModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        <h2 className="text-2xl font-bold mb-4">Create Post</h2>
        <Formik
          initialValues={{ title: "", content: "", author: "" }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Title</label>
                <Field
                  name="title"
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Content</label>
                <Field
                  name="content"
                  as="textarea"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
                <ErrorMessage
                  name="content"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Author</label>
                <Field
                  name="author"
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
                <ErrorMessage
                  name="author"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="mr-2 px-4 py-2 bg-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                >
                  {isSubmitting ? "Submitting..." : "Create Post"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PostFormModal;
