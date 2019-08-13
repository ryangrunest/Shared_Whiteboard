import React, { Component } from "react";

import "./Button.css";

class Button extends Component {
  static defaultProps = {
    backgroundColor: "#B35337"
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className="Button-button"
        style={{ backgroundColor: this.props.backgroundColor }}
      />
    );
  }
}

export default Button;
