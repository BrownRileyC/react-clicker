import React from "react";
import '../pokemonCard.css';

function PokemonCard(props) {
    return (
        <div className='col-3'>
            <div className="card">
                <div className="img-container">
                    <img alt={props.name} src={props.image} onClick={() => props.checkClicked(props.id)} />
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;
