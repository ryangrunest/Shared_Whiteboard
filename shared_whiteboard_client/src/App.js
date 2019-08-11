import React, { Component } from 'react';
import './index.css';
// import { SketchField, Tools } from 'react-sketch';
import CanvasDraw from 'react-canvas-draw';

// class SketchFieldDemo extends Component {
//   handleClick(e) {
//     e.preventDefault();
//     console.log(e);
//   }
//   render() {
//      return (
//          <SketchField width='100px' 
//                       height='100px' 
//                       tool={Tools.Pencil} 
//                       lineColor='black'
//                       lineWidth={3}
//                       onClick={() => this.handleClick}/>
//      )
//   }
// };




class App extends Component {
  handleClick() {
    let savedData = this.refs.canvas.getSaveData();
    alert(savedData);
  }
  render() {
    return (
      <div className="App" onClick={() => this.handleClick}>
        {/* <SketchFieldDemo /> */}
        <CanvasDraw ref="canvas" />
        <button onClick={() => this.handleClick()}>Save</button>
      </div>
    );
  }
}

export default App;