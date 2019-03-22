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

  render() {
    const { isSelectLocationOpen } = this.state;
    return (
      <div className="top-section">
        <div className="title">Weather</div>
        <Weather {...this.props} />
        {/* source: https://github.com/FezVrasta/react-popper */}
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
                  Popper element
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
