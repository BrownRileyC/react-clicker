import React from 'react';

function TopBar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <img src="/assets/images/PremierBall.png" width="30" height="30" className="d-inline-block align-top" alt="PremierBall" />
                PokeClicker
            </a>
            <div className="row justify-content-end">
            <span className="navbar-text">
                Score: {props.score}
            </span>
            </div>
        </nav>
    )
}
export default TopBar;