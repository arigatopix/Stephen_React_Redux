// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  const buttonText = { text: 'Click Me' };
  // const style = { backgroundColor: 'blue', color: 'white' };
  const labelText = 'Enter Name';

  return (
    <div>
      <label htmlFor="name" className="label">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.getElementById('root'));

/**
 ** CSS Style
 * - CSS ประกาศใน return block
 * - {{ }} {วงเล็บนอก บอกว่าจะประกาศ JavaScript (function,var) ใน JSX} {วงเล็บในเป็น object ของ JS ที่จะใช้} เป็น syntax ของ JSX เรียก JS Variable
 * - พวก class ใช้ className, background-color ใช้ backgroundColor (camel case) for ใช้ htmlFor
 * - JSX ใช้ "" , JavaScript ใช้ ''
 **
 * - function หรือ variable ที่เรียกใช้ใน jsx จะถูกเปลี่ยนเป็น plain text จะเกิด bug ได้ง่ายๆ เพราะถูกเปลี่ยนเป็น plaintext
 * มักประกาศเป็น object ข้างนอก แล้วเรียกใช้ property เอา buttonText.text
 */
