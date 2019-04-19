import React from 'react';
import './space.css';

class Space extends React.Component {
  render(){
    return (
      <button className = {this.props.class}>
        <span className = {"stone " + this.props.stone.getPlayer()}>
        </span>
      </button>
    );
  };
};

export default Space;
