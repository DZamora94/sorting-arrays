import React, { Component } from "react";
import ColumnList from '../Array/ColumnList';
import { getMergeSortAnimations } from "../Algorithms/mergeSortHelper";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 5;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

class Sorter extends Component {

    state = {
        initArray: [],
        arrayToSort: [],
    };

    public handleChangeInput(event: any) {
        const array = [];
        for (let index = 0; index < event.target.value; index++) {
            const value = Math.random() * 500;
            const fixedValue: number = parseFloat(value.toFixed(4))
            array.push(fixedValue);
        }
        this.setState({ initArray: array, arrayToSort: array });
    }

    public mergeSort() {
        const animations = getMergeSortAnimations([...this.state.arrayToSort]);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('column-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOne: any = arrayBars[barOneIdx];
                const barTwo: any = arrayBars[barTwoIdx];
                const barOneStyle = barOne.style;
                const barTwoStyle = barTwo.style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOne: any = arrayBars[barOneIdx];
                    const barOneStyle = barOne.style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    public bubbleSort(array: number[]) {
        let done = false;
        while (!done) {
            done = true;
            for (let i = 1; i < array.length; i++) {
                if (array[i - 1] > array[i]) {
                    done = false;
                    const biggerColumn = array[i - 1];
                    const lowerColumn = array[i];

                    array[i - 1] = lowerColumn;
                    array[i] = biggerColumn;

                    const bar: any = document.getElementsByClassName('column-bar')[i - 1];
                    const barStyle = bar.style;
                    setTimeout(() => {
                        barStyle.backgroundColor = 'blue';
                        // barStyle.height = `calc(${array[i - 1]} * 100%)`;
                        this.setState({ arrayToSort: array })
                    }, i * 1000)
                }
            }
        }
    }

    public unSort() {
        this.setState({ arrayToSort: this.state.initArray })
    }

    render() {
        const array = this.state.arrayToSort;

        return (
            <div>
                <input type="number" step="10" onChange={(e) => this.handleChangeInput(e)} />Number of values
                <button onClick={() => this.mergeSort()}>Click me to Sort</button>
                <button onClick={() => this.unSort()}>Unsort</button>
                <div className="List-container">
                    <div className="List-content">
                        {
                            array.map((value, i) => {
                                console.log(value, `Value_${i}`);
                                return (
                                    <div
                                        className="column-bar"
                                        key={i}
                                        style={{
                                            height: `${value}px`,
                                            backgroundColor: 'black',
                                            width: '100%',
                                            filter: `contrast(${value})`,
                                        }}></div>)
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Sorter;