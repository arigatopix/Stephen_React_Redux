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
    const user = this.props.users.find(user => {
      // จะแสดงเมื่อใน block เป็น true เชค user.id ที่ส่งมาจาก api เทียบกับ userId ของ posts
      return user.id === this.props.userId;
    });

    if (!user) {
      // first load จะไม่เจอ user เพราะยัง fetch ไม่เสร็จ
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = state => {
  // รับจาก reducer มา
  return { users: state.users };
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
