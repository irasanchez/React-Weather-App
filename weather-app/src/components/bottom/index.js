import React from "react";
import "./styles.scss";

import ForecastDay from "./ForecastDay";

export default class BottomSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { forecastDays } = this.props;
    return (
      <div className="bottom-section">
        <div className="inner-container">
          {forecastDays &&
            forecastDays.map((day, idx) => {
              return <ForecastDay day={day.day} key={idx} />;
            })}
        </div>
      </div>
    );
  }
}
