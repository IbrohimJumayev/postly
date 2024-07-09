import { useContext } from "react";
import { ThemeContext } from "../App";

const Post = () => {
  const { handleSubmit, postTitle, setPostTitle, postBody, setPostBody } =
    useContext(ThemeContext);
  return (
    <div className="container mx-auto mt-20 px-4">
      <form className="w-full max-w-6xl mx-auto text-black font-bold text-xl p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title:
          </label>
          <input
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            required
            type="text"
            id="title"
            placeholder="Enter a title"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="post" className="block text-gray-700 font-bold mb-2">
            Post:
          </label>
          <textarea
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            required
            id="post"
            placeholder="Enter your post"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200 mb-10"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default Post;
