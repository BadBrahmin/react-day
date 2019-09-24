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
    </div>
  );
};

export default Header;
