import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  constructor(props) {
    // ใช้ร่วมกับ html tag เนื่องจากปกติเราใช้ JSX Virtual DOM แต่ตอนนี้ video เป็น html element จริงๆ
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);

    // buildPlayer ตอนเริ่ม page และอย่าลืม ..
    // * componentDidMount ทำงานครั้งเดียว เราเลยต้องใช้ componentDidUpdate ช่วย render อีกรอบ
    this.buildPlayer();
  }

  componentDidUpdate() {
    // หลังจาก fetch เสร็จให้เรียก flv มาแสดง
    // ? set ใน OBS ด้วย
    this.buildPlayer();
  }

  componentWillUnmount() {
    // ช่วยให้ player ไม่พยายาม fetch video จาก OBS เมื่อเราออกจากหน้า page StreamShow เพราะถ้าไม่มี componentWillUnmount จะมี error message
    // destroy player ซะ จะหยุด fetch ถึงแม้ว่า obs จะ live อยู่ก็ตาม
    this.player.destroy();
  }

  buildPlayer() {
    // helper method ช่วยให้สร้างตัวเล่น หลังจาก stream ถูก fetch
    // ถ้า fetch ยังไม่เสร็จ เราตั้งค่าไว้ให้เป็น <div>Loading ...</div>; videoRef จึง null เพราะ video element ไม่ได้ถูกสร้าง

    if (this.player || !this.props.stream) {
      // this.player จะมีเมื่อเราคลิก link หน้า streamList จะแสดง video component
      // กรณีกด F5 ก็จะไม่มีทั้ง video และ stream ต้องรอ fetch
      return;
    }

    const { id } = this.props.match.params;

    // node-media-server (http-flv)
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
      // ใช้ STREAM_NAME เป็น id ของ server api
    });

    // * สร้าง player ผ่าน video element
    this.player.attachMediaElement(this.videoRef.current);
    // load player
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading ...</div>;
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <video ref={this.videoRef} style={{ width: '100%' }} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);

/* 
- video tag element
  - reference ต้องมีเพราะปกติที่เราพิมพ์ code เป็น JSX แต่ video เป็น html tag 
  - มี control ตาม https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video

- flv คือโหลดไฟล์ แล้วแสดงผลใน video tag คล้ายๆ axios ที่คอยทำการ fetch ข้อมุล
  - บางทีจะ error เพราะว่าระหว่าง fetch data เราสั่งไม่ให้ render <video> videoRef จึง null

  */
