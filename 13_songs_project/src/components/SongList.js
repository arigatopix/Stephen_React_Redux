import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'; // ใช้กับ connect() 

class SongList extends Component {
  // render ไปหน้าจอ
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
              className="ui button primary"
              onClick={() => this.props.selectSong(song)} //selectSong ที่เรียกมาจาก connect จะมี return dispatch ให้อัตโนมัติ เหมือน store.dispatch(selectSong(song))
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    })
  }
  render() {
    // this.props === {songs : state.songs }
    // console.log(this.props); // ได้ object และ dispatch function
    return <div className="ui divided list">{this.renderList()}</div>;
    // เรียก helper method อย่าลืมใส่ this. !! 
  }
}

const mapStateToProps = (state) => {
  // หน้าที่ของมันคือ function เชื่อม Provider เอา state จาก Store มาทั้งหมด
  // จะอัพเดทให้ทุกครั้งเมื่อ state เปลี่ยน 
  // ทำหน้าที่เหมือน store.getState()

  console.log(state); // ได้ selectedSong, songs มาจาก combineReducers 

  return { songs : state.songs }; // ส่งข้อมูล state (จาก store) ผ่าน props ให้ songList เป็น object เสมอ
}

export default connect(mapStateToProps, { selectSong })(SongList);

// connect เหมือนเป็น react component หรือ function
// วงเล็บแรก ไปเอา state จาก Store มาแสดง
// จำไว้ว่า connect เชื่อม state (อันแรก) และ action (อันสอง) ได้ และส่งผ่าน prop เช่นกัน
// วงเล็บสอง เอาข้อมูล state และ selectSong ส่งไป SongList Component ผ่าน props
// selectSong เป็น action creator return dispatch function มาอัตโนมัติ 
// * ในวงเล็บสองจะมี function dispatch ติดไปให้ มาจาก redux store เพื่อทำอะไรกับ action

/** 
 * NOTE
 * - connect()() เชื่อมระหว่าง Connect component กับ Provider component 
 * - Provider รับ state
 * - Connect เชื่อมระหว่าง Provider, 
 * Redux state <---> Provider <----> Connect <----> SongList
 *                                    ^ 
 *                                    ^ <----> Action
 * 
 * ----
 * ปกติเวลาจะ update ข้อมูล
 * store.dispatch((...action....)); 
  */
