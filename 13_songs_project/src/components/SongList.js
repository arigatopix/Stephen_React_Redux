import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    // this.props === {songs : state.songs }
    console.log(this.props); // ได้ object และ dispatch function

    return <div>SongList</div>;
  }
}

const mapStateToProps = (state) => {
  // หน้าที่ของมันคือ function เชื่อม Provider เอา state จาก Store มาทั้งหมด

  // console.log(state.songs); // ได้ selectedSong, songs มาจาก combineReducers 

  return { songs : state.songs }; // ส่งข้อมูล state (จาก store) ผ่าน props ให้ songList เป็น object เสมอ
}

export default connect(mapStateToProps)(SongList); 
// connect เหมือนเป็น react component หรือ function
// วงเล็บแรก ไปเอา state จาก Store มาแสดง
// วงเล็บสอง เอาข้อมูล state ส่งไป SongList Component ผ่าน props
// ** ในวงเล็บสองจะมี function dispatch ติดไปให้ มาจาก redux store เพื่อทำอะไรกับ action

/** 
 * NOTE
 * - connect()() เชื่อมระหว่าง Connect component กับ Provider component 
 * - Provider รับ state
 * - Connect เชื่อมระหว่าง Provider, 
 * Redux state <---> Provider <----> Connect <----> SongList
 *                                    ^ 
 *                                    ^ <----> Action
  */
