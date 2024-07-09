import Search from "./Search";
import { useContext } from "react";
import { ThemeContext } from "../App";
import Header from "./Header";
import { Link } from "react-router-dom";

const Blog = () => {
  const { posts, search } = useContext(ThemeContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <Search />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 mt-10 mx-5 mb-10">
        {posts
          .filter((post) =>
            search.toLowerCase() === ""
              ? posts
              : post.title.toLowerCase().includes(search.toLowerCase()) ||
                post.body.toLowerCase().includes(search.toLowerCase())
          )
          .map((p) => (
            <div
              key={p.id}
              className=" pt-5 rounded-lg px-5 flex-col gap-5 pb-10 bg-transparent border-2"
            >
              <Link to={`/post/${p.id}`}>
                <h2 className="text-4xl font-bold max-sm:text-2xl">
                  {p.title}
                </h2>
                <h3 className="mt-1 text-gray-600 text-xl max-sm:text-lg">
                  {p.datetime}
                </h3>
              </Link>

              <p className="mt-5 text-2xl max-sm:text-xl">
                {p.body.length <= 25 ? p.body : `${p.body.slice(0, 25)}....`}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog;
