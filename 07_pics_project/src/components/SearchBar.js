import React from 'react';

class SearchBar extends React.Component {
  onInputChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

/**
 * NOTE:
 * - property รับ event handle user input onChange={this.onInputChange} ไม่ใช้ onInputChange()
 * - จะเรียกเมื่อ <input> ได้รับค่า แล้ว callback funtion
 * บางทีอาจจะเห็น onChange={(event) => console.log(event.target.value) }
 * --
 * Event
 * - onClick รับปุ่ม click
 * - onChange ใช้กับ input text
 * - onSubmit ใช้กับปุ่ม button
 * --
 * ตั้งชื่อ function call
 * - เริ่มที่ on แล้วต่อด้วย element และ change คือชื่อ event ที่ใช้ function call
 */
