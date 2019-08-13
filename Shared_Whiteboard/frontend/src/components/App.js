import React, { Component } from "react";
import ReactDOM from "react-dom";

import CanvasDraw from "react-canvas-draw";
import axios from "axios";

import Button from "./Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  componentDidMount() {
    this.loadData();
  }

  // to load data
  loadData() {
    axios.get("http://localhost:8000/api/lines/").then(res => {
      let dbData = res.data[res.data.length - 1].line; // returned data from DB
      if (this.state.data != dbData) {
        this.setState(
          {
            data: dbData
          },
          () => {
            // loadSaveData(saveData:String, immediata:Boolean) boolean flag loads immediately instead of live drawing it
            this.refs.canvas.loadSaveData(this.state.data, true);
          }
        );
      }

      console.log("get request complete!");
    });
    console.log("loadData finished!");
  }

  handleClick(e) {
    e.preventDefault();
    // store the draw data in state
    let savedData = this.refs.canvas.getSaveData();
    console.log(savedData);
    axios.post("api/lines/", { line: savedData }).then(() => {
      this.setState(
        {
          // this.refs.canvas.getSaveData is a function within the CanvasDraw child component
          data: savedData
        },
        () => {
          this.loadData();
        }
      );
    });
  }

  render() {
    return (
      <div className="App" onClick={() => this.handleClick}>
        <CanvasDraw
          ref="canvas"
          canvasWidth={document.documentElement.clientWidth * 0.8}
          canvasHeight={document.documentElement.clientHeight * 0.8}
          lazyRadius={2}
        />
        <Button />
        <button
          className="App-submit-btn"
          onClick={event => this.handleClick(event)}
        >
          Save
        </button>
      </div>
    );
  }
}

export default App;
