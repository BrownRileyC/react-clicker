import React, { Component } from 'react';
import pokemon from '../pokemon.json';
import TopBar from './components/topBar';
import Gameboard from './components/gameBoard';
import PokemonCard from './components/pokemonCard';

class App extends Component {

  state = {
    pokemonList: pokemon,
    score: 0,
    unclickedList: pokemon
  };

  gameReset = () => this.setState({unclickedList: pokemon, score: 0});

  checkOnClick = (id) => {
    const reducedUnclickedList = this.state.unclickedList.filter((element) => element.id !== id);

    if (this.state.unclickedList.length !== reducedUnclickedList.length) {
      this.setState({unclickedList: reducedUnclickedList, score: this.state.score +1});
    } else {
      this.gameReset();
    }
    
  }

  render() {
    return (
      <TopBar />
      <Gameboard>
        {this.state.pokemonList.map(
          (element) =>
          <PokemonCard
          key={element.id}
          {...element}
          checkClicked={this.checkOnClick}
          reset={this.gameReset}/>
        )}
      </Gameboard>
    );
  }
}

export default App;
