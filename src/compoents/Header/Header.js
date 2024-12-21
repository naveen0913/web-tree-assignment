import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#fff" : "#333";
    document.body.style.color = darkMode ? "#000" : "#fff";
  };

  return (
    <div>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: darkMode ? "#222" : "#f9f9f9",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          style={{ width: "40px", height: "40px" }}
        />
        <p style={{paddingLeft:"10px",fontWeight:600,fontSize:"18px"}} >Welcome to React App</p>
        <div style={{ flex: 1 }}></div>
        <button
          onClick={toggleDarkMode}
          style={{
            padding: "10px 20px",
            backgroundColor: darkMode ? "#444" : "#ddd",
            color: darkMode ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s, color 0.3s",
          }}
        >
          {darkMode ? <MdLightMode/> : <MdDarkMode/> }
        </button>
      </header>
    </div>
  );
}

export default Header;
