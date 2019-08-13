import React, { Component } from "react";

import "./Button.css";

class Button extends Component {
  static defaultProps = {
    background: "#FF8440",
    changeBrushColor: (e, color) => {
      e.preventDefault();
      console.log("changing brush color!");
      this.setState({ brushColor: color });
    }
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className="Button-button"
        style={{ backgroundColor: this.props.background }}
        onClick={event => {
          this.props.changeBrushColor(event, this.props.background);
        }}
      />
    );
  }
}

export default Button;
