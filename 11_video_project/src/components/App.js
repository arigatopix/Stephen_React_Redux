import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube';

class App extends React.Component {

  // Initiate *EMPTY* array เท่านั้น จะจัดการง่าย เช่นใช้ method length
  state = { videos : [] };

  onTermSubmit = async term => {
    // Conect props ส่งข้อมูลจาก child มาหา parent ผ่าน props
    // 1. ตั้งค่า props ที่ SearchBar component ตั้งชื่อ onFormSubmit
    // 2. ไปตั้งค่า this.props.onFormSubmit(... term ...)
    // จะตั้ง props กับ function ชื่อเดียวกันก็ได้ จะได้เข้าใจง่ายๆ
    const response = await youtube.get('/search', {
      params : {
        q : term
      }
    });
    this.setState({ video : response.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        I have { this.state.videos.length } videos.
      </div>
    );
  }
}

export default App;

/**
 * NOTE
 * - onFormSubmit จะใช้ได้เฉพาะ tag <form></form>
 * -----------------------------
 * การบ้าน ไปดู axios 
 * - youtube.get('url' , option เช่น params ) ----output----> https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=AIzaSyCPPYuWyJSZT8LayqTNmM0r-WYfaaDHLTE&q=bearhug
 * - url ไม่ต้องมี /
  */