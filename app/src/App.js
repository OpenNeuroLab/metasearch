import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import Viz from './Viz';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to MetaSearch</h2>
        </div>
        <Viz />
    </div>
    );
  }
}

export default App;
