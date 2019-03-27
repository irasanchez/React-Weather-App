import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./sass/App.scss";

import TopSection from "./components/top";
import BottomSection from "./components/bottom";

const WEATHER_KEY = "ceedc3dd82f9483681615721192203";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "Phoenix",
      forecastDays: 5,
      isLoading: true
    };
  }

  updateWeather = () => {
    const { cityName, forecastDays } = this.state;
    const URL = `http://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY} &q=${cityName} &days=${forecastDays}`;
    axios
      .get(URL)
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.setState({
          isLoading: false,
          temp_f: data.current.temp_f,
          isDay: data.current.is_day,
          text: data.current.condition.text,
          iconURL: data.current.condition.icon
        });
      })
      .catch(error => console.error("Cannot get data from API", error));
  };

  componentDidMount() {
    const { eventEmitter } = this.props;

    this.updateWeather();

    eventEmitter.on("updateWeather", data => {
      this.setState({ cityName: data }, () => this.updateWeather());

      console.log("LocationName:", data);
    });
  }

  render() {
    const { isLoading, cityName, temp_f, isDay, text, iconURL } = this.state;
    return (
      <div className="App">
        <div className="main-container">
          {isLoading && <h3>Loading Weather App</h3>}
          {!isLoading && (
            <div className="top-section">
              <TopSection
                location={cityName}
                temp_f={temp_f}
                isDay={isDay}
                text={text}
                iconURL={iconURL}
                eventEmitter={this.props.eventEmitter}
              />
            </div>
          )}

          <div className="bottom-section">
            <BottomSection />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
