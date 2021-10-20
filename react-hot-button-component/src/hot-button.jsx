import React, { Component } from 'react';

export default class HotButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clickCount: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  }

  render() {
    let className;
    if (this.state.clickCount < 3) {
      className = 'purple';
    } else if (this.state.clickCount < 6) {
      className = 'violet';
    } else if (this.state.clickCount < 9) {
      className = 'red';
    } else if (this.state.clickCount < 12) {
      className = 'orange';
    } else if (this.state.clickCount < 15) {
      className = 'yellow';
    } else {
      className = 'white';
    }
    return (
      <button className={className} onClick={this.handleClick}>Clicks: {this.state.clickCount}</button>
    );
  }
}
