import React from "react";

const Context = React.createContext("thai");
// ต้องเป็น C ใหญ่ เพราะจะระบุว่าเป็น JSX component เอาไว้ส่ง Data
// หน้าที่ของมันคือเป็น component ของ context เพื่อส่ง data ไป child

export class LanguageStore extends React.Component {
  // สร้าง component ใหม่ เพื่อ provide Bussiness Logic
  // เป็นตัวเก็บว่าใช้ language อะไรอยู่ และเปลี่ยน language ไปตามที่ callback (ที่มาจาก LanguageSelector)
  // ! อย่าลืมว่า Context จะต้อง wrap Nested Component ด้วย Provider เพื่อส่งผ่าน data เราจึงเอา LanguageStore ไป wrap พวก UserCreate.js (อยู่ใน App component)
  state = { language: "english" };

  onLanguageChange = language => {
    // สร้าง callback เมื่อ LanguageSelector ส่ง state มา ผ่าน props
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;

// ตรง value หมายความว่าเมื่อรับ state language อันใหม่จาก onLanguageChange จะ replace this.state object อันเดิม .. ถ้าเป็น state อื่นก็จะถูก add เข้าไปใน object
// this.props.children คือ element อะไรก็ตามที่อยู่ใน parent จะถูก render ภายใต้ Context.Provider
// this.props.children ในที่นี้คือส่วนของ UserCreate component (อยู่ใน App component)
// เพราะ Context.Provider เก็บ value จะส่งผ่าน data ไปหา nested child
// spread operation https://www.udemy.com/react-redux/learn/lecture/12803389#questions/7151138 เพราะในนั้นเป็น object { function: this.function }
