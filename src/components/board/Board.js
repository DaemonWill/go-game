import React from 'react';
import Space from '../space/Space';
import './board.css';

class Board extends React.Component {
  //return a string denoting the space location on the board to assign an
  //appropriate image for the Space
  setImageClass(x,y){
    let className = "";
    className += (x == 0) ? "top" : "";
    className += (x == 18) ? "bot" : "";
    className += (y == 0) ? "left" : "";
    className += (y == 18) ? "right" : "";
    className += (!className) ? "point" : "";
    return className;
  };

  //placeholder renderSpace
  renderSpace(x,y){
    let image = this.setImageClass(x,y);
    return(
      <Space
        stone = {this.props.board[x][y]}
        class = {"space " + image}
        onClick = {(stone) => this.props.onClick(stone)}
      ></Space>
    );
  };

  //return an array of 19 div eles to contain each space
  generateRow(x){
    let row = [];
    for(let y = 0; y < this.props.board[x].length; y++){
      row.push(this.renderSpace(x,y));
    }
    return row;
  };

  //return an array of 19 div eles to contain each row
  generateBoard(){
    let board = [];
    for(let x = 0; x < this.props.board.length; x++){
      board.push(
        <div class="row">
          {this.generateRow(x)}
        </div>
      );
    }
    return board;
  };

  render(){
    return (
      this.generateBoard()
    );
  };
};

export default Board;
