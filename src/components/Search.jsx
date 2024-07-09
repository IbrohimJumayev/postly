import { useContext } from "react";
import { ThemeContext } from "../App";

const Search = () => {
  const { search, setSearch } = useContext(ThemeContext);
  return (
    <div>
      <form className="flex gap-3 items-center justify-end mt-8 max-sm:justify-center ">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent outline-none border-2  py-1 px-2 text-xl font-bold rounded-lg max-sm:w-full max-sm:mx-5 max-sm:mt-1 max-sm:py-2"
          type="text"
          name=""
          id="search"
          placeholder="search for posts"
        />
      </form>
    </div>
  );
};

export default Search;
