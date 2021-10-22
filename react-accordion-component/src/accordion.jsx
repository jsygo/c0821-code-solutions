import React, { Component } from 'react';

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openTab: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.matches('.title')) {
      if (this.state.openTab === null) {
        this.setState({
          openTab: event.target.textContent
        });
      } else if (event.target.textContent === this.state.openTab) {
        this.setState({
          openTab: null
        });
      } else {
        this.setState({
          openTab: event.target.textContent
        });
      }
    }
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.props.items.map(item => {
          if (item.title === this.state.openTab) {
            return (
              <div key={item.title}>
                <div className="title">{item.title}</div>
                <div className="details">{item.details}</div>
              </div>
            );
          }
          return (
            <div key={item.title} listid={item.title}>
              <div className="title">{item.title}</div>
              <div className="details hidden">{item.details}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
