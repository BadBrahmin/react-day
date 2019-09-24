import React from "react";

const Header = ({ activeBtn, changeActive }) => {
  return (
    <div className="flex center">
      <button
        className={`btn ${activeBtn === "en" ? "active" : ""}`}
        onClick={() => changeActive("en")}
      >
        En
      </button>

      <button
        className={`btn ${activeBtn === "fr" ? "active" : ""}`}
        onClick={() => changeActive("fr")}
      >
        Fr
      </button>
      <button
        className={`btn ${activeBtn === "Hi" ? "active" : ""}`}
        onClick={() => changeActive("Hi")}
      >
        Hin
      </button>
      <button
        className={`btn ${activeBtn === "Gr" ? "active" : ""}`}
        onClick={() => changeActive("Gr")}
      >
        Ger
      </button>
      <button
        className={`btn ${activeBtn === "Ch" ? "active" : ""}`}
        onClick={() => changeActive("Ch")}
      >
        Chi
      </button>
    </div>
  );
};

export default Header;
