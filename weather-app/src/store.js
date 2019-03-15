import React from "react";

export default class Store extends React.Component {
  constructor(props) {
    super(props);
    //App state
    this.state = {
      appName: "Weather App"
    };
  }

  render() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { ...this.state });
    });
  }
}
