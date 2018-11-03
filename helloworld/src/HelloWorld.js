import React, { Component } from 'react';

export default class HelloWorld extends Component {
  render(){
    return (
      <div>
        <h2>{this.props.message}</h2>
      </div>
    )
  }
}

