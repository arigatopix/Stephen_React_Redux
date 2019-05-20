import React from 'react';
import Modal from '../Modal';

const StreamDelete = () => {
  // เรียกใช้ Modal เพื่อแสดง popup
  // ใน Modal ส่ง props ไปแสดงผล สามารถ render JSX ได้ด้วย

  // สร้างเหมือนเป็น jsx อันนึง เพื่อแสดงผลปุ่ม action
  // div ที่มี button 2 อัน semantic แสดงผล style ไม่ถูก เพราะมัน neste (action > div > button) และ jsx ไม่อนุญาตให้ render jsx 2 อันโดยไม่ผ่าน div
  // * วิธีการแก้ไขคือใช้ React.Fracment component แทนที่ <React.Fragment> เป็น invisible element ไม่มีผลต่อการ render ไม่แสดงผลใน browser
  const actions = (
    <React.Fragment>
      <div className="ui red approve button">Delelte</div>
      <div className="ui button">Cancel</div>
    </React.Fragment>
  );

  return (
    <div>
      <div>StreamDelete</div>
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;
