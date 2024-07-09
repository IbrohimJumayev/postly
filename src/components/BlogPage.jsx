import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ThemeContext } from "../App";
import blogIMg from "/blogi.png";

const BlogPage = () => {
  const { posts } = useContext(ThemeContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id === id);

  return (
    <div className="max-w-4xl mx-auto p-4">
      {post && (
        <>
          <img
            src={blogIMg}
            alt="Blog"
            className="w-full h-auto rounded-lg mb-4 mt-5"
          />
          <h2 className="text-4xl font-bold mb-2 mt-10">{post.title}</h2>
          <p className="text-gray-600 mb-4">{post.datetime}</p>
          <h3 className="text-xl leading-relaxed">{post.body}</h3>
        </>
      )}
    </div>
  );
};

export default BlogPage;
