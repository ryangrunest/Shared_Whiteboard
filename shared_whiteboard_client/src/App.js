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
  
  handleClick() {
    this.setState({
      data: this.refs.canvas.getSaveData(),
    }, () => alert(this.state.data));
    // // let savedData = this.refs.canvas.getSaveData();
    // alert(this.state.data);
  }
  render() {
    return (
      <div className="App" onClick={() => this.handleClick}>
        <CanvasDraw ref="canvas" />
        <button onClick={() => this.handleClick()}>Save</button>
      </div>
    );
  }
}

export default App;