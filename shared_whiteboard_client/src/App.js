import React, { Component } from 'react';
import './index.css';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import { SketchField, Tools } from 'react-sketch';

// class ColoredRect extends React.Component {
//   state = {
//     color: 'green'
//   };
//   handleClick = () => {
//     this.setState({
//       color: Konva.Util.getRandomColor()
//     });
//   };
//   render() {
//     return (
//       <Rect
//       draggable
//         x={100}
//         y={100}
//         width={1250}
//         height={600}
//         fill={this.state.color}
//         shadowBlur={5}
//         onClick={this.handleClick}
//       />
//     );
//   }
// }

class SketchFieldDemo extends React.Component {
  handleClick(e) {
    e.preventDefault();
    console.log(e);
  }
  render() {
     return (
         <SketchField width='100%' 
                      height='2000px' 
                      tool={Tools.Pencil} 
                      lineColor='black'
                      lineWidth={3}
                      onClick={() => this.handleClick}/>
     )
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <SketchFieldDemo />
      </div>
    );
  }
}

export default App;