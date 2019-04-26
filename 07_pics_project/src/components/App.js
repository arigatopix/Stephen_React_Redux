import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos/',{
      params : { query : term },
      headers : {
        Authorization: 'Client-ID d2f6f5c0dec5b5d42917996d62c9b368f0bc771666660a2919542aeefc0099ac'
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
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
  */