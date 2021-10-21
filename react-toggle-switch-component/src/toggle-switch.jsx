import React, { Component } from 'react';

export default class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isOn: !this.state.isOn
    });
  }

  getSwitchStatus() {
    let switchStatus;
    let label;
    if (this.state.isOn) {
      label = 'ON';
      switchStatus = 'switch-on';
    } else {
      label = 'OFF';
      switchStatus = 'switch-off';
    }
    return {
      switchStatus: switchStatus,
      label: label
    };
  }

  render() {
    return (
      <div>
        <h2>{this.getSwitchStatus().label}</h2>
        <div
          className={`switch-container ${this.getSwitchStatus().switchStatus}`}
          onClick={this.handleClick}
          >
          <div className="switch"></div>
        </div>
      </div>
    );
  }
}
