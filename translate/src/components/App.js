import React from "react";
import UserCreate from "./UserCreate";

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
        <UserCreate />
      </div>
    );
  }
}

export default App;
