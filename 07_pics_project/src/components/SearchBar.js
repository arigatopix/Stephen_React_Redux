import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (e) => { 
    // ป้องกันไม่ให้ submit ข้อมูล และ reload page
    e.preventDefault() 

    console.log(this.state.term); 
    // this นี้เป็นของ global scope ไปแล้ว เพราะเป็น function ซ้อนกันสองครั้ง
    
    // onFormSubmit : function() {
    //     console.log(this.state.term) ---- > this ของ global scope
    // } 
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })} 
            />
          </div>
        </form>
        <h1>{this.state.term}</h1>
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
 * ---
 * - INPUT รับค่าจาก onChange={e => this.setState({ term: e.target.value })}
 * - INPUT แสดงค่าที่ได้รับ (rerender) แสดงผลด้วย value={this.state.term}
 * - ให้เข้าใจว่า React เก็บค่า จาก onChange ที่พิมพ์มาไว้ใน this.state ส่วนใน DOM คอยรับค่า (onChnage) และแสดงค่า (value)
 * ------
 * - form behavior ปกติจะต้องมี submit ส่งข้อมูลให้ backend พร้อมกับ reload page 
 * - โดยปกติจะใช้ this ได้โดยเรียก variable ไม่ใช่เรียก method
 * - ระวังเรื่อง this. เพราะคนละ scope (เช่น this.onFormSubmit this นี้คือ window) 
 * - โดย this ปกติ เป็น reference ของ class SearchBar (Component) ใช้กับ state, render, onFormSubmit ได้เพราะเป็น method ที่ instance จาก class 
 * - วิธีแก้คือใช้ Arrow Function - ใช้ได้ 2 ที่คือ
 *  - ใช้ Arrorw ใน class ปกติใช้ตรงนี้
 *  - ใช้ Arrow fn ที่ JSX onSubmit={(e) => this.onFormSubmit(e)}
 * - 
 */
