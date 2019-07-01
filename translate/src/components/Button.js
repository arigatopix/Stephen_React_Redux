import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  // Link to contextObject
  static contextType = LanguageContext;
  // static (ค่าคงที่ของ class) เป็น syntax แบบ ES2015 ซึ่งไม่ใช่ function
  // contextType เป็น spacial property
  // สามารถพิมพ์ Button.contextType = LanguageContext นอก class ก็ได้
  // เอามาแสดงผลใน Nested Child ผ่าน this.context
  // ทุกครั้งที่มีการเปลี่ยน state .. component จะถูก rerender

  render() {
    const text = this.context === "english" ? "Submit" : "ส่ง";

    console.log(this.context);

    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;
