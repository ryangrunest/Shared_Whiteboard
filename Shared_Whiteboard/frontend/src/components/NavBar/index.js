import React, { Component } from "react";

import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="NavBar">
        <h1 className="NavBar-header">Shared Whiteboard</h1>
      </div>
    );
  }
}

export default NavBar;
