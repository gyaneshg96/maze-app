import React from "react";
import Square from './Square/Square';

const upArrow = 38;
const downArrow = 40;
const rightArrow = 39;
const leftArrow = 37;


export class Maze extends React.Component {
  constructor(props) {
    super(props);
    this.matrix = [];
    this.state = {
      gameStart: false,
      gameEnd: false,
      locationX: this.props.initial,
      locationY: this.props.initial,
    };
  }
  
  arrowKeyPress = (event) =>{
    event.preventDefault();
    switch(event.keyCode){
      case leftArrow :
        this.moveX('-');
        break;
      case upArrow:
        this.moveY('-');
        break;
      case rightArrow:
        this.moveX('+');
        break;
      case downArrow:
        this.moveY('+');
        break;
      default:
    }
  }

 
  componentDidMount() {
    // this.initializeMatrix();
    document.addEventListener("keydown", this.arrowKeyPress);
  }

  componentWillUnmount() {
    this.matrix = [];
    document.removeEventListener("keydown", this.arrowKeyPress);
  }
  
  moveX(direction) {
    if (direction === "-"){
      if (this.state.locationX > 0 && this.props.matrix[this.state.locationY][this.state.locationX - 1] === false) {
        this.setState({
          locationX : this.state.locationX - 1
        });
    }  
  }
    else {
      if (this.state.locationX < this.props.width - 1 && this.props.matrix[this.state.locationY][this.state.locationX + 1] === false) {
        this.setState({
          locationX : this.state.locationX + 1
        });
      }
    }
  }

  moveY(direction) {
        if (direction === "-"){
      if (this.state.locationY > 0 && this.props.matrix[this.state.locationY - 1][this.state.locationX] === false) {
        this.setState({
          locationY : this.state.locationY - 1
        });
    }  }
    else {
      if (this.state.locationY < this.props.height - 1 && this.props.matrix[this.state.locationY + 1][this.state.locationX] === false) {
        this.setState({
          locationY : this.state.locationY + 1
        });
      }
    }
  } 


  renderSquare(i,j, isWall) {
    let isStart = i === 0 && j === 0;
    let isFinish = i === this.props.height - 1 && j === this.props.width - 1;
    let isPlayer = i === this.state.locationY && j === this.state.locationX;
    return <Square key={i*this.props.height + j}
      isStart = {isStart}
      isWall = {isWall}
      isPlayer = {isPlayer}  
      isFinish = {isFinish}
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
        row.push(this.renderSquare(i,j,this.props.matrix[i][j]));
    }
    board.push(this.renderRow(row));
  }
  return board;
}
  sendData = (isFinish)=>{
    this.props.parentCallback(isFinish);
  }
  render(){

    let isFinish = this.state.locationX === this.props.width - 1 && this.state.locationY === this.props.height - 1;
    this.sendData(isFinish);
    return (
      <div>
        {this.renderBoard()}
        <div>
        {isFinish ?
        <p>
          Well done !
        </p>
        : <div/>
        }
        </div>
      </div>
    );
  }
}
