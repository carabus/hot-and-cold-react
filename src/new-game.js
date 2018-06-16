import React from "react";

export default function NewGame(props) {
  return (
    <div>
      <a href="#" onClick={e => props.newGameCallback(e)}>
        New Game
      </a>
    </div>
  );
}
