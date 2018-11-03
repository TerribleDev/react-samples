import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import HelloWorld from './containers/HelloWorld';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HelloWorld />
      </Provider>
    );
  }
}

export default App;
