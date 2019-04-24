import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );

    return <div>Latitude : </div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

/**
 * ใช้ class ต้อง extends เพื่อยืม method ของ React.Component
 * ต้องมี render() method ต่อท้าย ยืมมาจาก class Component
 *
 */
