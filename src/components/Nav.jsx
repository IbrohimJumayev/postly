import ThemeMode from "./ThemeMode";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex justify-between px-3 items-center max-sm:px-5">
      <div>
        <NavLink to="/">
          <p className="text-xl font-bold cursor-pointer">POSTLY</p>
        </NavLink>
      </div>
      <div className="flex gap-3">
        <ul className="flex gap-5 text-xl font-light cursor-pointer max-sm:gap-2 max-sm:text-base items-center">
          <NavLink to="/">
            {" "}
            <li>Blog</li>
          </NavLink>
          <NavLink to="/post">
            <li>Post</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
        </ul>
        <div className="">
          <ThemeMode theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
