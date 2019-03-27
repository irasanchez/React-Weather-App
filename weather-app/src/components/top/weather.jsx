import React from "react";

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location, temp_f, isDay, text, iconURL } = this.props;

    return (
      <div className="weather-container">
        <div className="header">{location}</div>
        <div className="inner-container">
          <div className="image">
            <img src={iconURL} alt="sun" />
          </div>
          <div className="current-weather">
            <span>
              {temp_f}
              <sup>°F</sup>
            </span>
          </div>
        </div>
        <div className="footer">{text}</div>
      </div>
    );
  }
}
