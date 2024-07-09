import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Post from "./components/Post";
import About from "./components/About";
import Blog from "./components/Blog";
import api from "./api/postsApi";
import { format } from "date-fns";
import BlogPage from "./components/BlogPage";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [selecteImg, setSelectedImg] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = Date.now().toString();
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = {
      id,
      title: postTitle,
      body: postBody,
      datetime,
    };
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        posts,
        search,
        setSearch,
        selecteImg,
        setSelectedImg,
        handleSubmit,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
      }}
    >
      <div className="h-dvh ">
        <div className="max-w-7xl m-auto pt-7 px-10 max-sm:max-w-full max-sm:px-0 relative">
          <Router>
            <Nav />
            <Routes>
              <Route path="/" element={<Blog />} />
              <Route path="/post" element={<Post />} />
              <Route path="/post/:id" element={<BlogPage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>

          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
