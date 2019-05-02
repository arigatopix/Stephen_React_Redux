import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  // song แทน props.song
  // รับ props มาจาก connect
  //* ไม่มี this.props เพราะเป็น function component
  // console.log(props);

  if (!song) {
    // * ระวัง props.song.title อันแรกเป็น null จะขึ้น error
    return <h3>Selec a song</h3>;
  }
  return (
    <div>
      <h3>Details for :</h3>
      <p>
        Title : {song.title}
        <br />
        Duration : {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  // เอา state จาก redux store

  return { song: state.selectedSong };
  // อย่าลืม return เป็น object เพื่อไปใช้ใน props
};

export default connect(mapStateToProps)(SongDetail);

// * ถ้าแต่ละ component อยาก change state ให้ใช้ connect เชื่อมกับ Store Redux เสมอ !!!
// ใช้ mapStateToProps แล้วผ่านด้วย connect function
// เอา state ไปใช้ใน props ด้วย connect
