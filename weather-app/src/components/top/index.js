import React from "react";
import Weather from "./weather.jsx";
import { Manager, Reference, Popper } from "react-popper";
import "./styles.scss";

export default class TopSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectLocationOpen: false
    };
  }

  onToggleSelectLocation = () => {
    this.setState(prevState => ({
      isSelectLocationOpen: !prevState.isSelectLocationOpen
    }));
  };

  onLocationNameChange = e => {
    this.setState({ locationName: e.target.value });
  };

  onSelectCity = () => {
    const { locationName } = this.state;
    const { eventEmitter } = this.props;

    eventEmitter.emit("updateWeather", locationName);
  };

  render() {
    const { isSelectLocationOpen } = this.state;
    const eventEmitter = this.props;

    return (
      <div className="top-section">
        <div className="title">Weather</div>
        <Weather {...this.props} />
        <Manager>
          <Reference>
            {({ ref }) => (
              <button
                className="btn btn-select-location"
                ref={ref}
                onClick={this.onToggleSelectLocation}
              >
                Select Location
              </button>
            )}
          </Reference>
          <Popper placement="top">
            {({ ref, style, placement, arrowProps }) =>
              isSelectLocationOpen && (
                <div
                  className="popup-container"
                  ref={ref}
                  style={style}
                  data-placement={placement}
                >
                  <div className="form-container">
                    <label htmlFor="location-name" />
                    Location Name
                  </div>{" "}
                  <input
                    id="location-name"
                    type="text"
                    placeholder="City Name"
                    onChange={this.onLocationNameChange}
                  />
                  <button
                    className="btn btn-select-location"
                    onClick={this.onSelectCity}
                  >
                    Select
                  </button>
                  <div ref={arrowProps.ref} style={arrowProps.style} />
                </div>
              )
            }
          </Popper>
        </Manager>
      </div>
    );
  }
}
