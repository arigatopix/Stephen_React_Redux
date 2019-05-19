import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  // first load เรียก all Streams โดยใช้ action (action > connect ), จะแสดงผลหน้าจอได้ก็ต่อเมื่อใช้ mapStateToProps
  componentDidMount() {
    // จะเห็น streams ใน redux dev tools และจะเป็น object ตามที่ lodash ตั้งค่าไว้ { id : {id, title, description}}
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="lage middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // เรียก state จาก redux store (getState())
  // ใน state เป็น object เพื่อ edit, update, delete จัดการได้ง่าย
  // แสดงผลให้เป็น array จะแสดงในหน้าจอง่ายกว่า เพราะจะใช้ map() method
  // เปลี่ยน state จาก object เป็น array โดยใช้ Object.value(obj) จะ return array value ของ obj (เป็น method ของ js)
  return { streams: Object.values(state.streams) };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
