import React, { Component, createRef } from "react";
import { Button } from "react-bootstrap";
import { Maze } from "./Maze";
import constants from "../data/constants";
import randomizedPrim from "../helper/randomizedPrim";
import simpleDFS from "../helper/simpleDFS";
const ms = require('pretty-ms');

export default class Game extends Component {
  
  constructor(props){
    super(props);
    this.matrix = [];
    this.state = {
      time: 0,
      isOn: false,
      start: 0,
      gameStatus: false,
    }
  // this.startTimer = this.startTimer.bind(this);
  // this.stopTimer = this.stopTimer.bind(this);
  }
  startTimer() {
 
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1);
  }

  callBackFunc = (status) =>{
    if (this.state.gameStatus !== status){
      this.setState({gameStatus: status})
    }
  }

  stopTimer() {
    this.setState({isOn: false});
    clearInterval(this.timer);
  }

  startGame() {
    this.startTimer();
  }
  stopGame() {
    this.stopTimer();
  }
  newGame() {
    
    this.setState({
      time: 0,
      isOn: false,
      start: 0,
      gameStatus: false,
    });

    this.initializeMatrix();
  }
  /*initializeMatrix() {
    this.matrix = [];
    for (let i = 0; i < constants.height; i++) {
      let row = [];
      for (let j = 0; j < constants.width; j++) {
        row.push(Math.random() < 0.3);
      }
      this.matrix.push(row);
    }
    this.matrix[0][0] = false;
    this.matrix[constants.height - 1][constants.width - 1] = false;
  }*/

    initializeMatrix(){
      // this.matrix = randomizedPrim(constants.height, constants.width);
      this.matrix = simpleDFS(constants.height, constants.width);
    }

  componentDidMount(){
    this.initializeMatrix();
  }

  componentWillUnmount(){
    this.matrix = [];
  }
 
  render() {
    if (this.state.gameStatus === true && this.state.isOn){
      this.stopGame();
    }
    return (
      <div>
        {this.state.isOn || this.state.gameStatus ? <Button disabled onClick={() => this.startGame()}>Start</Button> :
        <Button onClick={() => this.startGame()}>Start</Button>}
        {this.state.isOn ?<Button onClick={() => this.stopGame()}>Stop</Button> :
        <Button disabled onClick={() => this.stopGame()}>Stop</Button>}
        {this.state.isOn ? <Button disabled onClick={() => this.newGame()}>NewGame</Button> :
<Button onClick={() => this.newGame()}>NewGame</Button>}
        <br />
        <br />
        <p>Clock</p>
        <h3>{ms(this.state.time)}</h3>

        {this.state.isOn ? <div className="Maze">
          <Maze
            width={constants.width}
            height={constants.height}
            matrix={this.matrix}
            initial = {0}
            parentCallback = {this.callBackFunc}
          ></Maze>
        </div> : <p>Get Ready !!</p>}
      </div>
    );
  }
}
