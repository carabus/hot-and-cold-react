import React from "react";

export default class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const text = this.textInput.value.trim();
    if (text && this.props.onSubmit) {
      this.props.onSubmit(text);
    }
    this.textInput.value = "";
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <label htmlFor="guess">Enter Your Guess</label>&emsp;
        <input
          type="text"
          id="guess"
          name="guess"
          placeholder="Enter Your Guess"
          ref={input => (this.textInput = input)}
        />
        <button type="submit">Guess</button>
      </form>
    );
  }
}
