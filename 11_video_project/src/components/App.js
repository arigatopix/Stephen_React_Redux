import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  };

  // CallBack Child to parent เชื่อมด้วย props แล้วรับค่า (callBack) จาก VideoItem --> VideoList --> App
  onVideoSelect = video => {
    console.log('From the App!', video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;

/**
 * NOTE
 * - onFormSubmit จะใช้ได้เฉพาะ tag <form></form>
 * -onFormSubmit={this.onTermSubmit}  จำ ซ้ายคือ props ขวาคือ callBack function
 * -----------------------------
 * การบ้าน ไปดู axios
 * - youtube.get('url' , option เช่น params ) ----output----> https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=AIzaSyCPPYuWyJSZT8LayqTNmM0r-WYfaaDHLTE&q=bearhug
 * - url ไม่ต้องมี /
 *
 */

// Conect props ส่งข้อมูลจาก child มาหา parent ผ่าน props
// 1. ตั้งค่า props ที่ SearchBar component ตั้งชื่อ onFormSubmit
// 2. ไปตั้งค่า this.props.onFormSubmit(... term ...)
// จะตั้ง props กับ function ชื่อเดียวกันก็ได้ จะได้เข้าใจง่ายๆ
////////////////
// Connect Child to parent จะใช้ callback function
