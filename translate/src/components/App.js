import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
  state = { language: "english" };

  // when click icon
  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language :
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag th"
            onClick={() => this.onLanguageChange("thai")}
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>

        <LanguageContext.Provider value="english">
          <UserCreate />
        </LanguageContext.Provider>

        <UserCreate />
      </div>
    );
  }
}

export default App;

// สร้าง provider สำหรับ context ส่งข้อมูลระดับ App component to Field and Button
// LanguageContext.Provider โดยคำว่า value เป็น spacial property) ส่งข้อมูลไปให้ Nested Component
// Provider 1 อัน จะสร้าง pipe ของตัวเอง แยกกัน จะกำหนด value เป็น state หรือ hardcode ก็ได้
