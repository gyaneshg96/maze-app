import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import { Maze } from "../Maze";
// import constants from "../../data/constants";
import randomizedPrim from "../../helper/randomizedPrim";
import simpleDFS from "../../helper/simpleDFS";
const ms = require('pretty-ms');


const constants =  {
  easy: {
    width: 9,
    height: 7,
  },
  medium: { width: 15, height: 13 },
  hard: { width: 21, height: 17 },
};

export default class Game extends Component {
  
  constructor(props){
    super(props);
    this.matrix = [];
    this.state = {
      time: 0,
      isOn: false,
      start: 0,
      gameStatus: false,
      gameLevel: 'easy'
    }
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

    this.initializeMatrix(this.state.gameLevel);
  }
  initializeMatrix(level){
      // this.matrix = randomizedPrim(constants.height, constants.width);

      this.matrix = simpleDFS(constants[level].height, constants[level].width);
  }

  componentDidMount(){
    this.initializeMatrix("easy");
  }

  componentWillUnmount(){
    this.matrix = [];
  }
 
  setLevel(level){

    this.initializeMatrix(level);
    this.setState({
      gameLevel: level
    });

  }
  render() {
    if (this.state.gameStatus === true && this.state.isOn){
      this.stopGame();
    }
    return (
      <div>
        <div>
        {this.state.isOn ?<ButtonGroup >
          <Button color="primary" disabled onClick={() => this.setLevel('easy')} active={this.state.gameLevel === 'easy'}>Easy</Button>
          <Button color="primary" disabled onClick={() => this.setLevel('medium')} active={this.state.gameLevel === 'medium'}>Normal</Button>
          <Button color="primary" disabled onClick={() => this.setLevel('hard')} active={this.state.gameLevel === 'hard'}>Hard</Button>
        </ButtonGroup> :
        <ButtonGroup>
          <Button color="primary" onClick={() => this.setLevel('easy')} active={this.state.gameLevel === 'easy'}>Easy</Button>
          <Button color="primary" onClick={() => this.setLevel('medium')} active={this.state.gameLevel === 'medium'}>Normal</Button>
          <Button color="primary" onClick={() => this.setLevel('hard')} active={this.state.gameLevel === 'hard'}>Hard</Button>
        </ButtonGroup> }
        </div> 
       <div>
        {this.state.isOn || this.state.gameStatus ? <Button color="primary" disabled onClick={() => this.startGame()}>Start</Button> :
        <Button color="primary" onClick={() => this.startGame()}>Start</Button>}
        {this.state.isOn ?<Button color="primary" primary onClick={() => this.stopGame()}>Stop</Button> :
        <Button color="primary" disabled onClick={() => this.stopGame()}>Stop</Button>}
        {this.state.isOn ? <Button color="primary" disabled onClick={() => this.newGame()}>NewGame</Button> :
<Button color="primary" onClick={() => this.newGame()}>NewGame</Button>}
        </div>
        <br />
        <br />
        <p>Clock</p>
        <h3>{ms(this.state.time)}</h3>

        {this.state.isOn ? <div className="Maze">
          <Maze
            width={constants[this.state.gameLevel].width}
            height={constants[this.state.gameLevel].height}
            matrix={this.matrix}
            initial = {0}
            parentCallback = {this.callBackFunc}
          ></Maze>
        </div> : this.state.gameStatus ? <p> Well done !! Ready for more ?</p> :
        <p> Lets Begin !!</p>}
      </div>
    );
  }
}
