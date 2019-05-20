import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    // เรียก action เพื่อ fetchStream เรียก streams ใน redux store เพราะว่าแต่ละ component isolate กัน
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit(formValues) {
    // callback function รับค่าจาก StreamForm ส่งให้ action
    console.log(formValues);
  }

  render() {
    if (!this.props.stream) {
      // เริ่มต้นระหว่าง fetch ข้อมูล this.props.stream จะ undefined
      return <div>Loading ...</div>;
    } else {
      // initialValues เป็น method ของ redux form (ติดมากับ StreamForm component) เพื่อกำหนดค่าเริ่มต้น โดยสัมพันธ์กับ <Field/> component ภายในกำหนดเป็น object เรียกดูได้ใน this.props ของ StreamsForm.js
      // กำหนด init โดยใช้ this.props.stream เพราะมัน return object ที่มี title , description
      // กำหนดเอง ไม่ต้องผ่าน props ก็ได้ เช่น initialValues={{ title: 'ei ei', other: 'blah' }} แต่ other ไม่มีใน Field ก็จะไม่แสดงผลใน Form
      return (
        <div>
          <h3>Stream Edit</h3>
          <StreamForm
            initialValues={this.props.stream}
            onSubmit={this.onSubmit}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  // รับ state จาก redux store
  // id จาก ownProps รับมาจาก Route
  // state.streams เป็น object ที่มี key เป็น id โดย design ไว้ที่ action โดยใช้ lodash
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);

/** NOTE
 * - props เป็นของ Route compnent
 * - ดู url และ return object ตามที่กำหนดใน url (match)
 * /streams/:anything/:something จะได้ params anything และ something เอาไปใช้งาน
 * --- เชื่อมระหว่าง Route componente กับข้อมูลใน redux store เพื่อแสดงข้อมูล stream ที่ต้องการแก้ไข
 * --- ใช้ StreamForm เพื่อ reuse code
 */
