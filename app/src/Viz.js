import React, { Component } from 'react';
import * as d3 from "d3";

class Viz extends Component {
  render() {
      d3.csv('./phenotype.csv');
    return (
        <div className="App-intro">
          Example of adding a new component.
        </div>
    );
  }
}

export default Viz;