import React from "react";
import { fetchStream, deleteStream } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends React.Component {
  componentDidMount() {
    // fetchStream เมื่อเข้า url มาจะได้โหลดถูกอัน
    // ตั้งค่า connect และ action ให้เรียบร้อย
    this.props.fetchStream(this.props.match.params.id);
  }

  // เรียกใช้ Modal เพื่อแสดง popup
  // ใน Modal ส่ง props ไปแสดงผล สามารถ render JSX ได้ด้วย
  // สร้างเหมือนเป็น jsx อันนึง เพื่อแสดงผลปุ่ม action
  // div ที่มี button 2 อัน semantic แสดงผล style ไม่ถูก เพราะมัน neste (action > div > button) และ jsx ไม่อนุญาตให้ render jsx 2 อันโดยไม่ผ่าน div
  // * วิธีการแก้ไขคือใช้ React.Fracment component แทนที่ <React.Fragment> เป็น invisible element ไม่มีผลต่อการ render ไม่แสดงผลใน browser
  // มีไว้เพื่อต้องการ render JSX หลายๆ อัน และไม่ต้องการ tag element อะไรที่มีผลต่อ render

  renderActions() {
    // helper function render button
    // onClick ใช้ arrow function เพราะว่าต้องระบุ id, และถ้าเรียก this.props.deleteStrem(id) เมื่อไหร่ที่ render หน้าเพจ function จะถูกสั่งใช้งานทันที
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui red approve button"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    // อย่าลืมว่า enter เข้า url มา stream ต้องถูก fetch ก่อน
    // และเราไม่อยากให้ app แสดง loading แล้วค่อยแสดง Modal เราจะให้แสดง Modal เลย แล้วก็ใน title ก็ load ไป
    // ใช้ helper function แสดงผลใน title
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete the stream wit title : ${
      this.props.stream.title
    }`;
  }

  render() {
    // * Modal ไม่ต้องมี div คลอบเพราะไม่ต้อง render อะไร และเพราะว่าสร้างด้วย React.Portals โดยตรง
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // เช็ค state เทียบกับ url ที่ได้รับมา
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
