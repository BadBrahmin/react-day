import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="flex center">
        <button className="btn">En</button>
        <button className="btn">Fr</button>
      </div>
      <div className="flex between">
        <div>
          <h1><span>He</span>Hello World</h1>
          <p>
            There’s a simple pattern I find immensely useful when writing React
            applications. If you’ve been doing React for a while, you have
            probably already discovered it. This article explains it well, but I
            want to add a few more points.
          </p>
        </div>
        <img
          className="imageCat"
          src="https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpghttps://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg"
        />
      </div>

      <div className="flex between">
        <div className="icons flex between">
          <i class="icon fas fa-basketball-ball"></i>
          <i class="icon fab fa-behance"></i>
          <i class="icon fab fa-linkedin-in"></i>
          <i class="icon fab fa-instagram"></i>
          <i class="icon fab fa-vimeo-v"></i>
        </div>

        <div>
          <p>Contact me at: john@doe.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
