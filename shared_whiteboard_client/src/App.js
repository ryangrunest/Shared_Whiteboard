import React, { Component } from 'react';
import './index.css';
import CanvasDraw from 'react-canvas-draw';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    }
  }

  // to load data 
  loadData() {
    let dbData; // returned data from db
    this.setState({
      data: dbData
    }, () => this.refs.canvas.loadSaveData(this.state.dbData, true))
    // loadSaveData(saveData:String, immediata:Boolean) boolean flag loads immediately instead of live drawing it
  }
  
  handleClick(e) {
    e.preventDefault();
    // store the draw data in state
    this.setState({
      // this.refs.canvas.getSaveData is a function within the CanvasDraw child component
      data: this.refs.canvas.getSaveData(),
      // then alert the state
    }, () => alert(this.state.data));
  }

  render() {
    return (
      <div className="App" onClick={() => this.handleClick}>
        <CanvasDraw
          ref="canvas" 
          canvasWidth={document.documentElement.clientWidth * 0.8}
          canvasHeight={document.documentElement.clientHeight * 0.8}
        />
        <button className="App-submit-btn" onClick={(event) => this.handleClick(event)}>Save</button>
      </div>
    );
  }
}

export default App;