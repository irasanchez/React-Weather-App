import React, { Component } from "react";
import logo from "./logo.svg";
import "./sass/App.scss";

import TopSection from "./components/top";
import BottomSection from "./components/bottom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-container">
          <div className="top-section">
            <TopSection />
          </div>
          <div className="bottom-section">
            <BottomSection />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
