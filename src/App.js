import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

const getStorageTheme = () => {
  let theme = "light";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <main>
      <nav className="nav-center">
        <h1>Overreacted </h1>
        <button className="btn" onClick={toggleTheme}>
          Toggle
        </button>
      </nav>
      <section className="articles">
        {data.map((info) => {
          return <Article key={info.id} {...info} />;
        })}
      </section>
    </main>
  );
}

export default App;
