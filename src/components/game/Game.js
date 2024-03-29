import React from 'react';
import Stone from '../../models/Stone';
import Board from '../board/Board';
import GameLogic from './GameLogic';
var gameLogic = new GameLogic();

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      player : "black",
      //initialize columns of a 19x19 grid to be filled with Object<Stone>
      board : Array(19).fill(null),
      boardFilled : false
    };
  };

  fillBoard(){
    let board = this.state.board;
    for(let x = 0; x < 19; x++){
      board[x] = Array(19).fill(null);
      for(let y = 0; y < 19; y++){
        //initialize a Object<Stone> for each board space
        board[x][y] = new Stone(x,y);
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
    this.state.boardFilled = true;
  };

  //
  handleClick(stone){
    let coords = stone.getCoordinates();
    let x = coords[0];
    let y = coords[1];
    //copy the board state for future changes
    let board = this.state.board.slice();
    board[x][y].setPlayer(this.state.player);
    //track any stones that would be captured from this play and remove them from the board
    let capturedStoneIds = gameLogic.captureStones(stone);
    if(capturedStoneIds.length != 0){
      for(let i = 0; i < capturedStoneIds.length; i++){
        let id = capturedStoneIds[i];
        //unset the player so that no stone visibly appears on the board
        board[id[0]][id[1]].setPlayer("");
      }
    }
    //check if stone can be placed after removing any captured stones (allows for endless war)
    if(gameLogic.isSurrounded(stone)){
      alert("Can't place a stone in a surrounded space");
      return;
    }
    this.setState({
      player : (this.state.player == "black") ? "white" : "black",
      board : board
    });
    console.log(gameLogic.captureStones(stone));
  };

  //
  render(){
    if(!this.state.boardFilled){
      this.fillBoard();
    }
    return (
      <Board
        board = {this.state.board}
        onClick = {(stone) => this.handleClick(stone)}
      ></Board>
    );
  };
};

export default Game;
