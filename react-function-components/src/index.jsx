import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton() {
  return <button>Click Me!!!</button>;
}

const customButton = <CustomButton />;

const container = document.querySelector('#root');

ReactDOM.render(customButton, container);
