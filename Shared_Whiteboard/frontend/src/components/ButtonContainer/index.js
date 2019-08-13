import React, { Component } from "react";

import "./ButtonContainer.css";
import Button from "../Button";

class ButtonContainer extends Component {
  render() {
    return (
      <div className="ButtonContainer">
        <Button background="#3F5CCC" />
        <Button background="#9237B3" />
        <h3 className="ButtonContainer-header">Pick A Color</h3>
        <Button background="#69ABFF" />
        <Button />
      </div>
    );
  }
}

export default ButtonContainer;
