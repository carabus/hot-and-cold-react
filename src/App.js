import React, { Component } from "react";
import Game from "./game";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hot And Cold</h1>
        <Game />
      </div>
    );
  }
}

export default App;
