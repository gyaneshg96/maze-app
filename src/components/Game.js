import React, { Component } from "react";
import { Button } from 'react-bootstrap';  
import { Maze } from './Maze';
import constants from '../data/constants';

export default class Game extends Component {
   
  startGame() {
    
  }
  stopGame() {

  }
  render(){
    return (
      <div>
      <Button onClick={this.startGame}>Start</Button>
      <Button onClick={this.stopGame}>Stop</Button>
    <div className="Maze">
      <Maze width={constants.width} height={constants.height}></Maze>
    </div>
    </div>
    );
  }
} 