import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  // helper function
  renderSubmit(language) {
    return language === "english" ? "Submit" : "ส่ง";
  }

  // ColorContext Helper function
  renderButtonColor(color) {
    console.log(LanguageContext.Consumer);
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
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

/* 
* ใช้ Consumer เรียกดู state ใน Context Object 
* - จากเดิมส่งผ่าน value ด้วย string แต่พอใช้ LanguageStore จะเป็น object 
?  - แสดง context โดยการ destructuring  {({ language }) => this.renderSubmit(language)} 
  - ดูตาม document การใช้ Consumer จะเหมาะกับหลายๆ context และใช้ Destructuring ตามตัวอย่างนี้ {({theme, toggleTheme}) => ( ...
*/
