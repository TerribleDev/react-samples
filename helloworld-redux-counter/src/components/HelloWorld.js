import React, { Component } from 'react';

export default class HelloWorld extends Component {
  render(){
    return (
      <div>
        <h2>Hello React</h2>
        <h4> You have clicked the button {this.props.clicks} times</h4>
        <input 
          type="button" 
          value="Click to increment"
          onClick={this.props.incrementClick}
           />
      </div>
    )
  }
}