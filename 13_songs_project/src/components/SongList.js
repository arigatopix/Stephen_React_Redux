import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)} //* selectSong ที่เรียกมาจาก connect จะมี return action  และ dispatch พร้อมทำงาน selectSong ทำงานเมื่อ click เหมือน store.dispatch(selectSong(song))
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    // this.props === {songs : state.songs }
    // console.log(this.props); // ได้ object และ dispatch function
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// *** function ที่เอาไว้รับ state จาก Store Redux ชื่อไม่สำคัญ อะไรก็ได้
const mapStateToProps = state => {
  // หน้าที่ของมันคือ function เชื่อม Provider เอา state จาก Store มาทั้งหมด
  // * ทำหน้าที่เหมือน store.getState() เมื่อไหร่มี dispatch ก็จะ update state // จะอัพเดทให้ทุกครั้งเมื่อ state เปลี่ยน
  // console.log(state); // ได้ selectedSong, songs มาจาก combineReducers

  return { songs: state.songs }; // * ส่งข้อมูล state (จาก store)
};

// *** ต้องใช้ connect() เพื่อคุยกับ Provider, Action Creators เพื่อส่งไปให้ component ด้วย props
export default connect(
  mapStateToProps, // คุยกับ Provider เอา state
  { selectSong } // action creator return action แล้ว call dispatch ให้เลย โดย connect
)(SongList); // ส่ง props ไปให้ component

/**
 * ------------- NOTE -------------
 * * connect function / connect component
 * - เป็น function เพื่อติดต่อ Provider กับ Action Creators
 *     - Provider รับ ส่ง state ใน Store Redux โดยใช้ function mapStateToProps เพื่อเก็บ state มา -- > state Reducers
 *     - Action Creators เมื่อไหร่ที่เรียก Action Creators ตัว connect จะ dispatch ให้อัตโนมัติ * จำไว้ว่า ถ้าเรียก Action Creators มาเฉยๆ จะไม่เกิดอะไรขึ้น store.dispatch((...action....));
 * - เป็น component เพราะว่าส่งผ่าน props
 *     - ส่ง Store / state และ action ผ่าน props ให้ SongList component เรียกใช้โดย this.props จะมี object ของทั้งสองตัว
 *     -
 *  - connect(mapStateToProps, Action Creator)(component to props)
 *     - จำไว้ว่า connect เชื่อม state (อันแรก) และ action (อันสอง) ได้
 *     - วงเล็บแรก ไปเอา state จาก Store มาแสดง และ ติดต่อ action creators return dispatch(action)
 *     - วงเล็บสอง เอาข้อมูล state และ selectSong ส่งไป SongList Component ผ่าน props
 *  * Redux state <---> Provider <--state--> Connect <--props--> SongList
 *                                    ^
 *                                    ^ <--action--> Action Creators
 * * SongList Component
 * - เรียกใช้ state และ action ผ่าน props
 */
