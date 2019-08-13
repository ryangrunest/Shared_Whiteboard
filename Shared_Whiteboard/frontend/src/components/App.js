import React, { Component } from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import axios from "axios";

import "./App.css";
import NavBar from "./Navbar";
import ButtonContainer from "./ButtonContainer";
// import Button from "./Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      brushColor: "#3F5CCC"
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

  // reset canvas, append blank canvas to db
  resetData(e) {
    e.preventDefault();
    this.setState(
      {
        data: '{"lines":[],"width":1296,"height":458.4}'
      },
      () => {
        axios.post("api/lines/", { line: this.state.data }).then(() => {
          this.refs.canvas.loadSaveData(this.state.data, true);
        });
      }
    );
  }

  // save and post canvas drawing on mouseup
  handleMouseUp(e) {
    e.preventDefault();
    // store the draw data in state
    let savedData = this.refs.canvas.getSaveData();
    // console.log(savedData);
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

  // download canvas data as .txt doc
  downloadTxtFile(e) {
    e.preventDefault();
    const element = document.createElement("a");
    const file = new Blob([this.state.data], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "WhiteboardData.txt";
    // document.body.appendChild(element); // required for this to work in firefox
    element.click();
  }

  // change brush color
  changeBrushColor = (e, color) => {
    e.preventDefault();
    this.setState({ brushColor: color });
    console.log("changing brush color");
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="App-flex-container">
          <button
            className="App-submit-btn"
            onClick={event => this.resetData(event)}
          >
            Clear Drawing
          </button>
          <button
            className="App-submit-btn"
            onClick={event => this.downloadTxtFile(event)}
          >
            Download Draw Data
          </button>
        </div>
        <section className="App-main-section">
          <div
            className="Canvas-container"
            onMouseUp={event => this.handleMouseUp(event)}
          >
            <CanvasDraw
              ref="canvas"
              canvasWidth={document.documentElement.clientWidth * 0.9}
              canvasHeight={document.documentElement.clientHeight * 0.6}
              lazyRadius={2}
              brushColor={this.state.brushColor}
            />
          </div>
        </section>
        <ButtonContainer changeBrushColor={this.changeBrushColor} />
      </div>
    );
  }
}

export default App;
