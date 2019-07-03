import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context.language === "english" ? "Name" : "ชื่อ";
    // เรียก context มาแสดง ซึ่งเป็น object จาก LanguageStore

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;

// * Field component ไปดู state จาก LanguageContext ..
// จากเดิม context เป็น string เปลี่ยนไปเป็น object จึงต้องเรียกเดิม this.context เป็น this.context.language === 'english'
