import React from "react";
import ColorContext from "../contexts/ColorContext";

class ColorSelector extends React.Component {
  static contextType = ColorContext;

  render() {
    return (
      <div>
        Toggle Button Color :
        <i
          className="random icon"
          onClick={() => this.context.onColorChange()}
        />
      </div>
    );
  }
}

export default ColorSelector;
