import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = function() {
  return (
    <div>
      <h1>Hi, there!</h1>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.getElementById('root'));
