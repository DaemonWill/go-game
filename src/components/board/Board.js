import React from 'react';

class Board extends React.Component {
  //placeholder renderSpace
  renderSpace(x,y){
    return(
      <p>SPACE! {x} , {y}</p>
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
  }
};

export default Board;
