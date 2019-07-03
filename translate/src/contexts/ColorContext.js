import React from "react";

const Context = React.createContext();

export class ColorStore extends React.Component {
  state = { color: "red" };

  onColorChange = () => {
    this.setState({
      color: this.state.color === "primary" ? "red" : "primary"
    });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onColorChange: this.onColorChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
