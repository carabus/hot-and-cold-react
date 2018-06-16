import React from "react";

import GameState from "./game-state";
import GuessForm from "./guess-form";
import NewGame from "./new-game";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turnResult: "",
      guessNumber: 0,
      guesses: [],
      secretNumber: Math.floor(Math.random() * 100)
    };
  }

  setGameState(guess) {
    const turnResult =
      Math.abs(this.state.secretNumber - guess) < 10 ? "Hot" : "Cold";
    let guesses = this.state.guesses;
    const guessNumber = this.state.guessNumber + 1;
    guesses.push(guess);
    this.setState({ turnResult });
    this.setState({ guessNumber });
    this.setState({ guesses });
    console.log(guess);
    console.log(this.state.secretNumber);
    if (parseInt(guess, 10) === this.state.secretNumber) {
      this.setState({ turnResult: "You WIN!!!" });
    }
  }

  refreshGame() {
    this.setState({
      secretNumber: Math.floor(Math.random() * 100),
      turnResult: "",
      guessNumber: 0,
      guesses: []
    });
  }

  render() {
    return (
      <div>
        <NewGame newGameCallback={() => this.refreshGame()} />
        <GuessForm
          onSubmit={guess => {
            this.setGameState(guess);
          }}
        />
        <GameState
          turnResult={this.state.turnResult}
          guessNumber={this.state.guessNumber}
          guesses={this.state.guesses}
        />
      </div>
    );
  }
}
