import ReactSwitch from "react-switch";

const ThemeMode = ({ theme, toggleTheme }) => {
  return (
    <div className="flex items-center">
      <ReactSwitch
        onChange={toggleTheme}
        checked={theme === "dark"}
        checkedIcon={
          <span className="material-symbols-outlined pt-0.5 px-1 ">
            dark_mode
          </span>
        }
        uncheckedIcon={
          <span className="material-symbols-outlined pt-0.5 px-1 text-white ">
            light_mode
          </span>
        }
        height={30}
        width={60}
        offColor="#181a36"
        onColor="#30346D"
      />
    </div>
  );
};

export default ThemeMode;
