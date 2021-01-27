import React from "react";
import Square from './Square/Square';

const upArrow = 38;
const downArrow = 40;
const rightArrow = 39;
const leftArrow = 37;


export class Maze extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares : [],
      gameInit: false,
      locationX: 0,
      locationY: 0,
      movesX: 0,
      movesY: 0,
      lastMove: "",
    };
  }
  
  arrowKeyPress = (event) =>{
    switch(event.keyCode){
      case leftArrow :
        console.log("Left");
        //movesX('+');
      case upArrow:
        console.log("Up");
      case rightArrow:
        console.log("Right");
      case downArrow:
        console.log("Down");
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.arrowKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.arrowKeyPress);
  }
  
  moveX(direction) {
    if (direction == "-") {
    } else {
    }
  }

  moveY(direction) {
    if (direction == "-") {
    } else {
    }
  }

  handleClick(i,j) {
    // if (i === this.state.marioLocation) this.checkForEnemies();
    console.log(i);
    console.log(j);
  }

  renderSquare(i,j, isPlayer, isWall) {
    let isStart = i === 0 && j === 0;
    let isFinish = i === this.props.height - 1 && j === this.props.width - 1;
    return <Square key={i*this.props.height + j}
      isStart = {isStart}
      isWall = {isWall}
      isPlayer = {isPlayer}  
      isFinish = {isFinish} 
      onClick={() => this.handleClick(i,j)}
    />;
  }

  renderRow(squares){
    return (<div className="maze-row">
      {squares}
    </div>);
  }

  renderBoard(){
    let board = [];
    for (let i = 0; i < this.props.height; i++){
      let row = [];
      for (let j = 0; j < this.props.width; j++){
        row.push(this.renderSquare(i,j,false, false));
    }
    board.push(this.renderRow(row));
  }
  return board;
}
  render(){
   /* if (this.state.squares.length === 0){
        for (let i = 0; i < this.props.height; i++){
          for (let j = 0; j < this.props.width; j++){
            this.state.squares.push(i*this.props.height + j);
          }
      }
    }*/
    return (
      <div>
        {this.renderBoard()}
      </div>
    )
  }
}
