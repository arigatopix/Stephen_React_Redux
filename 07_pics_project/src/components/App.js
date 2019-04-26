import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = {
    images: [] // ใช้ค่าเริ่มต้นเป็น empty array มากกว่า  null เพราะบางทีจะเจอ err
  };

  // fetch API ด้วย async await
  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos/', {
      // unsplash.get คือ instance ของ axios.create
      params: { query: term } // รับค่าจาก input
    });

    // Show data หลังจาก fetch API
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

/**
 * onSubmit={this.onSearchSubmit} จะใช้ได้แค่ form tag ดังนั้นในหน้านี้จะใส่ชื่อ props อะไรก็ได้
 * - props จาก child จะส่งผ่านข้อมูลตรงนี้เพื่อเรียก function
 * --- axios
 * - param : เป็นตัว query
 * - headers บอก api key
 * ----- เรื่องของ this
 * - SearchBar สั่งให้ eventListener แบบนี้ SearchBar.addEventListener('submit', function() { this.setState({ bla bla }); }); จะเห็นว่าคนละ scope ซึ่ง this ใน eventListener (หรือใน callBack function ในที่นี้คือ onSearchSubmit) คือ window object
 */

/*  ภาพเต็มๆ
 SearchBar.addEventListener('submit', onSearchSubmit())

 onSearchSubmit() {
  ... do somthing 
   
  this.setState >> อยู่นอกแล้ว
 }
 
 */
