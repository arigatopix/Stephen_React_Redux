import React from "react";
import UserCreate from "./UserCreate";
import LanguageSelector from "./LanguageSelector";
import ColorSelector from "./ColorSelector";
import { LanguageStore } from "../contexts/LanguageContext";
import { ColorStore } from "../contexts/ColorContext";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <ColorStore>
            <LanguageSelector />
            <ColorSelector />
            <UserCreate />
          </ColorStore>
        </LanguageStore>
      </div>
    );
  }
}

export default App;

// * Context เหมาะกับแชร์ DATA จากพ่อสู่ ลูกที่อยู่ไกลๆ ลึกๆ มากๆ เช่นเปลี่ยนสีของ theme button แต่แนะนำให้ใช้ Redux ดีกว่า
// LanguageStore Wrap ทุก component แล้วไปแสดงผลใน this.props.child ใน context
// ที่ต้อง import { LanguageStore } เพราะ export name ของ classs
// Logic (onLanguageChange) และ state จะอยู่ใน LanguageStore
// การแสดงผล (view) จะถูกรวมใน App component
// สร้าง provider สำหรับ context ส่งข้อมูลระดับ App component to Field and Button
// Multiple Contexts Provider จะสร้าง component ครอบข้างนอก หรือข้างในก็ได้ ไม่มีผลอะไร
// LanguageSelector ถึงแม้จะมี callback function ก็จะให้ LanguageStore provide logic
