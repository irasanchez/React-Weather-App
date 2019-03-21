import React from "react";
import Weather from "./weather.jsx";
import "./styles.scss";

export default class TopSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="top-section">
        <div className="title">Weather</div>
        <Weather />
      </div>
    );
  }
}
