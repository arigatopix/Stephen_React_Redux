import React from 'react';
import { connect } from 'react-redux';
class UserHeader extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // * รับจาก reducer มา (state) และเอา props ที่มาจาก postList (ownProps) มา compare
  // * กำหนด logic ที่แสดงใน mapStateToProps เพราะว่า UserHeader สามารถ reuse ได้ ในกรณีอยากได้ user เดียวตามที่ component กำหนดมา ก็ไม่จำเป็นต้องดึง "ทุก user" ใน redux ออกมา
  // ถ้า mapStateToProps มี logic มากๆ บางทีแยกเป็นอีก 1 ไฟล์เลยก็ได้
  // * mapStateProps มี 2 parameter ตัวแรกจะเรียกเมื่อ store state change, ตัวสองจะเรียกเมื่อ props ของ component change (https://github.com/reduxjs/react-redux/blob/master/docs/api/connect.md#ownprops)
  return { user : state.users.find(user => user.id === ownProps.userId) };
  // ได้รับ user เดี่ยวๆ ตามที่กำหนดจาก ownProps
};

export default connect(
  mapStateToProps,
)(UserHeader);

/**
 * Process
 * - สร้าง action creators
 * - เรียก (componentDidMount)
 * - เชื่อม action กับ reducers ที่เอา state และ action ไปจัดการ ถ้าไม่มีก็จะดึง userId มาแสดงไม่ได้
 * -----------------
 * _.memoized(func fetchdata,[resolve])
 * - เป็น function ของ loadash library เป็นการ "จำ" ค่าที่เคย fetch ไปแล้ว ถ้าเคย fetch ก็ไม่ต้องทำอีก ประหยัดทรัพยากรไม่ต้อง fetch ค่าเดิมซ้ำๆ
 * - 
 */
