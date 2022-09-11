import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeProvider";
// import { Link } from "react-router-dom";

function Header() {
  const { state, dispatch } = useContext(ThemeContext);
  const { darkMode } = state;
  const handleDarkMode = () => {
    dispatch({ type: "CHANGE_THEME" });
  };
  return (
    <header className="bg-white text-black dark:bg-headerBg dark:text-white px-5  py-2.5 fixed top-0 left-0 right-0 h-50  min-h-50 ">
      <a className="mx-2 cursor-pointer" href={"#main-container"}>
        Home
      </a>
      <a className="mx-2 cursor-pointer" href={"#meta-verse"}>
        meta verse
      </a>
      <a className="mx-2 cursor-pointer" href={"#our-partners"}>
        our-partner
      </a>
      <a className="mx-2 cursor-pointer" href={"#portfolio"}>
        portfolio
      </a>
      <a className="mx-2 cursor-pointer" href={"#road-map"}>
        road-map
      </a>
      <span className="cursor-pointer float-right " onClick={handleDarkMode}>
        {darkMode ? "Light" : "Dark"}
      </span>
    </header>
  );
}

export default Header;
