import React, { Component } from 'react';

export default class HelloWorld extends Component {
  constructor(props){
    super(props);
    this.state = {btnClicks: 0}
    this.incrementClick = this.incrementClick.bind(this);
  }
  incrementClick(){
    this.setState(prevState => ({
        btnClicks: prevState.btnClicks + 1
      }));
  }
  render(){
    let clicks = (this.state.btnClicks || 0);
    return (
      <div>
        <h2>{this.props.message}</h2>
        <h4> You have clicked the button {clicks} times</h4>
        <input 
          type="button" 
          value="Click to increment"
          onClick={this.incrementClick}
           />
      </div>
    )
  }
}