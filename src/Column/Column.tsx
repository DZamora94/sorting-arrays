import React from 'react';

const column = (props: {height: number}) => {
    const style = {
        height: `${props.height}px`,
        backgroundColor: 'black',
        width: '10px',
    }

    return (
        <div style={style}></div>
    );
}

export default column;