import React, { useContext } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { ThemeContext } from "./Context/ThemeProvider";

function App() {
  const { state } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen w-full App text-white relative ${
        state.darkMode && "dark"
      }`}
    >
      <Header />
      <div id="main-container" className="main-container">
        Main
      </div>
      <div id="meta-verse" className="meta-verse">
        Meta verse
      </div>
      <div id="our-partners" className="our-partner">
        Out Partners
      </div>
      <div id="portfolio" className="portfolio">
        Portfolio
      </div>
      <div id="road-map" className="road-map">
        Road map
      </div>
    </div>
  );
}

export default App;
