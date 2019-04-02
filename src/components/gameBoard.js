import React from 'react';

function Gameboard(props) {
    return (
        <div className='container'>
            <div className='row'>
                {props.children}
            </div>
        </div>);
}
export default Gameboard;