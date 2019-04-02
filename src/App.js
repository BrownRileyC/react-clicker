import React, { Component } from 'react';
import pokemon from './pokemon.json';
import TopBar from './components/topBar';
import Gameboard from './components/gameBoard';
import PokemonCard from './components/pokemonCard';
import Header from './components/Header';

class App extends Component {

  state = {
    pokemonList: pokemon,
    score: 0,
    unclickedList: pokemon
  };

  shuffleOrder = () => {
    let array = this.state.pokemonList;
    console.log(this.state.pokemonList);

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random()* (i +1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({pokemonList: array})
    console.log(this.state.pokemonList);
  };

  gameReset = () => {
    alert('You already clicked that one, try again!');
    this.setState({ unclickedList: pokemon, score: 0 });
  }

  checkOnClick = (id) => {
    const reducedUnclickedList = this.state.unclickedList.filter((element) => element.id !== id);

    if (this.state.unclickedList.length !== reducedUnclickedList.length) {
      this.setState({ unclickedList: reducedUnclickedList, score: this.state.score + 1 });
    } else {
      this.gameReset();
    };
    this.shuffleOrder();
  }

  render() {
    return (
      <div>
        <TopBar score={this.state.score} />
        <Header />
        <Gameboard>
          {this.state.pokemonList.map(
            (element) =>
              <PokemonCard
                key={element.id}
                {...element}
                checkClicked={this.checkOnClick}
                reset={this.gameReset}
                shuffle={this.shuffleOrder} />
          )}
        </Gameboard>
      </div>
    );
  }
}

export default App;
