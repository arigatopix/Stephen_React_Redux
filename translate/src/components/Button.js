import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  // helper function
  renderSubmit(value) {
    return value === "english" ? "Submit" : "ส่ง";
  }

  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;

/* 
ใช้ Consumer แทน this.context
  - เรียกใช้งาน value เหมือนกับ react component ปกติ โดยใช้ function
  - ใช้ helper function โดย Consumer จะเรียก value ใน App component (Parent component to Child component) ให้อัตโนมัติ
  - อย่าลืม เป็น class-base ต้องใช้ this.helperfunction
*/
