import React, { Component } from "react";

import "./ButtonContainer.css";
import Button from "../Button";

class ButtonContainer extends Component {
  static defaultProps = {
    changeBrushColor: (e, color) => {
      e.preventDefault();
      console.log("changing brush color!");
      this.setState({ brushColor: color });
    }
  };
  render() {
    return (
      <div className="ButtonContainer">
        <Button
          changeBrushColor={this.props.changeBrushColor}
          background="#3F5CCC"
        />
        <Button
          changeBrushColor={this.props.changeBrushColor}
          background="#9237B3"
        />
        <h3 className="ButtonContainer-header">Pick A Color</h3>
        <Button
          changeBrushColor={this.props.changeBrushColor}
          background="#00FF95"
        />
        <Button changeBrushColor={this.props.changeBrushColor} />
      </div>
    );
  }
}

export default ButtonContainer;
