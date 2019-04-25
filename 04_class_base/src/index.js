import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  // Special function (not require by react)
  constructor(props) {
    super(props); // ใช้ super เพราะว่าเรียกใช้ parent จาก Component

    // ! init state ตอน render page ใช้ state() method เป็น special function ของ Component
    // * THIS IS THE ONLY TIME we do direct assignment to this.state
    this.state = {
      lat : null,
      long : null,
      errorMessage : ''
    };


    // run function แล้วให้ return this.setState() ซึ่ง setState เป็น special property ของ Component
    window.navigator.geolocation.getCurrentPosition(
      position => {

        // * we called setState ส่งกลับเป็น object ทั้งก้อน เพื่อไป update state ต้องใช้ setState
        this.setState({
          lat : position.coords.latitude
        });

        // we did not!! เพราะ state ได้แค่ค่าเดียว อย่างเงดียว
        // this.state.lat = position.coords.latitude;
      },
      err => this.setState({ errorMessage : err.message })
      // อย่าลืม Handle error ด้วย จะได้บอก user ได้ว่าเกิดอะไรขึ้น
      // * setState errorMessage จะเปลี่ยนแค่อันเดียว property อื่นไม่เปลี่ยน (lat คงสภาพเดิม)
    );
  }

  // React says we have to define render!! return jsx
  render() {

      if (this.state.errorMessage && !this.state.lat) {
        return <div>Error : {this.state.errorMessage}</div>
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
