import React from 'react';
import './space.css';

class Space extends React.Component {
  render(){
    return (
      <button
        id = {this.props.id}
        className = {this.props.class}
        onClick = {() => this.props.onClick(this.props.stone)}
      >
        <span className = {"stone " + this.props.stone.getPlayer()}>
        </span>
      </button>
    );
  };
};

export default Space;
