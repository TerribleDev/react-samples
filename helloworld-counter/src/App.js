import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';

class App extends Component {
  render() {
    return (
     <HelloWorld message="Hello React!" />
    );
  }
}

export default App;
