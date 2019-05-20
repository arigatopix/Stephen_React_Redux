import React from 'react';
import { connect } from 'react-redux';

const StreamEdit = props => {
  // เริ่มต้น load โดยพิมพ์ url เข้ามา props (ที่มาจาก mapStateToProps)จะเป็น undefined เพราะยังไม่ได้ถูกดึงจาก redux store
  // ถ้ากลับไปที่หน้า ('/') แล้วกด edit ข้อมูลจาก redux จะถูกส่งมา เพราะว่า redux store ถูก fetch โดย componentDidMout(fetchStream)
  // React-Router แต่ละ component เป็นอิสระต่อกัน (isolate) ต้อง fetch data แบบ manaul หมายถึง ถ้าพิมพ์เข้า url('streams/edit/:id') ตรงๆ  component นี้จะต้องเรียกข้อมูลจาก store เอง
  console.log(props);
  return <div>StreamEdit</div>;
};

const mapStateToProps = (state, ownProps) => {
  // รับ state จาก redux store
  // id จาก ownProps รับมาจาก Route
  // state.streams เป็น object ที่มี key เป็น id โดย design ไว้ที่ action โดยใช้ lodash
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps)(StreamEdit);

/** NOTE
 * - props เป็นของ Route compnent
 * - ดู url และ return object ตามที่กำหนดใน url (match)
 * /streams/:anything/:something จะได้ params anything และ something เอาไปใช้งาน
 * --- เชื่อมระหว่าง Route componente กับข้อมูลใน redux store เพื่อแสดงข้อมูล stream ที่ต้องการแก้ไข
 */
