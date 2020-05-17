import React, { Component } from 'react';
import ColumnList from './Array/ColumnList';
import './App.css';

class App extends Component {

  state = {
    arrayToSort: [],
    sortedArray: [],
  };

  public handleChangeInput(event: any) {
    const array = [];
    for (let index = 0; index < event.target.value; index++) {
      const value: number = parseFloat(Math.random().toFixed(4));
      array.push(value);
    }
    this.setState({arrayToSort: array, sortedArray: array});
  }

  public bubbleSort(array: number[]) {
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
          done = false;
          let biggerVal = array[i - 1];

          array[i - 1] = array[i];
          array[i] = biggerVal;

          this.setState({ sortedArray: array })
        }
      }
    }
  }

  public unSort() {
    this.setState({ sortedArray: this.state.arrayToSort })
  }

  render() {
    return (
      <div className="App">
        <input type="number" onChange={(e) => this.handleChangeInput(e)} />Number of values
        <button onClick={() => this.bubbleSort([...this.state.arrayToSort])}>Click me to Sort</button>
        <button onClick={() => this.unSort()}>Unsort</button>
        <div className="List-container">
          <ColumnList array={this.state.sortedArray} width={this.state.sortedArray.length}></ColumnList>
        </div>
      </div>
    );
  }
}

export default App;
