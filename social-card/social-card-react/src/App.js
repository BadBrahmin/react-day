import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Aside from "./Aside";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">

      <Header />

      <div className="flex between">

        <Sidebar />
        <Aside />
      
      </div>

      <Footer />
      
    </div>
  );
}

export default App;
