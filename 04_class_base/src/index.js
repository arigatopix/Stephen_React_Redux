import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

/* 
  // Special function (not require by react)
  constructor(props) {
    super(props); // ใช้ super เพราะว่าเรียกใช้ parent จาก Component

    // ! Constructor มีหน้าที่เดียวคือ init state ตอน render page ใช้ state() method เป็น special function ของ Component
    // * THIS IS THE ONLY TIME we do direct assignment to this.state
    this.state = {
      lat : null,
      long : null,
      errorMessage : ''
    };
  }
*/

  // * Alternate Init state ไม่ต้องใช้ constructor แต่จะใช้ Babel ในการ transpli
   state = { lat : null, errorMessage : '' };

  // Lifecycle component ถูกเรียกอัตโนมัติ
  componentDidMount() {
    // แสดงตอนแรกสุดที่ component แสดง

    // * run function แล้วให้ return this.setState() ซึ่ง setState เป็น special property ของ Component
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat : position.coords.latitude }),
      err => this.setState({ errorMessage : err.message })
    );
  }

  // React says we have to define render!! return jsx
  render() {

    // Show err,
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error : {this.state.errorMessage}</div>
      // NO error and show Latitude
    } else if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude : {this.state.lat}</div>
    }

    return <div>Loading!</div>
    // ระวัง ; อย่าใส่ด้านหลัง JSX
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

/**
 * ใช้ class ต้อง extends เพื่อยืม method ของ React.Component
 * ต้องมี render() method ต่อท้าย ยืมมาจาก class Component
 * เรียก props ผ่าน constructor เรายืมมาจาก React.Component จะต้องเรียก super(props) ด้วย
 */
