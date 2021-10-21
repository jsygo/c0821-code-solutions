import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

class Pokedex extends React.Component {
  render() {
    return (
      <ul>
        {pokedex.map(pokemon =>
        <li key={pokemon.number}>
          {pokemon.name}
        </li>)}
      </ul>
    );
  }
}

ReactDOM.render(<Pokedex />, document.querySelector('#root'));
