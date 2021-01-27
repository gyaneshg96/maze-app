import React, { Component } from "react";
import './Square.css';

export default class Square extends Component {
  
  render() {
    const {
      col,
      isFinish,
      isStart,
      isWall,
      isPlayer,
      row,
    } = this.props;

    const extraClassName = isFinish
      ? 'square-finish'
      : isStart
      ? 'square-start'
      : isWall
      ? 'square-wall'
      : isPlayer
      ? 'square-player'
      : '';

    return (
      <div
        id={`square-${row}-${col}`}
        className={`square ${extraClassName}`}>
      </div>
      );
      /*<button className="square" onClick={() => this.props.onClick()}>
      </button>*/
  }
}