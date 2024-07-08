import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="h-dvh " id={theme}>
        <div className="max-w-6xl m-auto pt-7 px-10 max-sm:max-w-full max-sm:px-0 relative">
          <Nav />
          <Header />
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
