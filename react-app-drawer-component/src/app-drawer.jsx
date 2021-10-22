import React, { Component } from 'react';

const games = [
  'The Legend of Zelda',
  'A Link to the Past',
  'Ocarina of Time',
  'The Wind Waker',
  'Breath of the Wild'
];

export default class AppDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen(event) {
    if (event.target.matches('i')) {
      this.setState({
        isOpen: true
      });
    } else if (event.target.matches('li')) {
      this.setState({
        isOpen: false
      });
    } else if (event.target.matches('.overlay')) {
      this.setState({
        isOpen: false
      });
    }
  }

  render() {
    const isIconHidden = this.state.isOpen ? ' invisible' : '';
    const isOverlayHidden = this.state.isOpen ? '' : ' transparent';
    const isDrawerHidden = this.state.isOpen ? '' : ' position-left-minus250px';
    return (
      <div onClick={this.toggleOpen}>
        <a><i className={'fas fa-bars font-4rem margin-20px' + isIconHidden}></i></a>
        <div className={'overlay' + isOverlayHidden}>
          <div className={'drawer center-text' + isDrawerHidden}>
            <h3 className="padding-20px">Choose a Game</h3>
            <ul>
              {games.map((game, index) =>
                <li key={index} className="padding-12px">
                  {game}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
