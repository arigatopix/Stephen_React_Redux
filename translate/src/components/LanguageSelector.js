import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  // wireup context pipe แสดงผลง context โดยใช้ this.context

  render() {
    // console.log(this.context);
    // ได้ object state, callback function .. จะต้อง callback ผ่าน context แทน props

    return (
      <div>
        Select a language :
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag th"
          onClick={() => this.context.onLanguageChange("thai")}
        />
      </div>
    );
  }
}

export default LanguageSelector;

// * จะ callback ไปใน LanguageStore เพื่อ update state แล้วส่งไปให้ Field, Button เพื่อเปลี่ยนแปลงค่า
// reflact callback function โดยใช้ context out (ใช้ this.context หรือ Consumer ก็ได้ ในที่นี้ใช้ this.context)
// this.context จะเอา value ของ Context.Provider มา เป็น object ที่บรรจุ state, function
