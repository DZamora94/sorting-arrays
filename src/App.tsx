import React, { Component } from 'react';
import ColumnList from './Array/ColumnList';
import './App.css';

class App extends Component {

  state = {
    arrayToSort: [13, 7, 45, 48, 93, 93, 38, 57, 61, 4, 95],
    sortedArray: [13, 7, 45, 48, 93, 93, 38, 57, 61, 4, 95],
  };

  public sort(array: number[]) {
    let done = false;
    while(!done) {
      done = true;
      for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
          done = false;
          let biggerVal = array[i - 1];

          array[i - 1] = array[i];
          array[i] = biggerVal;

          this.setState({sortedArray: array})
        }
      }
    }
  }

  public unSort() {
    this.setState({sortedArray: this.state.arrayToSort})
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.sort([...this.state.arrayToSort])}>Click me to Sort</button>
        <button onClick={() => this.unSort()}>Unsort</button>
        <div className="App-header">
          <ColumnList array={this.state.sortedArray}></ColumnList>
        </div>
      </div>
    );
  }
}

export default App;
