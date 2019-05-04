import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  // fetch user มาแสดง โดยรับจาก action
  // * อย่าลืมว่าจะคุยกับ action ต้องผ่าน connect component

  // ต้อง make sure ว่าจะมีข้อมูลมาแสดงผ่าน life cycle
  componentDidMount() {
    // * เรียก action creators โดยผ่าน id (ดูที่ action)
    this.props.fetchUser(this.props.userId);
  }
  render() {
    // รับจาก mapStateToProps และ destructuring จะได้ไม่พิมพ์บ่อยๆ
    const { user } = this.props;
    console.log(user);

    if (!user) {
      // first load จะไม่เจอ user เพราะยัง fetch ไม่เสร็จ
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // * รับจาก reducer มา (state) และเอา props ที่มาจาก postList (ownProps) มา compare
  // ข้อดีของการ compare ในนี้คือ component ไม่แสดงข้อมูล / ไม่รับข้อมูลทั้ง api และไม่ทำซ้ำๆ
  return { user: state.users.find(user => user.id === ownProps.userId) };
  // ได้รับ user เดี่ยวๆ ตามที่กำหนดจาก ownProps
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);

/**
 * Process
 * - สร้าง action creators
 * - เรียก (componentDidMount)
 * - เชื่อม action กับ reducers ที่เอา state และ action ไปจัดการ ถ้าไม่มีก็จะดึง userId มาแสดงไม่ได้
 */
