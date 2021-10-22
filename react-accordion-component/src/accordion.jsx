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
      if (event.target.textContent === this.state.openTab) {
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
          const detailsClassName = item.title === this.state.openTab
            ? 'details'
            : 'details hidden';
          return (
            <div key={item.title}>
              <div className="title">{item.title}</div>
              <div className={detailsClassName}>{item.details}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
