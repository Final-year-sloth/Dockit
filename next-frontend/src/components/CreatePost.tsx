import React, { useState } from "react";

type CreatePostProps = {
  onSubmit?: (title: string, content: string, image: File | null) => void;
};

const CreatePost: React.FC<CreatePostProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(title, content, image);
    }
    setTitle("");
    setContent("");
    setImage(null);
  };

  return (
    <div className="p-6 mt-7 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Add Post</h2>
        <button
          onClick={() => {
            setTitle("");
            setContent("");
            setImage(null);
          }}
          className="text-gray-500 hover:text-red-700"
        >
          Discard
        </button>
      </div>

      {/* Title Input */}
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 font-semibold mb-2"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter post title"
        />
      </div>

      {/* Content Text Area */}
      <div className="mb-4">
        <label
          htmlFor="content"
          className="block text-gray-700 font-semibold mb-2"
        >
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter post content"
          rows={4}
        />
      </div>

      {/* Image Input */}
      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-gray-700 font-semibold mb-2"
        >
          Add Attachment
        </label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
          className="w-full"
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full py-2 bg-red-700 text-white font-semibold rounded hover:bg-red-500 transition"
      >
        Submit Post
      </button>
    </div>
  );
};

export default CreatePost;
