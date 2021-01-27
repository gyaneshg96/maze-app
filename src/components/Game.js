import React, { Component } from "react";
import { Button } from 'react-bootstrap';  

export default class Game extends Component {
   
  render(){
    return (
      <div>
      <Button onClick={startGame}>Start</Button>
      <Button onClick={stopGame}>Stop</Button>
    <div className="Maze">
      <Maze width={constants.width} height={constants.height}></Maze>
    </div>
    </div>
    );
  }
} 