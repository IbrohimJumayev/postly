import ThemeMode from "./ThemeMode";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Nav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex justify-between px-3 ">
      <div>
        <p className="text-xl font-bold cursor-pointer">POSTLY</p>
      </div>
      <div className="flex gap-3">
        <ul className="flex gap-5 text-xl font-light cursor-pointer max-sm:gap-2 max-sm:text-lg">
          <li>Blog</li>
          <li>Post</li>
          <li>About</li>
        </ul>
        <div className="ml-3 max-sm:ml-0">
          <ThemeMode theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
