import React from "react";

export default function GameState(props) {
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>{guess}</li>
  ));

  return (
    <div>
      <div>Previous turn result: {props.turnResult}</div>
      <div>Guess number: {props.guessNumber}</div>
      <div>
        Guesses:
        <ul>{guesses}</ul>
      </div>
    </div>
  );
}
