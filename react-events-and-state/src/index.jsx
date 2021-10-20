import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isClicked: true
    });
  }

  render() {
    if (this.state.isClicked) {
      return (
        <button>nice</button>
      );
    }
    return (
        <button onClick={this.handleClick}>click me mf</button>
    );
  }
}

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
