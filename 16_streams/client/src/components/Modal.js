import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
  // แสดงผลเมื่อเรียกไปใช้งานแบบ component
  // เมื่อคลิกข้างนอก ให้ปิด Modal โดยใช้ url จาก history
  // event handler ปกติจะ delegate ไปหา element ด้านล่าง คือกดอันไหนก็จะ redirect ให้เพิ่ม event ตรง <div> modal
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push('/')}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;

/**
 * สร้าง Modal ด้วย React Portals
 * - การที่สร้าง react app เราสร้าง component ที่ถูก neste ไว้ลึกมากๆ จะเอามาแสดง popup ยาก
 * - Potals จะสร้าง JSX คู่กับ root element เพื่อเทียบ root กับ modal ด้วย z-index ของ css
 * - เรียกใช้ Modal คล้ายๆว่า component นี้เป็น Child จึงเอาข้อมูลจาก Parant ผ่าน props
 * - ReactDOM.createPortal(JSX, querySelector) เพื่อ render JSX
 */
