import React, { Component } from 'react';

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      time: 0
    };
    this.startTime = this.startTime.bind(this);
    this.stopTime = this.stopTime.bind(this);
    this.reset = this.reset.bind(this);
  }

  startTime() {
    this.setState({
      isRunning: true,
      time: this.state.time
    });
    this.intervalID = setInterval(() => {
      this.setState({
        isRunning: true,
        time: this.state.time + 1
      });
    }, 1000);
  }

  stopTime() {
    this.setState({
      isRunning: false,
      time: this.state.time
    });
    const intervalID = this.intervalID;
    clearInterval(intervalID);
  }

  reset() {
    this.setState({
      isRunning: false,
      time: 0
    });
  }

  render() {
    let clickHandler;
    let reset;
    if (this.state.isRunning) {
      this.icon = 'fas fa-pause';
      clickHandler = this.stopTime;
      reset = null;
    } else {
      this.icon = 'fas fa-play';
      clickHandler = this.startTime;
      reset = this.reset;
    }
    return (
      <div>
        <div className="watchface center-content" onClick={reset}>
          <span>{this.state.time}</span>
        </div>
        <div className="icon center-content">
          <a>
            <i className={this.icon} onClick={clickHandler}></i>
          </a>
        </div>
      </div>
    );
  }
}
