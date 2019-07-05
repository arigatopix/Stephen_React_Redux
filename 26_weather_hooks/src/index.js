import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
   state = { lat : null, errorMessage : '' };

  // Lifecycle component จะแสดงค่าเริ่มต้นตั้งแต่ page load และ update (rerender) หลังจาก setState ห้ามแก้ state object โดยตรง
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // ! ระวังตอน setState เป็น method() ที่บรรจุ object
      position => this.setState({ lat : position.coords.latitude }), // ไม่ overwrite ไม่เปลี่ยน errMessage 
      err => this.setState({ errorMessage : err.message })
    );
  }

  renderBody() {
    // Show err,
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error : {this.state.errorMessage}</div>
  
      // NO error and show Latitude
    } else if (!this.state.errorMessage && this.state.lat) {
      // !  ระวังตอนเรียกใช้ state เผลอๆ
      return <SeasonDisplay lat={this.state.lat}/>
    }
  
    // Waiting User all location
    return <Spinner message={'Please accept location request...'}/>
  }
  render() {
    // ! อย่าลืม return ใน render
    return (
      <div className="example">
        {this.renderBody()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

// Aviod if statement in render
// ใช้ helper function (renderBody()) เพื่อบรรจุ function หรือ if statement เพื่อแสดงผล (render) เพื่อลดการใช้ <div></div> เดิมๆ เพื่อบรรจุ return JSX หลายๆครั้ง
// อย่าลืม render ต้องมี return JSX ใน div