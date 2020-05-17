import React from 'react';

const column = (props: {height: number}) => {
    const style = {
        height: `calc(${props.height} * 100%)`,
        backgroundColor: 'black',
        width: '100%',
        filter: `contrast(${props.height})`,
    }

    return (
        <div style={style}></div>
    );
}

export default column;