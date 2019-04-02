import React from 'react';

function Gameboard(props) {
    return (
        <div className="wrapper">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Welcome to PokeClicker</h1>
                    <p className="lead">Try to click each pokemon once and once only!</p>
                    <p>After Each click they will shuffle around so be careful.</p>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    {props.children}
                </div>
            </div>
        </div>);
}
export default Gameboard;