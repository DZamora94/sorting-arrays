import React from 'react';
import Column from '../Column/Column';

const columnList = (props: { array: number[] }) => {
    return (
        <div className="App-header">
            {
                props.array.map((value, i) => {
                    return <Column height={value}></Column>
                })
            }
        </div>
    );
}

export default columnList;