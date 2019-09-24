import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Aside from "./Aside";
import Footer from "./Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      active: "en"
    };
  }

  changeActive = value => {
    this.setState({ active: value });
  };

  render() {
    return (
      <div className="container">
        <Header
          activeBtn={this.state.active}
          changeActive={this.changeActive}
        />

        <div className="flex between">
          <Sidebar activeBtn={this.state.active} />
          <Aside activeBtn={this.state.active} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
