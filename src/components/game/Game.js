import React from 'react';
import Stone from '../../models/Stone';
import Board from '../board/Board';

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      player : "black",
      //initialize a 19x19 grid to be filled with Object<Stone>
      board : Array(19).fill(Array(19).fill(null))
    };
  };

  fillBoard(){
    let board = this.state.board;
    for(let x = 0; x < board.length; x++){
      for(let y = 0; y < board[x].length; y++){
        //initialize a Object<Stone> for each board space
        board[x][y] = new Stone();
        //initilaize the neighbor pointers for the current space and it's set neighbors
        //north neighbor has been initialized: set north neighbor for this stone, south for other
        if(x > 0){
          board[x][y].setNeighbors(board[x-1][y],null,null,null);
          board[x-1][y].setNeighbors(null,board[x][y],null,null);
        }
        //west neighbor has been initialized: set west neighbor for current stone, east for other
        if(y > 0){
          board[x][y].setNeighbors(null,null,null,board[x][y-1]);
          board[x][y-1].setNeighbors(null,null,board[x][y],null);
        }
      }
    }
  };

  //description of operation
  handleClick(){
    //something
  };

  //description of render
  render(){
    this.fillBoard();
    return (
      <Board
        board = {this.state.board}
        onClick = {() => this.handleClick()}
      ></Board>
    );
  };
};

export default Game;
