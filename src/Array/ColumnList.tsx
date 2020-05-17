import React from 'react';
import Column from '../Column/Column';

const columnList = (props: { array: number[], width: number }) => {
    return (
        <div className="List-content">
            {
                props.array.map((value, i) => {
                    return <Column height={value}></Column>
                })
            }
        </div>
    );
}

export default columnList;