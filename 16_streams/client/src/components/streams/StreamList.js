import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  // first load เรียก all Streams โดยใช้ action (action > connect ), จะแสดงผลหน้าจอได้ก็ต่อเมื่อใช้ mapStateToProps
  componentDidMount() {
    // จะเห็น streams ใน redux dev tools และจะเป็น object ตามที่ lodash ตั้งค่าไว้ { id : {id, title, description}}
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    // เช็คว่าใครเป็นเจ้าของ stream โดยเช็ค userId จาก auth เทียบกับ streams
    // รับค่ามาจาก renderList() เทียบกับ mapStateToProps
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">EDIT</button>
          <button className="ui button negative">DELETE</button>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="lage middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    // render ปุ่ม create เมื่อ login  แล้วเท่านั้น
    // ใช้ Link ส่งไปอีกหน้า (to) streams/new
    // config style เองเพื่อให้ปุ่มอยู่ด้านขวา
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // เรียก state จาก redux store (getState())
  // ใน state เป็น object เพื่อ edit, update, delete จัดการได้ง่าย
  // แสดงผลให้เป็น array จะแสดงในหน้าจอง่ายกว่า เพราะจะใช้ map() method
  // เปลี่ยน state จาก object เป็น array โดยใช้ Object.value(obj) จะ return array value ของ obj (เป็น method ของ js)
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId, // เรียก userId จาก state auth เพื่อเช็คกับ userId ใน streams state ว่าใครสร้าง
    isSignedIn: state.auth.isSignedIn // เช็คว่า signIn มั้ยเพื่อแสดงปุ่ม create
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
