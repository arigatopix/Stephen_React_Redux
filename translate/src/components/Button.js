import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  // helper function
  renderSubmit(value) {
    return value === "english" ? "Submit" : "ส่ง";
  }

  // ColorContext Helper function
  renderButtonColor(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButtonColor(color)}
      </ColorContext.Consumer>
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

/* 
! ColorContext 
  - ***** Child ของ ColorContext Component ต้องเป็น function ต้อง return JSX ทั้ง Block (button และ LanguageContext)
  - ใช้ Helper function เพื่อให้มันดู อ่านง่ายๆ

*/
